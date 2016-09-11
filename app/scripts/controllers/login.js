'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp').controller(
        'loginCtrl',
        function($scope, $state, $q, authService) {
            // Credentials holder
            $scope.credentials = {};
            /**
             * Execute a login
             */
            $scope.sendLogin = function() {
                return authService.authenticate($scope.credentials.email,
                        $scope.credentials.pwd).then(function(resp) {
                    return $state.go('dashboard');

                }, function(err) {
                    $scope.loginErr = err.message;
                    $q.reject();
                });
            };
        });
