"use strict";

var game = game || {};

game.canvas = document.getElementById('gameOne');
game.context = game.canvas.getContext('2d');

game.cursor = new Vector2d(200, 100);
game.oldCursor = new Vector2d(200, 100);

game.entity = game.entity2d({
    position: new Vector2d(-100, 0),
    velocity: new Vector2d(4, 0.1),
    acceleration: new Vector2d(-0.01, 0),
    sprite: new Sprite(game.context, 'http://img.informer.com/icons/png/32/104/104916.png')
});

(function (window) {
    function gameLoop() {
        game.context.clearRect(0, 0, 800, 200);
        game.context.beginPath();
        game.context.moveTo(game.oldCursor.getX(), game.oldCursor.getY());
        game.context.lineTo(game.cursor.getX(), game.cursor.getY());
        game.context.stroke();
        game.entity.update();
        game.entity.draw();
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
            game.entity.moveLeft();
            break;
        case  upArrow:
            game.entity.moveUp();
            break;
        case  rightArrow:
            game.entity.moveRight();
            break;
        case  downArrow:
            game.entity.moveDown();
            break;
        case  space:
            game.entity.jump();
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

