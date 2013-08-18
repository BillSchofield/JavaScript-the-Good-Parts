var canvas = document.getElementById('gameOne');
var context = canvas.getContext('2d');
var x = 0;
var y = 200;
(function (window) {
    function gameLoop() {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(x++, y--);
        context.stroke();
        x++;
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
} (window));


