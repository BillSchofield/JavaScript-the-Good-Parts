"use strict";

var game = game || {};

game.keyPressEventHandler = function(spec){
    var that = {};

    var entity = spec.entity;

    var keyResponses = {
        37 : function(entity){entity.moveLeft();},
        38 : function(entity){entity.moveUp();},
        39 : function(entity){entity.moveRight();},
        40 : function(entity){entity.moveDown();}
    };

    that.handle = function(event) {
        var keyPress = event.which;
        if (keyPress in keyResponses) {
            keyResponses[keyPress](entity);
        }
    };

    return that;
};