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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/reg_company.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/reg_company.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/reg_company.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mobe = mobe || {};
mobe = new function () {
  this.checkedForm = false;

  this.checkPolicy = function () {
    return document.getElementById('haveRead').checked;
  };

  this.setFocusComp = function () {
    var elem = document.getElementById("regForm");
    var inputo = elem.querySelectorAll('.block-text input');
    inputo.forEach(function (item, i, arr) {
      item.addEventListener("focus", function () {
        this.parentNode.classList.add('focused');
      }, true);
      item.addEventListener("blur", function () {
        this.parentNode.classList.remove('focused');
      }, true);
    });
  };

  this.lostFocusComp = function () {
    var self = this;
    var blockText = document.querySelectorAll('.block-text input');

    var _loop = function _loop(i) {
      var type = blockText[i].getAttribute('type');
      blockText[i].addEventListener("input", function (ev) {
        self.check(type, blockText[i]);
      });
    };

    for (var i = 0; i < blockText.length; i++) {
      _loop(i);
    }
  };

  this.check = function (type, item) {
    self = this;

    switch (type) {
      case 'text':
        if (!item.validity.valid) {
          item.parentNode.classList.remove('valid');
          item.parentNode.classList.add('novalid');
          self.checkedForm = false;
        } else {
          item.parentNode.classList.remove('novalid');
          item.parentNode.classList.add('valid');
          self.checkedForm = true;
        }

        break;

      case 'email':
        if (item.validity.typeMismatch) {
          item.parentNode.classList.remove('valid');
          item.parentNode.classList.add('novalid');
          self.checkedForm = false;
        } else {
          item.parentNode.classList.remove('novalid');
          item.parentNode.classList.add('valid');
          self.checkedForm = true;
        }

        break;

      case 'phone':
        if (item.validity.patternMismatch) {
          item.parentNode.classList.remove('valid');
          item.parentNode.classList.add('novalid');
          self.checkedForm = false;
        } else {
          item.parentNode.classList.remove('novalid');
          item.parentNode.classList.add('valid');
          self.checkedForm = true;
        }

        break;

      default:
        break;
    }

    ;
  };

  this.checkFormWeiter = function () {
    var self = this;
    var regWeiter = document.getElementById('regWeiter'),
        showMessage = document.querySelectorAll('.show-warn');
    regWeiter.addEventListener('click', function () {
      if (self.checkedForm && self.checkPolicy()) {
        self.regCompany();
        showMessage[0].textContent = "";
      } else {
        showMessage[0].textContent = "Alle Felder sind erforderlich, bitte überprüfe dein Eingaben.";
      }
    });
  };

  this.regCompany = function () {
    // registrieren company here please
    console.log('registrieren company here please');
  };
}();
document.addEventListener('DOMContentLoaded', function () {
  mobe.setFocusComp();
  mobe.lostFocusComp();
  mobe.checkFormWeiter();
}, false);

/***/ })

/******/ });
//# sourceMappingURL=reg_company-1e4186cc9bd3ac43739b.js.map