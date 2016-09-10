'use strict';

angular.module('myModule', ['ui.bootstrap']);

/**
 * @ngdoc function
 * @name hackTeam5UiApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the hackTeam5UiApp
 */
angular.module('hackTeam5UiApp')
  .controller('DashboardCtrl', ['$scope', 'dashboard', function ($scope, dashboard) {
    dashboard.getUser(1).then(
    	function (data) {
    		$scope.userdata = data;
    		console.log($scope.userdata);
    	},
    	function (error) {
    	    console.log(error);//TODO
    	}
    );
  }]);

angular.module('hackTeam5UiApp')
  .controller('ButtonsCtrl', function ($scope) {
    $scope.singleModel = 1;
});