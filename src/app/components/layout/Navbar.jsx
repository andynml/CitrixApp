'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
		
		<nav className="navbar navbar-default ">

		  <div className="">
              <div className="col-md-4 dark-tone">
                  <div className="navbar-header">

					<a href="#menu-toggle" className="pull-left navbar-menu" id="menu-toggle" onClick={this.props.onClick}>
                        <i className="fa fa-navicon"></i>
                        <span>Choose a workspace</span>
                    </a>
                  </div>
              </div>
              <div className="col-md-8">
                 <a className="navbar-brand" href="#">
                  <span className="logo"></span>
                 </a>
			    <div id="navbar" className="navbar-collapse collapse">
			      <ul className="nav navbar-nav">
				    <li><a href="#"><i className="fa fa-group"></i></a></li>
				    <li><a href="#about"><i className="fa fa-calendar-o"></i></a></li>
				    <li><a href="#contact"><i className="fa fa-check-square-o"></i></a></li>
			      </ul>
			    </div>
             </div>
		  </div>
		</nav>
		
		)    
	}
});