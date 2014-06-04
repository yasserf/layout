module.exports = function(elem, createComponent, options) {

    var Frame = require("./frames/Frame");
    var MultiFrame = require("./frames/MultiFrame");
    var SplitFrame = require("./frames/SplitFrame");

    var frameTypes = {
        "MultiFrame": MultiFrame,
        "SplitFrame": SplitFrame
    };

    var datarole = elem.getAttribute("data-role");
    return frameTypes[datarole] ? new frameTypes[datarole](elem, createComponent) : new Frame(elem, createComponent);
};