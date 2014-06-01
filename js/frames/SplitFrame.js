module.exports = (function() {

    var extractRoles = require("./../RoleExtractor");
    var elementEnhancer = require("./../ElementEnhancer");

    var SplitFrame = function(elem, createComponent) {
        this._frames = [];
        this._createComponent = createComponent;
        this._enhanceElement(elem);
    };

    SplitFrame.prototype._enhanceElement = function (elem) {
        var elementsToEnhance = extractRoles(elem.children);
        var frame;

        for(var i=0; i<elementsToEnhance.length; i++) {
            frame =  require("./../ElementEnhancer")(elementsToEnhance[i], this._createComponent);
            frame.open();
            this._frames.push(frame);
        }
    };

    SplitFrame.prototype.get = function(frame) {
    };

    SplitFrame.prototype.open = function() {
    };

    SplitFrame.prototype.show = function() {
        this._frames.forEach(function (frame) {
            frame.show();
        });
    };

    SplitFrame.prototype.hide = function() {
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