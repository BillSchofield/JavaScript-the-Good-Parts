describe("score", function () {
    var element;
    var value;
    var parameters;
    var score;

    beforeEach(function () {
        element = jasmine.createSpyObj('element', ['html']);
        value = 0;
        parameters = {element: element, value: value};
        score = game.score(parameters);
    });

    it("should put value in element when reporting score", function () {
        score.report();
        expect(element.html).toHaveBeenCalledWith(parameters.value);
    });

    it("should add one to value when incrementing", function () {
        score.increment();
        expect(parameters.value).toBe(1);
    });

});
