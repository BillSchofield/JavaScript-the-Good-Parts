"use strict";

var game = game || {};

game.board = document.getElementById("board");

var players = [game.player({symbol: "X"}), game.player({symbol: "O"})]

game.board.addEventListener("click", game.cellEventListener({players: players}).handle);
