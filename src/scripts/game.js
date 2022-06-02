const Player = require('./player');
const Boss = require('./boss');
const { setInterval } = require('core-js');

function Game(player, boss, canvas, ctx){
    this.player = player;
    this.boss = boss;
    this.canvas = canvas;
    this.DIM_X = this.canvas.width;
    this.DIM_Y = this.canvas.height;
    this.ctx = ctx;
    this.score = 0;
    this.keysPressed = {};
    this.bindMovement();
    let that = this;

    this.gameOver = false;
    this.instructions = document.getElementById('instruction-button');
    let boundShow = this.showInstructions.bind(this);
    let boundHide = this.hideInstructions.bind(this);
    this.instructions.addEventListener('mouseenter', boundShow);
    this.instructions.addEventListener('mouseleave', boundHide);
    this.startGame = document.getElementById('start-game')
    this.startGame.addEventListener('click', () => {
        for (let n = 0; n < 9; n++) {
            setInterval(() => {
                that.loopGame()
            }, 1);
        }
        that.startGame.style.display = 'none'
    })

}

Game.prototype.showInstructions = function(){
    document.getElementById('instructions').style.display = 'flex';
}

Game.prototype.hideInstructions = function(){
    document.getElementById('instructions').style.display = 'none';
}

Game.prototype.bindMovement = function () {
    let that = this;
    window.addEventListener('keydown', function keyDown(e) {
        e.preventDefault();
        that.keysPressed[e.key] = true;
        

    })
    window.addEventListener('keyup', function keyUp(e) {
        e.preventDefault();
        that.keysPressed[e.key] = false;
    })
}

Game.prototype.draw = function(){
    this.player.drawImg();
    this.boss.draw(this.ctx);
};

Game.prototype.over = function(){
    if(this.player.pos[0] + 20 < this.boss.pos[0] + this.boss.width &&
        this.player.pos[0] + this.player.width > this.boss.pos[0] + 18 &&
        this.player.pos[1] + 18 < this.boss.pos[1] + this.boss.height &&
        this.player.height + this.player.pos[1] > this.boss.pos[1] + 10){
            this.gameOver = true;
        }
}

Game.prototype.move = function(x, y){
    if ((this.player.pos[0] + x) < (this.DIM_X - 50) && (this.player.pos[0] + x) > -2){
        this.player.pos[0] += x;
    } else{
        return false;
    }
    if ((this.player.pos[1] + y) < (this.DIM_Y - 70) && (this.player.pos[1] + y) > -2){
        this.player.pos[1] += y;
    } else{
        return false;
    }
    return true;
}

Game.prototype.loopGame = function(){
    if (this.gameOver === false) {
        this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        let moved = false;

        if (this.keysPressed.w) {
            this.move(0, -(this.player.vel))
            moved = true;
        } else if (this.keysPressed.s) {
            this.move(0, (this.player.vel))
            moved = true;
        }
        
        if (this.keysPressed.a) {
            this.move(-(this.player.vel), 0)
            this.player.direction = 1;
            moved = true;
        } else if (this.keysPressed.d) {
            this.move((this.player.vel), 0)
            moved = true;
            this.player.direction = 0;
        }

        if (moved){
            //500 ms intervals for animation
            this.player.frame += 2.6;
            if (this.player.frame > 3000){
                this.player.frame = 1;
            }
        } else{
            this.player.frame = 0;
        }
        let currentScore = document.getElementById('score')
        this.score += 1;
        currentScore.innerHTML = 'Score: ' + Math.floor((this.score / 50)).toString();

        this.boss.bounce(this.DIM_X, this.DIM_Y);
        this.draw();
        this.over();
    } else{
        document.getElementById('game-over').style.display = 'flex';
        //document.getElementById('instructions').style.display = 'flex';
    }
}



module.exports = Game;