using Castle.Windsor;
using Castle.Windsor.Installer;
using MyApp.WebAPI.Plumbing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebApiContrib.Formatting.Jsonp;

namespace MyApp.WebAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        public WebApiApplication()
        {
            this.container = new WindsorContainer().Install(new MyApp.WebAPI.Installers.DependencyConventions());
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator), new WindsorCompositionRoot(this.container));

            /* Add support for jsonp */
            GlobalConfiguration.Configuration.Formatters.Insert(0, new JsonpMediaTypeFormatter(new JsonMediaTypeFormatter()));
        }

        public override void Dispose()
        {
            this.container.Dispose();
            base.Dispose();
        }        

        private readonly IWindsorContainer container;
    }
}
