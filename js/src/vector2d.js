"use strict";

var game = game || {};

game.vector2d = function(spec){
    var that = {};

    var x = spec.x;
    var y = spec.y;

    that.getX = function() {
        return x;
    };

    that.getY = function() {
        return y;
    };

    that.setY = function(newY) {
        y = newY;
    };

    that.zero = function(){
        x = 0;
        y = 0;
    }

    that.add = function(that) {
        x += that.getX();
        y += that.getY();
    };

    that.addX = function(newX) {
        x += newX;
    };

    that.addY = function(newY) {
        y += newY;
    };

    return that;
}