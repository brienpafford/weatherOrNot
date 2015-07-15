angular.module('won.settings', [])

.controller('SettingsCtrl', function(settings, $scope, $ionicLoading) {

  $scope.precision = settings.scale;
  $scope.scale = settings.precision;

$scope.randomScale = function () {
  $ionicLoading.show({
    //template: '<img src=''>',
    duration: 1000
  });
}

})


.factory('settings', function () {
  return {
    scale: 'F',
    precision: 1
  };
});
