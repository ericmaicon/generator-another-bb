define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    // Provide a global location to place configuration settings and module creation.
    //http://weblog.bocoup.com/organizing-your-backbone-js-application-with-modules/
    var App = {
        Collections: {
        },
        Models: {
        },
        Views: {
        },
        Arrays: {},
        URL: "PUT_YOUR_URL_HERE"
    };

    // Mix Backbone.Events, modules, and layout management into the app object.
    return _.extend(App, {

        // Create a custom object with a nested Views object.
        module: function(additionalProps) {
            return _.extend({ Views: {} }, additionalProps);
        }

    }, Backbone.Events);
});