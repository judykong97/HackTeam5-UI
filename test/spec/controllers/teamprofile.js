'use strict';

describe('Controller: TeamprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('hackTeam5UiApp'));

  var TeamprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamprofileCtrl = $controller('TeamprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamprofileCtrl.awesomeThings.length).toBe(3);
  });
});
