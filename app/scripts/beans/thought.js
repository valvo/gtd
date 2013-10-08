'use strict';

var gtdApp = angular.module('gtdApp');

var ThoughtService = function($http,$log,User) {
     var thoughts = [];

     function Thought(json) {
        angular.extend(this,json);
    };

    Thought.create = function(text) {
        return new Thought({
            text : text,
            creationDate : new Date(),
            creationUser : User.currentUser
        });
    };

    Thought.query = function(criteria) {
        return thoughts;
    };

    Thought.add = function(thought) {
        thoughts.push(thought);
    }

    Thought.prototype = {
        update : function() {

        }
    };

  return {
      create   :    Thought.create
      , query  :    Thought.query
      , add    :    Thought.add
/*
     create : function() {
        $log.log('Thought.create');
         return new Thought();
     }
*/
  };
};
ThoughtService.$inject = ['$http','$log','User'];

gtdApp.factory('ThoughtService',ThoughtService);