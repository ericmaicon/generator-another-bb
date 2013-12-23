define([
    'jquery',
    'app',
    'backbone'
], function($, App, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showDefaultFnc'
        },

        showDefaultFnc: function() {
            console.log("oi");
        }
    });

    return AppRouter;
});

