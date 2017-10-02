using MyApp.Services.FileManipulations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MyApp.Web.Mvc.Controllers
{
    public class RandomFileGeneratorController : Controller
    {
        public RandomFileGeneratorController(IRandomFileCreator randomFileCreator)
        {
            this.randomFileCreator = randomFileCreator;
        }

        [HttpGet]
        public async Task<ActionResult> GenerateRandomFiles(int numberOfFiles)
        {
            string[] result = await this.randomFileCreator.CreateRandomFilesAsync(numberOfFiles);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        #region Private members
        private readonly IRandomFileCreator randomFileCreator;
        #endregion
    }
}
