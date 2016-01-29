"use strict";

var game = game || {};

game.loop = function(spec){
    var that = {};
    var window = spec.window;
    var update = spec.update;

    that.run = function() {
            var framesPerSecond = 1000 / 60;
            window.setInterval(update, framesPerSecond);
    };

    return that;
};