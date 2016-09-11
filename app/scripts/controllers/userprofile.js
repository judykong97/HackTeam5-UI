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
    		$scope.userdata = data;
    		console.log($scope.userdata);
    	},
    	function (error) {
    		console.log(error);//TODO
    	}
    );
  }]);
