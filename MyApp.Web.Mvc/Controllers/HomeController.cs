using MyApp.Domain;
using MyApp.Web.Mvc.EF;
using MyApp.Web.Mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyApp.Web.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var ctx = new ApplicationDbContext())
            {
                Standard st = new Standard();

                st.Name = "12 Standard 1";


                Student stud = new Student() { Name = "New Student 2" };
                stud.Standard = st;

                ctx.Standards.Add(st);

                ctx.Students.Add(stud);

                ctx.SaveChanges();
            }


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
    }
}