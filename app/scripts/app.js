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
                'ngTouch', 'ui.bootstrap', 'firebase' ]).run(function() {
}).config(function($stateProvider) {

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
        name : 'register',
        url : '/register',
        templateUrl : 'views/register.html',
        controller : 'registerCtrl',
        controllerAs : 'register'
    }).state({
        name : 'createTeam',
        url : '/createTeam',
        templateUrl : 'views/createteam.html',
        controller : 'createTeamCtrl',
        controllerAs : 'createTeam'
    })

    firebase.initializeApp({
        apiKey : "AIzaSyAbqbDs-3OyeYr_SFRRezldqqRzJDy1prk",
        authDomain : "hackathonmatcher.firebaseapp.com",
        databaseURL : "https://hackathonmatcher.firebaseio.com",
        storageBucket : "hackathonmatcher.appspot.com",
    });
});
