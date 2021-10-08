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

eval("const Character = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('med-mel');\n    const ctx = canvas.getContext('2d');\n    const tempPlayer = new Character({pos: [100, 225], vel: 0, height: 45, width: 30, color: 'navy'});\n    const tempBoss = new Character({pos: [350, 190], vel: 0, height: 95, width: 75, color: 'maroon'});\n    tempPlayer.draw(ctx);\n    tempBoss.draw(ctx);\n})\n\n//# sourceURL=webpack://medieval_melee/./src/index.js?");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(module) {

eval("function Character(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.height = options.height;\n    this.width = options.width;\n    this.color = options.color;\n}\n\nCharacter.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.fillRect(...this.pos, this.width, this.height);\n}\n\nmodule.exports = Character;\n\n//# sourceURL=webpack://medieval_melee/./src/scripts/character.js?");

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