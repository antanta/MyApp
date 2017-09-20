using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyApp.Web.Mvc.Startup))]
namespace MyApp.Web.Mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
