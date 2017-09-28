using MyApp.Services.Utilities;
using System;
using System.Collections.Generic;
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

        public async Task<string> CreateRandomFileAsync(string fileName, byte[] content, bool convertToChar = true)
        {
            Random rndgen = new Random();

            byte[] rndBuffer = new byte[bufferLength];
            rndgen.NextBytes(rndBuffer);

            using (FileStream fs = new FileStream(fileName, FileMode.CreateNew))
            using (StreamWriter sw = new StreamWriter(fs))
            {
                if (convertToChar)
                {
                    char[] charArr = rndBuffer.ToCharArray();
                    await sw.WriteLineAsync(charArr);
                }
                else
                {
                    //TODO
                    char[] charArr = rndBuffer.ToCharArray(' ');
                    await sw.WriteLineAsync(charArr);
                }
            }

            //TODO
            return string.Format("some metadata for {0}", fileName);
        }

        public async Task<string[]> CreateRandomFilesAsync(int numberOfFilesToCreate)
        {
            string[] result = new string[numberOfFilesToCreate];
            Random rnd = new Random();
            Task<string>[] tasks = new Task<string>[numberOfFilesToCreate];

            // Creates random files
            for (int i = 0; i < numberOfFilesToCreate; i++)
            {
                string fileName = DateTime.Now.Ticks.ToString() + ".txt";


                tasks[i] = Task.Run<string>(async () =>
                {
                    byte[] fileContent = new byte[bufferLength];
                    // Lock the generator so we do not have duplicated random values
                    lock (rnd)
                    {
                        rnd.NextBytes(fileContent);
                    }

                    var res = await CreateRandomFileAsync(fileName, fileContent);
                    return res;
                });
            }

            //Wait for all task to complete
            result = await Task.WhenAll<string>(tasks);

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
