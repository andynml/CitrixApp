'use strict';

var WorkspaceDispatcher = require('../dispatcher/WorkspaceDispatcher');
var EventEmitter = require('events').EventEmitter;
var WorkspaceConstants = require('../constants/WorkspaceConstants');
var _ = require('underscore');

// Define initial data points
var _workspaces = [], _selected = null;


function loadData(data) {
    _workspaces = data;
}

function setSelected(index) {
    _selected = _workspaces[index];
}


// Extend WorkspaceStore with EventEmitter to add eventing capabilities
var WorkspaceStore = _.extend({}, EventEmitter.prototype, {

    getWorkspaces: function() {
        return _workspaces;
    },

    // Emit Change event
    emitChange: function () {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});


// Register callback with AppDispatcher
WorkspaceDispatcher.register(function (payload) {
    var action = payload.action;
    var text;

    switch (action.actionType) {

        // Respond to RECEIVE_DATA action
        case WorkspaceConstants.RECEIVE_DATA: 
            loadData(action.data);
            break;

        default:
            return true;
    }

    // If action was responded to, emit change event
    WorkspaceStore.emitChange();

    return true;

});

module.exports = WorkspaceStore;
    
    