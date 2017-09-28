using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services.FileManipulations
{
    public interface IRandomFileCreator
    {
        Task<string> CreateRandomFileAsync(string fileName, byte[] content, bool convertToChar = true);
        Task<string[]> CreateRandomFilesAsync(int numberOfFilesToCreate);
    }
}
