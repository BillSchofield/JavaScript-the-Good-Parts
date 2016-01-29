"use strict";

var game = game || {};

game.entityFactory = function(spec){
    var that = {};

    var context = spec.context;

    that.create = function() {
        return game.entity2d({
            position: game.vector2d({x: 200, y: 100}),
            velocity: game.vector2d({x: 1, y: -2}),
            acceleration: game.vector2d({x: 0, y: 0.02}),
            sprite: game.sprite({
                context: context,
                imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
            })
        });
    };

    return that;
};