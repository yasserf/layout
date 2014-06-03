module.exports = (function() {

    var extractRoles = require("./../RoleExtractor");
    var elementEnhancer = require("./../ElementEnhancer");

    var MultiFrame = function(elem, createComponent) {
        this._createComponent = createComponent;

        var elementsToEnhance = extractRoles(elem.children);
        this._elementsToEnhance = this._assignToID(elementsToEnhance);

        for(var elementID in this._elementsToEnhance) {
            this._elementsToEnhance[elementID].style.display = "none";
        }

        this._frames = {};

        this._currentFrameID = null;
        this._currentFrame = null;
    };

    MultiFrame.prototype.open = function() {
    };

    MultiFrame.prototype.get = function(id) {
        return this._frames[id];
    };

    MultiFrame.prototype.show = function(id) {

        if(this._currentFrameID === id) {
            return;
        } else if(this._currentFrame) {
            this._currentFrame.hide();
            this._frames[this._currentFrameID].hide();
        }

        if(this._frames[id]) {
            this._frames[id].show();
        } else if(this._elementsToEnhance[id]){
            this._frames[id] = require("./../ElementEnhancer")(this._elementsToEnhance[id], this._createComponent);
            this._frames[id].open();
            delete this._elementsToEnhance[id];
        } else {
            throw new Error("Trying to switch to frame that doesn't exist");
        }

        this._currentFrameID = id;
        this._currentFrame = this._frames[id];
    };

    MultiFrame.prototype.hide = function() {
        this._currentFrame.hide();
    };

    MultiFrame.prototype.close = function() {
        for(var frameID in this._frames) {
            this._frames[frameID].close();
        }
    };

    MultiFrame.prototype.resize = function() {
        if(this._currentFrame) {
            this._currentFrame.resize();
        }
    };

    MultiFrame.prototype._assignToID = function(elements) {
        var result = {};
        var dataRoleID;

        elements.forEach(function(elem) {
            dataRoleID =  elem.getAttribute("data-role-id");
            if(dataRoleID) {
                result[dataRoleID] = elem;
            }
        });

        return result;
    };

    return MultiFrame;
})();