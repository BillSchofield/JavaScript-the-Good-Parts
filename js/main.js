var canvas = document.getElementById('gameOne');
var context = canvas.getContext('2d');

var cursor = new Vector2d(200, 100);
var oldCursor = new Vector2d(200, 100);
var marioPos = new Vector2d(200, 100);
var img = new Image();

(function (window) {
    img.src = 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif';
    function gameLoop() {
        context.clearRect(0, 0, 400, 200);
        context.beginPath();
        context.moveTo(oldCursor.getX(), oldCursor.getY());
        context.lineTo(cursor.getX(), cursor.getY());
        context.stroke();

        context.drawImage(img, marioPos.getX(), marioPos.getY());
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return new Vector2d(event.clientX - rect.left, event.clientY - rect.top);
}

$(document.body).on('keydown', function (event) {
    const step = 5;
    const leftArrow = 37;
    const upArrow = 38;
    const rightArrow = 39;
    const downArrow = 40;
    switch (event.which) {
        case  leftArrow:
            marioPos.addX(-step);
            break;
        case  upArrow:
            marioPos.addY(-step);
            break;
        case  rightArrow:
            marioPos.addX(step);
            break;
        case  downArrow:
            marioPos.addY(step);
            break;
    }
});

canvas.addEventListener('click', function (event) {
    oldCursor = cursor;
    cursor = getMousePos(canvas, event);
}, false);

