'use strict';

angular.module('angularMapApp')
  .directive('locationMap', function () {
    return {
      template: '<google-map center=\"location\" zoom=\"map.zoom\" draggable=\"true\" options=\"map.options\" control=\"map.control\"><marker coords=\"location\" options=\"marker.options\" events=\"marker.events\"></marker></google-map>',
      restrict: 'E',
      controller: function ($scope) {
        $scope.location = {
          latitude: 54.1798640,
          longitude: -4.4436250
        };

        $scope.map = {
          control: {},
          zoom: 8,
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
