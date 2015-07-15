angular.module('won.settings', [])

.controller('SettingsCtrl', function(settings, $scope, $ionicLoading) {

  $scope.precision = localStorage.precision;//settings.scale;
  $scope.scale = localStorage.scale//settings.precision;

$scope.randomScale = function () {
  $ionicLoading.show({
    //template: '<img src=''>',
    duration: 1000
  });
}

// $scope.precisionChanged = function () {
//   console.log($scope.precision)
// };


$scope.$watch('precision', function (){
  localStorage.precision = $scope.precision;
});

$scope.$watch('scale', function () {
  localStorage.scale = $scope.scale;
})

})


.factory('settings', function () {
  return {
    scale: 'F',
    precision: 1
  };
});
