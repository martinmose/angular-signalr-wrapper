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