/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\nconst Boss = __webpack_require__(/*! ./scripts/boss */ \"./src/scripts/boss.js\");\nconst Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('med-mel');\n    const ctx = canvas.getContext('2d');\n    const player = new Player({ctx: ctx});\n    const boss = new Boss({ctx: ctx});\n    const game = new Game(player, boss, canvas, ctx);\n    game.draw();\n    //game.loopGame();\n\n    //boss.draw(ctx);\n    //player.draw(ctx);\n    //player.bindMovement();\n    //player.bindKeys();\n})\n\n//# sourceURL=webpack://medieval_melee/./src/index.js?");

/***/ }),

/***/ "./src/scripts/boss.js":
/*!*****************************!*\
  !*** ./src/scripts/boss.js ***!
  \*****************************/
/***/ (function(module) {

eval("// const Character = require('./character');\n\n\nfunction Boss(options = {}) {\n    // options.pos = [350, 190];\n    // options.vel = 25;\n    // options.height = 95;\n    // options.width = 75;\n    // options.color = 'maroon';\n\n    this.pos = [350, 190];\n    this.vel = 25;\n    this.height = 115;\n    this.width = 95;\n    this.color = 'maroon';\n    this.ctx = options.ctx;\n    this.img = new Image();\n}\n\nBoss.prototype.draw = function () {\n    this.img.src = 'src/scripts/ghost-idle.png';\n    this.ctx.drawImage(this.img, 20, 18, 53, 50, ...this.pos, this.width, this.height);\n\n    // this.ctx.clearRect(this.pos[0], this.pos[1], -(this.width), -(this.height));\n    // this.ctx.beginPath();\n    // this.ctx.fillStyle = this.color;\n    // this.ctx.fillRect(...this.pos, this.width, this.height);\n}\n\n// function Surrogate() { }\n// Surrogate.prototype = Character.prototype;\n// Boss.prototype = new Surrogate();\n// Boss.prototype.constructor = Boss;\n\nmodule.exports = Boss;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/boss.js?");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(module) {

eval("\n\nfunction Character(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.height = options.height;\n    this.width = options.width;\n    //this.keysPressed = {};\n    this.ctx = options.ctx;\n \n    this.direction = 0;\n    this.img = new Image();\n    \n    //this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png'\n\n    // this.img.onload = function(){\n    //     that.drawImg();\n    // }\n}\n\nCharacter.prototype.drawImg = function () {\n    if (this.direction === 0){\n        this.img.src = 'src/scripts/adventurer-v1.5-Sheet.png';\n    } else{\n        this.img.src = 'src/scripts/flipped-sprite-sheet.png'\n    }\n    let imgDim = [0,0,35,40];\n\n    this.ctx.drawImage(this.img, ...imgDim, ...this.pos, this.width, this.height);\n}\n\nCharacter.prototype.clearImg = function () {\n    this.ctx.clearRect(...this.pos, this.width, this.height);\n}\n\n\n\n\nCharacter.prototype.bindKeys = function(){\n    let that = this;\n    key('w', function () { \n        that.movePlayer([0, -(that.vel)]) \n    });\n    key('a', function () { \n        that.movePlayer([-(that.vel), 0]) \n    });\n    key('s', function () { \n        that.movePlayer([0, (that.vel)])\n    });\n    key('d', function () { \n        that.movePlayer([that.vel, 0]) \n    });\n};\n\n// Character.prototype.bindMovement = function () {\n//     //debugger\n//     let that = this;\n//     window.addEventListener('keydown', function(e){\n//         that.keysPressed[e.key] = true;\n//     })\n//     window.addEventListener('keyup', function(e){\n//         that.keysPressed[e.key] = false;\n//     })\n\n    \n// }\n\n\n// Character.prototype.movePlayer = function (dir) {\n//     //this.clearImg();\n//     this.pos[0] += dir[0];\n//     this.pos[1] += dir[1];\n//     //this.drawImg();\n//     //this.draw(this.ctx);\n//     //console.log(this.pos);\n// };\n\nmodule.exports = Character;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/character.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\nconst Boss = __webpack_require__(/*! ./boss */ \"./src/scripts/boss.js\");\n\nfunction Game(player, boss, canvas, ctx){\n    this.player = player;\n    this.boss = boss;\n    this.canvas = canvas;\n    this.DIM_X = this.canvas.width;\n    this.DIM_Y = this.canvas.height;\n    this.ctx = ctx;\n    this.keysPressed = {};\n    //this.player.bindKeys();\n    this.bindMovement();\n    let that = this;\n    this.boundLoop = this.loopGame.bind(this);\n    this.player.img.onload = function () {\n        that.loopGame();\n    }\n\n}\n\nGame.prototype.bindMovement = function () {\n    //debugger\n    let that = this;\n    window.addEventListener('keydown', function (e) {\n        //debugger\n        that.keysPressed[e.key] = true;\n    })\n    window.addEventListener('keyup', function (e) {\n        that.keysPressed[e.key] = false;\n    })\n}\n\nGame.prototype.draw = function(){\n    this.player.drawImg();\n    this.boss.draw(this.ctx);\n};\n\nGame.prototype.over = function(){\n    //alert('In over()')\n    if(this.player.pos[0] < this.boss.pos[0] + this.boss.width &&\n        this.player.pos[0] + this.player.width > this.boss.pos[0] &&\n        this.player.pos[1] < this.boss.pos[1] + this.boss.width &&\n        this.player.height + this.player.pos[1] > this.boss.pos[1]){\n            alert('Game Over');\n        }\n}\n\nGame.prototype.move = function(x, y){\n    if ((this.player.pos[0] + x) < (this.DIM_X - 50) && (this.player.pos[0] + x) > -20){\n        this.player.pos[0] += x;\n    }\n    if ((this.player.pos[1] + y) < (this.DIM_Y - 70) && (this.player.pos[1] + y) > -2){\n        this.player.pos[1] += y;\n    }\n    \n    //this.player.pos[1] += y;\n}\n\nGame.prototype.loopGame = function(){\n    this.ctx.clearRect(0, 0, 500, 500);\n    if (this.keysPressed.w) {\n        //debugger\n        this.move(0, -(this.player.vel))\n        //this.player.pos[1] -= this.player.vel;\n    } else if (this.keysPressed.s) {\n        this.move(0, (this.player.vel))\n        //this.player.pos[1] += this.player.vel;\n    }\n    \n    if (this.keysPressed.a) {\n        this.move(-(this.player.vel), 0)\n        //this.player.pos[0] -= this.player.vel;\n        this.player.direction = 1;\n    } else if (this.keysPressed.d) {\n        this.move((this.player.vel), 0)\n        //this.player.pos[0] += this.player.vel;\n        this.player.direction = 0;\n    }\n\n    this.draw();\n    this.over();\n    window.requestAnimationFrame(this.boundLoop);\n}\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Character = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\n\nfunction Player(options = {}){\n    options.pos = [100, 225];\n    options.vel = 0.3;\n    options.height = 70;\n    options.width = 50;\n    options.color = 'navy';\n    Character.call(this, options);\n};\n\n\nfunction Surrogate() { };\nSurrogate.prototype = Character.prototype;\nPlayer.prototype = new Surrogate();\nPlayer.prototype.constructor = Player;\n\nmodule.exports = Player;\n\n\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;