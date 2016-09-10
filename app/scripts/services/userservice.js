'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.userService
 * @description
 * # userService
 * Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp')
  .service('userService', function ($q) {
  	/**
  	 *  Function to get a user from the back end by id.
  	 * @param {number} id The user id
  	 * @return A promise that will be resolved with the data, or rejected on error.
  	*/
  	this.getUser = function (id) {
  		return $q.when({
			id: 1,
			pic_id: "abcd",
			skills: ["java", "c++"],
			teams_joined: ["fake hackers","null"],
			personality: "a little bit shy",
			skill_category: ["backend","database"],
			area_of_interest: ["music","health","history"],
			preferred_language: ["English", "French"],
			resume_id: "asdfafdsad",
			full_time: "Yes",
			free_agents: "No",
			is_a_guru: "Yes"
		});
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
