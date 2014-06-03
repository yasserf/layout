var FrameManager = require("./../../../js/FrameManager");
var TestComponent = require("./TestComponent");

function createComponent(aliasName) {
    return new TestComponent(aliasName);
};

document.addEventListener('load', function(){
    window.FrameManager = new FrameManager(document.body, createComponent);
}, true);