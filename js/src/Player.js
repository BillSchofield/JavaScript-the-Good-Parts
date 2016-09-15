"use strict";

var game = game || {};

game.player = function(parameters){
    var that = {};

    var symbol = parameters.symbol;

    that.move = function(cell) {
        cell.innerHTML = symbol;
    }

    return that;
};