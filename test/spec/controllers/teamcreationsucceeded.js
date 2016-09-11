'use strict';

describe('Controller: TeamcreationsucceededCtrl', function () {

  // load the controller's module
  beforeEach(module('hackTeam5UiApp'));

  var TeamcreationsucceededCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamcreationsucceededCtrl = $controller('TeamcreationsucceededCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamcreationsucceededCtrl.awesomeThings.length).toBe(3);
  });
});
