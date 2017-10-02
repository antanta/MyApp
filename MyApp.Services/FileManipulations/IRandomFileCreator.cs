using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services.FileManipulations
{
    public interface IRandomFileCreator
    {
        Task<FileMetadata> CreateRandomFileAsync(string fileName, byte[][] content, bool convertToChar = true);
        Task<FileMetadata[]> CreateRandomFilesAsync(int numberOfFilesToCreate, int maxNumberOfFiles = 10);
    }
}
