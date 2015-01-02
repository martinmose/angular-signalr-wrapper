using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Cors;
using Owin;

namespace TestSignalR
{
    public class Startup
    {
        private const string PathMatch = "/signalr";

        public void Configuration(IAppBuilder app)
        {
            app.Map(PathMatch, map =>
            {
                map.UseCors(CorsOptions.AllowAll);

                var hubConfiguration = new HubConfiguration();

                map.RunSignalR(hubConfiguration);
            });
        }
    }
}