"use strict";

var game = game || {};

game.entityFactory = function(parameters){
    var that = {};

    var context = parameters.context;

    that.createInvader = function(parameters) {
        return game.entity2d({
            position: game.vector2d({x: 200, y: 100}),
            velocity: game.vector2d({x: 1, y: -2}),
            acceleration: game.vector2d({x: 0, y: 0.02}),
            sprite: game.sprite({
                context: context,
                imageSource: 'img/invader.png'
            })
        });
    };

    that.createBox = function(parameters) {
        return game.entity2d({
            position: game.vector2d({x: 200, y: 100}),
            velocity: game.vector2d({x: 0, y: 0}),
            acceleration: game.vector2d({x: 0, y: 0}),
            sprite: game.sprite({
                context: context,
                imageSource: 'img/box.png'
            })
        });
    };

    return that;
};