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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/price-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/plans.json":
/*!********************************************!*\
  !*** ./app/javascript/packs/js/plans.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Kostenloses\",\"description\":\"Praesent vel fringilla est  odio id tellus.\",\"price\":\"Free\",\"content\":[{\"name\":\"Volle Funktionalität\",\"val\":\"check\"},{\"name\":\"Lernchips(30 aus 44)\",\"val\":\"check\"},{\"name\":\"Externe Links\",\"val\":\"check\"},{\"name\":\"Alle Lernchips\",\"val\":\"close\"},{\"name\":\"Chipset\",\"val\":\"close\"},{\"name\":\"Exklusives Nutzungsrecht\",\"val\":\"close\"},{\"name\":\"LTI Export\",\"val\":\"close\"},{\"name\":\"Gruppenfunktionen\",\"val\":\"close\"}]},{\"name\":\"Anwender Plus\",\"description\":\"Vivamus volutpat sem sed molestie tincidunt.\",\"price\":\"From 7 EUR/mo\",\"content\":[{\"name\":\"Volle Funktionalität\",\"val\":\"check\"},{\"name\":\"Lernchips(30 aus 44)\",\"val\":\"check\"},{\"name\":\"Externe Links\",\"val\":\"check\"},{\"name\":\"Alle Lernchips\",\"val\":\"check\"},{\"name\":\"Chipset\",\"val\":\"check\"},{\"name\":\"Exklusives Nutzungsrecht\",\"val\":\"check\"},{\"name\":\"LTI Export\",\"val\":\"close\"},{\"name\":\"Gruppenfunktionen\",\"val\":\"close\"}]},{\"name\":\"Institutionen\",\"description\":\"Sed viverra dictum sapie vitae volutpat nisl sed....\",\"price\":\"From 20 EUR/mo\",\"content\":[{\"name\":\"Volle Funktionalität\",\"val\":\"check\"},{\"name\":\"Lernchips(30 aus 44)\",\"val\":\"check\"},{\"name\":\"Externe Links\",\"val\":\"check\"},{\"name\":\"Alle Lernchips\",\"val\":\"check\"},{\"name\":\"Chipset\",\"val\":\"check\"},{\"name\":\"Exklusives Nutzungsrecht\",\"val\":\"check\"},{\"name\":\"LTI Export\",\"val\":\"check\"},{\"name\":\"Gruppenfunktionen\",\"val\":\"check\"}]}]");

/***/ }),

/***/ "./app/javascript/packs/js/price-page.js":
/*!***********************************************!*\
  !*** ./app/javascript/packs/js/price-page.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plans_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plans.json */ "./app/javascript/packs/js/plans.json");
var _plans_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./plans.json */ "./app/javascript/packs/js/plans.json", 1);

