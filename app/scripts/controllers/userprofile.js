'use strict';

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:UserprofileCtrl
 * @description
 * # UserprofileCtrl
 * Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp')
  .controller('UserprofileCtrl', ['$scope', 'userService', function ($scope, userService) {
    userService.getUser(1).then(
    	function (data) {
    		$scope.data = data;
    		console.log($scope.data);
    	},
    	function (error) {
    		//TODO
    	}
    );
  }]);
