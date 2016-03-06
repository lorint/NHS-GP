angular.module('starter.services', [])
.factory('Chats', function($http) {
  return {
    // These three all bring back promises
    all: function() {
      return $http({method: 'GET', url: 'http://localhost:3000/chats.json'});
    },
    remove: function(chat) {
      return $http({method: 'DELETE', url: 'http://localhost:3000/chats/'+chat.id+'.json'});
    },
    get: function(chatId) {
      return $http({method: 'GET', url: 'http://localhost:3000/chats/'+chatId+'.json'});
    }
  };
});
