var Frame = require("./frames/Frame");
var MultiFrame = require("./frames/MultiFrame");
var SplitFrame = require("./frames/SplitFrame");

module.exports = (function() {

    var frameTypes = {
        "MultiFrame": MultiFrame,
        "SplitFrame": SplitFrame
    };

    function enhanceElement(elem, createComponent) {
        var datarole = elem.getAttribute("data-role");
        return frameTypes[datarole] ? new frameTypes[datarole](elem, createComponent) : new Frame(elem, createComponent.bind(this, datarole));
    };

    return enhanceElement;
})();