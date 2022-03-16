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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/contactPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/contactPage.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/contactPage.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'normalize.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../sass/custom.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../img/contact-page/contact.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../img/star-b.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../img/reg-page/form_icons.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/header.js */ "./app/javascript/packs/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../js/contact-page.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








/***/ }),

/***/ "./app/javascript/packs/js/header.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/js/header.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mobe = mobe || {};
mobe.loadPage = new function () {
  this.init = function () {
    var isInner = window.location.pathname,
        currentOrigin = window.location.origin;

    if (mobe.checkUserLogin()) {
      mobe.changeMenu.init();
      mobe.addAdminMenu.init();
    } else if (isInner === '/test-preview.html' || isInner === '/test-edit.html') {
      window.location.href = currentOrigin;
    }
  };
}();
mobe.makeMenu = new function () {
  this.init = function () {
    var mb = document.querySelector('.mobtn'),
        hd = document.querySelector('.top-menu');
    mb.addEventListener('click', function () {
      this.classList.toggle('open');
      hd.classList.toggle('open');
    });
  };
}();
mobe.logForm = new function () {
  var self = this;
  this.ma = document.getElementById('menuAdmin');

  this.init = function () {
    if (self.ma) {
      self.ma.addEventListener('click', function (ev) {
        if (ev.target.classList.contains('user-login')) {
          self.createLogin();
        }
      });
    }
  };

  this.createLogin = function () {
    var foote = document.getElementById("pageFooter");
    var newBlanket = "\n            <div id=\"newBlanket\" class=\"new-blanket open\">\n                <div class=\"popup\">\n                    <form id=\"loginForm\" name=\"login_form\">\n                        <span class=\"modal-close abbrechen\">&#43;</span>\n                        <h5 class=\"bl-title\">Login</h5>\n                        <p class=\"inp-email\">\n                            <span class=\"email-ico\"></span><input type=\"text\" id=\"logEmail\" name=\"log_email\" value=\"\" placeholder=\"mail@example.com\">\n                        </p>\n                        <p class=\"inp-pwd\">\n                            <span class=\"pwd-ico\"></span><input type=\"password\" id=\"logPass\" name=\"log_pass\" value=\"\" placeholder=\"enter password\">\n                        </p>\n                        <p class=\"remember-me\">\n                        <input type=\"checkbox\" id=\"rememberMe\" value>\n                        <label class=\"fcheck-rme\" for=\"rememberMe\">Remember me</label>&nbsp;|\n                        &nbsp;<a href=\"javascript:void(0);\">Password vergessen?</a></p>\n                        <p class=\"btn-login\">\n                            <a href=\"javascript:void(0);\" id=\"loginUser\" class=\"btn-small btn-green log-user\">Anmelden</a>\n                        </p>\n                        <p class=\"link-register\">Noch nicht Mitglied?\n                            <a href=\"/reg-page.html\" id=\"newReg\" class=\"link-green new-reg\">Registrieren</a>\n                        </p>\n                    </form>\n                </div>\n            </div>";
    foote.insertAdjacentHTML('afterend', newBlanket);
  };
}();
mobe.closeNewBlanket = new function () {
  this.db = document.body;
  var self = this;

  this.init = function () {
    console.log("hier");
    self.db.addEventListener('click', function (ev) {
      if (document.querySelector(".abbrechen") && ev.target.classList.contains('abbrechen')) {
        mobe.closeNewBlanket.closeBlanket();
      }
    });
  };

  this.closeBlanket = function () {
    var bl = document.getElementById("newBlanket");
    bl.animate([{
      opacity: 1
    }, {
      opacity: 0
    }], {
      duration: 450,
      fill: 'forwards'
    });
    setTimeout(function () {
      bl.remove();
    }, 450);
  };
}();
mobe.regUser = new function () {
  this.db = document.body;
  var self = this;

  this.init = function () {
    self.db.addEventListener('click', function (ev) {
      if (document.getElementById("registerUser") && ev.target.classList.contains('reg-user')) {
        var regForm = document.forms.register_form,
            formData = new FormData(regForm); //ev.preventDefault();

        self.checkData(formData);
      }
    });
  };

  this.checkData = function (formData) {
    if (!formData.get('login_email')) {
      console.log('email is obligate '); //check please this value
    } else if (!formData.get('login_pass')) {
      console.log('pass is obligate'); //check please this value
    } else if (!formData.get('repeat_pass')) {
      console.log('repeat pass is obligate'); //check please this value
    } else {
      self.saveData(formData);
    }
  };

  this.saveData = function (formData) {
    var mail = formData.get('login_email'),
        pass = formData.get('login_pass'),
        r_pass = formData.get('repeat_pass');
    localStorage.setItem('em', mail);
    localStorage.setItem('pa', pass);
    localStorage.setItem('rpa', r_pass);
    mobe.closeNewBlanket.closeBlanket();
  };
}();
mobe.logUser = new function () {
  this.db = document.body;
  var self = this;

  this.init = function () {
    self.db.addEventListener('click', function (ev) {
      if (document.getElementById("loginUser") && ev.target.classList.contains('log-user')) {
        var logForm = document.forms.login_form,
            formData = new FormData(logForm); //ev.preventDefault();

        self.checkData(formData);
      }
    });
  };

  this.checkData = function (formData) {
    if (!formData.get('log_email')) {
      console.log('email is obligate fix please'); //check please this value
    } else if (!formData.get('log_pass')) {
      console.log('pass is obligate'); //check please this value
    } else {
      self.makeLogin(formData);
    }
  };

  this.makeLogin = function (formData) {
    var hashCode = function hashCode(s) {
      return s.split('').reduce(function (a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);
    };

    if (formData.get('log_email') !== localStorage.getItem('em')) {
      console.log('check your email please');
    } else if (formData.get('log_pass') !== localStorage.getItem('pa')) {
      console.log('check your pass');
    } else {
      var str = formData.get('log_email') + ' ' + formData.get('log_pass');
      sessionStorage.setItem('logged', hashCode(str));
      mobe.closeNewBlanket.closeBlanket(); // let or = window.location.origin,
      // pt = "/lernchips.html";
      // window.location.href = or + pt;

      mobe.changeMenu.init();
      mobe.addAdminMenu.init();
    }
  };
}();
mobe.changeMenu = new function () {
  this.init = function () {
    var tm = document.querySelector('.top-menu > ul'),
        firstLi = "\n            <li><a href=\"/lernchips.html\">Lernchips</a></li>\n        ";
    tm.insertAdjacentHTML('afterbegin', firstLi);
  };
}();
mobe.addAdminMenu = new function () {
  this.ma = document.getElementById('menuAdmin');
  var self = this;

  this.init = function () {
    var name = self.name();
    var userLinko = "\n        <nav class=\"user-link\">\n            <span class=\"user-avatar\"><img src=\"img/avatar.png\" alt=\"\"></span>\n            <span class=\"user-name\">".concat(name, "</span>\n        </nav>\n        <div class=\"wr-account-nav\">\n            <ul class=\"account-nav\">\n                <li class=\"accout-nav-item\">\n                    <span class=\"item-ico bg-einstellungen\"></span><a href=\"javascript:void(0)\">Kontoeinstellungen</a></li>\n                <li class=\"accout-nav-item\">\n                    <span class=\"item-ico bg-abo\"></span><a href=\"javascript:void(0)\">Meine Abonnements</a></li>\n                <li class=\"accout-nav-item\">\n                    <span class=\"item-ico bg-rechnungen\"></span><a href=\"javascript:void(0)\">Rechnungen</a></li>\n                <li class=\"accout-nav-item\">\n                    <span class=\"item-ico bg-abmelden\"></span><a class=\"exit-adminpart\" href=\"javascript:void(0)\">Abmelden</a></li>\n            </ul>\n        </div>\n        ");
    self.ma.innerHTML = userLinko;
  };

  this.name = function () {
    var res = localStorage.getItem('em').split('@');
    return res[0];
  };
}();

mobe.checkUserLogin = function () {
  var userCan = sessionStorage.getItem('logged');
  return userCan ? "autorized" : false;
};

mobe.makeAdminMenu = new function () {
  this.tn = document.querySelector('.top-nav');
  var self = this;

  this.init = function () {
    self.tn.addEventListener('click', function (ev) {
      var mn = document.querySelector('.wr-account-nav'),
          or = window.location.origin;

      if (document.getElementById("menuAdmin") && ev.target.classList.contains('user-name')) {
        mn.classList.toggle('open');
      } else if (ev.target.classList.contains('exit-adminpart')) {
        mn.classList.toggle('open');
        sessionStorage.removeItem('logged');
        window.location.href = or;
      }
    });
  };
}();
document.addEventListener('DOMContentLoaded', function () {
  mobe.loadPage.init();
  mobe.makeMenu.init();
  mobe.logForm.init();
  mobe.closeNewBlanket.init();
  mobe.regUser.init();
  mobe.logUser.init();
  mobe.makeAdminMenu.init();
}, false);

/***/ })

/******/ });
//# sourceMappingURL=contactPage-36e2eb850773d4cb8db4.js.map