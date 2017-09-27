using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.SelfHostWebApi.Configuration
{
    public class HostEndpoint : ConfigurationElement
    {
        [ConfigurationProperty("baseAddress", IsRequired = true)]
        public string BaseAddress
        {
            get
            {
                return this["baseAddress"] as string;
            }
        }
    }
}
