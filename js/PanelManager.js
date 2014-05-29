var Frame = require("./Frame");

var PanelManager = function() {

    this._frames = [];
    this._frameGroups = {};

    this._lastResizeTimeStamp = null;

    this._alreadyExists = this._alreadyExists.bind(this);
    this._enhanceElement = this._enhanceElement.bind(this);
    this.resize = this.resize.bind(this);

    window.addEventListener('resize', this.resize);
};

PanelManager.prototype.enhanceElement = function(elem) {
    var elementsThatCanEnhance = elem.querySelectorAll("[data-role]");
    var elementsToEnhance = [].filter.call(elementsThatCanEnhance, this._alreadyExists);
    elementsToEnhance.forEach(this._enhanceElement);
};

PanelManager.prototype._alreadyExists = function(elem) {
    return true;
};

PanelManager.prototype._enhanceElement = function(elem) {
    var dataRole = elem.getAttribute("data-role");
    var elemGroup = elem.getAttribute("data-group");
    var frame = new Frame(elem, dataRole);

    if(elemGroup) {
        this._frameGroups[elemGroup] = this._frameGroups[elemGroup] ? this._frameGroups[elemGroup] : [];
        this._frameGroups[elemGroup].push(frame);
    } else {
        frame.open();
    }

    this._frames.push(frame);
};

PanelManager.prototype.resize = function() {

    var currentTime = new Date().getTime();
    if(currentTime - this._lastResizeTimeStamp > 200) {
        this._lastResizeTimeStamp = currentTime;
        this._frames.forEach(function(frame) {
            frame.resize();
        });
    }
};

module.exports = PanelManager;