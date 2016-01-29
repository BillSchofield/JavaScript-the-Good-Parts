"use strict";

var game = game || {};

game.frame = function(spec){
    var that = {};
    var context = spec.context;
    var path = spec.path;
    var entity = spec.entity;
    var score = spec.score;

    that.update = function() {
        context.clearRect(0, 0, 1280, 1024);
        path.draw();
        entity.update();
        entity.draw();

        //$('div').children('span').eq(1).html(score++);
    }

    return that;
};