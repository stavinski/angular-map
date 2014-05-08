'use strict';

describe('Directive: locationMap', function () {

  // load the directive's module
  beforeEach(module('angularMapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<location-map></location-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the locationMap directive');
  }));
});
