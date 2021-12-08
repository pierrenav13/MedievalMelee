const Player = require('./player');
const Boss = require('./boss');
const { setInterval } = require('core-js');

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAlRXuQ62R3dClL1IQr_HMG0wOEcK5xcb0",
//     authDomain: "medieval-melee-a37fb.firebaseapp.com",
//     projectId: "medieval-melee-a37fb",
//     storageBucket: "medieval-melee-a37fb.appspot.com",
//     messagingSenderId: "559935509208",
//     appId: "1:559935509208:web:df6cf3461101d6c1bf7dad",
//     measurementId: "G-YWKJ6K4T13"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function Game(player, boss, canvas, ctx){
    this.player = player;
    this.boss = boss;
    this.canvas = canvas;
    this.DIM_X = this.canvas.width;
    this.DIM_Y = this.canvas.height;
    this.ctx = ctx;
    this.score = 0;
    this.keysPressed = {};
    this.bindMovement();
    let that = this;

    this.gameOver = false;
    this.instructions = document.getElementById('instruction-button');
    let boundShow = this.showInstructions.bind(this);
    let boundHide = this.hideInstructions.bind(this);
    this.instructions.addEventListener('mouseenter', boundShow);
    this.instructions.addEventListener('mouseleave', boundHide);
    this.startGame = document.getElementById('start-game')
    this.startGame.addEventListener('click', () => {
        for (let n = 0; n < 9; n++) {
            setInterval(() => {
                that.loopGame()
            }, 1);
        }
        that.startGame.style.display = 'none'
    })
    this.player.img.onload = function () {
        setInterval(() => {
            document.body.style.backgroundImage = url('https://cutewallpaper.org/21/pixel-castle-background/WIP-2D-Platformer-Asset-Pack-Medieval-Castle-Devlogs-.gif')
        }, 200);
    }

}

Game.prototype.showInstructions = function(){
    document.getElementById('instructions').style.display = 'flex';
}

Game.prototype.hideInstructions = function(){
    document.getElementById('instructions').style.display = 'none';
}

Game.prototype.bindMovement = function () {
    //debugger
    let that = this;
    window.addEventListener('keydown', function keyDown(e) {
        //debugger
        e.preventDefault();
        that.keysPressed[e.key] = true;
        

    })
    window.addEventListener('keyup', function keyUp(e) {
        e.preventDefault();
        that.keysPressed[e.key] = false;
    })
}

Game.prototype.draw = function(){
    this.player.drawImg();
    this.boss.draw(this.ctx);
};

Game.prototype.over = function(){
    if(this.player.pos[0] + 20 < this.boss.pos[0] + this.boss.width &&
        this.player.pos[0] + this.player.width > this.boss.pos[0] + 18 &&
        this.player.pos[1] + 18 < this.boss.pos[1] + this.boss.height &&
        this.player.height + this.player.pos[1] > this.boss.pos[1] + 10){
            this.gameOver = true;
            //alert('Game over');
        }
}

Game.prototype.move = function(x, y){
    if ((this.player.pos[0] + x) < (this.DIM_X - 50) && (this.player.pos[0] + x) > -2){
        this.player.pos[0] += x;
    } else{
        return false;
    }
    if ((this.player.pos[1] + y) < (this.DIM_Y - 70) && (this.player.pos[1] + y) > -2){
        this.player.pos[1] += y;
    } else{
        return false;
    }
    return true;
}

Game.prototype.loopGame = function(){
    if (this.gameOver === false) {
        this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        let moved = false;

        if (this.keysPressed.w) {
            //debugger
            this.move(0, -(this.player.vel))
            moved = true;
        } else if (this.keysPressed.s) {
            this.move(0, (this.player.vel))
            moved = true;
        }
        
        if (this.keysPressed.a) {
            this.move(-(this.player.vel), 0)
            this.player.direction = 1;
            moved = true;
        } else if (this.keysPressed.d) {
            this.move((this.player.vel), 0)
            moved = true;
            this.player.direction = 0;
        }

        if (moved){
            //500 ms intervals for animation
            this.player.frame += 2.6;
            if (this.player.frame > 3000){
                this.player.frame = 1;
            }
        } else{
            this.player.frame = 0;
        }
        let currentScore = document.getElementById('score')
        this.score += 1;
        currentScore.innerHTML = 'Score: ' + Math.floor((this.score / 50)).toString();

        this.boss.bounce(this.DIM_X, this.DIM_Y);
        this.draw();
        this.over();
    } else{
        document.getElementById('game-over').style.display = 'flex';
        //document.getElementById('instructions').style.display = 'flex';
    }
    //window.requestAnimationFrame(this.boundLoop);
}



module.exports = Game;