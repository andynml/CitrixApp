'use strict';

//jest.unmock('../../app/utils/WorkspaceClient');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var WorkspaceClient = require('../../src/app/utils/WorkspaceClient');
var WorkspaceData = require('../../src/app/models/WorkspaceData');
var $ = require('jquery');

var localStorageMock = (function () {
    var store = {};
    return {
        getItem: function (key) {
            return store[key];
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        clear: function () {
            store = {};
        }
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });


var mMock = jest.fn().mockImplementation(function() {

    data = [
         {
        "id": 44315,
        "org_id": 44315,
        "name": "CopenhagenJS",
        "logo": 20356965,
        "image": {
            "perma_link": null,
            "hosted_by": "podio",
            "hosted_by_humanized_name": "Podio",
            "thumbnail_link": "https://d3szoh0f46td6t.cloudfront.net/public/20356965",
            "link": "https://d3szoh0f46td6t.cloudfront.net/public/20356965",
            "file_id": 20356965
        },
        "spaces": [
          {
              "id": 191599,
              "space_id": 191599,
              "name": "ColdFront Conference",
              "url": "https://copenhagenjs.podio.com/theconference/",
              "url_label": "theconference",
              "org_id": 44315,
              "contact_count": null,
              "member_count": null,
              "app_count": null,
              "role": "admin",
              "rights": [
                "view_members",
                "add_task",
                "add_widget",
                "subscribe",
                "delete",
                "update",
                "add_file",
                "add_hook",
                "add_user_light",
                "add_status",
                "add_user",
                "share",
                "add_contact",
                "view",
                "add_app"
              ],
              "post_on_new_app": null,
              "post_on_new_member": null,
              "subscribed": null,
              "privacy": null,
              "auto_join": null,
              "type": "regular",
              "premium": true,
              "last_activity_on": null,
              "created_on": null,
              "is_overdue": null,
              "push": {
                  "timestamp": 1366358596,
                  "expires_in": 19926,
                  "channel": "/space/191599",
                  "signature": "9acf84b5ff9684c7f93ff7a4415a05fcf4e8262e"
              },
              "rank": 1
          },
          {
              "id": 86822,
              "space_id": 86822,
              "name": "CopenhagenJS",
              "url": "https://copenhagenjs.podio.com/copenhagenjs/",
              "url_label": "copenhagenjs",
              "org_id": 44315,
              "contact_count": null,
              "member_count": null,
              "app_count": null,
              "role": "admin",
              "rights": [
                "view_members",
                "add_task",
                "add_widget",
                "subscribe",
                "delete",
                "update",
                "add_file",
                "add_hook",
                "add_user_light",
                "add_status",
                "add_user",
                "share",
                "add_contact",
                "view",
                "add_app"
              ],
              "post_on_new_app": null,
              "post_on_new_member": null,
              "subscribed": null,
              "privacy": null,
              "auto_join": null,
              "type": "regular",
              "premium": true,
              "last_activity_on": null,
              "created_on": null,
              "is_overdue": null,
              "push": {
                  "timestamp": 1366358596,
                  "expires_in": 19926,
                  "channel": "/space/86822",
                  "signature": "28d541b1fb25c26f8ed790d5f324f69ac993ade6"
              },
              "rank": 3
          },
          {
              "id": 131837,
              "space_id": 131837,
              "name": "Employee Network",
              "url": "https://copenhagenjs.podio.com/employeenetwork/",
              "url_label": "employeenetwork",
              "org_id": 44315,
              "contact_count": null,
              "member_count": null,
              "app_count": null,
              "role": "admin",
              "rights": [
                "view_members",
                "add_task",
                "add_widget",
                "subscribe",
                "update",
                "add_file",
                "add_hook",
                "add_status",
                "add_user",
                "add_contact",
                "view"
              ],
              "post_on_new_app": null,
              "post_on_new_member": null,
              "subscribed": null,
              "privacy": null,
              "auto_join": null,
              "type": "emp_network",
              "premium": false,
              "last_activity_on": null,
              "created_on": null,
              "is_overdue": null,
              "push": {
                  "timestamp": 1366358596,
                  "expires_in": 19926,
                  "channel": "/space/131837",
                  "signature": "62e55f02ed5ed3ad393b32d1dcfb5f5197faaa80"
              },
              "rank": 2
          }
        ],
        "url": "https://copenhagenjs.podio.com/",
        "url_label": "copenhagenjs",
        "premium": true,
        "role": "admin",
        "status": "active",
        "sales_agent_id": 16456,
        "created_on": null,
        "user_limit": 10,
        "member_count": null,
        "contact_count": null,
        "billing_interval": null,
        "rights": [
          "add_conversation",
          "add_widget",
          "update",
          "add_contract",
          "view_admins",
          "statistics",
          "add_space",
          "view"
        ],
        "verified_domain": null,
        "domains": [

        ],
        "rank": 4,
        "contract_status": "full",
        "type": "sponsored",
        "segment": null,
        "segment_size": null,
        "grants_count": 0,
        "allow_add_space": null,
        "child_orgs": [

        ],
        "active?": true,
        "admin?": true,
        "upgradable?": true,
        "not_upgraded?": false,
        "partially_upgraded?": false,
        "employee?": true,
        "premium?": true,
        "first_domain": null
    }
    ];


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
})


describe('WorkspaceClient', () => {

    it('Query for Network results', () => {

        WorkspaceData.init.mockImplementation = mMock;
        WorkspaceData.init();

    });
});