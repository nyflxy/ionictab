// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
  'starter.tab-account',
  'starter.account_bindtel',
  'starter.account_advice',
  'starter.account_fuwu',
  'starter.account_gaunyu',
  'starter.account_recent',
  'starter.account_syncdata',
    ])

.run(function($ionicPlatform,$rootScope) {
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

  // 开机前提前禁掉tab栏位
    $rootScope.$on('$ionicView.beforeEnter', function(event, view) {
      $rootScope.isHideTabBar = (
        // account
        view.stateName === 'tab.account_advice'
        ||view.stateName === 'tab.account_bindtel'
        ||view.stateName === 'tab.account_fuwu'
        ||view.stateName === 'tab.account_guanyu'
        ||view.stateName === 'tab.account_recent'
      );
      console.log('Before Enter..', view.stateName);
    });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.main', {
    url: '/main',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.articels', {
      url: '/articels',
      views: {
        'tab-articels': {
          templateUrl: 'templates/tab-articels.html',
          controller: 'ArticelsCtrl'
        }
      }
    })
    .state('tab.articel-detail', {
      url: '/articels/:articelId',
      views: {
        'tab-articels': {
          templateUrl: 'templates/articel-detail.html',
          controller: 'ArticelDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

});
