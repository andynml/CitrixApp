'use strict';

var WorkspaceActions = require('../actions/WorkspaceActions');
var Bloodhound = require('bloodhound-js');
var _ = require('underscore');

var engine;
module.exports = {

    init: function () {

        engine = new Bloodhound({
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: function (datum) {
                return Bloodhound.tokenizers.whitespace(datum.name);
            },
            prefetch: {
                url: "spaces.json",
                filter: function (data) {
                    var datums = [];
                    for (var i = 0; i < data.length; i++) {
                        datums = datums.concat($.map(data[i].spaces, function (s) {
                            return {
                                el: {
                                    id: s.id,
                                    name: s.name,
                                    url: s.url
                                },
                                id: data[i].id,
                                name: s.name
                            }
                        }));
                    }

                    return datums;
                }
            }
        });

        return engine.initialize();
    },
    search: function (q) {

        var filterBy = function (spaces, match_id) {
            var list = _.filter(spaces, function (space) {
                return space.id === match_id;
            });
                
            return list;
        }


        return new Promise(function (resolve, reject) {

            var datum = JSON.parse(localStorage.getItem('spacedata'));
            if (q) {
                engine.search(q, function (d) {

                    for (var i = 0; i < datum.length; i++) {
                        var dat = datum[i];
                        var sl = _.filter(d, function (r) { return r.id === dat.id; });
                        if (sl) {
                            dat.spaces = _.map(sl, function (l) {
                                return l.el;
                            });
                        }
                    }
                });

            } else {
               // console.log('empty...');
            }

            if (datum) {
                resolve(datum);
            }
            else {
                reject('error');
            }
        });
    }
};

