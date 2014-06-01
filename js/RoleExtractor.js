function extractRoles(elem, roles) {
    roles = roles || [];
    var dataRole;
    var elemChildren;

    if(!elem.length) {
        dataRole = elem.getAttribute("data-role");
        elemChildren = elem.children;
    } else {
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