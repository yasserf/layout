function extractRoles(elem, roles) {
    roles = roles || [];
    var dataRole;
    var dataRoleId;
    var elemChildren;

    if(!elem.length) {
        dataRole = elem.getAttribute("data-role");
        dataRoleId = elem.getAttribute("data-role-id");

        if(!dataRole && dataRoleId) {
            elem.setAttribute("data-role", "SplitFrame");
            dataRole = "SplitFrame"
        }

        elemChildren = elem.children;
    }
    else {
        dataRole = null;
        elemChildren = elem;
    }

    if(dataRole) {
        roles.push(elem)
    } else if(elemChildren.length > 0) {
        for(var i=0; i<elemChildren.length; i++) {
            extractRoles(elemChildren[i], roles);
        }
    }
    return roles;
};

module.exports = extractRoles;