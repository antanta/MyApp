using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Castle.MicroKernel;

namespace MyApp.Web.Mvc.Plumbing
{
    public class WindsorControllerFactory : DefaultControllerFactory
    {
        public WindsorControllerFactory(IKernel kernel)
        {
            this.kernel = kernel;
        }

        public override void ReleaseController(IController controller)
        {
            kernel.ReleaseComponent(controller);
        }

        #region Protected members
        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            if (controllerType != null)
            {
                return (IController)kernel.Resolve(controllerType);
            }
            else
            {
                return base.GetControllerInstance(requestContext, controllerType);
            }
        }
        #endregion

        #region Private members
        private readonly IKernel kernel;
        #endregion
    }
}
