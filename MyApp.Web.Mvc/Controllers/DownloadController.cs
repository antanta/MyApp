using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;

namespace MyApp.Web.Mvc.Controllers
{
    public class DownloadController : Controller
    {
        public FileResult DownloadFile(string fileName)
        {
            String file = Server.MapPath(@"\\App_Data\\" + fileName);

            FileStream fs = new FileStream(file, FileMode.Open, FileAccess.Read);

            //Force download as a text file
            Response.AddHeader("Content-type", "application/octet-stream");
            Response.AddHeader("Content-Disposition", String.Format("Content-Disposition", "attachment; filename=\"{0}\"", fileName));

            return new FileStreamResult(fs, "text/plain");
        }
    }
}