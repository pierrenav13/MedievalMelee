function Character(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    this.color = options.color;
    this.ctx = options.ctx || undefined;
}

Character.prototype.draw = function(ctx){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(...this.pos, this.width, this.height);
}

Character.prototype.bindKeys = function(){
    let that = this;
    key('w', function () { that.move([0, -(that.vel)]) });
    key('a', function () { that.move([-(that.vel), 0]) });
    key('s', function () { that.move([0, (that.vel)])});
    key('d', function () { that.move([that.vel, 0]) });
};

Character.prototype.move = function (dir) {
    this.pos[0] += dir[0];
    this.pos[1] += dir[1];
    this.draw(this.ctx);
};

module.exports = Character;