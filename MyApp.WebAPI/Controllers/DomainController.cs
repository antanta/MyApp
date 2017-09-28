using MyApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MyApp.WebAPI.Controllers
{
    public abstract class DomainController<T> : ApiController
        where T : class
    {
        public DomainController(IRepositoryCreator repoCreator)
        {
            this.repoCreator = repoCreator;
            this.DomainRepository = repoCreator.GetRepository<T>();
        }

        public virtual IEnumerable<T> Get()
        {
            var result = this.DomainRepository.Items;
            return result;
        }
        public virtual string Get(int id)
        {
            return "value";
        }
        public virtual void Post([FromBody]string value)
        {
        }
        public virtual void Put(int id, [FromBody]string value)
        {
        }
        public virtual void Delete(int id)
        {
        }

        protected Repository<T> DomainRepository { get; private set; }

        #region Private members
        private IRepositoryCreator repoCreator;
        #endregion
    }
}