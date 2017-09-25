using System.Web.Mvc;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using MyApp.Repository;
using MyApp.Repository.EntityFramework;

namespace MyApp.Web.Mvc.Installers
{
    public class DependencyConventions : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
                container.Register(Classes.FromThisAssembly()
                .BasedOn<IController>()
                .LifestyleTransient());

            container.Register(Component.For<IRepositoryCreator>().ImplementedBy<EntityFrameworkRepositoryCreator>());
        }
    }
}
