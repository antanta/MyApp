﻿using Microsoft.Owin.Hosting;
using MyApp.SelfHostWebApi.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.SelfHostWebApi
{
    class Program
    {
        static void Main(string[] args)
        {
            HostConfiguration hostConfig = HostConfiguration.GetConfig();
            string baseAddress = hostConfig.HostEndpoint.BaseAddress;

            // Start OWIN host
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                Console.WriteLine("Started listening on port {0}.{1}Press Enter to quit.", baseAddress, Environment.NewLine);
                Console.ReadLine();
            }
        }
    }
}
