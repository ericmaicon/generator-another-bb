define([
    'backbone'
], function(Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log("oi");
        }
    });

    return Router;
});

