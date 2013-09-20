"use strict";

var game = game || {};

game.sprite = function(spec){
    var that = {};

    spec.image = new Image();
    spec.image.src = spec.imageSource;

    that.draw = function(position) {
        spec.context.drawImage(spec.image, position.getX(), position.getY());
    };

    return that;
};