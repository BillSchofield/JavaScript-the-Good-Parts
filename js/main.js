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

(function (window) {
    function gameLoop() {
        context.beginPath();
        context.moveTo(oldCursor.x, oldCursor.y);
        context.lineTo(cursor.x, cursor.y);
        context.stroke();
        oldCursor = cursor;
    }

    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

$(document.body).on('keydown', function (e) {
    const step = 5;
    const leftArrow = 37;
    const upArrow = 38;
    const rightArrow = 39;
    const downArrow = 40;

    switch (e.which) {
        case  leftArrow:
            cursor.x -= step;
            break;
        case  upArrow:
            cursor.y -= step;
            break;
        case  rightArrow:
            cursor.x += step;
            break;
        case  downArrow:
            cursor.y += step;
            break;
    }
});

canvas.addEventListener('click', function (evt) {
    cursor = getMousePos(canvas, evt);
}, false);

