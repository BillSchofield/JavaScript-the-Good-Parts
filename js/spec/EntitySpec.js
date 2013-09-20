describe("Entity2d", function () {
    var entity;
    var position;
    var velocity;
    var acceleration;
    var sprite;

    beforeEach(function () {
        position = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'addX', 'addY']);
        velocity = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'addX', 'addY']);
        acceleration = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'addX', 'addY']);
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

    it("should move right when it has velocity of positive X", function () {
        velocity.getX = jasmine.createSpy("getX() spy").andReturn(1);
        entity.update();
        expect(position.addX).toHaveBeenCalledWith(1);
    });

    it("should move down when it has velocity of positive Y", function () {
        velocity.getY = jasmine.createSpy("getY() spy").andReturn(1);
        entity.update();
        expect(position.addY).toHaveBeenCalledWith(1);
    });

    it("should have positive velocity when it has acceleration of positive Y", function () {
        acceleration.getY = jasmine.createSpy("getY() spy").andReturn(1);
        entity.update();
        expect(velocity.addY).toHaveBeenCalledWith(1);
    });

    it("should have positive velocity when it has acceleration of positive X", function () {
        acceleration.getX = jasmine.createSpy("getX() spy").andReturn(1);
        entity.update();
        expect(velocity.addX).toHaveBeenCalledWith(1);
    });
});