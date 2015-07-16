angular.module('won.menu', [])
  .controller('MenuCtrl', function (location, $scope) {
    $scope.favorites = location.favorites;

    $scope.makeFavorite = function () {
      location.favorites.addFvorite({name, lat, long})
    }
  });
