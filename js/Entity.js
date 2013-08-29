function Entity2d(position) {
    this.position = position;
    this.step = 5;
}

Entity2d.prototype.getX = function() {
    return this.position.getX();
};

Entity2d.prototype.getY = function() {
    return this.position.getY();
};

Entity2d.prototype.moveLeft = function() {
    return this.position.addX(-this.step);
};

Entity2d.prototype.moveRight = function() {
    return this.position.addX(this.step);
};

Entity2d.prototype.moveUp = function() {
    return this.position.addY(-this.step);
};

Entity2d.prototype.moveDown = function() {
    return this.position.addY(this.step);
};

