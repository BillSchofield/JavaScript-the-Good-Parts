"use strict";

var game = game || {};

game.vector2d = function(spec){
    var that = {};

    that.getX = function() {
        return spec.x;
    };

    that.getY = function() {
        return spec.y;
    };

    that.addX = function(x) {
        spec.x += x ;
    };

    that.addY = function(y) {
        spec.y += y ;
    };

    return that;
}