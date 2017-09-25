using MyApp.Domain;
using MyApp.Repository;

namespace MyApp.WebAPI.Controllers
{
    public class StandardController : DomainController<Standard>
    {
        public StandardController(IRepositoryCreator repoCreator)
            :base(repoCreator)
        {
        }
    }
}
