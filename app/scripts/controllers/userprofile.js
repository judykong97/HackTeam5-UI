'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:UserprofileCtrl
 * @description # UserprofileCtrl Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp').controller(
        'UserprofileCtrl',
        [
                '$scope',
                'userService',
                'authService',
                function($scope, userService, authService) {
                    userService.readUser(authService.getCurrentAuth().uid)
                            .then(
                                    function(data) {
                                        console.log(data);
                                        $scope.userdata = data.$bindTo($scope,
                                                'userdata').then(function() {
                                            $scope.userdata._updated = true;
                                        });

                                    }, function(error) {
                                        console.log(error);// TODO
                                    });
                } ]);
