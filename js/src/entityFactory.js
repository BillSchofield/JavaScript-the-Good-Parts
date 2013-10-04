"use strict";

var game = game || {};

game.entityFactory = function(spec){
    var that = {};

    var context = spec.context;

    that.create = function() {
        return game.entity2d({
            position: game.vector2d({x: -100, y: 0}),
            velocity: game.vector2d({x: 4, y: 0.1}),
            acceleration: game.vector2d({x: -0.01, y: 0}),
            sprite: game.sprite({
                context: context,
                imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
            })
        });
    };

    return that;
};