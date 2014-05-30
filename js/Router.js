var Router = function(panelManager) {
    this._panelManager = panelManager;
    this._onHashChange = this._onHashChange.bind(this);
    window.addEventListener("hashchange", this._onHashChange)
};

Router.prototype._onHashChange = function(hashChangeEvent) {
    var newHash = hashChangeEvent.newURL.split("#")[1];
    this._panelManager.show(newHash);
};

module.exports = Router;