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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/lernchips.bundle.js":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/js/lernchips.bundle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var e = {
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
                  i = new FormData(t);
              n.checkData(i);
            }
          });
        }, this.checkData = function (e) {
          e.get("login_email") ? e.get("login_pass") ? e.get("repeat_pass") ? n.saveData(e) : console.log("repeat pass is obligate") : console.log("pass is obligate") : console.log("email is obligate ");
        }, this.saveData = function (n) {
          var t = n.get("login_email"),
              i = n.get("login_pass"),
              s = n.get("repeat_pass");
          localStorage.setItem("em", t), localStorage.setItem("pa", i), localStorage.setItem("rpa", s), e.closeNewBlanket.closeBlanket();
        };
      }(), e.logUser = new function () {
        this.db = document.body;
        var n = this;
        this.init = function () {
          n.db.addEventListener("click", function (e) {
            if (document.getElementById("loginUser") && e.target.classList.contains("log-user")) {
              var t = document.forms.login_form,
                  i = new FormData(t);
              n.checkData(i);
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
    8035: function _() {
      var e = e || {};
      e.consistBtn = !1, e.navAccordion = new function () {
        this.init = function () {
          var n,
              t = document.getElementsByClassName("accordion"),
              i = document.getElementById("main_content").querySelector(".title-mp");

          for (n = 0; n < t.length; n++) {
            t[n].addEventListener("click", function () {
              i.innerText = this.innerText, this.classList.toggle("active"), e.consistBtn || (e.navAccordion.createBtns(), e.consistBtn = !0);
              var n = this.nextElementSibling;
              n.style.maxHeight ? n.style.maxHeight = null : n.style.maxHeight = n.scrollHeight + "px";
            });
          }
        }, this.createBtns = function () {
          sdb = document.querySelector(".sidebar .title-menu"), wrbtn = "<p class='create-btns'>\n                    <a data-name='new-folder' class='btn-normal btn-beige-green'><span class=\"btn-plus\"></span>Add new Folder</a>\n                    \n                </p>", sdb.insertAdjacentHTML("beforebegin", wrbtn);
        };
      }(), e.leftMenu = new function () {
        this.init = function () {
          var e = document.querySelector(".switch-menu"),
              n = document.querySelector(".hide-menu"),
              t = document.querySelector(".manage-page .sidebar");
          e.addEventListener("click", function () {
            t.classList.toggle("open");
          }), n.addEventListener("click", function () {
            t.classList.toggle("open");
          });
        };
      }(), e.showPop = new function () {
        this.init = function () {
          var e = document.getElementById("blanket");
          setTimeout(function () {
            e.classList.add("open"), document.body.classList.toggle("noscroll");
          }, 2e3);
        };
      }(), e.closePop = new function () {
        this.init = function () {
          var e = document.querySelector(".close-pop"),
              n = document.getElementById("blanket");
          e.addEventListener("click", function () {
            n.animate([{
              opacity: 1
            }, {
              opacity: 0
            }], {
              duration: 450,
              fill: "forwards"
            }), setTimeout(function () {
              n.classList.remove("open"), document.body.classList.toggle("noscroll");
            }, 450);
          });
        };
      }(), e.createOrdner = new function () {
        this.init = function () {
          document.querySelector(".manage-page").addEventListener("click", function () {
            "new-chip" === event.target.dataset.name ? console.log("new-chip") : "new-folder" === event.target.dataset.name && e.createOrdner.createFolder();
          }, !0);
        }, this.createFolder = function () {
          document.getElementById("blanket").insertAdjacentHTML("beforebegin", '\n            <div id="newBlanket" class="new-blanket open">\n                <div class="popup">\n                    <span class="modal-close abbrechen">&#43;</span>\n                    <h5 class="bl-title">Neuen ordner erstellen</h5>\n                    <p class="name-ordner">\n                        <span class="folder-ico"></span><input type="text" id="nameOrdner" value="" placeholder="Neuer Ordner">\n                    </p>\n                    <p class="btn-ordner">\n                        <a href="javascript:void(0);" class="btn-small btn-red abbrechen">Abbrechen</a>\n                        <a href="javascript:void(0);" class="btn-small btn-green erstellen">Erstellen</a>\n                    </p>\n                </div>\n            </div>');
        };
      }(), document.addEventListener("DOMContentLoaded", function () {
        e.navAccordion.init(), e.leftMenu.init(), e.showPop.init(), e.closePop.init(), e.createOrdner.init();
      }, !1);
    },
    3589: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/avatar.png";
    },
    6485: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Accordeon.svg";
    },
    2428: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Arithmetic Quiz.svg";
    },
    6383: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Befragung.svg";
    },
    1354: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Column.svg";
    },
    2788: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Dictation.svg";
    },
    9241: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Dokumentation.svg";
    },
    3866: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Drag and Drop.svg";
    },
    7039: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Einfachauswahl.svg";
    },
    2318: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Essay.svg";
    },
    9916: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Flashcards.svg";
    },
    1885: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/Lektion.svg";
    },
    4811: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/btn_sprites.png";
    },
    5268: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/down-arrow-icon-b.svg";
    },
    4455: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/mail.svg";
    },
    9593: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/main-folder-icon.svg";
    },
    3097: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/menu-admin-sprites.png";
    },
    6633: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/new-folder.svg";
    },
    9297: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/padlock.svg";
    },
    270: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/search-icon.svg";
    },
    6240: function _(e, n, t) {
      "use strict";

      e.exports = t.p + "img/logo-w.svg";
    }
  },
      n = {};

  function t(i) {
    var s = n[i];
    if (void 0 !== s) return s.exports;
    var a = n[i] = {
      exports: {}
    };
    return e[i](a, a.exports, t), a.exports;
  }

  t.g = function () {
    if ("object" == typeof globalThis) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }(), function () {
    var e;
    t.g.importScripts && (e = t.g.location + "");
    var n = t.g.document;

    if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
      var i = n.getElementsByTagName("script");
      i.length && (e = i[i.length - 1].src);
    }

    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.p = e;
  }(), function () {
    "use strict";

    t(3589), t(6240), t(2428), t(6485), t(6383), t(1354), t(2788), t(3866), t(9241), t(2318), t(7039), t(9916), t(1885), t(9593), t(5268), t(4811), t(9297), t(270), t(4455), t(6633), t(3097), t(8035), t(1724);
  }();
})();

