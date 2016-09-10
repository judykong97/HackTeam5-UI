'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.dashboard
 * @description
 * # dashboard
 * Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp')
  .service('dashboard', function ($q) {
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
			full_time: true,
			free_agents: false,
			is_a_guru: false
		});
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
