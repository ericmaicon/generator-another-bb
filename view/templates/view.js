(function(_, $, <%=viewParent%>) {

    <%=viewName%>View = <%=viewParent%>.extend({
        
        template: TemplateHelper.render("avaliador/form"),

        render: function() {
            this.$el.html(_.template(this.template, this.model.toJSON()));

            return this;
        }

    });

})(_, $, <%=viewParent%>);