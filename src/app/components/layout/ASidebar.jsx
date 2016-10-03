'use strict';

var React = require('react');

var SpaceSwitcher = require('../workspace/SpaceSwitcher.jsx');

module.exports = React.createClass({

	render: function() {
	    return (
            <div>
		        <div id="sidebar-wrapper">
			       <SpaceSwitcher active={this.props.open}></SpaceSwitcher>
			    </div>
                {
                    this.props.open ?
                     <div className="sidebar-overlay" onClick={this.props.onClick}></div>
                    : null
                }
            </div>
		)    
	}
});