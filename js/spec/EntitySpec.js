describe("entity2d", function () {
    var entity;
    var position;
    var velocity;
    var acceleration;
    var sprite;

    beforeEach(function () {
        position = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'add']);
        velocity = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'add']);
        acceleration = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'add']);
        sprite = jasmine.createSpyObj('sprite', ['draw']);
        entity = game.entity2d({
            position: position,
            velocity: velocity,
            acceleration: acceleration,
            sprite:sprite
        });
    });

    it("should draw its sprite", function () {
        entity.draw();
        expect(sprite.draw).toHaveBeenCalledWith(position);
    });

    it("should add velocity to position", function () {
        entity.update();
        expect(position.add).toHaveBeenCalledWith(velocity);
    });

    it("should add acceleration to velocity", function () {
        entity.update();
        expect(velocity.add).toHaveBeenCalledWith(acceleration);
    });
});