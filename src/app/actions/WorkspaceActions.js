'use strict';

var AppDispatcher = require('../dispatcher/WorkspaceDispatcher');
var WorkspaceConstants = require('../constants/WorkspaceConstants');
var WorkspaceClient = require('../utils/WorkspaceClient');


// Define actions object
module.exports = {

    init: function () {
        return WorkspaceClient.init();
    },
    getWorkSpaces: function (searchFor) {
        WorkspaceClient.search(searchFor)
            .then(function (resp) {
                AppDispatcher.handleAction({
                    actionType: WorkspaceConstants.RECEIVE_DATA,
                    data: resp
                });
            });
    }
};