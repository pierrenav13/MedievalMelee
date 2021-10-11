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
    this.boundLoop = this.loopGame.bind(this);
    this.player.img.onload = function () {
        that.loopGame();
    }

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
};

Game.prototype.over = function(){
    //alert('In over()')
    if(this.player.pos[0] < this.boss.pos[0] + this.boss.width &&
        this.player.pos[0] + this.player.width > this.boss.pos[0] &&
        this.player.pos[1] < this.boss.pos[1] + this.boss.width &&
        this.player.height + this.player.pos[1] > this.boss.pos[1]){
            alert('Game Over');
        }
}

Game.prototype.move = function(x, y){
    if ((this.player.pos[0] + x) < (this.DIM_X - 50) && (this.player.pos[0] + x) > -20){
        this.player.pos[0] += x;
    }
    if ((this.player.pos[1] + y) < (this.DIM_Y - 70) && (this.player.pos[1] + y) > -2){
        this.player.pos[1] += y;
    }
    
    //this.player.pos[1] += y;
}

Game.prototype.loopGame = function(){
    this.ctx.clearRect(0, 0, 500, 500);
    if (this.keysPressed.w) {
        //debugger
        this.move(0, -(this.player.vel))
        //this.player.pos[1] -= this.player.vel;
    } else if (this.keysPressed.s) {
        this.move(0, (this.player.vel))
        //this.player.pos[1] += this.player.vel;
    }
    
    if (this.keysPressed.a) {
        this.move(-(this.player.vel), 0)
        //this.player.pos[0] -= this.player.vel;
        this.player.direction = 1;
    } else if (this.keysPressed.d) {
        this.move((this.player.vel), 0)
        //this.player.pos[0] += this.player.vel;
        this.player.direction = 0;
    }

    this.draw();
    this.over();
    window.requestAnimationFrame(this.boundLoop);
}



module.exports = Game;