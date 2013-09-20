var game = game || {};

game.runner = function(spec){
    var keyResponses = {
        37 : function(entity){entity.moveLeft();},
        38 : function(entity){entity.moveUp();},
        39 : function(entity){entity.moveRight();},
        40 : function(entity){entity.moveDown();}
    };

    function defaultEntity() {
        return game.entity2d({
            position: game.vector2d({x: -100, y: 0}),
            velocity: game.vector2d({x: 4, y: 0.1}),
            acceleration: game.vector2d({x: -0.01, y: 0}),
            sprite: game.sprite({
                context: context,
                imageSource: 'http://img.informer.com/icons/png/32/104/104916.png'
            })
        });
    }

    function drawPath(path){
        context.beginPath();
        context.moveTo(400, 100);
        path.map(function(point){
            context.lineTo(point.getX(), point.getY());
        });
        context.stroke();
    }

    function keyHandler(event) {
        var keyPress = event.which;
        if (keyPress in keyResponses) {
            keyResponses[keyPress](entity);
        }
    };

    function clickEventHandler() {
        return function (event) {
            function getMousePos(canvas, event) {
                var rect = canvas.getBoundingClientRect();
                return game.vector2d({x: event.clientX - rect.left, y: event.clientY - rect.top});
            }

            path.push(getMousePos(canvas, event));
        };
    }

    function gameLoopRunner() {
        return function (window) {
            function gameLoop() {
                context.clearRect(0, 0, 800, 200);
                drawPath(path);
                entity.update();
                entity.draw();
            }

            var framesPerSecond = 1000 / 60;
            window.setInterval(gameLoop, framesPerSecond);
        };
    }

    var that = {};
    var document = spec.document;
    var canvas = document.getElementById('gameOne');
    var context = canvas.getContext('2d');
    var entity = defaultEntity();
    var path = [];

    that.go = gameLoopRunner();
    $(document.body).on('keydown', keyHandler);
    canvas.addEventListener('click', clickEventHandler(), false);
    return that;
};