"use strict";

var game = game || {};

game.sprite = function(spec){
    var that = {};

    var image = new Image();
    image.src = spec.imageSource;
    var context = spec.context;

    that.draw = function(position) {
        context.drawImage(image, position.getX(), position.getY());
    };

    return that;
};