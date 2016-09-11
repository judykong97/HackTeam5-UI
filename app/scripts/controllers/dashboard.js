'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:DashboardCtrl
 * @description # DashboardCtrl Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp').controller('DashboardCtrl',
        [ '$scope', 'userService', 'authService', function($scope, userService, authService) {
            console.log(authService.getCurrentAuth())
            userService.readUser(1).then(function(data) {
                $scope.userdata = data;
                console.log($scope.userdata);
            }, function(error) {
                console.log(error);// TODO
            });
        } ]);

angular.module('hackTeam5UiApp').controller('ButtonsCtrl', function($scope) {
    $scope.singleModel = 1;
});