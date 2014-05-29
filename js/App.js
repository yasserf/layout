var PanelManager = require("./PanelManager");

document.addEventListener('load', function(){
       var panelManager = new PanelManager();
       panelManager.enhanceElement(document.body);
       window.panelManager = panelManager;
}, true);