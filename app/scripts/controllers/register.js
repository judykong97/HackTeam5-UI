'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp').controller(
        'registerCtrl',
        [
                '$scope',
                'authService',
                'userService',
                function($scope, authService, userService) {
                    $scope.reg = {};

                    /**
                     * Submits a registration and returns a promise that is
                     * resolved on complete success or rejected on error.
                     */
                    $scope.submitReg = function() {
                        return authService.registerUserCred($scope.reg.email,
                                $scope.reg.pwd).then(
                                function(userCred) {
                                    return userService.createUser(userCred.uid, $scope.reg);
                                }).then(function() {
                            return $state.go('dashboard');
                        });

                    };
                } ]);