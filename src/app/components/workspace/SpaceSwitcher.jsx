'use strict';

var React = require('react');

//var WorkspaceClient = require('../../utils/WorkspaceClient')
var WorkspaceStore = require('../../stores/WorkspaceStore');
var WorkspaceActions = require('../../actions/WorkspaceActions');
var WorkspaceList = require('./WorkspaceList.jsx');
var Throttle = require('lodash.throttle');

function getWorkspaces() {
    return {
        options: WorkspaceStore.getWorkspaces(),
    };
}

module.exports = React.createClass({

    getInitialState: function () {
        return {
            inputValue: '',
            typing: false,
            options: [],
        };
    },

    componentWillMount: function () {
        var self = this;
        WorkspaceActions
            .init()
            .then(function () { WorkspaceActions.getWorkSpaces(''); });

        WorkspaceStore.addChangeListener(this.handleStoreChange);
    },
    componentDidUpdate: function () {

        var context = document.querySelector(".context");
        var instance = new Mark(context);
        instance.unmark().mark(this.state.inputValue, {
            "element": "span",
            "className": "marker",
            "exclude": [
               "h4",
            ]
        });

    },
    componentWillUnmount: function () {
        WorkspaceStore.removeListener(this.handleStoreChange);
    },

    render: function () {

	    return (
            <div className="spaceswitcher-panel">
                <div className="spaceswitcher-topbar">
                    <span className="input-group">
                        <span className="searchbar-add-on input-group-addon">
                            {(this.state.typing ? <i className="fa fa-times" onClick={this._reset }></i> : <i className="fa fa-search"></i>)}
                        </span>
                        <span className="searchbar">

                            <input type="text" className="form-control search-text-input"
                                   onChange={this._handleChange}
                                   value={this.state.inputValue}
                                   ref={function(input) {
                                      if (input != null) {
                                        input.focus();
                                      }
                                    }} />
                        </span>
                    </span>

                </div>
                <div className="spaceswitcher-content context">
                    <WorkspaceList options={this.state.options}></WorkspaceList>
                </div>
            </div>

		)    
    },

    _reset : function() {
        this.getOptions('');
        this.setState({
            inputValue: '',
            typing: false
        });
    },

    _handleChange: function (event) {
        var value = event.target.value;

        this.setState({
                inputValue: value,
                typing: value !== ''
            });

        WorkspaceActions.getWorkSpaces(value);
    },

    getOptions: Throttle(WorkspaceActions.getWorkSpaces, 300),

    handleOptionChange: function (event, option) {
        this.setInputValue(option);
    },

    handleOptionClick: function(event, option) {
        this.setInputValue(option);
    },

    setInputValue: function (value) {
        
        this.setState({
            inputValue: value
        });
    },

    handleStoreChange: function () {
        var data = getWorkspaces();
        this.setState(data);
    }
});