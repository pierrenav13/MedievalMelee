

function Character(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    //this.keysPressed = {};
    this.ctx = options.ctx;
 
    this.direction = 0;
    this.img = new Image();
    
    //this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png'

    // this.img.onload = function(){
    //     that.drawImg();
    // }
}

Character.prototype.drawImg = function () {
    if (this.direction === 0){
        this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png';
    } else{
        this.img.src = 'src/scripts/flipped-sprite-sheet.png'
    }
    let imgDim = [0,0,35,40];

    this.ctx.drawImage(this.img, ...imgDim, ...this.pos, this.width, this.height);
}

Character.prototype.clearImg = function () {
    this.ctx.clearRect(...this.pos, this.width, this.height);
}




Character.prototype.bindKeys = function(){
    let that = this;
    key('w', function () { 
        that.movePlayer([0, -(that.vel)]) 
    });
    key('a', function () { 
        that.movePlayer([-(that.vel), 0]) 
    });
    key('s', function () { 
        that.movePlayer([0, (that.vel)])
    });
    key('d', function () { 
        that.movePlayer([that.vel, 0]) 
    });
};

// Character.prototype.bindMovement = function () {
//     //debugger
//     let that = this;
//     window.addEventListener('keydown', function(e){
//         that.keysPressed[e.key] = true;
//     })
//     window.addEventListener('keyup', function(e){
//         that.keysPressed[e.key] = false;
//     })

    
// }


// Character.prototype.movePlayer = function (dir) {
//     //this.clearImg();
//     this.pos[0] += dir[0];
//     this.pos[1] += dir[1];
//     //this.drawImg();
//     //this.draw(this.ctx);
//     //console.log(this.pos);
// };

module.exports = Character;