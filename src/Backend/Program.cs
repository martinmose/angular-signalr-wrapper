using System;
using Microsoft.Owin.Hosting;

namespace TestSignalR
{
    public class Program
    {
        private const string Url = "http://localhost:8080";

        private static void Main()
        {
            using (WebApp.Start(Url))
            {
                Console.WriteLine("Server running on {0}", Url);
                Console.ReadLine();
            }
        }
    }
}
