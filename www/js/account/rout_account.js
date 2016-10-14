angular.module('starter').config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('tab.account_syncdata', {
      url: '/account_syncdata',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_syncdata.html',
          controller: 'AccountSyncdataCtrl'
        }
      }
    })

    .state('tab.account_recent', {
      url: '/account_recent',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_recent.html',
          controller: 'AccountRecentCtrl'
        }
      }
    })

    .state('tab.account_bindtel', {
      url: '/account_bindtel',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_bindtel.html',
          controller: 'AccountBindtelCtrl'
        }
      }
    })

    .state('tab.account_advice', {
      url: '/account_advice',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_advice.html',
          controller: 'AccountAdviceCtrl'
        }
      }
    })

    .state('tab.account_fuwu', {
      url: '/account_fuwu',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_fuwu.html',
          controller: 'AccountFuwuCtrl'
        }
      }
    })

    .state('tab.account_guanyu', {
      url: '/account_guanyu',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_guanyu.html',
          controller: 'AccountGuanyuCtrl'
        }
      }
    })

})
;
