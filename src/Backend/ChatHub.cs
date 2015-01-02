using Microsoft.AspNet.SignalR;

namespace TestSignalR
{
    public class ChatHub : Hub
    {
        public void SendMessage(string name, string message)
        {
            Clients.All.ReceivedMessage(name, message);
        }
    }
}