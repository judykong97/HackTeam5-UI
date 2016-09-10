'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp').controller('registerCtrl',
        [ '$scope', 'authService', function($scope, authService) {
            $scope.reg = {};

            $scope.submitReg = function() {
                authService.registerUserCred($scope.reg.email, $scope.reg.pwd).then(function(){
                    // put the rest of the user data into the database
                });
   
            };
        } ]);