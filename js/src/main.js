"use strict";

var game = game || {};

game.canvas = document.getElementById('gameOne');
game.context = game.canvas.getContext('2d');

game.cursor = new Vector2d(200, 100);
game.oldCursor = new Vector2d(200, 100);
game.mario = new Entity2d(new Vector2d(200, 100), new Sprite(game.context, 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif'));

(function (window) {
    function gameLoop() {
        game.context.clearRect(0, 0, 400, 200);
        game.context.beginPath();
        game.context.moveTo(game.oldCursor.getX(), game.oldCursor.getY());
        game.context.lineTo(game.cursor.getX(), game.cursor.getY());
        game.context.stroke();
        game.mario.draw();
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

$(document.body).on('keydown', function (event) {
    var leftArrow = 37;
    var upArrow = 38;
    var rightArrow = 39;
    var downArrow = 40;
    switch (event.which) {
        case  leftArrow:
            game.mario.moveLeft();
            break;
        case  upArrow:
            game.mario.moveUp();
            break;
        case  rightArrow:
            game.mario.moveRight();
            break;
        case  downArrow:
            game.mario.moveDown();
            break;
    }
});

game.canvas.addEventListener('click', function (event) {
    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return new Vector2d(event.clientX - rect.left, event.clientY - rect.top);
    }

    game.oldCursor = game.cursor;
    game.cursor = getMousePos(game.canvas, event);
}, false);

