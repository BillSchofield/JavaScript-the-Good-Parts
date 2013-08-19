var canvas = document.getElementById('gameOne');
var context = canvas.getContext('2d');

var cursor = {
    x: 200,
    y: 100
};

var oldCursor = {
    x: 200,
    y: 100
};

var marioPos = {
    x: 200,
    y: 100
};

var img = new Image();

(function (window) {
    img.src = 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif';
    function gameLoop() {
        context.clearRect(0, 0, 400, 200);
        context.beginPath();
        context.moveTo(oldCursor.x, oldCursor.y);
        context.lineTo(cursor.x, cursor.y);
        context.stroke();

        context.drawImage(img, marioPos.x, marioPos.y);
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

$(document.body).on('keydown', function (event) {
    const step = 5;
    const leftArrow = 37;
    const upArrow = 38;
    const rightArrow = 39;
    const downArrow = 40;
    switch (event.which) {
        case  leftArrow:
            marioPos.x -= step;
            break;
        case  upArrow:
            marioPos.y -= step;
            break;
        case  rightArrow:
            marioPos.x += step;
            break;
        case  downArrow:
            marioPos.y += step;
            break;
    }
});

canvas.addEventListener('click', function (event) {
    oldCursor = cursor;
    cursor = getMousePos(canvas, event);
}, false);

