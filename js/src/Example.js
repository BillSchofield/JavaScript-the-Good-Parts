"use strict";

var game = game || {};

game.example = function(parameters){
    var that = {};

    var element = parameters.element;

    that.go = function() {
        element.innerHTML = "X";
    };

    return that;
};