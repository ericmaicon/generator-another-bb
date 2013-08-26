'use strict';

(function(<%=collectionParent%>, <%=collectionName%>Model) {

    <%=collectionName%>Collection = <%=collectionParent%>.extend({
        url: "<%=collectionUrl%>",
        model: <%=collectionName%>Model
    });

})(<%=collectionParent%>, <%=collectionName%>Model); 