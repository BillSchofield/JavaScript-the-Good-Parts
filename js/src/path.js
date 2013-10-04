"use strict";

var game = game || {};

game.path = function(spec){
    var that = {};

    var points = [];
    var context = spec.context;

    that.draw = function() {
        context.beginPath();
        context.moveTo(400, 100);
        points.map(function(point){
            context.lineTo(point.getX(), point.getY());
        });
        context.stroke();
    };

    that.addPoint = function(point) {
        points.push(point);
    };

    return that;
};