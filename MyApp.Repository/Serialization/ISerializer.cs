using System;
using System.IO;

namespace MyApp.Repository.Serialization
{
    public interface ISerializer<T>
    {
        //===============================================================
        void Serialize(T obj, Stream stream);
        //===============================================================
        T Deserialize(Stream stream);
        //===============================================================
    }
}
