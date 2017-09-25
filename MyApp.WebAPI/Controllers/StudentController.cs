using MyApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MyApp.WebAPI.Controllers
{
    public class StudentController : ApiController
    {
        public StudentController(IRepositoryCreator repo)
        {

        }

        public IEnumerable<string> Get()
        {   
            return new string[] { "value1", "value2" };
        }
        public string Get(int id)
        {
            return "value";
        }
        public void Post([FromBody]string value)
        {
        }
        public void Put(int id, [FromBody]string value)
        {
        }
        public void Delete(int id)
        {
        }
    }
}