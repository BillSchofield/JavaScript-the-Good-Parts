"use strict";

var game = game || {};

game.loop = function(spec){
    var that = {};
    var context = spec.context;
    var path = spec.path;
    var entity = spec.entity;

    that.run = function(window) {
            function gameLoop() {
                context.clearRect(0, 0, 1280, 1024);
                path.draw();
                entity.update();
                entity.draw();
            }

            var framesPerSecond = 1000 / 60;
            window.setInterval(gameLoop, framesPerSecond);
    };

    return that;
};