var controllerModule = angular.module('app.controllersModule');
controllerModule.controller('MainController', [
    '$scope', 'chatService',
    function($scope, chatService) {
        $scope.messageObjects = [];

        chatService.onReceivedMessage(function(response) {
            $scope.messageObjects.unshift(response);
        });

        $scope.sendChatMessage = function() {
            var name = $scope.chatName;
            var message = $scope.chatMessage;

            chatService.sendMessage(name, message);
            $scope.chatMessage = '';
        };
    }
]);