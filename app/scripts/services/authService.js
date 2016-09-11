'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.teamService
 * @description # teamService Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp').service(
        'authService',
        function($q, $firebaseAuth, $state) {
            /** Private authobject that methods use */
            var authObject = $firebaseAuth();
            /**
             * Authenticates a user against firebase using email and password.
             * Logs the results. Should not need to do anything extra to store
             * login data.
             * 
             * @param email
             *            The users email address
             * @param password
             *            The users password (not encrypted)
             * @return A promise that will be resolved or rejected based on
             *         success
             */
            this.authenticate = function(email, password) {
                return authObject.$signInWithEmailAndPassword(email, password)
                        .then(function(firebaseUser) {
                            return firebaseUser;
                        }, function(error) {
                            return $q.reject(error);
                        });
            };
            /**
             * 
             */
            this.getCurrentAuth = function() {
                return authObject.$getAuth();
            };
            /**
             * Registers a new user credential set with the database. On success
             * logs the user id.
             * 
             * @param email
             *            The user's email address
             * @param password
             *            The user's password (not encrypted)
             * @return A promise that will be resolved or rejected based on
             *         success
             */
            this.registerUserCred = function(email, password) {
                return authObject.$createUserWithEmailAndPassword(email,
                        password).then(
                        function(firebaseUser) {
                            console.log("User " + firebaseUser.uid
                                    + " with email address " + email
                                    + " created successfully!");
                            return firebaseUser;
                        }, function(error) {
                            return $q.reject(error);
                        });
            };

            authObject.$onAuthStateChanged(function(firebaseUser) {
                if (firebaseUser) {
                    // Post welcome message
                } else {
                    // State change to login
                    $state.go('login');
                }
            });
        });