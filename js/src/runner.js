var game = game || {};

game.runner = function(spec){
    var that = {};
    var document = spec.document;
    var canvas = document.getElementById('gameOne');
    var context = canvas.getContext('2d');
    var entity = game.entityFactory({context:context}).create();
    var path = game.path({context: context});

    that.go = game.loop({context:context, path:path, entity:entity}).run;
    $(document.body).on('keydown', game.keyPressEventHandler({entity:entity}).handle);
    canvas.addEventListener('click', game.clickEventHandler({canvas:canvas, path:path}).handle, false);
    return that;
};