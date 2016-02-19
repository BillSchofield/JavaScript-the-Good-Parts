"use strict";

var game = game || {};

game.keyPressEventHandler = function(parameters){
    var that = {};

    var entity = parameters.entity;

    var keyResponses = {
        74 : function(entity){entity.jump()}
    };

    that.handle = function(event) {
        var keyPress = event.which;
        if (keyPress in keyResponses) {
            keyResponses[keyPress](entity);
        }
    };

    return that;
};