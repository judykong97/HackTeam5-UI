'use strict';

/**
 * @ngdoc service
 * @name hackTeam5UiApp.teamService
 * @description
 * # teamService
 * Service in the hackTeam5UiApp.
 */
angular.module('hackTeam5UiApp')
  .service('teamService', function ($q) {
  	this.getTeam = function (id) {
  		return $q.when({
  			id: 1,
			pic_id: 1,
			team_name: "fake hackers",
			spots_available: 3,
			blurb: "This is a fake team. Don't join us.",
			theme_of_hack: "brainstorming",
			current_skill_sets: ["javascript", "android studio"],
			// existing_members is a list of member ids
			existing_members: [1],
			// location links to the location of the team (Not sure how this should be presented yet)
			location: "ajsdfasdfasdf",
			has_a_guru: "Yes",
			looking_for_skills: ["UI", "leadership(?)"]
  		});
  	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
