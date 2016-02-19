"use strict";

var game = game || {};

game.entity2d = function(parameters) {
    var that = {};
    var step = 5;
    var position = parameters.position;
    var velocity = parameters.velocity;
    var acceleration = parameters.acceleration;
    var sprite = parameters.sprite;

    that.update = function() {
        velocity.add(acceleration);
        position.add(velocity);
    };
    
    that.draw = function() {
        sprite.draw(position);
    };
    
    that.getX = function() {
        return position.getX();
    };
    
    that.getY = function() {
        return position.getY();
    };
    
    that.jump = function() {
        velocity.setY(-2);
    };
    
    that.moveLeft = function() {
        return position.addX(-step);
    };

    that.moveRight = function() {
        return position.addX(step);
    };
    
    that.moveUp = function() {
        return position.addY(-step);
    };
    
    that.moveDown = function() {
        return position.addY(step);
    };
    
    return that;    
}