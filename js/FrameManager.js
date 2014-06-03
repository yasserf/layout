var SplitFrame = require("./frames/SplitFrame");

var FrameManager = function (elem, createComponent) {
    this._splitFrame = new SplitFrame(elem, createComponent);
};

FrameManager.prototype.get = function(frame) {
    return this._splitFrame.get(frame);
};

FrameManager.prototype.resize = function() {
    return this._splitFrame.resize();
};

 module.exports = FrameManager;