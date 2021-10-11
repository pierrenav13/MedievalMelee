const Player = require('./player');
const Boss = require('./boss');

function Game(player, boss, canvas, ctx){
    this.player = player;
    this.boss = boss;
    this.canvas = canvas;
    this.DIM_X = this.canvas.width;
    this.DIM_Y = this.canvas.height;
    this.ctx = ctx;
    this.keysPressed = {};
    //this.player.bindKeys();
    this.bindMovement();
    let that = this;
    this.player.img.onload = function () {
        //that.drawImg();
        that.loopGame();
    }
    //this.draw();
    // this.player
    //window.requestAnimationFrame(this.loopGame);
}

Game.prototype.bindMovement = function () {
    //debugger
    let that = this;
    window.addEventListener('keydown', function (e) {
        //debugger
        that.keysPressed[e.key] = true;
    })
    window.addEventListener('keyup', function (e) {
        that.keysPressed[e.key] = false;
    })
}

Game.prototype.draw = function(){
    this.player.drawImg();
    this.boss.draw(this.ctx);

    // this.ctx.drawImage(this.player.img, 0, 0, 35, 40, ...this.player.pos, this.player.width, this.player.height);
    // debugger
    // this.ctx.fillStyle = this.boss.color;
    // this.ctx.fillRect(...this.boss.pos, this.boss.width, this.boss.height);
};

Game.prototype.loopGame = function(){
    //debugger
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    //debugger
    if (this.keysPressed.w) {
        //debugger
        //this.player.movePlayer([0, -(this.player.vel)])
        this.player.pos[1] -= this.player.vel;
    } else if (this.keysPressed.s) {
        //this.player.movePlayer([0, (this.player.vel)])
        this.player.pos[1] += this.player.vel;
    }
    
    if (this.keysPressed.a) {
        //this.player.movePlayer([-(this.player.vel), 0])
        this.player.pos[0] -= this.player.vel;
    } else if (this.keysPressed.d) {
        //this.player.movePlayer([(this.player.vel), 0])
        this.player.pos[0] += this.player.vel;
    }

    this.draw();
    window.requestAnimationFrame(this.loopGame);
}

module.exports = Game;