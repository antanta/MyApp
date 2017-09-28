using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services.Utilities
{
    public static class ByteArrayExtensions
    {
        public static char[] ToCharArray(this byte[] arr)
        {
            if (arr == null)
            {
                throw new ArgumentNullException(Strings.ByteArrayExtensions_ArgumentNullException);
            }

            char[] symbols = new char[arr.Length];
            for (int i = 0; i < arr.Length; i++)
            {
                symbols[i] = (char)arr[i];
            }
            return symbols;
        }
        public static char[] ToCharArray(this byte[] arr, char separator)
        {
            if (arr == null)
            {
                throw new ArgumentNullException(Strings.ByteArrayExtensions_ArgumentNullException);
            }

            char[] symbols;
            if (arr.Length != 0)
            {
                symbols = new char[arr.Length * 2 - 1];
            }
            else
            {
                symbols = new char[0];
            }

            for (int i = 0, j = 0; i < arr.Length; i++, j+=2)
            {
                symbols[j] = (char)arr[i];
                symbols[j + 1] = separator;
            }

            return symbols;
        }
    }
}
