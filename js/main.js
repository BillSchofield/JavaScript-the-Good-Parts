var canvas = document.getElementById('gameOne');
var context = canvas.getContext('2d');

var cursor = new Vector2d(200, 100);
var oldCursor = new Vector2d(200, 100);
var mario = new Entity2d(new Vector2d(200, 100), new Sprite(context, 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif'));

(function (window) {
    function gameLoop() {
        context.clearRect(0, 0, 400, 200);
        context.beginPath();
        context.moveTo(oldCursor.getX(), oldCursor.getY());
        context.lineTo(cursor.getX(), cursor.getY());
        context.stroke();
        mario.draw();
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return new Vector2d(event.clientX - rect.left, event.clientY - rect.top);
}

$(document.body).on('keydown', function (event) {
    const leftArrow = 37;
    const upArrow = 38;
    const rightArrow = 39;
    const downArrow = 40;
    switch (event.which) {
        case  leftArrow:
            mario.moveLeft();
            break;
        case  upArrow:
            mario.moveUp();
            break;
        case  rightArrow:
            mario.moveRight();
            break;
        case  downArrow:
            mario.moveDown();
            break;
    }
});

canvas.addEventListener('click', function (event) {
    oldCursor = cursor;
    cursor = getMousePos(canvas, event);
}, false);

