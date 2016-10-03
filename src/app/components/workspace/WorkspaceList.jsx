var React = require('react');
var $ = require('jquery');

var WorkspaceListDetails = require('./WorkspaceListDetails.jsx')

var MAX_SIZE = 0;

function getTotalSpaces(options) {

    var size = 0;
    for (var i = 0; i < options.length; i++) {
        size += options[i].spaces.length;
    }

    return size;
}
'use strict';

module.exports = React.createClass({

    getInitialState: function () {
        return {
            selectionIndex: 0,
            selectedWorkspaceId : 0 
        };
    },
    componentDidMount: function () {
        $(document.body).on('keydown', this._handleKeyDown);
    },
    componentWillUnmount: function() {
        $(document.body).off('keydown', this._handleKeyDown);
    },
    render: function() {
        
        var startIndex = 0;
        var self = this;

        return (
            <div className="worklist">

                 <ul >
                     {
                        self.props.options.map(function (option, i) {

                            if (i === 0) MAX_SIZE = getTotalSpaces(self.props.options);
                            startIndex = (i === 0) ? 1 : self.props.options[i - 1].spaces.length + 1;

                            return <li key={option.id} >
                                        <WorkspaceListDetails data={option}
                                                              ref={'child' + i }
                                                              workspaceId={i}
                                                              refLinker={self._setRefLinker}
                                                              selectionIndex={self.state.selectionIndex}
                                                              indexer={startIndex}>
                                        </WorkspaceListDetails>
                                   </li>;
                        })}
                 </ul>
            </div>
         );
    },
    _setRefLinker: function (e) {
        this._linkRef = e;
    },
    _handleKeyDown: function (e) {


        var ENTER = 13, UP = 38, DOWN = 40;

        var isListKey = e.keyCode == ENTER ||
                        e.keyCode == UP ||
                        e.keyCode == DOWN;

        if (!isListKey) {
            return;
        }

        event.preventDefault();

        var index = this.state.selectionIndex;

        if (e.keyCode == ENTER) {
            if (this._linkRef) {
                this._linkRef.click();
            }
        } else if (e.keyCode == UP) {
            index = (index >= 1) ? (index - 1) : 0;
            this._setIndex(index);
        }
        else if (e.keyCode == DOWN) {

            if (index <= MAX_SIZE) {
                index += 1;
                this._setIndex(index);
            }
        }
    },
    _setIndex: function (i) {
        this.setState({ selectionIndex: i });
    }
});
