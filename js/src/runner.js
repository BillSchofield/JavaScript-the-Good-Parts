var game = game || {};

game.runner = function(spec){
    var that = {};

    spec.canvas = spec.document.getElementById('gameOne');
    spec.context = spec.canvas.getContext('2d');

    spec.cursor = game.vector2d({x:200, y:100});
    spec.oldCursor = game.vector2d({x:200, y:100});

    spec.entity = game.entity2d({
        position: game.vector2d({x:-100, y:0}),
        velocity: game.vector2d({x:4, y:0.1}),
        acceleration: game.vector2d({x:-0.01, y:0}),
        sprite: game.sprite({
            context: spec.context,
            imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
        })
    });

    that.go = function(window){
        function gameLoop() {
            spec.context.clearRect(0, 0, 800, 200);
            spec.context.beginPath();
            spec.context.moveTo(spec.oldCursor.getX(), spec.oldCursor.getY());
            spec.context.lineTo(spec.cursor.getX(), spec.cursor.getY());
            spec.context.stroke();
            spec.entity.update();
            spec.entity.draw();
        }
        window.setInterval(gameLoop, 1000 / 60); // 60fps
    };

    $(spec.document.body).on('keydown', function (event) {
        var leftArrow = 37;
        var upArrow = 38;
        var rightArrow = 39;
        var downArrow = 40;
        var space = 32;
        switch (event.which) {
            case  leftArrow:
                spec.entity.moveLeft();
                break;
            case  upArrow:
                spec.entity.moveUp();
                break;
            case  rightArrow:
                spec.entity.moveRight();
                break;
            case  downArrow:
                spec.entity.moveDown();
                break;
            case  space:
                spec.entity.jump();
                break;
        }
    });

    spec.canvas.addEventListener('click', function (event) {
        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return game.vector2d({x: event.clientX - rect.left, y: event.clientY - rect.top});
        }

        spec.oldCursor = spec.cursor;
        spec.cursor = getMousePos(spec.canvas, event);
    }, false);


    return that;
};