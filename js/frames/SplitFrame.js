module.exports = (function() {

    var extractRoles = require("./../RoleExtractor");
    var elementEnhancer = require("./../ElementEnhancer");

    var SplitFrame = function(elem, createComponent) {
        this._elem = elem;
        this._frames = [];
        this._framesWithID = {};
        this._createComponent = createComponent;
        this._enhanceElement(elem);
    };

    SplitFrame.prototype._enhanceElement = function (elem) {

        var elementsToEnhance = extractRoles(elem.children);
        var frame;
        var elem;
        var dataID;

        for(var i=0; i<elementsToEnhance.length; i++) {

            elem = elementsToEnhance[i];
            dataID = elem.getAttribute("data-role-id");

            frame =  require("./../ElementEnhancer")(elementsToEnhance[i], this._createComponent);
            frame.open();
            this._frames.push(frame);

            if(dataID) {
                this._framesWithID[dataID] = frame;
            };
        }
    };

    SplitFrame.prototype.get = function(id) {
        if(this._framesWithID[id]) {
            return this._framesWithID[id];
        }
    };

    SplitFrame.prototype.open = function() {
        this._elem.style.display = "";
    };

    SplitFrame.prototype.show = function() {
        this._elem.style.display = "";
        this._frames.forEach(function (frame) {
            frame.show();
        });
    };

    SplitFrame.prototype.hide = function() {
        this._elem.style.display = "none";
        this._frames.forEach(function (frame) {
            frame.hide();
        });
    };

    SplitFrame.prototype.close = function() {
        this._frames.forEach(function (frame) {
            frame.close();
        });
    };

    SplitFrame.prototype.resize = function() {
        this._frames.forEach(function (frame) {
            frame.resize();
        });
    };

    return SplitFrame;
})();