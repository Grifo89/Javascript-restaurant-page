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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n  blockquote:before, blockquote:after, q:before, q:after {\\n    content: '';\\n    content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n* + * {\\n  box-sizing: border-box; }\\n\\nnav {\\n  overflow: hidden;\\n  background: #020024;\\n  background: radial-gradient(circle, #020024 0%, #fcfcfc 0%, rgba(255, 255, 255, 0.972426) 100%);\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 10vh;\\n  z-index: 1; }\\n  nav .navbar {\\n    padding: 2.5vh 0;\\n    width: 50%;\\n    height: auto;\\n    margin: 0 auto;\\n    display: flex;\\n    justify-content: space-between; }\\n    nav .navbar .nav-link {\\n      height: auto; }\\n      nav .navbar .nav-link a {\\n        font-family: 'Dancing Script';\\n        text-decoration: none;\\n        font-size: 2rem;\\n        color: #3AA3A0; }\\n      nav .navbar .nav-link a:hover {\\n        background: #020024;\\n        background: radial-gradient(circle, #020024 0%, #fcfcfc 0%, rgba(247, 211, 48, 0.448617) 100%);\\n        border-radius: 30%; }\\n  @media screen and (max-width: 768px) {\\n    nav .navbar {\\n      padding: 2vh 0;\\n      width: 70%; } }\\n  @media screen and (max-width: 460px) {\\n    nav .navbar {\\n      width: 90%; } }\\n\\n.hero-image {\\n  clear: both;\\n  margin-top: 10vh;\\n  height: 90vh;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  position: relative;\\n  z-index: 0; }\\n  .hero-image .hero-text {\\n    text-align: center;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    color: white; }\\n    .hero-image .hero-text h1 {\\n      font-size: 5rem;\\n      font-family: 'Dancing Script';\\n      font-weight: bold;\\n      margin-bottom: 2rem; }\\n    .hero-image .hero-text p {\\n      font-size: 2rem; }\\n  @media screen and (max-width: 768px) {\\n    .hero-image {\\n      margin-top: 11vh; } }\\n\\n.menu-title {\\n  color: #3AA3A0;\\n  font-family: 'Dancing Script';\\n  font-size: 6rem;\\n  text-align: center;\\n  margin-top: 2rem; }\\n\\n.menu-container .menu-subtitle {\\n  color: #0e1318eb;\\n  font-weight: bold;\\n  font-style: oblique;\\n  font-size: 2.3rem;\\n  margin: 1rem 0 1rem 3rem; }\\n\\n.menu-container .menu-list {\\n  overflow-x: auto;\\n  overflow-y: hidden;\\n  white-space: nowrap; }\\n  .menu-container .menu-list .menu-item {\\n    display: inline-block;\\n    font-weight: bold;\\n    font-style: oblique; }\\n\\n.flip-card {\\n  width: 40vh;\\n  height: 60vh;\\n  border: 1px solid #f1f1f1;\\n  perspective: 1000px;\\n  padding: 0 2px; }\\n  .flip-card :hover {\\n    transform: rotateY(180deg); }\\n  .flip-card .flip-card-inner {\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    text-align: center;\\n    transition: transform 0.8s;\\n    transform-style: preserve-3d; }\\n    .flip-card .flip-card-inner :hover {\\n      transform: rotateY(180deg); }\\n    .flip-card .flip-card-inner .flip-card-front, .flip-card .flip-card-inner .flip-card-back {\\n      position: absolute;\\n      width: 100%;\\n      height: 100%;\\n      -webkit-backface-visibility: hidden;\\n      backface-visibility: hidden; }\\n    .flip-card .flip-card-inner .flip-card-front {\\n      background-color: #bbb;\\n      color: black; }\\n      .flip-card .flip-card-inner .flip-card-front img {\\n        max-width: 100%;\\n        height: 100%; }\\n    .flip-card .flip-card-inner .flip-card-back {\\n      width: 100%;\\n      background-color: white;\\n      color: #0e1318eb;\\n      transform: rotateY(180deg); }\\n      .flip-card .flip-card-inner .flip-card-back h1 {\\n        font-size: 2rem;\\n        margin-top: 30%; }\\n      .flip-card .flip-card-inner .flip-card-back p {\\n        overflow-wrap: break-word;\\n        font-size: 1.2rem;\\n        margin-top: 30%; }\\n\\n.booking-container {\\n  text-align: center; }\\n  .booking-container .booking-title {\\n    margin-top: 2rem;\\n    font-size: 2rem;\\n    font-family: 'Dancing Script';\\n    font-size: 6rem;\\n    color: #3AA3A0; }\\n  .booking-container .booking-text {\\n    font-size: 3rem;\\n    margin-top: 1rem; }\\n  .booking-container .booking-button {\\n    margin: 3rem 0;\\n    border-radius: 28px;\\n    border: 1px solid #F7D330;\\n    display: inline-block;\\n    cursor: pointer;\\n    background: #F6C324;\\n    font-size: 1.5rem;\\n    font-style: italic; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/booking/booking.js":
/*!*******************************************!*\
  !*** ./src/components/booking/booking.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Booking = function () {\n  var bookingTitle = document.createElement('h1');\n  var bookingContainer = document.createElement('div');\n  var bookingText = document.createElement('p');\n  var bookingButton = document.createElement('button');\n  bookingTitle.classList.add('booking-title');\n  bookingTitle.textContent = 'Booking';\n  bookingText.classList.add('booking-text');\n  bookingText.textContent = 'Take a chance to try new things';\n  bookingButton.classList.add('booking-button');\n  bookingButton.textContent = 'Booking now';\n  bookingContainer.classList.add('booking-container');\n  bookingContainer.id = 'booking';\n  bookingContainer.appendChild(bookingTitle);\n  bookingContainer.appendChild(bookingText);\n  bookingContainer.appendChild(bookingButton);\n  return bookingContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Booking);\n\n//# sourceURL=webpack:///./src/components/booking/booking.js?");

/***/ }),

