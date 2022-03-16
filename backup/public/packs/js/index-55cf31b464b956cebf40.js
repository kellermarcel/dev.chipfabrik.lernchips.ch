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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/application */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/file.js */ "./app/javascript/packs/js/file.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./app/javascript/packs/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/header.js */ "./app/javascript/packs/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_3__);
global.toastr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'toastr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/javascript/packs/js/file.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/js/file.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/avatar.png */ "./app/javascript/packs/js/img/avatar.png");
/* harmony import */ var _img_avatar_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_avatar_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_css_sprites_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/css_sprites.png */ "./app/javascript/packs/js/img/css_sprites.png");
/* harmony import */ var _img_css_sprites_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_css_sprites_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_logo_w_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/logo-w.svg */ "./app/javascript/packs/js/img/logo-w.svg");
/* harmony import */ var _img_logo_w_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo_w_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_top_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/top-img.png */ "./app/javascript/packs/js/img/top-img.png");
/* harmony import */ var _img_top_img_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_top_img_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_select_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/select.svg */ "./app/javascript/packs/js/img/select.svg");
/* harmony import */ var _img_select_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_select_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_audio_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/audio.svg */ "./app/javascript/packs/js/img/audio.svg");
/* harmony import */ var _img_audio_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_audio_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_text_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/text.svg */ "./app/javascript/packs/js/img/text.svg");
/* harmony import */ var _img_text_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_text_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_cards_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/cards.svg */ "./app/javascript/packs/js/img/cards.svg");
/* harmony import */ var _img_cards_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_cards_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_quizes_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/quizes.svg */ "./app/javascript/packs/js/img/quizes.svg");
/* harmony import */ var _img_quizes_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_quizes_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_finden_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/finden.svg */ "./app/javascript/packs/js/img/finden.svg");
/* harmony import */ var _img_finden_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_finden_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_interaction_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/interaction.svg */ "./app/javascript/packs/js/img/interaction.svg");
/* harmony import */ var _img_interaction_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_interaction_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_star_b_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/star-b.png */ "./app/javascript/packs/js/img/star-b.png");
/* harmony import */ var _img_star_b_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_star_b_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_star_w_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/star-w.png */ "./app/javascript/packs/js/img/star-w.png");
/* harmony import */ var _img_star_w_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_star_w_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_live_feedback_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/live-feedback.png */ "./app/javascript/packs/js/img/live-feedback.png");
/* harmony import */ var _img_live_feedback_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_live_feedback_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_organisiere_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/organisiere.png */ "./app/javascript/packs/js/img/organisiere.png");
/* harmony import */ var _img_organisiere_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_organisiere_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_schnell_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/schnell.png */ "./app/javascript/packs/js/img/schnell.png");
/* harmony import */ var _img_schnell_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_schnell_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_sharing_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/sharing.png */ "./app/javascript/packs/js/img/sharing.png");
/* harmony import */ var _img_sharing_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_sharing_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_verknupfe_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/verknupfe.png */ "./app/javascript/packs/js/img/verknupfe.png");
/* harmony import */ var _img_verknupfe_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_verknupfe_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_zusammen_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/zusammen.png */ "./app/javascript/packs/js/img/zusammen.png");
/* harmony import */ var _img_zusammen_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_zusammen_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_Bildreihenfolge_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/Bildreihenfolge.svg */ "./app/javascript/packs/js/img/Bildreihenfolge.svg");
/* harmony import */ var _img_Bildreihenfolge_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_Bildreihenfolge_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_Dialogkarten_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/Dialogkarten.svg */ "./app/javascript/packs/js/img/Dialogkarten.svg");
/* harmony import */ var _img_Dialogkarten_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_Dialogkarten_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_DragDrop_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/DragDrop.svg */ "./app/javascript/packs/js/img/DragDrop.svg");
/* harmony import */ var _img_DragDrop_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_DragDrop_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _img_Hotspot_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./img/Hotspot.svg */ "./app/javascript/packs/js/img/Hotspot.svg");
/* harmony import */ var _img_Hotspot_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_img_Hotspot_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _img_InteraktivesVideo_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./img/InteraktivesVideo.svg */ "./app/javascript/packs/js/img/InteraktivesVideo.svg");
/* harmony import */ var _img_InteraktivesVideo_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_img_InteraktivesVideo_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _img_KombinierteAnsicht_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./img/KombinierteAnsicht.svg */ "./app/javascript/packs/js/img/KombinierteAnsicht.svg");
/* harmony import */ var _img_KombinierteAnsicht_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_img_KombinierteAnsicht_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _img_Kurspr_sentation_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./img/Kurspräsentation.svg */ "./app/javascript/packs/js/img/Kurspräsentation.svg");
/* harmony import */ var _img_Kurspr_sentation_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_img_Kurspr_sentation_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _img_MultipleChoice_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./img/MultipleChoice.svg */ "./app/javascript/packs/js/img/MultipleChoice.svg");
/* harmony import */ var _img_MultipleChoice_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_img_MultipleChoice_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _img_Worte_einf_gen_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./img/Worte-einfügen.svg */ "./app/javascript/packs/js/img/Worte-einfügen.svg");
/* harmony import */ var _img_Worte_einf_gen_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_img_Worte_einf_gen_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _img_Worte_markieren_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./img/Worte-markieren.svg */ "./app/javascript/packs/js/img/Worte-markieren.svg");
/* harmony import */ var _img_Worte_markieren_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_img_Worte_markieren_svg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _img_AlleLernchiptypen_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./img/AlleLernchiptypen.svg */ "./app/javascript/packs/js/img/AlleLernchiptypen.svg");
/* harmony import */ var _img_AlleLernchiptypen_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_img_AlleLernchiptypen_svg__WEBPACK_IMPORTED_MODULE_29__);































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

