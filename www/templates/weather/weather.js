angular.module('won.weather', [])

.controller('WeatherCtrl', function($scope, $stateParams, $ionicLoading, Weather, Settings) {

  $scope.city = $stateParams.city;
  $scope.precision = Settings.precision;

  $ionicLoading.show();

  Weather.current($stateParams,Settings,function(data) {
    $scope.current = data.currently;
    $ionicLoading.hide();

    if (Settings.precision)

     $scope.scale = Settings.scale;

     $state.reload();
  })
});
