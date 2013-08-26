'use strict';

(function(<%=routerParent%>) {

    <%=routerName%>Router = <%=routerParent%>.extend({

        routes: {
            "": "showDefaultFnc"
        },

        showDefaultFnc: function() {
            console.log("Hello World!");
        }
    });

})(<%=routerParent%>); 