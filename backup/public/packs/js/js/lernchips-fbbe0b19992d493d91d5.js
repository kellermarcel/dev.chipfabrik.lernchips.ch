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
        this.classList.toggle("active");
        console.log(tit.innerText);
        console.log(this);
        console.log(this.getAttribute("class"));
        console.log(this.children[1].getAttribute("value"));
        console.log("alt");
        console.log(document.getElementById("folderid").getAttribute("value"));
        oldid = document.getElementById("folderid").getAttribute("value");
        newid = this.children[1].getAttribute("value");
        document.getElementById("folderid").getAttribute("value");
        document.getElementById("folderid").setAttribute("value", newid);
        console.log("neu"); //create buttons

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
    wrbtn = "<p class='create-btns'>\n                    <a data-name='new-folder' class='btn-normal btn-beige-green'><span class=\"btn-plus\"></span>Ordner hinzuf\xFCgen</a>           \n                </p>";
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
    var bl = document.getElementById("blanket"); // das Startpopup
    // setTimeout(function() {
    //     bl.classList.add('open');
    //     document.body.classList.toggle('noscroll');
    // }, 2000);
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
        console.log('new-folder');
      }
    }, true);
  };

  this.createFolder = function () {
    var blan = document.getElementById("blanket");
    maincon = document.getElementById('main_content'), tit = maincon.querySelector(".title-mp").innerHTML;
    console.log(tit);
    var newBlanket = "\n            <div id=\"newBlanket\" class=\"new-blanket open\">\n                <div class=\"popup\">\n                  <span class=\"modal-close abbrechen\">&#43;</span>\n                    <h5 class=\"bl-title\">ordner erstellen in " + tit + "</h5>\n                    <form id=\"myForm\">\n                         <input type=\"hidden\" id=\"parentid\" name=\"parentid\" value=\"" + document.getElementById("folderid").getAttribute("value") + "\">\n                      <p class=\"name-ordner\">\n                        <span class=\"folder-ico\"></span><input id=\"nameOrdner\" type=\"text\" name=\"nameOrdner\" id=\"nameOrdner\" value=\"\" placeholder=\"Neuer Ordner\">\n\n                         <p class=\"btn-ordner\">\n                            <a href=\"javascript:void(0);\" class=\"btn-small btn-red abbrechen\">Abbrechen</a>\n                            <input type=\"button\" class=\"btn-small btn-green erstellen\" onclick=\"loadFolders()\" value=\"Erstellen\">\n                        </p>\n                    </form>\n                </div>\n            </div>";
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

/***/ })

/******/ });
//# sourceMappingURL=lernchips-fbbe0b19992d493d91d5.js.map