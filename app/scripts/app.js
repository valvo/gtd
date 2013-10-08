'use strict';

angular.module('gtdApp', ['ngRoute','userservice'])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/thoughts.html',
      controller: 'ThoughtController'
    })

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
/*
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });


* */