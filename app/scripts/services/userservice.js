'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.userService
 * @description # userService Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp')
<<<<<<< Updated upstream
        .service(
                'userService',
                function($q, $firebaseObject) {
                    var dbName = 'users';
                    /**
                     * @param userId
                     *            The firebase unique userId
                     * @param userReg
                     *            The registration object. Includes the
                     *            password!
                     * @returns A promise that is resolved if persisting the
                     *          user works, and is rejected if not.
                     */
                    this.createUser = function(userId, userReg) {
                        var ref = firebase.database().ref().child(dbName)
                                .child(userId);

                        var userRecord = $firebaseObject(ref);
                        // Build the new record
                        // Attach the new record
                        userRecord.$value = {
                            name_first : userReg.name_first,
                            name_last : userReg.name_last,
                            email : userReg.email,
                            skills : userReg.skills,
                            attendtype : userReg.attendType,
                            bio : userReg.bio
                        };
                        return userRecord.$save();
                    };

                    /**
                     * Function to get a user from the back end by id.
                     * 
                     * @param {number}
                     *            id The user id.
                     * @return A promise that will be resolved with the data, or
                     *         rejected on error.
                     */
                    this.readUser = function(id) {
                        var ref = firebase.database().ref().child(dbName)
                                .child(id);
                        var userRecord = $firebaseObject(ref);
                        return userRecord.$loaded().then(function() {
                            console.log(userRecord); // TODO remove this.
                                                        // Just here to see the
                                                        // type.
                            return userRecord;
                        });
                    };
                    this.updateUser = function(id, userRecord) {
                        console.log(id, userRecord);
                        // TODO
                    };

                    this.deleteUser = function(id) {
                        console.log(id);
                        // TODO
                    };
                });
=======
  .service('userService', function ($q) {
  	/**
  	 *  Function to get a user from the back end by id.
  	 * @param {number} id The user id
  	 * @return A promise that will be resolved with the data, or rejected on error.
  	*/
  	this.getUser = function (id) {
  		return $q.when({
			id: 17,
			pic_id: "abcd",
			skills: ["java", "c++"],
			teams_joined: ["fake hackers","null"],
			personality: "a little bit shy",
			skill_category: ["backend","database"],
			area_of_interest: ["music","health","history"],
			preferred_language: ["English", "French"],
			resume_id: "asdfafdsad",
			full_time: true,
			free_agents: false,
			is_a_guru: false
		});
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
>>>>>>> Stashed changes
