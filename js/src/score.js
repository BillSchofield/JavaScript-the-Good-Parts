"use strict";

var game = game || {};

game.score = function(parameters){
    var that = {};
    var element = parameters.element;

    that.report = function() {
        element.html(parameters.value);
    }

    that.increment = function() {
        parameters.value++;
    }

    return that;
};