/***/ }),

/***/ "./app/javascript/packs/js/img/AlleLernchiptypen.svg":
/*!***********************************************************!*\
  !*** ./app/javascript/packs/js/img/AlleLernchiptypen.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/AlleLernchiptypen-1c522b9bbcf94232fef69406aa356a48.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Bildreihenfolge.svg":
/*!*********************************************************!*\
  !*** ./app/javascript/packs/js/img/Bildreihenfolge.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Bildreihenfolge-0b267f8d5dc9775e27d9ea2082cfa970.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Dialogkarten.svg":
/*!******************************************************!*\
  !*** ./app/javascript/packs/js/img/Dialogkarten.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Dialogkarten-88397f547f2ae0e250cc11639b53f5db.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/DragDrop.svg":
/*!**************************************************!*\
  !*** ./app/javascript/packs/js/img/DragDrop.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/DragDrop-01723c96316c77c7dce30b36792d0b86.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Hotspot.svg":
/*!*************************************************!*\
  !*** ./app/javascript/packs/js/img/Hotspot.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Hotspot-4bda4f48eec936739a65e7d027f555dd.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/InteraktivesVideo.svg":
/*!***********************************************************!*\
  !*** ./app/javascript/packs/js/img/InteraktivesVideo.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/InteraktivesVideo-5dc8147716942cf3e7960c3d1ee94a6d.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/KombinierteAnsicht.svg":
/*!************************************************************!*\
  !*** ./app/javascript/packs/js/img/KombinierteAnsicht.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/KombinierteAnsicht-7f703af2a87253a0fb12fc3bf8c3d17a.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Kurspräsentation.svg":
/*!**********************************************************!*\
  !*** ./app/javascript/packs/js/img/Kurspräsentation.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Kurspräsentation-f59597a55571db864f18c672629a2b05.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/MultipleChoice.svg":
/*!********************************************************!*\
  !*** ./app/javascript/packs/js/img/MultipleChoice.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/MultipleChoice-7e5c91eb3a59122bedee0a59b55056b1.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Worte-einfügen.svg":
/*!********************************************************!*\
  !*** ./app/javascript/packs/js/img/Worte-einfügen.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Worte-einfügen-16df38ec806858ec1f962171a3a18473.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/Worte-markieren.svg":
/*!*********************************************************!*\
  !*** ./app/javascript/packs/js/img/Worte-markieren.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/Worte-markieren-26d9e0c249140718bc23ffc937ed40fd.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/audio.svg":
/*!***********************************************!*\
  !*** ./app/javascript/packs/js/img/audio.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/audio-c6aa6910c0ca9680f9ead47dd7c6804c.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/avatar.png":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/avatar.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/avatar-e497e4997047b223d6b09e294315fce9.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/cards.svg":
/*!***********************************************!*\
  !*** ./app/javascript/packs/js/img/cards.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/cards-d17f5b0d6dd24973e47850adc37e7c04.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/css_sprites.png":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/js/img/css_sprites.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/css_sprites-2e8a4b4bd2d27e352246d7997dd780de.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/finden.svg":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/finden.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/finden-a18db10f5c90c07880afeded2e371d49.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/interaction.svg":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/js/img/interaction.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/interaction-72b04533c346459b75bc2f922186895f.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/live-feedback.png":
/*!*******************************************************!*\
  !*** ./app/javascript/packs/js/img/live-feedback.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/live-feedback-c913732af0263435df8c4ef643baf9d5.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/logo-w.svg":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/logo-w.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/logo-w-47eb572c159c8a142ed38854b0fee2a3.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/organisiere.png":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/js/img/organisiere.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/organisiere-64c192288dc7d1724693d91014935488.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/quizes.svg":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/quizes.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/quizes-6ff4ace71cfd2ff1dbb2d32756533e7d.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/schnell.png":
/*!*************************************************!*\
  !*** ./app/javascript/packs/js/img/schnell.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/schnell-1dccbae5a2e5e139fdc409d6ec8c8910.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/select.svg":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/select.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/select-d0469b58efe6449232c3e6764b292d27.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/sharing.png":
/*!*************************************************!*\
  !*** ./app/javascript/packs/js/img/sharing.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/sharing-f1ffadca46e70e7214a2ad6e6be9dda4.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/star-b.png":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/star-b.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/star-b-d290efb93e666533cb661fc974354d30.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/star-w.png":
/*!************************************************!*\
  !*** ./app/javascript/packs/js/img/star-w.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/star-w-15dd67ef695da47b765e7e84560763bc.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/text.svg":
/*!**********************************************!*\
  !*** ./app/javascript/packs/js/img/text.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/text-1c8d4f8242515ef27baa342c92e67920.svg";

/***/ }),

