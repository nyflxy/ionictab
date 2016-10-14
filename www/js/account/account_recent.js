angular.module('starter.account_recent', [])
  .controller('AccountRecentCtrl', function($scope,$state,$http,$ionicLoading) {
    $scope.$on('$ionicView.beforeEnter', function(e) {
      init();
    });

    function init() {

    }
  })




