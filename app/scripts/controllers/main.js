'use strict';

var gtdApp = angular.module('gtdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

var ThoughtController = function($scope,$log,ThoughtService){
    $scope.thought = 'test';
    $scope.thoughtService = ThoughtService.query();
    $scope.addThought = function() {
        $log.log('added Thought');
        var newThought = ThoughtService.create($scope.thought);
        ThoughtService.add(newThought);
        $log.log(newThought);
      };
/*
    $scope.$watch('thought', function(newValue, oldValue) {
        $log.log('new thought: ' + newValue);
    });
*/
  };
ThoughtController.$inject = ['$scope','$log','ThoughtService'];
gtdApp.controller('ThoughtController',  ThoughtController );

