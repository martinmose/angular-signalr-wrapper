angular-signalr-wrapper
=======================

A SignalR "test" project. Where SignalR has been wrapped nicely in some AngularJS services.

##Up and running

####Get clientside dependencies using Bower
`bower install`

####Install backend dependencies using Nuget
`nuget install packages.config` via nuget.exe or restore the packages

####Optional
There is a Grunt file in the solution too, but Grunt is only used to include all Bower dependencies as script tags in the index.html file.

If you want to set that up, simple run: `npm install`

##Usage

######First modify signalr-service.js with your connection etc.
```
var connection = $.hubConnection(CONNECTION_URL);
```

####How to use the "wrapper":
#####C-Sharp - SignalR hub class
```
public class ChatHub : Hub
{
    public void SendMessage(string name, string message)
    {
        Clients.All.ReceivedMessage(name, message);
    }
}
```

#####Javascript
Here you just create a AngularJS service where you take a dependency on `signalRService` and then just exhibits all the methods etc. from the C# hub class like below
```
var serviceModule = angular.module('app.servicesModule');
serviceModule.factory('chatService', [
    'signalRService',
    function(signalRService) {
        var chatHubProxy = signalRService.createHubProxy('chatHub');

        return {
            sendMessage: function(name, message) {
                chatHubProxy.invoke('sendMessage', name, message);
            },
            onReceivedMessage: function(callback) {
                chatHubProxy.on('receivedMessage', function(name, message) {
                    var response = {
                        name: name,
                        message: message
                    };

                    callback(response);
                });
            }
        };
    }
]);
```

##Test the solution
1. Run the Backend project from Visual Studio
2. While the Backend project is still running, run the Client project, which open a webpage in your browser.


##Notes
* The intention with this project was to play around with SignalR but also wrap it nicely with AngularJS so it is easy to work with, but also make sure we don't have "SignalR code" all over our client side code
