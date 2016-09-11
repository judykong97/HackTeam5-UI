'use strict';

describe('Controller: ViewteamCtrl', function () {

  // load the controller's module
  beforeEach(module('hackTeam5UiApp'));

  var ViewteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewteamCtrl = $controller('ViewteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewteamCtrl.awesomeThings.length).toBe(3);
  });
});
