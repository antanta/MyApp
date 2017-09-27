using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.SelfHostWebApi.Configuration
{
    public class HostConfiguration : ConfigurationSection
    {
        public static HostConfiguration GetConfig()
        {
            HostConfiguration config = (HostConfiguration)System.Configuration.ConfigurationManager.GetSection("hostConfiguration");
            if  (config == null)
            {
                config = new HostConfiguration();
            }
            
            return config;
        }

        [System.Configuration.ConfigurationProperty("hostEndpoint")]
        public HostEndpoint HostEndpoint
        {
            get
            {
                var res = this["hostEndpoint"];
                return res as HostEndpoint;
            }
        }
    }
}
