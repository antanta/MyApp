using MyApp.Domain;
using MyApp.Repository;

namespace MyApp.WebAPI.Controllers
{
    public class StudentController : DomainController<Student>
    {
        public StudentController(IRepositoryCreator repo)
            : base(repo)
        {
        }
    }
}
