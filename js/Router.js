var Router = function(panelManager) {
    this._panelManager = panelManager;
    this._onHashChange = this._onHashChange.bind(this);
    window.addEventListener("hashchange", this._onHashChange)
};

Router.prototype.setRoute = function(id) {
    var windowUrl = window.location.href.split("#");
    windowUrl[1] = id;
    window.location.href = windowUrl.join("#");
};

Router.prototype._onHashChange = function(hashChangeEvent) {
    var newHash = hashChangeEvent.newURL.split("#")[1];
    this._panelManager.show(newHash);
};

module.exports = Router;