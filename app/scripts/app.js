'use strict';

/**
 * @ngdoc overview
 * @name hackTeam5UiApp
 * @description
 * # hackTeam5UiApp
 *
 * Main module of the application.
 */
angular
  .module('hackTeam5UiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/userProfile', {
        templateUrl: 'views/userprofile.html',
        controller: 'UserprofileCtrl',
        controllerAs: 'userProfile'
      })

      .when('/teamProfile', {
        templateUrl: 'views/teamprofile.html',
        controller: 'TeamprofileCtrl',
        controllerAs: 'teamProfile'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })

      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
	     })
      .when('/createTeam', {
        templateUrl: 'views/createteam.html',
        controller: 'createTeamCtrl',
        controllerAs: 'createTeam'
       })

      .otherwise({
        redirectTo: '/'
      });
  });
