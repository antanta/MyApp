using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services.FileManipulations
{
    public class FileMetadata
    {
        public string Name { get; set; }
        /// <summary>
        /// Length of file in bytes
        /// </summary>
        public long Length { get; set; }
        /// <summary>
        /// TODO
        /// </summary>
        public string Path { get; set; }
    }
}
