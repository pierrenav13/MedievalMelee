// const Character = require('./character');


function Boss(options = {}) {
    // options.pos = [350, 190];
    // options.vel = 25;
    // options.height = 95;
    // options.width = 75;
    // options.color = 'maroon';

    this.pos = [350, 190];
    this.vel = 25;
    this.height = 95;
    this.width = 75;
    this.color = 'maroon';
    this.ctx = options.ctx;
}

Boss.prototype.draw = function () {
    this.ctx.clearRect(this.pos[0], this.pos[1], -(this.width), -(this.height));
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(...this.pos, this.width, this.height);
}

// function Surrogate() { }
// Surrogate.prototype = Character.prototype;
// Boss.prototype = new Surrogate();
// Boss.prototype.constructor = Boss;

module.exports = Boss;