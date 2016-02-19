"use strict";

var game = game || {};

game.frame = function(parameters){
    var that = {};
    var context = parameters.context;
    var entity = parameters.entity;
    var score = parameters.score;

    that.update = function() {
        context.clearRect(0, 0, 1280, 1024);
        entity.update();
        entity.draw();

        score.increment();
        score.report();

        //$('div').children('span').eq(1).html(score++);
    }

    return that;
};