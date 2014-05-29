var TestComponent = require("./TestComponent");

var Frame = function(elem, alias) {
    this._element = elem;

    this._width = null;
    this._height = null;

    this._alias = alias;
    this._component = null;
};

Frame.prototype.open = function() {

    this._component = new TestComponent(this._alias);
    this._element.appendChild(this._component.getElement());

    if(this._component.onOpen && this._updateSize()) {
        this._component.onOpen(this._width, this._height);
    }
};

Frame.prototype.show = function() {
    if(this._component.onResize && this._updateSize()) {
        this._component.onResize(this._width, this._height);
    }
};

Frame.prototype.hide = function() {
    if(this._component.onHide) {
        this._component.onHide();
    }
};

Frame.prototype.resize = function() {
    if(this._component.onResize && this._updateSize()) {
        this._component.onResize(this._width, this._height);
    }
};

Frame.prototype._updateSize = function() {
    var hasResized = false;
    var width = this._element.offsetWidth;
    var height = this._element.offsetHeight;

    if(width !== this._width || height !== this._height) {
        this._width = width;
        this._height = height;
        hasResized = true;
    }

    return hasResized;
};

module.exports = Frame;