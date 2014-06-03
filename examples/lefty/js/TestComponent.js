var TestComponent = function(alias) {
    this._element = document.createElement("span");

    this._label = document.createElement("span");
    this._label.innerText = alias + " ";

    this._lastEvent = document.createElement("span");
    this._height = document.createElement("span");
    this._width = document.createElement("span");

    this._element.appendChild(this._label);
    this._element.appendChild(this._lastEvent);
    this._element.appendChild(this._height);
    this._element.appendChild(this._width);
};

TestComponent.prototype.getElement = function() {
    return this._element;
};

TestComponent.prototype.onOpen = function(width, height) {
    this._lastEvent.innerText = "onOpen ";
    height && (this._height.innerText = "height: " + height);
    width && (this._width.innerText = "width: " + width);
};

TestComponent.prototype.onShow = function(width, height) {
    this._lastEvent.innerText = "onShow ";
    height && (this._height.innerText = "height: " + height);
    width && (this._width.innerText = "width: " + width);
};

TestComponent.prototype.onHide = function() {
    this._lastEvent.innerText = "onHide ";
};

TestComponent.prototype.onResize = function(width, height) {
    this._lastEvent.innerText = "onResize ";
    height && (this._height.innerText = "height: " + height);
    width && (this._width.innerText = "width: " + width);
};

module.exports = TestComponent;