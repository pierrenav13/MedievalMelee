const Character = require('./scripts/character');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('med-mel');
    const ctx = canvas.getContext('2d');
    const tempPlayer = new Character({pos: [100, 225], vel: 0, height: 45, width: 30, color: 'navy'});
    const tempBoss = new Character({pos: [350, 190], vel: 0, height: 95, width: 75, color: 'maroon'});
    tempPlayer.draw(ctx);
    tempBoss.draw(ctx);
})