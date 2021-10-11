

function Character(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.height = options.height;
    this.width = options.width;
    //this.keysPressed = {};
    this.ctx = options.ctx;
    this.frame = 0;
    this.direction = 0;
    this.img = new Image();
    
    //this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png'

    // this.img.onload = function(){
    //     that.drawImg();
    // }
}

Character.prototype.drawImg = function () {
    let imgDim = [0, 0, 35, 40];

    
    //this.direction = 1;
    if (this.direction === 0){
        this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png';
        if(this.frame >= 1 && this.frame < 499){
            imgDim = [55, 38, 35, 40];
        } else if (this.frame >= 500 && this.frame < 999){
            imgDim = [103, 38, 35, 40];
        } else if (this.frame >= 1000 && this.frame < 1499){
            imgDim = [154, 38, 35, 40];
        } else if (this.frame >= 1500 && this.frame < 2000){
            imgDim = [205, 38, 35, 40];
        } else if (this.frame >= 2000 && this.frame < 2499){
            imgDim = [255, 38, 35, 40];
        } else if (this.frame >= 2500 && this.frame < 2999){
            imgDim = [303, 38, 35, 40];
        }
    } else{
        this.img.src = 'src/scripts/flipped-sprite-sheet.png';
        if (this.frame >= 1 && this.frame < 499) {
            imgDim = [45, 38, 35, 40];
        } else if (this.frame >= 500 && this.frame < 999){
            imgDim = [93, 38, 35, 40];
        } else if (this.frame >= 1000 && this.frame < 1499){
            imgDim = [140, 38, 35, 40];
        } else if (this.frame >= 1500 && this.frame < 2000){
            imgDim = [190, 38, 35, 40];
        } else if (this.frame >= 2000 && this.frame < 2499){
            imgDim = [245, 38, 35, 40];
        } else if (this.frame >= 2500 && this.frame < 2999) {
            imgDim = [303, 38, 35, 40];
        }
    }
 
    //For testing hitboxes for collision
    //this.ctx.fillRect(...this.pos, this.width, this.height)
    this.ctx.drawImage(this.img, ...imgDim, (this.pos[0] - this.width/2.5), (this.pos[1] - this.height/6), this.width + (this.width/3), this.height + (this.height / 4));
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