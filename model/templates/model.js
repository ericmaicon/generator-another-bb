'use strict';

(function(<%=modelParent%>) {

    <%=modelName%>Model = <%=modelParent%>.extend({
        urlRoot: "<%=modelUrl%>", 
        defaults: {
        }
    });

})(<%=modelParent%>); 