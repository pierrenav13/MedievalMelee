function Character(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    this.color = options.color;
}

Character.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(...this.pos, this.width, this.height);
}

module.exports = Character;