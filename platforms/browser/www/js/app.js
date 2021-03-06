// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ion-floating-menu','vkEmojiPicker','starter.services','angular-thumbnails'])

.run(function($ionicPlatform) {

 

  $ionicPlatform.ready(function($rootScope) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //   cordova.plugins.diagnostic.requestRuntimePermissions(function(statuses){
    //     for (var permission in statuses){
    //         switch(statuses[permission]){
    //             case cordova.plugins.diagnostic.permissionStatus.GRANTED:
    //                 // alert("Permission granted to use "+permission);
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
    //                 // alert("Permission to use "+permission+" has not been requested yet");
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.DENIED:
    //                 // alert("Permission denied to use "+permission+" - ask again?");
    //                 break;
    //             case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
    //                 // alert("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
    //                 break;
    //         }
    //     }
    // }, function(error){
    //     alert("The following error occurred: "+error);
    // },[
    //     cordova.plugins.diagnostic.permission.READ_EXTERNAL_STORAGE
    // ]);

    // cordova.plugins.diagnostic.requestCameraAuthorization(
    // function(status){
       
    // }, function(error){
       
    // });   


    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.register', {
    url: '/register',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

    .state('app.home', {
      url: '/home',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.invoices', {
    url: '/invoices',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/invoices.html',
        controller: 'HomeCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/register');
});
