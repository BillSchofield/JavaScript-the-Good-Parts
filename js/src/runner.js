var game = game || {};

game.runner = function(spec){
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
    var entity = game.entityFactory({context:context}).create();
    var path = game.path({context: context});

    that.go = gameLoopRunner();
    $(document.body).on('keydown', game.keyPressEventHandler({entity:entity}).handle);
    canvas.addEventListener('click', game.clickEventHandler({canvas:canvas, path:path}).handle, false);
    return that;
};