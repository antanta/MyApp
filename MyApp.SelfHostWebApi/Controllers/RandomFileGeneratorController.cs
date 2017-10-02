using MyApp.Services.FileManipulations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace MyApp.SelfHostWebApi.Controllers
{
    public class RandomFileGeneratorController : ApiController
    {
        public RandomFileGeneratorController(IRandomFileCreator randomFileCreator)
        {
            this.randomFileCreator = randomFileCreator;
        }

        [HttpGet]
        public async Task<IHttpActionResult> GenerateRandomFiles(int numberOfFiles)
        {
            FileMetadata[] result = await this.randomFileCreator.CreateRandomFilesAsync(numberOfFiles);
            return Json(result);
        }

        #region Private members
        private readonly IRandomFileCreator randomFileCreator;
        #endregion
    }
}
