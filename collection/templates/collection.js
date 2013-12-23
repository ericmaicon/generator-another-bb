define([
    'lodash',
    'backbone',
    'app'
], function (_, Backbone, App, EntidadeModel) {
    'use strict';

    App.Collections.<%=collectionName%>Collection = Backbone.Collection.extend({
        url: App.baseUrl + "/<%=collectionUrl%>",
        model: <%=collectionName%>Model
    });

});