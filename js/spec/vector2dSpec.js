describe("vector2d", function () {

    it("should add x components", function () {
        var vector = game.vector2d({x:1, y:0});
        vector.add(game.vector2d({x:3, y:0}));
        expect(vector.getX()).toEqual(4);
    });

    it("should add y components", function () {
        var vector = game.vector2d({x:0, y:1});
        vector.add(game.vector2d({x:0, y:3}));
        expect(vector.getY()).toEqual(4);
    });

    it("should get the same vector when it adds a zero vector", function () {
        var vector = game.vector2d({x:1, y:2});
        vector.add(game.vector2d({x:0, y:0}));

        expect(vector.getX()).toBe(1);
        expect(vector.getY()).toBe(2);
    });
});