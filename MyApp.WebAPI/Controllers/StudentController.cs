using MyApp.Domain;
using MyApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MyApp.WebAPI.Controllers
{
    public class StudentController : DomainController<Student>
    {
        public StudentController(IRepositoryCreator repo)
            :base(repo)
        {

        }
    }
}