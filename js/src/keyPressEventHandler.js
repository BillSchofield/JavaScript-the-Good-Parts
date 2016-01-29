"use strict";

var game = game || {};

game.keyPressEventHandler = function(spec){
    var that = {};

    var entity = spec.entity;

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