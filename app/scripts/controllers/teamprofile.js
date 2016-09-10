'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:TeamprofileCtrl
 * @description
 * # TeamprofileCtrl
 * Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp')
  .controller('TeamprofileCtrl', ['$scope', 'teamService', function ($scope, teamService) {
    teamService.getTeam(1).then(
    	function (data) {
    		$scope.teamdata = data;
    		console.log($scope.teamdata);
    	},
    	function (error) {
    		//TODO
    	}
    );
  }]);
