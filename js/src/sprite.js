"use strict";

var game = game || {};

game.sprite = function(parameters){
    var that = {};

    var image = new Image();
    image.src = parameters.imageSource;
    var context = parameters.context;

    that.draw = function(position) {
        context.drawImage(image, position.getX(), position.getY());
    };

    return that;
};