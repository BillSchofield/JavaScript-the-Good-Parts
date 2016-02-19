"use strict";

var game = game || {};

game.loop = function(parameters){
    var that = {};
    var window = parameters.window;
    var update = parameters.update;

    that.run = function() {
        var framesPerSecond = 1000 / 60;
        window.setInterval(update, framesPerSecond);
    };

    return that;
};