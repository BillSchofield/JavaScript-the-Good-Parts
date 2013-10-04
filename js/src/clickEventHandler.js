"use strict";

var game = game || {};

game.clickEventHandler = function(spec){
    var that = {};

    var canvas = spec.canvas;
    var path = spec.path;

    that.handle = function(event) {
        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return game.vector2d({x: event.clientX - rect.left, y: event.clientY - rect.top});
        }

        path.addPoint(getMousePos(canvas, event));
    };

    return that;
};