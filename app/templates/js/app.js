define([
    'lodash',
    'backbone'
], function(_, Backbone) {
    'use strict';

    // Provide a global location to place configuration settings and module creation.
    var App = {
        Views: {

        }
    };

    // Mix Backbone.Events, modules, and layout management into the app object.
    return _.extend(App, {

        // Create a custom object with a nested Views object.
        module: function(additionalProps) {
            return _.extend({ Views: {} }, additionalProps);
        }

    }, Backbone.Events);
});