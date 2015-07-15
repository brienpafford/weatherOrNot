angular.module('won.settings', [])

.controller('SettingsCtrl', function(settings, $scope, $ionicLoading) {

  $scope.precision = settings.precision || 'F';
  $scope.scale = settings.scale || 0;

// $scope.randomScale = function () {
//   $ionicLoading.show({
//     //template: '<img src=''>',
//     duration: 1000
//   });
// }

// $scope.precisionChanged = function () {
//   console.log($scope.precision)
// };

$scope.$watch('precision', function (){
  settings.setPrecision($scope.precision)
});

$scope.$watch('scale', function () {
  settings.setScale($scope.scale)
})

 })


.factory('settings', function () {
    return {
      scale: localStorage.scale,
      precision: localStorage.precision,

      setScale: function(s) {
        localStorage.scale = s;
      },
      setPrecision: function(p) {
        localStorage.precision = p;
      }
  };
});





// /////// 1.0

// angular.module('won.settings', [])

// .controller('SettingsCtrl', function(settings, $scope, $ionicLoading) {

//   $scope.precision = settings.precision || 'F';
//   $scope.scale = settings.scale || 0;

// // $scope.randomScale = function () {
// //   $ionicLoading.show({
// //     //template: '<img src=''>',
// //     duration: 1000
// //   });
// // }

// // $scope.precisionChanged = function () {
// //   console.log($scope.precision)
// // };


// $scope.$watch('precision', function (){
//   settings.setPrecision($scope.precision)
// });

// $scope.$watch('scale', function () {
//   settings.setScale($scope.scale)
// })

//  })


// .factory('settings', function () {
//     return {
//       scale: localStorage.scale,
//       precision: localStorage.precision,

//       setScale: function(s) {
//         localStorage.scale = s;
//       },
//       setPrecision: function(p) {
//         localStorage.precision = p;
//       }
//   };
// });
