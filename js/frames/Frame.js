var Frame = function(elem, createComponent) {
    this._element = elem;

    this._width = null;
    this._height = null;

    this._createComponent = createComponent;
    this._component = null;

    this.shown = false;
};

Frame.prototype.open = function() {

    this.shown = true;

    this._component = this._createComponent();
    this._element.insertBefore(this._component.getElement(), this._element.firstChild);

    if(this._component.onOpen && this._updateSize()) {
        this._component.onOpen(this._width, this._height);
    }
};

Frame.prototype.show = function() {

    this._element.style.display ="";

    if(!this._component) {
        this.open();
    } else {
        this.shown = true;
        if(this._component.onShow) {
            this._updateSize();
            this._component.onShow(this._width, this._height);
        }
    }

};

Frame.prototype.hide = function() {
    this._element.style.display = "none";
    if(this.shown) {
        this.shown = false;
        if(this._component.onHide) {
            this._component.onHide();
        }
    }
};

Frame.prototype.close = function() {
    if(this._component.onClose) {
        this._component.onClose();
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