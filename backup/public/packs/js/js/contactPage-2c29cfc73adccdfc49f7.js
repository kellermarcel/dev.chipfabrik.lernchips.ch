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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/contactPage.bundle.js":
/*!*******************************************************!*\
  !*** ./app/javascript/packs/js/contactPage.bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var e = {
    7295: function _() {
      var e = e || {};
      e = new function () {
        this.checkedForm = !1, this.db = document.body, this.checkPolicy = function () {
          return document.getElementById("haveRead").checked;
        }, this.setFocusComp = function () {
          document.getElementById("contForm").querySelectorAll(".block-text input").forEach(function (e, n, t) {
            e.addEventListener("focus", function () {
              this.parentNode.classList.add("focused");
            }, !0), e.addEventListener("blur", function () {
              this.parentNode.classList.remove("focused");
            }, !0);
          });
        }, this.lostFocusComp = function () {
          for (var e = this, n = document.querySelectorAll(".block-text input"), t = function t(_t) {
            var s = n[_t].getAttribute("type");

            n[_t].addEventListener("input", function (a) {
              e.check(s, n[_t]);
            });
          }, s = 0; s < n.length; s++) {
            t(s);
          }
        }, this.check = function (e, n) {
          switch (self = this, e) {
            case "text":
              n.validity.valid ? (n.parentNode.classList.remove("novalid"), n.parentNode.classList.add("valid"), self.checkedForm = !0) : (n.parentNode.classList.remove("valid"), n.parentNode.classList.add("novalid"), self.checkedForm = !1);
              break;

            case "email":
              n.validity.typeMismatch ? (n.parentNode.classList.remove("valid"), n.parentNode.classList.add("novalid"), self.checkedForm = !1) : (n.parentNode.classList.remove("novalid"), n.parentNode.classList.add("valid"), self.checkedForm = !0);
              break;

            case "phone":
              n.validity.patternMismatch ? (n.parentNode.classList.remove("valid"), n.parentNode.classList.add("novalid"), self.checkedForm = !1) : (n.parentNode.classList.remove("novalid"), n.parentNode.classList.add("valid"), self.checkedForm = !0);
          }
        }, this.checkFormWeiter = function () {
          var e = this,
              n = document.getElementById("contSend"),
              t = document.querySelectorAll(".show-warn");
          n.addEventListener("click", function () {
            e.checkedForm && e.checkPolicy() ? (e.sendMess(), t[0].textContent = "", e.successForm()) : t[0].textContent = "Alle Felder sind erforderlich, bitte überprüfe dein Eingaben.";
          });
        }, this.sendMess = function () {
          console.log("get here message for Contact page");
        }, this.successForm = function () {
          document.getElementById("pageFooter").insertAdjacentHTML("afterend", '\n            <div id="sucsBlanket" class="sucs-blanket open abbrech">\n                <div class="popup">\n                    <span class="modal-close abbrech">&#43;</span>\n                    <h5 class="bl-title">Contact us</h5>\n                    <p class="sucs-icon"><span class="check-ico"></span></p>\n                    <p class="sucs-mess">Your message has been successfully send! Our managers will answer you during the working day.</p>\n                    <p class="sucs-btn"><a href="/contact-page.html" id="newReg" class="btn btn-yellow">Continue</a></p>\n                </div>\n            </div>\n            ');
        }, this.init = function () {
          var e = this;
          e.db.addEventListener("click", function (n) {
            document.querySelector(".abbrech") && n.target.classList.contains("abbrech") && e.closeBlanket();
          });
        }, this.closeBlanket = function () {
          var e = document.getElementById("sucsBlanket");
          e.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: 450,
            fill: "forwards"
          }), setTimeout(function () {
            e.remove();
          }, 450);
        };
      }(), document.addEventListener("DOMContentLoaded", function () {
        e.setFocusComp(), e.lostFocusComp(), e.checkFormWeiter(), e.init();
      }, !1);
    },
    1724: function _() {
      var e = e || {};
      e.loadPage = new function () {
        this.init = function () {
          var n = window.location.pathname,
              t = window.location.origin;
          e.checkUserLogin() ? (e.changeMenu.init(), e.addAdminMenu.init()) : "/test-preview.html" !== n && "/test-edit.html" !== n || (window.location.href = t);
        };
      }(), e.makeMenu = new function () {
        this.init = function () {
          var e = document.querySelector(".mobtn"),
              n = document.querySelector(".top-menu");
          e.addEventListener("click", function () {
            this.classList.toggle("open"), n.classList.toggle("open");
          });
        };
      }(), e.logForm = new function () {
        var e = this;
        this.ma = document.getElementById("menuAdmin"), this.init = function () {
          e.ma && e.ma.addEventListener("click", function (n) {
            n.target.classList.contains("user-login") && e.createLogin();
          });
        }, this.createLogin = function () {
          document.getElementById("pageFooter").insertAdjacentHTML("afterend", '\n            <div id="newBlanket" class="new-blanket open">\n                <div class="popup">\n                    <form id="loginForm" name="login_form">\n                        <span class="modal-close abbrechen">&#43;</span>\n                        <h5 class="bl-title">Login NEU</h5>\n                        <p class="inp-email">\n                            <span class="email-ico"></span><input type="text" id="logEmail" name="log_email" value="" placeholder="mail@example.com">\n                        </p>\n                        <p class="inp-pwd">\n                            <span class="pwd-ico"></span><input type="password" id="logPass" name="log_pass" value="" placeholder="enter password">\n                        </p>\n                        <p class="remember-me">\n                        <input type="checkbox" id="rememberMe" value>\n                        <label class="fcheck-rme" for="rememberMe">Remember me</label>&nbsp;|\n                        &nbsp;<a href="javascript:void(0);">Password vergessen?</a></p>\n                        <p class="btn-login">\n                            <a href="javascript:void(0);" id="loginUser" class="btn-small btn-green log-user">Anmelden</a>\n                        </p>\n                        <p class="link-register">Noch nicht Mitglied?\n                            <a href="/reg-page.html" id="newReg" class="link-green new-reg">Registrieren</a>\n                        </p>\n                    </form>\n                </div>\n            </div>');
        };
      }(), e.closeNewBlanket = new function () {
        this.db = document.body;
        var n = this;
        this.init = function () {
          n.db.addEventListener("click", function (n) {
            document.querySelector(".abbrechen") && n.target.classList.contains("abbrechen") && e.closeNewBlanket.closeBlanket();
          });
        }, this.closeBlanket = function () {
          var e = document.getElementById("newBlanket");
          e.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: 450,
            fill: "forwards"
          }), setTimeout(function () {
            e.remove();
          }, 450);
        };
      }(), e.regUser = new function () {
        this.db = document.body;
        var n = this;
        this.init = function () {
          n.db.addEventListener("click", function (e) {
            if (document.getElementById("registerUser") && e.target.classList.contains("reg-user")) {
              var t = document.forms.register_form,
                  s = new FormData(t);
              n.checkData(s);
            }
          });
        }, this.checkData = function (e) {
          e.get("login_email") ? e.get("login_pass") ? e.get("repeat_pass") ? n.saveData(e) : console.log("repeat pass is obligate") : console.log("pass is obligate") : console.log("email is obligate ");
        }, this.saveData = function (n) {
          var t = n.get("login_email"),
              s = n.get("login_pass"),
              a = n.get("repeat_pass");
          localStorage.setItem("em", t), localStorage.setItem("pa", s), localStorage.setItem("rpa", a), e.closeNewBlanket.closeBlanket();
        };
      }(), e.logUser = new function () {
        this.db = document.body;
        var n = this;
        this.init = function () {
          n.db.addEventListener("click", function (e) {
            if (document.getElementById("loginUser") && e.target.classList.contains("log-user")) {
              var t = document.forms.login_form,
                  s = new FormData(t);
              n.checkData(s);
            }
          });
        }, this.checkData = function (e) {
          e.get("log_email") ? e.get("log_pass") ? n.makeLogin(e) : console.log("pass is obligate") : console.log("email is obligate fix please");
        }, this.makeLogin = function (n) {
          if (n.get("log_email") !== localStorage.getItem("em")) console.log("check your email");else if (n.get("log_pass") !== localStorage.getItem("pa")) console.log("check your pass");else {
            var t = n.get("log_email") + " " + n.get("log_pass");
            sessionStorage.setItem("logged", t.split("").reduce(function (e, n) {
              return (e = (e << 5) - e + n.charCodeAt(0)) & e;
            }, 0)), e.closeNewBlanket.closeBlanket(), e.changeMenu.init(), e.addAdminMenu.init();
          }
        };
      }(), e.changeMenu = new function () {
        this.init = function () {
          document.querySelector(".top-menu > ul").insertAdjacentHTML("afterbegin", '\n            <li><a href="/lernchips.html">Lernchips</a></li>\n        ');
        };
      }(), e.addAdminMenu = new function () {
        this.ma = document.getElementById("menuAdmin");
        var e = this;
        this.init = function () {
          var n = e.name(),
              t = '\n        <nav class="user-link">\n            <span class="user-avatar"><img src="img/avatar.png" alt=""></span>\n            <span class="user-name">'.concat(n, '</span>\n        </nav>\n        <div class="wr-account-nav">\n            <ul class="account-nav">\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-einstellungen"></span><a href="javascript:void(0)">Kontoeinstellungen</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-abo"></span><a href="javascript:void(0)">Meine Abonnements</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-rechnungen"></span><a href="javascript:void(0)">Rechnungen</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-abmelden"></span><a class="exit-adminpart" href="javascript:void(0)">Abmelden</a></li>\n            </ul>\n        </div>\n        ');
          e.ma.innerHTML = t;
        }, this.name = function () {
          return localStorage.getItem("em").split("@")[0];
        };
      }(), e.checkUserLogin = function () {
        return !!sessionStorage.getItem("logged") && "autorized";
      }, e.makeAdminMenu = new function () {
        this.tn = document.querySelector(".top-nav");
        var e = this;

        this.init = function () {
          e.tn.addEventListener("click", function (e) {
            var n = document.querySelector(".wr-account-nav"),
                t = window.location.origin;
            document.getElementById("menuAdmin") && e.target.classList.contains("user-name") ? n.classList.toggle("open") : e.target.classList.contains("exit-adminpart") && (n.classList.toggle("open"), sessionStorage.removeItem("logged"), window.location.href = t);
          });
        };
      }(), document.addEventListener("DOMContentLoaded", function () {
        e.loadPage.init(), e.makeMenu.init(), e.logForm.init(), e.closeNewBlanket.init(), e.regUser.init(), e.logUser.init(), e.makeAdminMenu.init();
      }, !1);
    },
    787: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/form_icons.png";
    },
    8272: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/star-b.png";
    }
  },
      n = {};

  function t(s) {
    var a = n[s];
    if (void 0 !== a) return a.exports;
    var i = n[s] = {
      exports: {}
    };
    return e[s](i, i.exports, t), i.exports;
  }

  t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, {
      a: n
    }), n;
  }, t.d = function (e, n) {
    for (var s in n) {
      t.o(n, s) && !t.o(e, s) && Object.defineProperty(e, s, {
        enumerable: !0,
        get: n[s]
      });
    }
  }, t.g = function () {
    if ("object" == typeof globalThis) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, function () {
    var e;
    t.g.importScripts && (e = t.g.location + "");
    var n = t.g.document;

    if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
      var s = n.getElementsByTagName("script");
      s.length && (e = s[s.length - 1].src);
    }

    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.p = e;
  }(), function () {
    "use strict";

    t(8272), t(787), t(1724), t(7295);
  }();
})();

/***/ }),

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

/***/ }),

/***/ 0:
/*!******************************************************************************************************!*\
  !*** multi ./app/javascript/packs/js/contactPage.bundle.js ./app/javascript/packs/js/contactPage.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mkeller/rails/lernchips/app/javascript/packs/js/contactPage.bundle.js */"./app/javascript/packs/js/contactPage.bundle.js");
module.exports = __webpack_require__(/*! /home/mkeller/rails/lernchips/app/javascript/packs/js/contactPage.js */"./app/javascript/packs/js/contactPage.js");


/***/ })

/******/ });
//# sourceMappingURL=contactPage-2c29cfc73adccdfc49f7.js.map