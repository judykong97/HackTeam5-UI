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
         console.log('Asked for team id', id);
         return $q.when({
  			id: 1,
			pic_id: 1,
			team_name: "Fake Hackers",
			spots_available: 2,
			blurb: "This is a fake team. Don't join us.",
			theme_of_hack: "Brainstorming",
			current_skill_sets: ["Javascript", "Android Studio"],
			// existing_members is a list of member ids
			existing_members: [2],
			// location links to the location of the team (Not sure how this should be presented yet)
			location: "Meet at Levine, 5 pm",
			has_a_guru: "Yes",
			looking_for_skills: ["UI", "good ideas"]
         });
     };
   // AngularJS will instantiate a singleton by calling "new" on this function
 });
