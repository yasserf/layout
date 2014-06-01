var extractRoles = require("./RoleExtractor");
var elementEnhancer = require("./ElementEnhancer");
var SplitFrame = require("./frames/SplitFrame");

    var FrameManager = function (elem, createComponent) {

        this._splitFrame = new SplitFrame(elem, createComponent);

        this._lastResizeTimeStamp = null;

        this._createComponent = createComponent;
        this.resize = this.resize.bind(this);

        window.addEventListener('resize', this.resize);
    };

    FrameManager.prototype.get = function(frame) {
        this._splitFrame.get(frame);
    };

    FrameManager.prototype.resize = function () {

        var currentTime = new Date().getTime();
        if (currentTime - this._lastResizeTimeStamp > 200) {
            this._lastResizeTimeStamp = currentTime;
        }
    };

     module.exports = FrameManager;