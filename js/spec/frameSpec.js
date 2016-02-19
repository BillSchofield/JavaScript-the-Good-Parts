describe("frame", function () {
    var context;
    var entity;
    var score;
    var frame;

    beforeEach(function () {
        context = jasmine.createSpyObj('context', ['clearRect']);
        entity = jasmine.createSpyObj('entity', ['update', 'draw']);
        score =  jasmine.createSpyObj('score', ['increment', 'report']);
        frame = game.frame({context: context, entity: entity, score: score});
    });

    it("should increment score", function () {
        frame.update();
        expect(score.increment).toHaveBeenCalled();
    });

    it("should report score", function () {
        frame.update();
        expect(score.report).toHaveBeenCalled();
    });

});
