using System.Web.Mvc;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using MyApp.Repository;
using MyApp.Repository.EntityFramework;
using System.Web.Http.Controllers;

namespace MyApp.WebAPI.Installers
{
    public class DependencyConventions : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
            .BasedOn<IHttpController>()
            .LifestylePerWebRequest());

            container.Register(Component.For<IRepositoryCreator>().ImplementedBy<EntityFrameworkRepositoryCreator>());
        }
    }
}