/***/ "./src/components/card/card.js":
/*!*************************************!*\
  !*** ./src/components/card/card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Card = function Card(dish) {\n  var cardContainer = document.createElement('div');\n  var cardInner = document.createElement('div');\n  var cardFront = document.createElement('div');\n  var cardBack = document.createElement('div');\n  var cardImage = document.createElement('img');\n  var cardTitle = document.createElement('h1');\n  var cardDescription = document.createElement('p');\n  cardContainer.classList.add('flip-card');\n  cardInner.classList.add('flip-card-inner');\n  cardFront.classList.add('flip-card-front');\n  cardBack.classList.add('flip-card-back');\n  cardTitle.textContent = dish.title;\n  cardDescription.textContent = dish.description;\n  cardFront.appendChild(cardImage);\n  cardBack.appendChild(cardTitle);\n  cardBack.appendChild(cardDescription);\n  cardInner.appendChild(cardFront);\n  cardInner.appendChild(cardBack);\n  cardContainer.appendChild(cardInner);\n  cardImage.src = dish ? dish.src : '';\n  return cardContainer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/components/card/card.js?");

/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Home = function () {\n  var divHome = document.createElement('div');\n  var divHomeText = document.createElement('div');\n  var title = document.createElement('h1');\n  var content = document.createElement('p');\n  divHome.id = 'home';\n  divHome.classList.add('hero-image');\n  divHomeText.classList.add('hero-text');\n  title.textContent = 'My restaurant';\n  content.textContent = 'This is the best food ever you can try';\n  divHomeText.appendChild(title);\n  divHomeText.appendChild(content);\n  divHome.appendChild(divHomeText);\n  return divHome;\n}();\n\nvar carousel = function carousel() {\n  var counter = 1;\n  var div = document.querySelector('.hero-image');\n  div.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"./images/restaurant/restaurant-0.jpg\")';\n  setInterval(function () {\n    counter = counter > 2 ? 0 : counter;\n    div.style.backgroundImage = \"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\\\"./images/restaurant/restaurant-\".concat(counter, \".jpg\\\")\");\n    counter++;\n  }, 5000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Home: Home,\n  carousel: carousel\n});\n\n//# sourceURL=webpack:///./src/components/home/home.js?");

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card */ \"./src/components/card/card.js\");\n\n\nvar json = __webpack_require__(/*! ../../menu.json */ \"./src/menu.json\");\n\nvar Title = function () {\n  var title = document.createElement('h1');\n  title.textContent = 'Menu';\n  title.classList.add('menu-title');\n  title.id = 'menu';\n  return title;\n}();\n\nvar List = function () {\n  var menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n  Object.keys(json).forEach(function (category) {\n    var list = document.createElement('ul');\n    list.classList.add('menu-list');\n    var menuSubtitle = document.createElement('h2');\n    menuSubtitle.classList.add('menu-subtitle');\n    menuSubtitle.textContent = category;\n    json[category].forEach(function (dish) {\n      var listItem = document.createElement('li');\n      listItem.classList.add('menu-item');\n      listItem.appendChild(Object(_card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dish));\n      list.appendChild(listItem);\n    });\n    menuContainer.appendChild(menuSubtitle);\n    menuContainer.appendChild(list);\n  });\n  return menuContainer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Title: Title,\n  List: List\n});\n\n//# sourceURL=webpack:///./src/components/menu/menu.js?");

