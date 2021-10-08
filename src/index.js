const Player = require('./scripts/player');
const Boss = require('./scripts/boss');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('med-mel');
    const ctx = canvas.getContext('2d');
    const player = new Player({ctx: ctx});
    const boss = new Boss();

    boss.draw(ctx);
    player.draw(ctx);
    //player.bindKeys();
    player.bindKeys();
})