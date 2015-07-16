angular.module('won.factory', [])

.factory('Geolocation', function($http) {
  var geolocation = {
    latLong : function(param, cb) {
      $http
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: { address: param }
        })
        .success(cb)
    }
  };
  return geolocation;
})

.factory('Weather', function($http) {
  var weather = {
    current : function(params,settings,cb) {
      var units = (settings.scale === 'C') ? 'si' : 'us',
          precision = parseInt(settings.precision);

      $http.get(
            'api/forecast/'
             + (params.lat)
             + ','
             + (params.long)
             + '?units='
             + units
               )
      .success(cb);
    }
  };
  return weather;
})

.factory('Settings', function() {
  var settings = {
    get scale() { return localStorage.scale || 'F'; },
    set scale(value) { localStorage.scale = value; },
    get precision() { return localStorage.precision || 1; },
    set precision(value) { localStorage.precision = value; }
  };
  return settings;
})

// .factory('settings', function () {
//     return {
//       get scale() {
//         return localStorage.getItem('scale') || 'K';
//       },
//       get precision() {
//         return localStorage.getItem('precision') || '2';
//       },
//       set scale(s) {
//         localStorage.setItem('scale', s);
//       },
//       set precision(p) {
//         localStorage.setItem('precision', p);
//       }
//     };
//   })

  .factory('location', function () {
    var defaultFavorites = [{
        city: 'Cupertino, CA',
        lat: '37.3190',
        long: '-122.0293'
      },{
        city: 'Mountain View, CA',
        lat: '37.3897',
        long: '-122.0816'
      },{
        city: 'Redmond, WA',
        lat: '47.6786',
        long: '-122.1310'
      },{
        city: 'Nashville, TN',
        lat: '36.1658',
        long: '-86.7777'
      }];

    if (!localStorage.favorites) {
      localStorage.favorites = JSON.stringify(defaultFavorites);
    }

    return {
      get favorites() {
        var json = localStorage.getItem('favorites');
        return JSON.parse(json);
      },
      set favorites(f) {
        var json = JSON.stringify(f);
        localStorage.setItem('favorites', json);
      },
      addFavorite: function (f) {
        this.favorites = this.favorites.concat(f);
      },
      removeFavorite: function (cityName) {
        this.favorites = this.favorites.filter(function (fav) {
          return fav.city !== cityName;
        });
      }
    };
  });
