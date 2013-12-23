define([
    'lodash',
    'backbone',
    'app'
], function (_, Backbone, App) {
    'use strict';

    App.Models.<%=modelName%>Model = Backbone.Model.extend({
        urlRoot: App.baseUrl + "/<%=modelUrl%>",
        defaults: {
        }
    });

});