describe("Example", function () {

    it("should change the innerhtml of the element to X", function () {
        var element = {};
        var example = game.example({element: element});
        example.go();
        expect(element.innerHTML).toEqual("X");
    });
});