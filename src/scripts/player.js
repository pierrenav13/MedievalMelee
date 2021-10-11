const Character = require('./character');

function Player(options = {}){
    options.pos = [100, 225];
    options.vel = 1;
    options.height = 70;
    options.width = 50;
    options.color = 'navy';
    Character.call(this, options);
};


function Surrogate() { };
Surrogate.prototype = Character.prototype;
Player.prototype = new Surrogate();
Player.prototype.constructor = Player;

module.exports = Player;

