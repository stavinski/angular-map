'use strict';

angular.module('angularMapApp')
  .controller('MainCtrl', function ($scope) {
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
    
  });