var mobe = mobe || {};
mobe = new function () {
  this.screenWidth = document.body.clientWidth;
  this.reqHost = window.location.host;
  this.wrapperPrices = document.getElementById("wrapPrices"); //here muessen wir die Ausgabe aendern - in ener Loop machen

  this.blockDeskTop = "\n    <thead>\n        <tr>\n            <th class='th-first'>Price Plans</th>\n            <th class='tcell-remains'>\n                <div class='schield'>\n                    <h3 class='cell-head'>Kostenloses</h3>\n                    <p class='cell-text'>Praesent vel fringilla est  odio id tellus.</p>\n                    <p class='cell-price'>Free</p>\n                    <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>\n                </div>\n            </th>\n            <th class='tcell-remains'>\n                <div class='schield'>\n                    <h3 class='cell-head'>Anwender Plus</h3>\n                    <p class='cell-text'>Vivamus volutpat sem sed molestie tincidunt</p>\n                    <p class='cell-price'>From 7 EUR/mo</p>\n                    <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>\n                </div>\n            </th>\n            <th class='tcell-remains'>\n                <div class='schield'>\n                    <h3 class='cell-head'>Institutionen</h3>\n                    <p class='cell-text'>Sed viverra dictum sapie vitae volutpat nisl sed.</p>\n                    <p class='cell-price'>From 20 EUR/mo</p>\n                    <a href='javascript:void(0)' class='btn btn-yellow'>Subscribe</a>\n                </div>\n            </th>\n        </tr>\n    </thead>\n    ";

  this.showDeskTable = function () {
    var self = this,
        tdeskBody = document.createElement('tbody'),
        fragment = document.createDocumentFragment();
    var qualFeature = _plans_json__WEBPACK_IMPORTED_MODULE_0__[0].content.length;

    for (var i = 0; i < qualFeature; i++) {
      var trow = document.createElement('tr');
      var th = document.createElement('th');
      th.innerText = _plans_json__WEBPACK_IMPORTED_MODULE_0__[0].content[i].name;
      trow.appendChild(th);
      fragment.appendChild(trow);

      for (var j = 0; j < _plans_json__WEBPACK_IMPORTED_MODULE_0__.length; j++) {
        var td = document.createElement('td');
        td.innerHTML = "\n                    <svg class='icon'>\n                        <use xlink:href=\"./img/reg-icons.svg#".concat(_plans_json__WEBPACK_IMPORTED_MODULE_0__[j].content[i].val, "\"></use>\n                    </svg>\n                ");
        trow.appendChild(td);
      }
    }

    tdeskBody.appendChild(fragment);
    return tdeskBody;
  };

  this.blockMobileTop = function () {
    var tabButtons = document.createElement('div');
    tabButtons.classList.add('tab-buttons');
    var priceTitle = document.createElement('h3');
    priceTitle.classList.add('price-title');
    priceTitle.innerHTML = "Price Plans";

    for (var i = 0; i < _plans_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {
      var tabHead = document.createElement('div');
      tabHead.dataset.panel = 'panel_' + i;

      if (i == 0) {
        tabHead.classList.add('tab-head', 'active');
      } else {
        tabHead.classList.add('tab-head');
      }

      var text = document.createTextNode(_plans_json__WEBPACK_IMPORTED_MODULE_0__[i].name);
      tabHead.appendChild(text);
      tabButtons.appendChild(tabHead);
    }

    this.wrapperPrices.appendChild(priceTitle);
    this.wrapperPrices.appendChild(tabButtons);
  };

  this.blockMobileColumn = function () {
    var tabPanels = document.createElement('div'),
        tabPanel,
        fragment = document.createDocumentFragment();
    tabPanels.classList.add('tab-panels');

    for (var i = 0; i < _plans_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {
      var feature = _plans_json__WEBPACK_IMPORTED_MODULE_0__[i].content;
      tabPanel = document.createElement('div');
      tabPanel.id = 'panel_' + i;

      if (i == 0) {
        tabPanel.classList.add('panel', 'active');
      } else {
        tabPanel.classList.add('panel');
      } //add block priceInfo


      var priceInfo = "\n            <div class='m-schield'>\n                <h3 class='mcell-head'>".concat(_plans_json__WEBPACK_IMPORTED_MODULE_0__[i].name, "</h3>\n                <p class='mcell-text'>").concat(_plans_json__WEBPACK_IMPORTED_MODULE_0__[i].description, "</p>\n                <p class='mcell-price'>").concat(_plans_json__WEBPACK_IMPORTED_MODULE_0__[i].price, "</p>\n                <a href='javascript:void(0);' class='btn btn-yellow'>Subscribe</a>\n            </div>\n            ");
      tabPanel.innerHTML = priceInfo; //run new loop on feature

      for (var j = 0; j < feature.length; j++) {
        var featureWrap = document.createElement('div');
        featureWrap.classList.add('feature-wrap');
        var elName = document.createElement('span');
        var elVal = document.createElement('span');
        var featureName = document.createTextNode(feature[j].name);
        var featureVal = "\n                    <svg class='icon'>\n                        <use xlink:href=\"./img/reg-icons.svg#".concat(feature[j].val, "\"></use>\n                    </svg>\n                ");
        elName.appendChild(featureName);
        elVal.innerHTML = featureVal;
        featureWrap.appendChild(elName);
        featureWrap.appendChild(elVal);
        tabPanel.appendChild(featureWrap);
      }

      fragment.appendChild(tabPanel);
    }

    tabPanels.appendChild(fragment);
    this.wrapperPrices.appendChild(tabPanels);
  };

  this.pricePage = function () {
    var self = this;

    if (self.screenWidth <= 768) {
      self.blockMobileTop();
      self.blockMobileColumn();
    } else {
      var tableTag = document.createElement('table');
      tableTag.classList.add('table-price');
      var tableBod = self.showDeskTable();
      tableTag.insertAdjacentHTML('afterbegin', self.blockDeskTop);
      tableTag.appendChild(tableBod);
      self.wrapperPrices.appendChild(tableTag);
    }
  };

  this.resizeWindow = function () {
    var _this = this;

    window.addEventListener('resize', function (ev) {
      var self = _this;
      _this.screenWidth = document.body.clientWidth;
      setTimeout(function () {
        if (self.screenWidth <= 768) {
          self.wrapperPrices.innerHTML = self.blockMobileTop;
        } else {
          self.wrapperPrices.innerHTML = self.blockDeskTop;
        }
      }, 650);
      window.location.href = 'http://' + _this.reqHost + '/prices-page.html';
    }, false);
  };

  this.showPanel = function (panel, btns, panels) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    }

    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.remove('active');
    }

    var elem = document.getElementById(panel);
    elem.classList.add('active');
    var btn = document.querySelector('[data-panel=' + panel + ']');
    btn.classList.add('active');
  };

  this.tabsClick = function () {
    var self = this;
    this.wrapperPrices.addEventListener('click', function (ev) {
      var tabBtns = document.querySelectorAll('.tab-head');
      var tabPanels = document.querySelectorAll('.tab-panels .panel');

      if (ev.target.classList.contains('tab-head')) {
        var panel = ev.target.dataset.panel;
        self.showPanel(panel, tabBtns, tabPanels);
      }
    }, true);
  };
}();
document.addEventListener('DOMContentLoaded', function () {
  mobe.pricePage();
  mobe.resizeWindow();
  mobe.tabsClick();
}, false);

/***/ })

/******/ });
//# sourceMappingURL=price-page-3e5dce5d317314d60ed9.js.map