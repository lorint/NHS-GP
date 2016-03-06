angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $location) {
  $scope.goToPage = function(page){
    console.log(page);
    $state.go(page);
  };
})

.controller('MapCtrl', function($scope, $location) {
  // To listen for when this page becomes active
  $scope.$on('$ionicView.enter', function(e) {
    console.log("MAPS!");
  });

  // Instead of $scope.chats = Chats.all() :::
  function grabChats(){
    Chats.all().then(function(data){
      $scope.chats = data;
    });
  }
  grabChats();

  $scope.remove = function(chat) {
    Chats.remove(chat).then(function(){
      grabChats();
    });
  };
})

.controller('ChatsCtrl', function($scope, $location, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Instead of $scope.chats = Chats.all() :::
  function grabChats(){
    Chats.all().then(function(data){
      $scope.chats = data;
    });
  }
  grabChats();

  $scope.remove = function(chat) {
    Chats.remove(chat).then(function(){
      grabChats();
    });
  };
})



// And for both OSX and Ubuntu you can do the same sort of thing for Android if you first install their SDK.  This is going to take a little while, so maybe do this in the breakfast room where we can hit 600kB/sec.

// On OSX to get the Android SDK, which includes an emulator for Marshmallow, do this:

// ```brew install android-sdk
// android```
// On the screen that appears, deselect all the Android TV, Android Wear, and EABI things, as well as the normal Atom image.  Leave only the Intel x86 Atom_64 image.  You should have 9 packages selected, then accept the license and install.

// Build an Android Virtual Device (AVD), probably a crappy old 2012 Nexus 7 is best, by running:

// ```android avd```

// Install the Intel hardware accelerated execution manager with:

// ```brew uninstall --force brew-cask
// brew install Caskroom/cask/intel-haxm```

// Now it works but isn't fast ... anyway you can emulate:


.controller('ChatDetailCtrl', function($scope, $stateParams, $location, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
  Chats.get($stateParams.chatId).then(function(data){
    $scope.chat = data;
  });
})

.controller('AccountCtrl', function($scope, $location) {
  $scope.settings = { enableFriends: true };
});
