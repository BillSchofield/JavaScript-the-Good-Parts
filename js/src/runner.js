var game = game || {};

game.runner = function(spec){
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

    function gameLoopRunner() {
        return function (window) {
            function gameLoop() {
                context.clearRect(0, 0, 800, 200);
                path.draw();
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
    var path = game.path({context: context});

    that.go = gameLoopRunner();
    $(document.body).on('keydown', game.keyPressEventHandler({entity:entity}).handle);
    canvas.addEventListener('click', game.clickEventHandler({canvas:canvas, path:path}).handle, false);
    return that;
};