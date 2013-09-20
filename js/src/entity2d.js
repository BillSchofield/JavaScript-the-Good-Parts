"use strict";

function Entity2d(position, velocity, acceleration, sprite) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.entity = sprite;
    this.step = 5;
}

Entity2d.prototype.update = function() {
    this.velocity.addX(this.acceleration.getX());
    this.velocity.addY(this.acceleration.getY());
    this.position.addX(this.velocity.getX());
    this.position.addY(this.velocity.getY());
};

Entity2d.prototype.jump = function() {
    this.velocity.setY(-5);
};

Entity2d.prototype.draw = function() {
    this.entity.draw(this.position);
};

Entity2d.prototype.getX = function() {
    return this.position.getX();
};

Entity2d.prototype.getY = function() {
    return this.position.getY();
};

Entity2d.prototype.moveLeft = function() {
    return this.position.addX(-this.step);
};

Entity2d.prototype.moveRight = function() {
    return this.position.addX(this.step);
};

Entity2d.prototype.moveUp = function() {
    return this.position.addY(-this.step);
};

Entity2d.prototype.moveDown = function() {
    return this.position.addY(this.step);
};

