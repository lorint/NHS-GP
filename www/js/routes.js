angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Learn more here: https://github.com/angular-ui/ui-router
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.1-language',{url: '/1-language',views:{'tab-1-language': {
    templateUrl: 'templates/tab-1-language.html',
    parent: "tab", controller: 'DashCtrl'
  }}})
  .state('tab.2-welcome',{url: '/2-welcome',views:{'tab-2-welcome': {
    templateUrl: 'templates/tab-2-welcome.html',
    parent: "tab", controller: 'DashCtrl'
  }}})
  .state('tab.3-i_am_a_gp',{url: '/3-i_am_a_gp',views:{'tab-3-i_am_a_gp': {
    templateUrl: 'templates/tab-3-i_am_a_gp.html',
    parent: "tab", controller: 'DashCtrl'
  }}})
  .state('tab.4-find_closest_gp',{url: '/4-find_closest_gp',views:{'tab-4-find_closest_gp': {
    templateUrl: 'templates/tab-4-find_closest_gp.html',
    parent: "tab", controller: 'MapCtrl'
  }}})
  .state('tab.4a-map',{url: '/4a-map/:postcode',views:{'tab-4a-map': {
    templateUrl: 'templates/tab-4a-map.html',
    parent: "tab", controller: 'MapCtrl'
  }}})
  .state('tab.5-what_to_expect',{url: '/5-what_to_expect',views:{'tab-5-what_to_expect': {
    templateUrl: 'templates/tab-5-what_to_expect.html',
    parent: "tab", controller: 'DashCtrl'
  }}})
  .state('tab.6-you_are_ready',{url: '/6-you_are_ready',views:{'tab-6-you_are_ready': {
    templateUrl: 'templates/tab-6-you_are_ready.html',
    parent: "tab", controller: 'DashCtrl'
  }}})

  .state('tab.chats',{url: '/chats',views:{'tab-chats': {
    templateUrl: 'templates/tab-chats.html',
    controller: 'ChatsCtrl'
  }}})
  .state('tab.chat-detail',{url: '/chats/:chatId',views:{'tab-chats': {
    templateUrl: 'templates/chat-detail.html',
    controller: 'ChatDetailCtrl'
  }}})

  .state('tab.account',{url: '/account',views:{'tab-account': {
    templateUrl: 'templates/tab-account.html',
    controller: 'AccountCtrl'
  }}});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/1-language');
});
