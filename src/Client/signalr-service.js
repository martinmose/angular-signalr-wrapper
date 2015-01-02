var serviceModule = angular.module('app.servicesModule');
serviceModule.factory('signalRService', [
    '$rootScope', 'CONNECTION_URL',
    function($rootScope, CONNECTION_URL) {
        var connection = $.hubConnection(CONNECTION_URL);

        var HubProxyWrapper = function(hubProxy) {
            var hubProxyWrapper = {};

            hubProxyWrapper.invoke = function() {
                hubProxy.invoke.apply(hubProxy, arguments);
            };

            hubProxyWrapper.on = function(name, fn) {
                hubProxy.on(name, function() {
                    fn.apply(this, arguments);
                    $rootScope.$apply();
                });
            };

            return hubProxyWrapper;
        };

        return {
            createHubProxy: function(name) {
                var hubProxy = connection.createHubProxy(name);
                connection.start();

                return new HubProxyWrapper(hubProxy);
            }
        }
    }
]).constant('CONNECTION_URL', 'http://localhost:8080/signalR/hubs');