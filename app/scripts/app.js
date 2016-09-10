'use strict';

/**
 * @ngdoc overview
 * @name hackTeam5UiApp
 * @description # hackTeam5UiApp
 * 
 * Main module of the application.
 */
angular.module(
        'hackTeam5UiApp',
        [ 'ngAnimate', 'ngCookies', 'ngResource', 'ui.router', 'ngSanitize',
                'ngTouch', 'ui.bootstrap' ]).config(function($stateProvider) {
    $stateProvider.state({
        name : 'dashboard',
        url : '',
        templateUrl : 'views/dashboard.html',
        controller : 'DashboardCtrl'
    }).state({
        name : 'about',
        url : '/about',
        templateUrl : 'views/about.html',
        controller : 'AboutCtrl'
    }).state({
        name : 'userProfile',
        url : '/userProfile',
        templateUrl : 'views/userprofile.html',
        controller : 'UserprofileCtrl',
        controllerAs : 'userProfile'
    }).state({
        name : 'teamProfile',
        url : '/teamProfile',
        templateUrl : 'views/teamprofile.html',
        controller : 'TeamprofileCtrl',
        controllerAs : 'teamProfile'
    }).state({
        name : 'login',
        url : '/login',
        templateUrl : 'views/login.html',
        controller : 'loginCtrl',
        controllerAs : 'login'
    }).state({
        name : 'createTeam',
        url : '/createTeam',
        templateUrl : 'views/createteam.html',
        controller : 'createTeamCtrl',
        controllerAs : 'createTeam'
    })
});
