'use strict';

var userServiceApp = angular.module('userservice',[]);
    function User() {

        var User = function() {
            this.id = null;
            this.principal = null;
        }


        User.create = function() {
            return new User();
        }

        User.currentUser = function() {
            return currentUser;
        }

        var currentUser = User.create();

        User.prototype.init = function() {
            currentUser.id = 1;
            currentUser.principal = 'princi1';
        }();

        return {
            create : User.create,
            currentUser : currentUser
        }
    }

userServiceApp.factory('User',User);