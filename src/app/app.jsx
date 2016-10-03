'use strict';

var ReactDOM = require('react-dom');
var WorkspaceData = require('./models/WorkspaceData');
var ASidebar = require('./components/layout/ASidebar.jsx')
var Navbar = require('./components/layout/Navbar.jsx');

var WorkspaceClient = require('./utils/WorkspaceClient')

// load workspaces data
WorkspaceData.init();

var App = React.createClass({

    getInitialState: function () {
        return { showSidebar: false };
    },

    handleClick: function (event) {
        event.preventDefault()
        $("#wrapper").toggleClass("toggled");
        // update state...
        this.setState({ showSidebar : $("#wrapper").hasClass('toggled')});
    },

    render: function () {

		return (
		
		<div id="wrapper">
            <ASidebar onClick={this.handleClick} open={this.state.showSidebar}></ASidebar>
			<div id="page-content-wrapper">
			    <Navbar onClick={this.handleClick}></Navbar>
				<div className="container-fluid">
					<div className="row">
                        <div className="col-md-12">
                            <div className="well well-plain-white">
                                <h1> Welcome to  Workspace selector</h1>
							    <p>
							       Click menu button to show the workspace selector
							    </p>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
		
		)

	}
});

ReactDOM.render(<App />, document.getElementById('app'));