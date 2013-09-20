var game = game || {};

game.runner = function(spec){
    var that = {};

    var document = spec.document;
    var canvas = document.getElementById('gameOne');
    var context = canvas.getContext('2d');
    var entity = game.entity2d({
        position: game.vector2d({x:-100, y:0}),
        velocity: game.vector2d({x:4, y:0.1}),
        acceleration: game.vector2d({x:-0.01, y:0}),
        sprite: game.sprite({
            context: context,
            imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
        })
    });

    var path = [];
    function drawPath(path){
        context.beginPath();
        context.moveTo(400, 100);
        path.map(function(point){
            context.lineTo(point.getX(), point.getY());
        });
        context.stroke();
    }

    that.go = function(window){
        function gameLoop() {
            context.clearRect(0, 0, 800, 200);
            drawPath(path);
            entity.update();
            entity.draw();
        }
        window.setInterval(gameLoop, 1000 / 60); // 60fps
    };

    $(document.body).on('keydown', function (event) {
        var leftArrow = 37;
        var upArrow = 38;
        var rightArrow = 39;
        var downArrow = 40;
        var space = 32;
        switch (event.which) {
            case  leftArrow:
                entity.moveLeft();
                break;
            case  upArrow:
                entity.moveUp();
                break;
            case  rightArrow:
                entity.moveRight();
                break;
            case  downArrow:
                entity.moveDown();
                break;
            case  space:
                entity.jump();
                break;
        }
    });

    canvas.addEventListener('click', function (event) {
        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return game.vector2d({x: event.clientX - rect.left, y: event.clientY - rect.top});
        }

        path.push(getMousePos(canvas, event));
    }, false);


    return that;
};