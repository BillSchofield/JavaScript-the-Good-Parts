"use strict";

var game = game || {};

game.canvas = document.getElementById('gameOne');
game.context = game.canvas.getContext('2d');

game.cursor = new Vector2d(200, 100);
game.oldCursor = new Vector2d(200, 100);
game.sprite = new Entity2d(new Vector2d(0, 100), new Vector2d(.4, -5), new Vector2d(0, .15), new Sprite(game.context, 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif'));
(function (window) {
    function gameLoop() {
        game.context.clearRect(0, 0, 400, 200);
        game.context.beginPath();
        game.context.moveTo(game.oldCursor.getX(), game.oldCursor.getY());
        game.context.lineTo(game.cursor.getX(), game.cursor.getY());
        game.context.stroke();
        game.sprite.update();
        game.sprite.draw();
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

$(document.body).on('keydown', function (event) {
    var leftArrow = 37;
    var upArrow = 38;
    var rightArrow = 39;
    var downArrow = 40;
    var space = 32;
    switch (event.which) {
        case  leftArrow:
            game.sprite.moveLeft();
            break;
        case  upArrow:
            game.sprite.moveUp();
            break;
        case  rightArrow:
            game.sprite.moveRight();
            break;
        case  downArrow:
            game.sprite.moveDown();
            break;
        case  space:
            game.sprite.jump();
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

