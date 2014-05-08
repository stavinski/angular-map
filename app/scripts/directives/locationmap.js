'use strict';

angular.module('angularMapApp')
  .directive('locationMap', function () {
    return {
      templateUrl: '/views/templates/locationmap.html',
      restrict: 'EA',
      scope: {
        location: '='
      },
      controller: function ($scope) {
        if (!$scope.location) {
          throw new Error('location must be supplied to location-map directive');
        }
        
        $scope.map = {
          control: {},
          start: angular.copy($scope.location), // use the location passed as the start position
          zoom: 7,
          options: {
            streetViewControl: false
          }
        };

        $scope.marker = {
            options: {
              draggable: true,
              title: 'Pick location'
            },
            events: {
              dragend: function (marker) {
                $scope.$apply(function () {
                  $scope.location.latitude = marker.getPosition().lat();
                  $scope.location.longitude = marker.getPosition().lng();
                });
              }
            }
          };
      }
    };
  });
