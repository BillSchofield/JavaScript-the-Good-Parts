describe("frame", function () {
    var context;
    var path;
    var entity;
    var score;
    var frame;

    beforeEach(function () {
        context = jasmine.createSpyObj('context', ['clearRect']);
        path = jasmine.createSpyObj('path', ['draw']);
        entity = jasmine.createSpyObj('entity', ['update', 'draw']);
        score =  jasmine.createSpyObj('score', ['increment', 'report']);
        frame = game.frame({context: context, path: path, entity: entity, score: score});
    });

    it("should increment score", function () {
        //frame.update();
        //expect(score.increment).toHaveBeenCalled();
    });

    it("should report score", function () {
        //frame.update();
        //expect(score.report).toHaveBeenCalled();
    });

});
