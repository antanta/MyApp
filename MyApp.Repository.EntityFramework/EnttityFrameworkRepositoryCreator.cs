using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Repository.EntityFramework
{
    public class EntityFrameworkRepositoryCreator : IRepositoryCreator
    {
        public Repository<T> GetRepository<T>()
            where T : class
        {
            DbContext d = new MyAppContext();

            MyAppContext tt = new MyAppContext();

            //Entity Framework
            var repository = new EFRepository<MyAppContext, T>(new Func<MyAppContext, DbSet<T>>(ContextSetSelector<T>));

            //Original way Entity Framework
            //EFRepository<MyContext, Student, int> repository = new EFRepository<MyContext, Student, int>(x => x.Students);

            return repository;
        }

        static DbSet<TValue> ContextSetSelector<TValue>(MyAppContext context)
            where TValue : class
        {
            /* Could be done with a switch to skip Reflection */
            string className = typeof(TValue).Name;
            object val = context.GetType().GetProperty(className + suffix).GetValue(context);
            return val as DbSet<TValue>;
        }
        static readonly string suffix = "s";
    }
}
