const Player = require('./scripts/player');
const Boss = require('./scripts/boss');

function Game(player, boss, ctx){
    this.player = player;
    this.boss = boss;
    this.ctx = ctx;
}

Game.prototype.draw = function(){
    this.player.draw(this.ctx);
    this.boss.draw(this.ctx);
}



Game.prototype.moveBoss = function(){

}