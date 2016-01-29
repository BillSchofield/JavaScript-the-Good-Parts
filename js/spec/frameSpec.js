describe("frame", function () {
    var context;
    var path;
    var entity;

    beforeEach(function () {
        context = jasmine.createSpyObj('context', ['clearRect']);
        path = jasmine.createSpyObj('path', ['draw']);
        entity = jasmine.createSpyObj('entity', ['update', 'draw']);
        frame = game.frame({context: context, path: path, entity: entity});
    });

    it("should update score", function () {
        frame.update();
    });

});