/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Navbar = function () {\n  var nav = document.createElement('nav');\n  var ul = document.createElement('ul');\n  var liHome = document.createElement('li');\n  var liMenu = document.createElement('li');\n  var liBooking = document.createElement('li');\n  var aHome = document.createElement('a');\n  var aMenu = document.createElement('a');\n  var aBooking = document.createElement('a');\n  ul.classList.add('navbar');\n  aHome.textContent = 'Home';\n  aHome.href = '#home';\n  liHome.classList.add('nav-link');\n  liHome.appendChild(aHome);\n  aMenu.textContent = 'Menu';\n  aMenu.href = '#menu';\n  liMenu.classList.add('nav-link');\n  liMenu.appendChild(aMenu);\n  aBooking.textContent = 'Booking';\n  aBooking.href = '#booking';\n  liBooking.classList.add('nav-link');\n  liBooking.appendChild(aBooking);\n  ul.appendChild(liHome);\n  ul.appendChild(liMenu);\n  ul.appendChild(liBooking);\n  nav.appendChild(ul);\n  return nav;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/components/navbar/navbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar */ \"./src/components/navbar/navbar.js\");\n/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home */ \"./src/components/home/home.js\");\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu */ \"./src/components/menu/menu.js\");\n/* harmony import */ var _components_booking_booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/booking/booking */ \"./src/components/booking/booking.js\");\n\n\n\n\n\nvar content = document.getElementById('content');\ncontent.appendChild(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontent.appendChild(_components_home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Home);\ncontent.appendChild(_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title);\ncontent.appendChild(_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].List);\ncontent.appendChild(_components_booking_booking__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n_components_home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].carousel();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/*! exports provided: Beef, Seafood, Chicken, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"Beef\\\":[{\\\"title\\\":\\\"Buffalo Hamburger\\\",\\\"src\\\":\\\"./images/beef/beef1.jpg\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet\\\"},{\\\"title\\\":\\\"asparagus\\\",\\\"src\\\":\\\"./images/beef/beef2.jpg\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet\\\"},{\\\"title\\\":\\\"Beef dish\\\",\\\"src\\\":\\\"./images/beef/beef3.jpg\\\",\\\"description\\\":\\\"This is a delicious beef dish\\\"},{\\\"title\\\":\\\"Beef dish\\\",\\\"src\\\":\\\"./images/beef/beef4.jpg\\\",\\\"description\\\":\\\"This is a delicious beef dish\\\"},{\\\"title\\\":\\\"Beef dish\\\",\\\"src\\\":\\\"./images/beef/beef5.jpg\\\",\\\"description\\\":\\\"This is a delicious beef dish\\\"},{\\\"title\\\":\\\"Beef dish\\\",\\\"src\\\":\\\"./images/beef/beef6.jpg\\\",\\\"description\\\":\\\"This is a delicious beef dish\\\"},{\\\"title\\\":\\\"Beef dish\\\",\\\"src\\\":\\\"./images/beef/beef7.jpg\\\",\\\"description\\\":\\\"This is a delicious beef dish\\\"}],\\\"Seafood\\\":[{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood1.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood2.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood3.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood4.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood5.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood6.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"},{\\\"title\\\":\\\"Seafood dish\\\",\\\"src\\\":\\\"./images/seafood/seafood7.jpg\\\",\\\"description\\\":\\\"This is a delicious Seafood dish\\\"}],\\\"Chicken\\\":[{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken1.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken2.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken3.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken4.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken5.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken6.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"},{\\\"title\\\":\\\"Chicken dish\\\",\\\"src\\\":\\\"./images/chicken/chicken7.jpg\\\",\\\"description\\\":\\\"This is a delicious Chicken dish\\\"}]}\");\n\n//# sourceURL=webpack:///./src/menu.json?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });