function Boss(options = {}) {
    this.pos = [350, 190];
    this.speedCap = 3000;
    this.height = 110;
    this.width = 85;
    this.ctx = options.ctx;
    this.img = new Image();
    this.bX = 0.1;
    this.bY = -0.1;
}

Boss.prototype.draw = function () {
    if (this.bX > 0) {
        this.img.src = 'src/scripts/ghost-flipped.png'
    }else {
        this.img.src = 'src/scripts/ghost-idle.png';
    }

    this.ctx.drawImage(this.img, 20, 18, 53, 50, (this.pos[0] + this.width/8), this.pos[1], (this.width + this.width/1.5), (this.height + this.height/6));
    
}

Boss.prototype.getPos = function(pos, x, y){
    this.enemyPos = pos;
}

Boss.prototype.move = function(dimX, dimY){
    let xChange = (this.pos[0] - this.enemyPos[0]) / this.speedCap;
    let yChange = (this.pos[1] - this.enemyPos[1]) / this.speedCap;
    this.flipped = false;
    let edge = false;
    if (xChange < 0) this.flipped = true;
    if ((this.pos[0] - xChange) < (dimX - 80) && (this.pos[0] + xChange) > -2) {
        this.pos[0] -= xChange;
    } else{
        edge = true;
    }
    if ((this.pos[1] - yChange) < (dimY - 115) && (this.pos[1] + yChange) > -2) {
        this.pos[1] -= yChange;
    } else{
        edge = true;
    }
    return edge;
};

Boss.prototype.bounce = function(dimX, dimY){
    if((this.pos[0] + this.bX) < (dimX - 80) && (this.pos[0] + this.bX) > -2){
        this.pos[0] += this.bX;
    } else {
        if (this.bX < 0.32 && this.bX > -0.32){
            this.bX = -this.bX * 1.08;
        } else{
            this.bX = -this.bX;
        }
    }
    if ((this.pos[1] + this.bY) < (dimY - 115) && (this.pos[1] + this.bY) > -2) {
        this.pos[1] += this.bY;
    } else {
        if(this.bY < 0.32 && this.bY > -0.32){
            this.bY = -this.bY * 1.08;
        } else {
            this.bY = -this.bY;
        }
    }
    
}


module.exports = Boss;