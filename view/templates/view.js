define([
    'lodash',
    'zepto',
    'backbone',
    'app',
    'helpers/template'
], function (_, $, Backbone, App, JST) {
    'use strict';

    App.Views.<%=viewName%>View = Backbone.View.extend({
        
        template: JST['app/js/templates/<%=viewName.toLowerCase()%>.ejs'],

        render: function() {
            this.$el.html(this.template);

            return this;
        }

    });

});