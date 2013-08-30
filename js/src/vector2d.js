"use strict";

function Vector2d(x, y) {
    this.x = x;
    this.y = y;
}

Vector2d.prototype.getX = function() {
    return this.x;
};

Vector2d.prototype.getY = function() {
    return this.y;
};

Vector2d.prototype.addX = function(x) {
    this.x += x ;
};

Vector2d.prototype.addY = function(y) {
    this.y += y ;
};