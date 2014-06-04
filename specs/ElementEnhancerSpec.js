var frameEnhancer = require('../js/ElementEnhancer');
var Frame = require('../js/frames/Frame');

describe("Element enhance calls ", function() {

    beforeEach(function() {
        this.elem = {
            getAttribute : function(attributeName) {
                return attributeName === "data-role" ? "alias" : "{}";
            }
        };
        this.createComponent = function createComponent() {};
    });

    it("creates a system frame if a reserved alias is passed in", function() {
        var frame = frameEnhancer(this.elem, this.createComponent);
        expect(frame instanceof Frame).toBeTruthy();
        expect(frame._element).toEqual(this.elem);
        expect(frame._createComponent).toEqual(this.createComponent);
    });

    it("creates a frame and passes through the element and method to create component", function() {
        var frame = frameEnhancer(this.elem, this.createComponent);
        expect(frame instanceof Frame).toBeTruthy();
        expect(frame._element).toEqual(this.elem);
        expect(frame._createComponent).toEqual(this.createComponent);
    });

});