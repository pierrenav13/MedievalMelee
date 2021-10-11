// const Character = require('./character');


function Boss(options = {}) {
    // options.pos = [350, 190];
    // options.vel = 25;
    // options.height = 95;
    // options.width = 75;
    // options.color = 'maroon';

    this.pos = [350, 190];
    this.speedCap = 1000;
    this.height = 115;
    this.width = 85;
    this.ctx = options.ctx;
    this.img = new Image();
}

Boss.prototype.draw = function () {
    this.img.src = 'src/scripts/ghost-idle.png';
    this.ctx.fillRect(...this.pos, this.width, this.height);
    this.ctx.drawImage(this.img, 20, 18, 53, 50, (this.pos[0] + this.width/8), this.pos[1], (this.width + this.width/1.5), (this.height + this.height/6));
    
}

Boss.prototype.getPos = function(pos, x, y){
    this.enemyPos = pos;

}

Boss.prototype.move = function(dimX, dimY){
    let xChange = (this.pos[0] - this.enemyPos[0]) / this.speedCap;
    let yChange = (this.pos[1] - this.enemyPos[1]) / this.speedCap;
    this.flipped = false;
    if (xChange < 0) this.flipped = true;
    if ((this.pos[0] - xChange) < (dimX - 80) && (this.pos[0] + xChange) > -2) {
        this.pos[0] -= xChange;
    };
    if ((this.pos[1] - yChange) < (dimY - 115) && (this.pos[1] + yChange) > -2) {
        this.pos[1] -= yChange;
    };
};

// function Surrogate() { }
// Surrogate.prototype = Character.prototype;
// Boss.prototype = new Surrogate();
// Boss.prototype.constructor = Boss;

module.exports = Boss;