'use strict';

describe('Service: viewTeam', function () {

  // load the service's module
  beforeEach(module('hackTeam5UiApp'));

  // instantiate service
  var viewTeam;
  beforeEach(inject(function (_viewTeam_) {
    viewTeam = _viewTeam_;
  }));

  it('should do something', function () {
    expect(!!viewTeam).toBe(true);
  });

});
