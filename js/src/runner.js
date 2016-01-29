"use strict";

var game = game || {};

game.runner = function(spec){
    var that = {};
    var document = spec.document;
    var window = spec.window;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var entity = game.entityFactory({context:context}).create();
    var path = game.path({context: context});
    var frame = game.frame({context:context, path:path, entity:entity});

    that.go = game.loop({window: window, update: frame.update}).run;
    $(document.body).on('keydown', game.keyPressEventHandler({entity:entity}).handle);
    canvas.addEventListener('click', game.clickEventHandler({canvas:canvas, path:path}).handle, false);
    return that;
};