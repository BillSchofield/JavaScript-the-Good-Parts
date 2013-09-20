"use strict";

var game = game || {};

game.entity2d = function(spec) {
    var that = {};
    spec.step = 5;
    
    that.update = function() {
        spec.velocity.addX(spec.acceleration.getX());
        spec.velocity.addY(spec.acceleration.getY());
        spec.position.addX(spec.velocity.getX());
        spec.position.addY(spec.velocity.getY());
    };
    
    that.jump = function() {
        spec.velocity.setY(-5);
    };
    
    that.draw = function() {
        spec.sprite.draw(spec.position);
    };
    
    that.getX = function() {
        return spec.position.getX();
    };
    
    that.getY = function() {
        return spec.position.getY();
    };
    
    that.moveLeft = function() {
        return spec.position.addX(-spec.step);
    };
    
    that.moveRight = function() {
        return spec.position.addX(spec.step);
    };
    
    that.moveUp = function() {
        return spec.position.addY(-spec.step);
    };
    
    that.moveDown = function() {
        return spec.position.addY(spec.step);
    };
    
    return that;    
}