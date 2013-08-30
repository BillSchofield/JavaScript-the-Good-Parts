describe("Entity2d", function () {
    var entity;
    var position;
    var sprite;

    beforeEach(function () {
        position = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'addX', 'addY']);
        sprite = jasmine.createSpyObj('sprite', ['draw']);
        entity = new Entity2d(position, sprite);
    });

    it("should draw its sprite", function () {
        entity.draw();
        expect(sprite.draw).toHaveBeenCalledWith(position);
    });
});