'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:ViewteamCtrl
 * @description
 * # ViewteamCtrl
 * Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp')  
.controller('ViewteamCtrl', ['$scope', 'viewTeam', function ($scope, viewTeam) {
    viewTeam.getTeam(1).then(
      function (data) {
        $scope.teamdata = data;
        console.log($scope.teamdata);
      },
      function (error) {
        //TODO
      }
    );
  }]);
