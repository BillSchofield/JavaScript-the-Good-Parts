describe("Player", function () {
    var cell;

    beforeEach(function () {
        cell = {};
    });

    it("should mark cell with an 'O' when the player's symbol is 'O'", function () {
        var player = game.player({symbol: "O"});
        player.move(cell);

        expect(cell.innerHTML).toEqual("O");
    });

    it("should mark cell with an 'X' when the player's symbol is 'X'", function () {
        var player = game.player({symbol: "X"});

        player.move(cell);

        expect(cell.innerHTML).toEqual("X");
    });
});