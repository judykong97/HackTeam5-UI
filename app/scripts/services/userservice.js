'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.userService
 * @description # userService Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp').service('userService',
        function($q, $firebaseObject) {
            var dbName = 'users';
            /**
             * @param userId
             *            The firebase unique userId
             * @param userReg
             *            The registration object. Includes the password!
             * @returns A promise that is resolved if persisting the user works,
             *          and is rejected if not.
             */
            this.createUser = function(userId, userReg) {
                var ref = firebase.database().ref().child(dbName);

                var usersRecord = $firebaseObject(ref);
                // Build the new record
                // Attach the new record
                usersRecord[userId] = {
                    name_first : userReg.name_first,
                    name_last : userReg.name_last,
                    email : userReg.email,
                    skills : userReg.skills,
                    attendtype : userReg.attendType,
                    bio : userReg.bio
                };
                return usersRecord.$save();
            };

            /**
             * Function to get a user from the back end by id.
             * 
             * @param {number}
             *            id The user id
             * @return A promise that will be resolved with the data, or
             *         rejected on error.
             */
            this.readUser = function(id) {
                return $q.when({
                    id : 1,
                    pic_id : "abcd",
                    skills : [ "java", "c++" ],
                    teams_joined : [ "fake hackers", "null" ],
                    personality : "a little bit shy",
                    skill_category : [ "backend", "database" ],
                    area_of_interest : [ "music", "health", "history" ],
                    preferred_language : [ "English", "French" ],
                    resume_id : "asdfafdsad",
                    full_time : true,
                    free_agents : false,
                    is_a_guru : false
                });
            };
            // AngularJS will instantiate a singleton by calling "new" on this
            // function
        });
