var Frame = require("./Frame");

var PanelManager = function() {

    this._frames = [];
    this._frameGroups = {};

    this._lastResizeTimeStamp = null;

    this._doesNotExist = this._doesNotExist.bind(this);
    this._enhanceElement = this._enhanceElement.bind(this);
    this.resize = this.resize.bind(this);

    window.addEventListener('resize', this.resize);
};

PanelManager.prototype.show = function(id) {
    var group = this._getGroup(id);
    if(group) {
        group.forEach(function(frame) {
           if(frame.frame.shown && frame.id !== id) {
                frame.frame.hide();
           } else if(!frame.frame.shown && frame.id === id) {
               frame.frame.show();
           }
        });
    }
};

PanelManager.prototype.hide = function(id) {

};

PanelManager.prototype.enhanceElement = function(elem) {
    var elementsThatCanEnhance = elem.querySelectorAll("[data-role]");
    var elementsToEnhance = [].filter.call(elementsThatCanEnhance, this._doesNotExist);
    elementsToEnhance.forEach(this._enhanceElement);
};

PanelManager.prototype._getGroup = function(id) {
    for(var groupName in this._frameGroups) {
        for(var i=0; i<this._frameGroups[groupName].length; i++) {
            if(this._frameGroups[groupName][i].id === id) {
                return this._frameGroups[groupName];
            }
        }
    }
    return null;
};

PanelManager.prototype._doesNotExist = function(elem) {
    return this._frames.every(function(frame) {
        return frame.element !== elem;
    });
};

PanelManager.prototype._enhanceElement = function(elem) {
    var dataRole = elem.getAttribute("data-role");
    var elemGroup = elem.getAttribute("data-role-group");
    var isDefault = elem.getAttribute("data-role-group-default");
    var id = elem.getAttribute("id");
    debugger
    var frame = new Frame(elem, dataRole);

    if(elemGroup) {
        this._frameGroups[elemGroup] = this._frameGroups[elemGroup] ? this._frameGroups[elemGroup] : [];
        this._frameGroups[elemGroup].push({element:elem, frame:frame, id:id});
    }

    debugger
    if(elemGroup && isDefault !== "true") {
        frame.hide();
    } else {
        frame.show();
    }

    this._frames.push({element:elem, frame:frame, id:id});
};

PanelManager.prototype.resize = function() {

    var currentTime = new Date().getTime();
    if(currentTime - this._lastResizeTimeStamp > 200) {
        this._lastResizeTimeStamp = currentTime;
        this._frames.forEach(function(frame) {
            if(frame.frame.shown) {
                frame.frame.resize();
            }
        });
    }
};

module.exports = PanelManager;