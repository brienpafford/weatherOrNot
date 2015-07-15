angular.module('won.weather', [])

.controller('WeatherCtrl', function($scope, $stateParams, Weather, $ionicLoading) {

  $ionicLoading.show();

  console.log($stateParams.lng)

  $scope.city = $stateParams.city;
  var lat = $stateParams.lat*1
  var lng = $stateParams.lng*1

  Weather.getWeather(lat, lng, function(res){
    $ionicLoading.hide();
    $scope.forecast = res;
    console.log(res)
  })
});
