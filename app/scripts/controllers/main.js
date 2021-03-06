'use strict';

angular.module('angularMapApp').controller('MainCtrl', ['$scope', '$timeout', 'geolocation', function ($scope, $timeout, geoLocation) {
    
  $scope.location = {
    start: {
      latitude: 54.174257093691715,
      longitude: -4.459671508789029
    },
    get: function () {
      var self = this,
          minDelay = false;
      
      self.retrieving = true;
      
      // we should at least show the user retrieving for a second
      $timeout(function () { minDelay = true; }, 1000);
      
      geoLocation.getLocation()
        .then(function (pos) {
          self.coords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          };
        })
        .catch(function (err) {
          self.lastError = err;
          self.retrieving = false;
        })
        .finally(function () {
          function minDelayMet() {
            if (!minDelay) {
              $timeout(minDelayMet, 300);
              return;
            }
            
            self.retrieving = false;
          }
          
          if (!self.lastError) {
            minDelayMet();
          }
        });
    }
  };
   
}]);
