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

eval("const Player = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\nconst Boss = __webpack_require__(/*! ./scripts/boss */ \"./src/scripts/boss.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('med-mel');\n    const ctx = canvas.getContext('2d');\n    const player = new Player({ctx: ctx});\n    const boss = new Boss();\n\n    boss.draw(ctx);\n    player.draw(ctx);\n    //player.bindKeys();\n    player.bindKeys();\n})\n\n//# sourceURL=webpack://medieval_melee/./src/index.js?");

/***/ }),

/***/ "./src/scripts/boss.js":
/*!*****************************!*\
  !*** ./src/scripts/boss.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Character = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\n\n\nfunction Boss(options = {}) {\n    options.pos = [350, 190];\n    options.vel = 25;\n    options.height = 95;\n    options.width = 75;\n    options.color = 'maroon';\n    Character.call(this, options);\n}\n\nfunction Surrogate() { }\nSurrogate.prototype = Character.prototype;\nBoss.prototype = new Surrogate();\nBoss.prototype.constructor = Boss;\n\nmodule.exports = Boss;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/boss.js?");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(module) {

eval("function Character(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.height = options.height;\n    this.width = options.width;\n    this.color = options.color;\n    this.ctx = options.ctx || undefined;\n}\n\nCharacter.prototype.draw = function(ctx){\n    ctx.clearRect(0,0,500,500);\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(...this.pos, this.width, this.height);\n}\n\nCharacter.prototype.bindKeys = function(){\n    let that = this;\n    key('w', function () { that.move([0, -(that.vel)]) });\n    key('a', function () { that.move([-(that.vel), 0]) });\n    key('s', function () { that.move([0, (that.vel)])});\n    key('d', function () { that.move([that.vel, 0]) });\n};\n\nCharacter.prototype.move = function (dir) {\n    this.pos[0] += dir[0];\n    this.pos[1] += dir[1];\n    this.draw(this.ctx);\n};\n\nmodule.exports = Character;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/character.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Character = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\n\n\nfunction Player(options = {}){\n    options.pos = [100, 225];\n    options.vel = 25;\n    options.height = 45;\n    options.width = 30;\n    options.color = 'navy';\n    Character.call(this, options);\n};\n\nfunction Surrogate() { };\nSurrogate.prototype = Character.prototype;\nPlayer.prototype = new Surrogate();\nPlayer.prototype.constructor = Player;\n\nmodule.exports = Player;\n\n\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/player.js?");

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