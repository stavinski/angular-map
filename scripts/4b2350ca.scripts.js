"use strict";angular.module("angularMapApp",["angular-geo-maplocation","ngGeolocation"]),angular.module("angularMapApp").controller("MainCtrl",["$scope","$timeout","geolocation",function(a,b,c){a.location={start:{latitude:54.174257093691715,longitude:-4.459671508789029},get:function(){var a=this,d=!1;a.retrieving=!0,b(function(){d=!0},1e3),c.position().then(function(b){console.log(b),a.coords={latitude:b.coords.latitude,longitude:b.coords.longitude}}).catch(function(b){console.log(b),a.lastError=b,a.retrieving=!1}).finally(function(){function c(){return d?void(a.retrieving=!1):void b(c,300)}a.lastError||c()})}}}]);