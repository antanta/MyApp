using MyApp.Domain;
using MyApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyApp.WebAPI.Controllers
{
    public class TeacherController : DomainController<Teacher>
    {
        public TeacherController(IRepositoryCreator repo)
            : base(repo)
        {

        }
    }
}