const Player = require('./scripts/player');
const Boss = require('./scripts/boss');
const Game = require('./scripts/game');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('med-mel');
    const ctx = canvas.getContext('2d');
    const player = new Player({ctx: ctx});
    const boss = new Boss({ctx: ctx});
    const game = new Game(player, boss, canvas, ctx);
    game.draw();
    game.loopGame();

    //boss.draw(ctx);
    //player.draw(ctx);
    //player.bindMovement();
    //player.bindKeys();
})