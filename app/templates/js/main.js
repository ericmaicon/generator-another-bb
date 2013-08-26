require([
    'app',
    'backbone',
    'routes/router'
], function (app, Backbone, Router) {
    'use strict';

    app.router = new Router();

    Backbone.history.start();
});