/***/ }),

/***/ "./app/javascript/packs/js/lernchips.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/js/lernchips.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mobe = mobe || {};
mobe.consistBtn = false;
mobe.navAccordion = new function () {
  this.init = function () {
    var acc = document.getElementsByClassName("accordion"),
        i,
        maincon = document.getElementById('main_content'),
        tit = maincon.querySelector(".title-mp");

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        tit.innerText = this.innerText;
        this.classList.toggle("active"); //create buttons

        if (!mobe.consistBtn) {
          mobe.navAccordion.createBtns();
          mobe.consistBtn = true;
        } //open accordion


        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };

  this.createBtns = function () {
    sdb = document.querySelector(".sidebar .title-menu");
    wrbtn = "<p class='create-btns'>\n                    <a data-name='new-folder' class='btn-normal btn-beige-green'><span class=\"btn-plus\"></span>Add new Folder</a>\n                    <a data-name='new-chip' class='btn-normal btn-beige-green'><span class=\"btn-plus\"></span>New Chipset</a>\n                </p>";
    sdb.insertAdjacentHTML('beforebegin', wrbtn);
  };
}();
mobe.leftMenu = new function () {
  this.init = function () {
    var sm = document.querySelector('.switch-menu'),
        hm = document.querySelector('.hide-menu'),
        mp = document.querySelector('.manage-page .sidebar');
    sm.addEventListener('click', function () {
      mp.classList.toggle('open');
    });
    hm.addEventListener('click', function () {
      mp.classList.toggle('open');
    });
  };
}();
mobe.showPop = new function () {
  this.init = function () {
    var bl = document.getElementById("blanket");
    setTimeout(function () {
      bl.classList.add('open');
      document.body.classList.toggle('noscroll');
    }, 2000);
  };
}();
mobe.closePop = new function () {
  this.init = function () {
    var cp = document.querySelector('.close-pop');
    var bl = document.getElementById("blanket");
    cp.addEventListener('click', function () {
      bl.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 450,
        fill: 'forwards'
      });
      setTimeout(function () {
        bl.classList.remove('open');
        document.body.classList.toggle('noscroll');
      }, 450);
    });
  };
}();
mobe.createOrdner = new function () {
  this.init = function () {
    var mp = document.querySelector('.manage-page');
    mp.addEventListener('click', function () {
      if (event.target.dataset.name === 'new-chip') {
        console.log('new-chip');
      } else if (event.target.dataset.name === 'new-folder') {
        mobe.createOrdner.createFolder();
      }
    }, true);
  };

  this.createFolder = function () {
    var blan = document.getElementById("blanket");
    var newBlanket = "\n            <div id=\"newBlanket\" class=\"new-blanket open\">\n                <div class=\"popup\">\n                    <span class=\"modal-close abbrechen\">&#43;</span>\n                    <h5 class=\"bl-title\">Neuen ordner erstellen</h5>\n                    <p class=\"name-ordner\">\n                        <span class=\"folder-ico\"></span><input type=\"text\" id=\"nameOrdner\" value=\"\" placeholder=\"Neuer Ordner\">\n                    </p>\n                    <p class=\"btn-ordner\">\n                        <a href=\"javascript:void(0);\" class=\"btn-small btn-red abbrechen\">Abbrechen</a>\n                        <a href=\"javascript:void(0);\" class=\"btn-small btn-green erstellen\">Erstellen</a>\n                    </p>\n                </div>\n            </div>";
    blan.insertAdjacentHTML('beforebegin', newBlanket);
  };
}();
document.addEventListener('DOMContentLoaded', function () {
  mobe.navAccordion.init();
  mobe.leftMenu.init();
  mobe.showPop.init();
  mobe.closePop.init();
  mobe.createOrdner.init();
}, false);

/***/ }),

/***/ 1:
/*!**************************************************************************************************!*\
  !*** multi ./app/javascript/packs/js/lernchips.bundle.js ./app/javascript/packs/js/lernchips.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mkeller/rails/lernchips/app/javascript/packs/js/lernchips.bundle.js */"./app/javascript/packs/js/lernchips.bundle.js");
module.exports = __webpack_require__(/*! /home/mkeller/rails/lernchips/app/javascript/packs/js/lernchips.js */"./app/javascript/packs/js/lernchips.js");


/***/ })

/******/ });
//# sourceMappingURL=lernchips-a93e87d08bb62256d922.js.map