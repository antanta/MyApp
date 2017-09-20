using MyApp.Domain;
using MyApp.Web.Mvc.Models;
using MyApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyApp.Web.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public HomeController(IRepositoryCreator repoCreator)
        {
            this.repoCreator = repoCreator;
        }

        public ActionResult Index()
        {
            Repository<Standard> repository = repoCreator.GetRepository<Standard>();
            Standard st = new Standard
            {
                Name = "12 Standard"
            };
            repository.Insert(st);
            repository.SaveChanges();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        private readonly IRepositoryCreator repoCreator;
    }
}