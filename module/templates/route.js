'use strict';

(function(<%=routerParent%>) {

    <%=routerName%> = <%=routerParent%>.extend({

        routes: {
            "": "showDefaultFnc"
        },

        showDefaultFnc: function() {
            console.log("Hello World!");
        }
    });

})(<%=routerParent%>); 