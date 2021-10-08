const Character = require('./character');


function Player(options = {}){
    options.pos = [100, 225];
    options.vel = 25;
    options.height = 45;
    options.width = 30;
    options.color = 'navy';
    Character.call(this, options);
};

function Surrogate() { };
Surrogate.prototype = Character.prototype;
Player.prototype = new Surrogate();
Player.prototype.constructor = Player;

module.exports = Player;

