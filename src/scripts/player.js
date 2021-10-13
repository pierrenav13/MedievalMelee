const Character = require('./character');

function Player(options = {}){
    options.pos = [100, 225];
    options.vel = 0.15;
    options.height = 70;
    options.width = 50;
    Character.call(this, options);
};


function Surrogate() { };
Surrogate.prototype = Character.prototype;
Player.prototype = new Surrogate();
Player.prototype.constructor = Player;

module.exports = Player;

