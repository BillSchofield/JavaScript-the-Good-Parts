"use strict";

var game = game || {};

game.cellEventListener = function(parameters){
    var that = {};
    var players = parameters.players;
    var currentPlayer = 0;

    that.handle = function(eventToHandle) {
        if (!eventToHandle.target.innerHTML){
            players[currentPlayer].move(eventToHandle.target);
        }
        currentPlayer = ++currentPlayer%2;
    };

    return that;
};