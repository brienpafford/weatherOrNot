angular.module('won.weather', [])

.controller('WeatherCtrl', function($state, $scope, settings, $stateParams, $http, $ionicLoading, Weather) {

  $scope.city = $stateParams.city;

  $ionicLoading.show();

// Get Data from Factory, assign to scope

  Weather.current($stateParams, function(data) {
   $ionicLoading.hide();

// Degree Conversion
    var tempF = data.currently.temperature;

      if (settings.scale === 'C') {
        // convert to Celsius
        var tempC = (((tempF - 32) * (5/9)).toFixed(2)*1)
        $scope.currentTemp = tempC;
      } else {
        // return Fahrenheit
        $scope.currentTemp = tempF;
      }

// Set Decimal Rounding

  //   if (settings.precision === 0) {
  //     console.log('rounded')
  //   }

      $state.reload();
  });

});