/***/ "./app/javascript/packs/js/img/top-img.png":
/*!*************************************************!*\
  !*** ./app/javascript/packs/js/img/top-img.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/top-img-130df53a5cfb1abdfabce2e7b394de9b.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/verknupfe.png":
/*!***************************************************!*\
  !*** ./app/javascript/packs/js/img/verknupfe.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/verknupfe-bf62a665c14a762e254eb299f1b9034f.png";

/***/ }),

/***/ "./app/javascript/packs/js/img/zusammen.png":
/*!**************************************************!*\
  !*** ./app/javascript/packs/js/img/zusammen.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/js/img/zusammen-d38289583c006b8ed6b9b94f61100e70.png";

/***/ }),

/***/ "./app/javascript/packs/js/main.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/js/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//set filter on home page down
function setFilter() {
  var wrapper = document.getElementById('wrFilter');
  var links = wrapper.querySelectorAll('.filter-tag a');
  links[0].classList.add('active');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (ev) {
      ev.preventDefault();
      var current = wrapper.querySelectorAll('.active');

      if (current.length > 0) {
        current[0].classList.remove('active');
      }

      this.classList.add('active');
    });
  }
}

;
document.addEventListener('DOMContentLoaded', function () {
  setFilter();
}, false);

/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import 'toastr'\n  │         ^^^^^^^^\n  ╵\n  app/javascript/stylesheets/application.scss 1:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=index-55cf31b464b956cebf40.js.map