// const Character = require('./character');


function Boss(options = {}) {
    // options.pos = [350, 190];
    // options.vel = 25;
    // options.height = 95;
    // options.width = 75;
    // options.color = 'maroon';

    this.pos = [350, 190];
    this.vel = 25;
    this.height = 115;
    this.width = 95;
    this.color = 'maroon';
    this.ctx = options.ctx;
    this.img = new Image();
}

Boss.prototype.draw = function () {
    this.img.src = 'src/scripts/ghost-idle.png';
    this.ctx.drawImage(this.img, 20, 18, 53, 50, ...this.pos, this.width, this.height);

    // this.ctx.clearRect(this.pos[0], this.pos[1], -(this.width), -(this.height));
    // this.ctx.beginPath();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(...this.pos, this.width, this.height);
}

// function Surrogate() { }
// Surrogate.prototype = Character.prototype;
// Boss.prototype = new Surrogate();
// Boss.prototype.constructor = Boss;

module.exports = Boss;