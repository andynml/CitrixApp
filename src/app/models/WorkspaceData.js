'use strict';

var $ = require('jquery');

module.exports = {

    init: function () {
        localStorage.clear();

        $.getJSON('spaces.json', function (data) {

            var spaceMapper = function (spaces) {
                return $.map(spaces, function (s) {
                    return {
                        id: s.id,
                        name: s.name,
                        url: s.url
                    }
                });
            };

            var workspaceMapper = function (ws) {
                return $.map(data, function (ws) {
                    return {
                        id: ws.id,
                        name: ws.name,
                        thumbnail: ws.image.thumbnail_link,
                        spaces: spaceMapper(ws.spaces)
                    }
                });
            };

          

            localStorage.setItem('spacedata', JSON.stringify(workspaceMapper(data)));

        });
    }

};