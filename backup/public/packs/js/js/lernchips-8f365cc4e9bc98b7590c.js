/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/lernchips.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/lernchips.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/js/lernchips.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/mkeller/rails/lernchips/app/javascript/packs/js/lernchips.js: Unterminated template. (106:28)\n\n  104 |     this.createFolder = function() {\n  105 |         const blan = document.getElementById(\"blanket\");\n> 106 |         const newBlanket = `\n      |                             ^\n  107 |             <div id=\"newBlanket\" class=\"new-blanket open\">\n  108 |                 <div class=\"popup\">\n  109 |                   <form id=\"myForm\" action=\"/action_page.php\">\n    at Parser._raise (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:510:17)\n    at Parser.raiseWithData (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:503:17)\n    at Parser.raise (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:464:17)\n    at Parser.readTmplToken (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:2745:20)\n    at Parser.nextToken (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:1835:12)\n    at Parser.next (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:1743:10)\n    at Parser.parseTemplate (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12035:10)\n    at Parser.parseExprAtom (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:11589:21)\n    at Parser.parseExprSubscripts (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:11217:23)\n    at Parser.parseUpdate (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:11197:21)\n    at Parser.parseMaybeUnary (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:11172:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10986:59)\n    at Parser.parseExprOps (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10993:23)\n    at Parser.parseMaybeConditional (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10963:23)\n    at Parser.parseMaybeAssign (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10926:21)\n    at /home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10888:39\n    at Parser.allowInAnd (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12714:16)\n    at Parser.parseMaybeAssignAllowIn (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:10888:17)\n    at Parser.parseVar (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13601:70)\n    at Parser.parseVarStatement (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13415:10)\n    at Parser.parseStatementContent (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13000:21)\n    at Parser.parseStatement (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12931:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13520:25)\n    at Parser.parseBlockBody (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13511:10)\n    at Parser.parseBlock (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13495:10)\n    at Parser.parseFunctionBody (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12372:24)\n    at Parser.parseFunctionBodyAndFinish (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12356:10)\n    at /home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13653:12\n    at Parser.withSmartMixTopicForbiddingContext (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:12691:14)\n    at Parser.parseFunction (/home/mkeller/rails/lernchips/node_modules/@babel/parser/lib/index.js:13652:10)");

/***/ })

/******/ });
//# sourceMappingURL=lernchips-8f365cc4e9bc98b7590c.js.map