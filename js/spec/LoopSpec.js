describe("loop", function () {
    var window;
    var update;
    var loop;

    beforeEach(function () {
        window = jasmine.createSpyObj('window', ['setInterval']);
        update = jasmine.createSpy('update');
        loop = game.loop({window: window, update: update});
    });

    it("should tell window to repeatedly update", function () {
        loop.run();
        expect(window.setInterval).toHaveBeenCalledWith(update, jasmine.any(Number));
    });

});
