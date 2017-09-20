using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Repository
{
    public interface IRepositoryCreator
    {
        Repository<T> GetRepository<T>()
            where T : class;
    }
}
