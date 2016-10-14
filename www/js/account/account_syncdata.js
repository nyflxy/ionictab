angular.module('starter.account_syncdata', [])
  .controller('AccountSyncdataCtrl', function($scope,$state,$http,$ionicLoading) {
    $scope.$on('$ionicView.beforeEnter', function(e) {
      init();
    });

    function init() {

    }
  })
