using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using MyApp.Services.FileManipulations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;

namespace MyApp.SelfHostWebApi.Installers
{
    public class DependencyConventions : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            //container.Register(Classes.FromThisAssembly()
            //.BasedOn<IHttpController>()
            ////.LifestylePerWebRequest());
            //.LifestyleScoped());


            container.Register(Classes.FromThisAssembly()
            .Pick().If(t => t.Name.EndsWith("Controller"))
            .Configure(configurer => configurer.Named(configurer.Implementation.Name))
            //.LifestylePerWebRequest()  //---this caused the bug
            //.LifestyleScoped()
            .LifestyleTransient()//the correct one
             );

            container.Register(Component.For<IRandomFileCreator>().ImplementedBy<RandomFileCreator>());
        }
    }
}
