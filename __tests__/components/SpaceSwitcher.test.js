
jest.dontMock('../../src/app/components/workspace/SpaceSwitcher.jsx');

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var SpaceSwitcher = require('../../src/app/components/workspace/SpaceSwitcher.jsx');
var $ = require('jquery');

describe('SpaceSwitcher', function() {
    it('Display the space switcher component', function () {

        var spaceSwitcher = TestUtils.renderIntoDocument(<SpaceSwitcher />);
       
    });
});