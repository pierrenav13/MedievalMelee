const Character = require('./character');


function Boss(options = {}) {
    options.pos = [350, 190];
    options.vel = 25;
    options.height = 95;
    options.width = 75;
    options.color = 'maroon';
    Character.call(this, options);
}

function Surrogate() { }
Surrogate.prototype = Character.prototype;
Boss.prototype = new Surrogate();
Boss.prototype.constructor = Boss;

module.exports = Boss;