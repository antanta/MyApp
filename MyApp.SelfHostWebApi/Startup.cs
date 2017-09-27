using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using WebApiContrib.Formatting.Jsonp;

[assembly: OwinStartup(typeof(MyApp.SelfHostWebApi.Startup))]

namespace MyApp.SelfHostWebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Configure Web API for self-host. 
            HttpConfiguration config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // Default serialization to json
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            // Add support for jsonp
            config.Formatters.Insert(0, new JsonpMediaTypeFormatter(new JsonMediaTypeFormatter()));

            app.UseWebApi(config);
        }
    }
}
