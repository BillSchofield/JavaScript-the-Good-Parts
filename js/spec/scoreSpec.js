describe("score", function () {
    var element;
    var value;
    var spec;
    var score;

    beforeEach(function () {
        element = jasmine.createSpyObj('element', ['html']);
        value = 0;
        spec = {element: element, value: value};
        score = game.score(spec);
    });

    it("should put value in element when reporting score", function () {
        //score.report();
        //expect(element.html).toHaveBeenCalledWith(value);
    });

    it("should add one to value when incrementing", function () {
        //score.increment();
        //expect(spec.value).toBe(1);
    });

});
