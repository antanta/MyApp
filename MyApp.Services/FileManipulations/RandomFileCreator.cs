using MyApp.Services.Utilities;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services.FileManipulations
{
    /// <summary>
    /// Best of both worlds
    /// </summary>
    public class RandomFileCreator : IRandomFileCreator
    {
        private const int bufferLength = 100;
        private const int rowCount = 100;

        public async Task<string> CreateRandomFileAsync(string fileName, byte[][] content, bool convertToChar = true)
        {
            string dataDir = AppDomain.CurrentDomain.GetData("DataDirectory").ToString();
            string fullFileName = dataDir + @"\\" + fileName;
            long lengthInBytes;

            if (File.Exists(fullFileName))
            {
                File.Delete(fullFileName);
            }
            using (FileStream fs = new FileStream(fullFileName, FileMode.Create))
            using (StreamWriter sw = new StreamWriter(fs))
            {
                for (int i = 0; i < content.Length; i++)
                {
                    if (convertToChar)
                    {
                        await sw.WriteLineAsync(content[i].ToCharArray());
                    }
                    else
                    {
                        await sw.WriteLineAsync(content[i].ToNumberString());
                    }

                    await sw.FlushAsync();
                }
                lengthInBytes = sw.BaseStream.Length;
            }

            return string.Format("File: {0}, length: {1}", fileName, lengthInBytes);
        }

        public async Task<string[]> CreateRandomFilesAsync(int numberOfFilesToCreate)
        {
            string[] result = new string[numberOfFilesToCreate];
            Random rnd = new Random();
            Task<string>[] tasks = new Task<string>[numberOfFilesToCreate];

            // Creates random files
            for (int i = 0; i < numberOfFilesToCreate; i++)
            {
                string fileName = string.Format("{0:D3}.txt", i);

                tasks[i] = Task.Run<string>(async () =>
                {
                    // Lock the generator so we do not have duplicated random values
                    byte[][] fileContent = new byte[rowCount][];
                    lock (rnd)
                    {
                        for (int j = 0; j < rowCount; j++)
                        {
                            fileContent[j] = new byte[bufferLength];
                            rnd.NextBytes(fileContent[j]);
                        }
                    }

                    var res = await CreateRandomFileAsync(fileName, fileContent, false);
                    return res;
                });
            }

            //Wait for all task to complete
            result = await Task.WhenAll<string>(tasks);
            for (int i = 0; i < result.Length; i++)
            {
                Debug.WriteLine(result[i]);
            }

            // From documentation: Await the completion of all the running tasks.  
            //int[] lengths = await Task.WhenAll(downloadTasks);

            //// The previous line is equivalent to the following two statements.  
            //Task<int[]> whenAllTask = Task.WhenAll(downloadTasks);  
            //int[] lengths = await whenAllTask;  


            // Alternative version without async/await
            //Task.WaitAll(tasks);
            //for (int i = 0; i < tasks.Length; i++)
            //{
            //    var currentTask = tasks[i];
            //    result[i] = currentTask.Result;
            //}

            return result;
        }
    }
}