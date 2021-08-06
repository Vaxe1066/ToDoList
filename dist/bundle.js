/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus   \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus   \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add.svg":
/*!*********************!*\
  !*** ./src/add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d82fdd58e716ef8b7839.svg";

/***/ }),

/***/ "./src/contents-load.js":
/*!******************************!*\
  !*** ./src/contents-load.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");


const contentLoad = () => {

    const wrapper = document.querySelector(".content");

    let createInputBtn = function(className, href, value) {
        const inputTag = document.createElement("a");
        inputTag.classList.add(className);
        inputTag.setAttribute("href", href);
        inputTag.textContent = value;
        

        return inputTag

    }

    let homeBtn = createInputBtn("home-btn", "#", "Home");
    let todayBtn = createInputBtn("today-btn", "#", "Today");
    let weekBtn = createInputBtn("week-btn", "#", "Week");
    let projectsBtn = createInputBtn("projects-btn", "#", "Projects");


    const dropdownDiv = document.createElement("div");
    dropdownDiv.classList.add("dropdown-content");
    wrapper.appendChild(dropdownDiv);

    const dropOptions = document.createElement("div");
    dropOptions.classList.add("dropOptions");
    dropdownDiv.appendChild(dropOptions);

    const dropdownDivEl = document.querySelector(".dropdown-content")
    
    dropOptions.appendChild(homeBtn);
    dropOptions.appendChild(todayBtn);
    dropOptions.appendChild(weekBtn);
    dropOptions.appendChild(projectsBtn);

    
    const middleDiv = document.querySelector(".middle");
    middleDiv.setAttribute("style", "grid-column: 3/10");



    /* sub porjects */
    const dropdownOptionsEl = document.querySelector(".dropOptions")
    const subProjDiv = document.createElement("div");
    subProjDiv.classList.add("subProjects");
    dropdownOptionsEl.appendChild(subProjDiv);

    const addProj = document.createElement("div");
    addProj.classList.add("addProjectDiv");
    //dropdownDivEl.appendChild(addProj);
    wrapper.appendChild(addProj);
    const inputProjIcon = document.createElement("input");
    inputProjIcon.setAttribute("type", "image");
    inputProjIcon.src = _add_svg__WEBPACK_IMPORTED_MODULE_0__;
    inputProjIcon.setAttribute("width", "20px");
    inputProjIcon.setAttribute("height", "20px");
    inputProjIcon.classList.add("projectAdd");
    addProj.appendChild(inputProjIcon) ;  

    const addProjectText = document.createElement("p");
    addProjectText.textContent = "New Project";    
    addProj.appendChild(addProjectText) ;



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentLoad);



/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c70b53795b8b86b5bd4.svg";

/***/ }),

/***/ "./src/generate-table.js":
/*!*******************************!*\
  !*** ./src/generate-table.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTableHead": () => (/* binding */ generateTableHead),
/* harmony export */   "generateTable": () => (/* binding */ generateTable)
/* harmony export */ });
/* harmony import */ var _table_buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-buttons.js */ "./src/table-buttons.js");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.svg */ "./src/trash.svg");
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort.svg */ "./src/sort.svg");





function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      if(key=="date"){
        let th = document.createElement("th");
        //let anchorSort = doc.createElement("a");
        //anchorSort.setAttribute("title");
        let aSort = document.createElement("input");
        aSort.classList.add("sort");
        aSort.setAttribute("type", "image");
        aSort.src = _sort_svg__WEBPACK_IMPORTED_MODULE_3__;
        aSort.setAttribute("width", "30px");
        aSort.setAttribute("height", "30px");
        aSort.setAttribute("title","Sort By Due Date");
        //let text = document.createTextNode(key);
        th.appendChild(aSort);
        row.appendChild(th);
      }

    }
    //console.log(key);
  }

  

function generateTable(table, data) {
  let missKeys = ["id", "projects", "details"]
  for (let element of data) {
      let row = table.insertRow();
      row.classList.add("r_"+ element["id"]);
      let cell = row.insertCell();
      cell.classList.add("radio-btn"+element["id"]);
      (0,_table_buttons_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)(cell);
    for (let key in element) {
      if(!missKeys.includes(key)){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
      }
    }
      let cellEdit = row.insertCell();
      cellEdit.classList.add("edit-btn");
      (0,_table_buttons_js__WEBPACK_IMPORTED_MODULE_0__.editButton)(cellEdit, _edit_svg__WEBPACK_IMPORTED_MODULE_1__);
      let cellDelete = row.insertCell();
      cellDelete.classList.add("delete-btn");
      (0,_table_buttons_js__WEBPACK_IMPORTED_MODULE_0__.deleteButton)(cellDelete, _trash_svg__WEBPACK_IMPORTED_MODULE_2__);
  }
  //tbodyHeight();
}

/*function tbodyHeight(){
  const tbodyEl = document.querySelector("tbody");
  if(tbodyEl){
    let screenHeight = window.screen.availHeight;
    let newHeight = screenHeight*0.6;
    //tbodyEl.style.height = newHeight+"px"; 
    console.log(screenHeight); 
  }
}*/

  

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profileImg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileImg.png */ "./src/profileImg.png");
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.svg */ "./src/sort.svg");





const loadPage = () => {
    console.log("hello world - again okay lies")

    const myIcon = new Image();
    myIcon.src = _profileImg_png__WEBPACK_IMPORTED_MODULE_0__;
    myIcon.classList.add("profile-img");

    const  profilDiv = document.querySelector(".profile-icon");
    profilDiv.appendChild(myIcon);


    const addInput = document.querySelector(".add-task");
    addInput.src = _add_svg__WEBPACK_IMPORTED_MODULE_1__;
    addInput.setAttribute("width", "20px");
    addInput.setAttribute("height", "20px");

    let aSort = document.querySelector(".sort");
    aSort.src = _sort_svg__WEBPACK_IMPORTED_MODULE_2__;
    aSort.setAttribute("width", "30px");
    aSort.setAttribute("height", "30px");
    aSort.setAttribute("title","Sort By Due Date");




}








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/profileImg.png":
/*!****************************!*\
  !*** ./src/profileImg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f11df06000ef562df8b7.png";

/***/ }),

/***/ "./src/sort.svg":
/*!**********************!*\
  !*** ./src/sort.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c70168366764b71a5723.svg";

/***/ }),

/***/ "./src/table-buttons.js":
/*!******************************!*\
  !*** ./src/table-buttons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkButton": () => (/* binding */ checkButton),
/* harmony export */   "editButton": () => (/* binding */ editButton),
/* harmony export */   "deleteButton": () => (/* binding */ deleteButton)
/* harmony export */ });



const checkButton = (cell) => {
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "checkbox");
    cell.appendChild(radioBtn);

}




const editButton = (cell, icon) =>{
    //let cellEdit = row.insertCell();
    let editBtn = document.createElement("input");
    editBtn.setAttribute("type", "image");
    editBtn.setAttribute("height", "20px");
    editBtn.setAttribute("width", "20px");
    editBtn.src = icon;

    cell.appendChild(editBtn)
}


const deleteButton = (cell, icon) =>{
    //let cellEdit = row.insertCell();
    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "image");
    deleteBtn.setAttribute("height", "20px");
    deleteBtn.setAttribute("width", "20px");
    deleteBtn.src = icon;

    cell.appendChild(deleteBtn);
}












/***/ }),

/***/ "./src/trash.svg":
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb8494aa5012241b9691.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page.js */ "./src/load-page.js");
/* harmony import */ var _contents_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents-load.js */ "./src/contents-load.js");
/* harmony import */ var _generate_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-table.js */ "./src/generate-table.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



//import {closeForm, formReset, removeAllChildNodes, replaceTaskObject,checkCondition, editListner } from './helper-functions.js';





let mountains = [
  {  id:1, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-01"},
  {  id:2, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-07-25"},
  {  id:3, projects:"Test",title: "Poggio Scali", details:"", date: "2010-08-25" },
  {  id:4, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:5, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:6, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:7, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:8, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-25"},
  {  id:9, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:10, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:11, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:12, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:13, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:14, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:15, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:16, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:17, projects:"Test",title: "Poggio Scali", details:"", date: "2009-08-16" },
  {  id:18, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:19, projects:"Test", title: "Monte Amiata", details:"",date: "2021-08-05"  }
];

let currentFilter;
/*let mountains = [
    {  id:1, title: "Monte Falco", details:"", date: 1658},
    {  id:2, title: "Monte Falterona", details:"", date: 1654},
    {  id:3, title: "Poggio Scali", details:"", date: 1520 },
    {  id:4, title: "Pratomagno", details:"",date: 1592  },
    {  id:5, title: "Monte Amiata", details:"",date: "2021-08-25"  }
  ];*/


  let test = [
    {  id:1, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-25"},
    {  id:2, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-14"},
    {  id:3, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-20"}
  ];
  











function changeDateFormat(date){
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  date = yyyy + '-' + mm + '-' + dd;
  return date;
}

function strToDate(strDate) {
  let elementDate = new Date(strDate);
  elementDate = changeDateFormat(elementDate);
  elementDate = Date.parse(elementDate);
  return elementDate;
}

function setToMonday( date ) {
  let day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 1)); 
  return date;
}

function setToSunday( date ) {
  let day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 7)); 
  return date;
}

let today = new Date();
console.log(changeDateFormat(today));
let mon = new Date();
let sun = new Date();
today = Date.parse(changeDateFormat(today));
mon = Date.parse(changeDateFormat(setToMonday(mon)));
sun = Date.parse(changeDateFormat(setToSunday(sun)));




(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.default)();

function todayTab(todayDate){
  const todayBtn = document.querySelector(".today-btn");
  todayBtn.addEventListener("click", ()=>{
    console.log(changeDateFormat(new Date()));
    let dataFilter = [];
    for(let element of mountains){
      if(strToDate(element["date"])==todayDate){
        dataFilter.push(element);
      }
    }
    console.log(dataFilter);
    execTableAllButtons(dataFilter,"");
    subProjectTitleChange("Today");
  })
}

function weekTab(mondayDate, sundayDate){
  const weekBtn = document.querySelector(".week-btn");
  weekBtn.addEventListener("click", ()=>{
    //console.log(todayDate);
    let dataFilter = [];
    for(let element of mountains){
      let elementDate = strToDate(element["date"]);
      if((elementDate>=mondayDate) && (elementDate<=sundayDate)){
        dataFilter.push(element);
      }
    }
    execTableAllButtons(dataFilter,"");
    subProjectTitleChange("Week");
  })
}

function execTableAllButtons(data, type){
    const containerRem = document.querySelector('.tableMain');
    if(containerRem){
      removeAllChildNodes(containerRem);
    }
    let table = document.querySelector("table");
    //let dataHead = Object.keys(mountains[0]);
    (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, data); // generate the table first
    //generateTableHead(table, dataHead); // then the head
    formReset(type);
    closeForm(type);
    const checkEl = document.querySelectorAll("input[type=checkbox]");
    checkEl.forEach(box =>{
      checkCondition(box);

    });
    editListner();
    execDeleteTask(data)
}

function subProjectTitleChange(text){
  const subTitle = document.querySelector("h3");
  subTitle.textContent=text;
}

function createProjectAnchor(subProjectElement, text){
  const newProjAnchor = document.createElement("a");
  newProjAnchor.classList.add(text);
  newProjAnchor.textContent = text;
  newProjAnchor.style.fontSize = "20px";
  newProjAnchor.style.paddingLeft = "40px";
  newProjAnchor.style.color = "rgb(47,85,151)";

  subProjectElement.appendChild(newProjAnchor);
}

function filterData(title){
  //const checkSubTitle = document.querySelector("h3");
  let dataFilter = [];
  if(title.textContent!="Home"){
    for(let element of mountains){
      if(element["projects"]==title.textContent){
        dataFilter.push(element);
      }
    }
    return dataFilter;
  }
  else{
    return mountains;
  }

}


let projectLst=[]

const bar = document.querySelector(".dropdown-container");
bar.addEventListener("click", ()=>{
    const contents = document.querySelector(".dropdown-content");
    const addNewConts = document.querySelector(".addProjectDiv")
    if((contents) && (addNewConts)){
        //removeContents();
        contents.remove();
        addNewConts.remove();
        const middleDiv = document.querySelector(".middle");
        middleDiv.setAttribute("style", "grid-column: 2/10");
    }
    else if(!contents){
        (0,_contents_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
        if(mountains.length>0){
          for(let element of mountains){
            if(!projectLst.includes(element["projects"])){
              projectLst.push(element["projects"]);
            }

            }
          }
        if(projectLst.length>0){
          for(let item of projectLst){
            const subProjDiv =document.querySelector(".subProjects");
            createProjectAnchor(subProjDiv, item);
          }
        }
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = filterData(item);
            execTableAllButtons(dataFilter,"");
            subProjectTitleChange(item.textContent);
          })
        })

        todayTab(today);
        weekTab(mon, sun);
        const homeButton=document.querySelector(".home-btn");
        homeButton.addEventListener("click", ()=>{
          execTableAllButtons(mountains,"");
          subProjectTitleChange("Home");
        })
  
 
    }
    /*side bar event listners */

    const projectAddEl = document.querySelector(".projectAdd");
    if(projectAddEl){
      projectAddEl.addEventListener("click", ()=>{
        const subProjDiv =document.querySelector(".subProjects");
        const projPrompt = prompt("New Project Name");
        if(projPrompt && subProjDiv){
          createProjectAnchor(subProjDiv, projPrompt);
          
        };
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = filterData(item);
            execTableAllButtons(dataFilter);
            /*change subtitle*/
            subProjectTitleChange(item.textContent);
  
          })
        })
        


      })


    }


})





/*Create my book constructor here*/
function Task(id, projects, title, details, date){
    this.id=id
    this.projects = projects
    this.title = title
    this.details = details
    this.date=date
  }


  //let mountains = [];

  
  let table = document.querySelector("table");
  if (mountains.length >0) {
    //let data = Object.keys(mountains[0]);
    (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, mountains); // generate the table first
    //generateTableHead(table, data); // then the head
  }


const addItmEl = document.querySelector(".js-add-task");
const formEl = document.querySelector(".js-my-form");
addItmEl.addEventListener("click", () =>{
  formEl.style.display="block";
  
})
closeForm("");

/* close function*/
function closeForm(type) {
  const formEl = document.querySelector(`.js-my-form${type}`);

  const closeBtn = document.querySelector(`.close${type}`);
  if(closeBtn){
    closeBtn.addEventListener("click", () =>{
      formEl.style.display = "none";
      let res = document.querySelector(`.js-the-form${type}`).reset();
  })  
  }


}
/* reset and close form after display function */
function formReset(type){
  const formEl = document.querySelector(`.js-my-form${type}`);
  if(formEl){
    let res = document.querySelector(`.js-the-form${type}`).reset();
    formEl.style.display = "none";
  }
}

/* remove all child nodes for table body - fresh for display */
function removeAllChildNodes(parent) {
  if(parent.firstChild){
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
  }
}

/* create submit button */
let maxId=mountains.length;
const submitBtn = document.querySelector(".js-submit-btn");
submitBtn.addEventListener("click", ()=>{
    let title = document.querySelector(".js-title-form").value;
    let project = document.querySelector(".projects").value
    let details = document.querySelector(".details").value;
    let duedate = document.querySelector(".js-due-date").value;
    let item = new Task(maxId+1, project, title, details, duedate);
    mountains.push(item);
    console.log(mountains);
    maxId++;
    const checkSubTitle = document.querySelector("h3");
    let dataFilter =  filterData(checkSubTitle);
    execTableAllButtons(dataFilter,"")
    

})

/*check button strike through*/
function checkCondition(box){
  box.addEventListener('change', function(e){
    if(box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "line-through";
      rowParent.style.textDecorationColor = "red";
      //console.log(neighbour.textContent);
    }
    else if(!box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "none";

    }
  })
}

const checkEl = document.querySelectorAll("input[type=checkbox]");
checkEl.forEach(box =>{
  checkCondition(box);

})


/*helper */
function getClassIDOParent(element){
  let editParent = element.parentElement;
  let idx = Number(editParent.className.replace(/\D+/g, ''));
  console.log(idx);
  return idx;
}
function findTaskObject(data, idx) {
  let taskSelected;
  for(let element of data){
      for(let key in element){
          if (key=="id" && element[key]==idx){
              taskSelected = element;
              break;
          }
      }
  }
  return taskSelected;
}

function populateEditForm(task){
  let titleEl = document.querySelector(".js-title-form-edit");
  titleEl.value = task["title"];

  let detailsEl = document.querySelector(".js-details-edit");
  detailsEl.value = task["details"];

  let projectsEl = document.querySelector(".projects-edit");
  projectsEl.value = task["projects"];

  let dateEl = document.querySelector(".js-due-date-edit");
  dateEl.value = task["date"];


}

function replaceTaskObject(data, idx, newProject, newTitle, newDetails, newDate){
  for(let element of data){
    if(element["id"]==idx){
      element["projects"]=newProject;
      element["title"]=newTitle;
      element["details"]=newDetails;
      element["date"]=newDate;
    }
  }
  console.log(data);
}

/*edit form */
let indexSel ;
function editListner(){
  const editEl = document.querySelectorAll(".edit-btn");
  editEl.forEach(editItem =>{
    editItem.addEventListener("click", (e) =>{ 
        let idx = getClassIDOParent(editItem);
        const formEl = document.querySelector(".js-my-form-edit");
        formEl.style.display="block";     
        let taskSelected = findTaskObject(mountains, idx);
        console.log(taskSelected);
        populateEditForm(taskSelected);
        closeForm("-edit");
        indexSel=idx;
      
  })
})  
}

editListner();



/*do submit button on edit form */

const submitBtnEdit = document.querySelector(".js-submit-btn-edit");
submitBtnEdit.addEventListener("click", ()=>{
  let title = document.querySelector(".js-title-form-edit").value;
  let project = document.querySelector(".projects-edit").value;
  let details = document.querySelector(".details-edit").value;
  let duedate = document.querySelector(".js-due-date-edit").value;
  replaceTaskObject(mountains, indexSel, project, title, details, duedate);
  console.log(mountains);
  const checkSubTitle = document.querySelector("h3");
  let dataFilter = filterData(checkSubTitle);
  execTableAllButtons(dataFilter,"-edit")
})


/* now do delete task */




function execDeleteTask(data){
  const deleteEl = document.querySelectorAll(".delete-btn");
  deleteEl.forEach(deleteItem =>{
    deleteItem.addEventListener("click", (e)=>{
      let deleteParent = deleteItem.parentElement;
      let idx = Number(deleteParent.className.replace(/\D+/g, ''));
      console.log(idx);
      data.splice(idx-1, 1);
      console.log(data);
      const containerRem = document.querySelector('.tableMain');
      removeAllChildNodes(containerRem);
      let table = document.querySelector("table");
      //let data = Object.keys(data[0]);
      (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, data);
      execDeleteTask(data);
    })
  })
}

execDeleteTask(mountains);

/* sort button */

let asc=1;
const sortButton = document.querySelector(".sort");
  sortButton.addEventListener("click",()=>{
    const checkSubTitle = document.querySelector("h3");
    let  dataFilter = filterData(checkSubTitle);
    dataFilter.sort(function(a, b) {
      if(asc==1){
        return parseFloat(strToDate(a.date)) - parseFloat(strToDate(b.date));
      }
      else if(asc==(-1)){
        return   parseFloat(strToDate(b.date)) - parseFloat(strToDate(a.date));
      }


    });
    asc*=(-1);
    execTableAllButtons(dataFilter,"");

  })





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9jb250ZW50cy1sb2FkLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2dlbmVyYXRlLXRhYmxlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy90YWJsZS1idXR0b25zLmpzIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELDZDQUE2Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLHFCQUFxQiwrQ0FBK0Msd0NBQXdDLGdDQUFnQyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyx3Q0FBd0MsU0FBUyxpQkFBaUIsb0JBQW9CLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxLQUFLLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIsK0JBQStCLHlCQUF5QixrQkFBa0IseUJBQXlCLHVCQUF1Qix5QkFBeUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsMkNBQTJDLEtBQUsscUJBQXFCLHFCQUFxQiwrQkFBK0Isd0JBQXdCLG9CQUFvQix5QkFBeUIsS0FBSyx5Q0FBeUMscUJBQXFCLEtBQUssZ0RBQWdELDBEQUEwRCxLQUFLLGdEQUFnRCw2Q0FBNkMscUNBQXFDLE9BQU8sNkJBQTZCLHdCQUF3QiwrQkFBK0IsS0FBSyxvQkFBb0Isd0JBQXdCLHlDQUF5QyxLQUFLLGtCQUFrQiw0Q0FBNEMsd0JBQXdCLDZDQUE2Qyw4QkFBOEIsc0JBQXNCLDhCQUE4Qix5QkFBeUIsOEJBQThCLDBCQUEwQix5QkFBeUIsa0NBQWtDLHdCQUF3Qiw4QkFBOEIsS0FBSyxnQ0FBZ0Msd0JBQXdCLGFBQWEsaUNBQWlDLG9CQUFvQixvQkFBb0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsT0FBTyxzQkFBc0IsMkJBQTJCLHdCQUF3Qix3QkFBd0IsaUNBQWlDLHlCQUF5QiwrQkFBK0IsT0FBTyxxQkFBcUIsd0JBQXdCLDhCQUE4Qix3Q0FBd0MsOEJBQThCLCtCQUErQixPQUFPLDJDQUEyQyxrREFBa0Qsa0NBQWtDLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGFBQWEsa0JBQWtCLCtCQUErQixxQkFBcUIsS0FBSyxpQ0FBaUMsMkJBQTJCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixLQUFLLGtCQUFrQiwwQkFBMEIsNkJBQTZCLHVCQUF1QixxQkFBcUIsS0FBSyw4Q0FBOEMsY0FBYywwQkFBMEIsU0FBUyxLQUFLLDhDQUE4QyxjQUFjLDBCQUEwQixTQUFTLFNBQVMsMkJBQTJCLHVCQUF1Qix1QkFBdUIsNkJBQTZCLHlCQUF5Qiw4QkFBOEIsS0FBSyxxQkFBcUIsdUJBQXVCLG9CQUFvQiw0QkFBNEIscURBQXFELFdBQVcsMkdBQTJHLHVEQUF1RCxvQkFBb0IsS0FBSyx5RkFBeUYsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsNkNBQTZDLDBDQUEwQyxlQUFlLG9CQUFvQixzQ0FBc0MseUNBQXlDLG1FQUFtRSwrREFBK0QsNEJBQTRCLHVEQUF1RCxrQ0FBa0MscUJBQXFCLHNCQUFzQiwrQkFBK0IsbUJBQW1CLEtBQUssK0RBQStELHVCQUF1QixxQkFBcUIsd0JBQXdCLDBCQUEwQixLQUFLLDZGQUE2RixvQkFBb0IsOEJBQThCLHdCQUF3QixLQUFLLDJCQUEyQiw0RUFBNEUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsZ0JBQWdCLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLHlCQUF5QiwwQkFBMEIsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLHdCQUF3QixNQUFNLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxVQUFVLEtBQUssY0FBYyxhQUFhLE1BQU0sVUFBVSxzQkFBc0IscUJBQXFCLHlCQUF5QixXQUFXLFVBQVUsb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxTQUFTLFVBQVUsWUFBWSxXQUFXLHlDQUF5Qyw2Q0FBNkMsd0JBQXdCLHFCQUFxQix3QkFBd0IseUJBQXlCLGlCQUFpQixnQ0FBZ0MsMkNBQTJDLFFBQVEsaUJBQWlCLHFCQUFxQixxQkFBcUIsK0NBQStDLHdDQUF3QyxnQ0FBZ0MsS0FBSyw2QkFBNkIsMEJBQTBCLG9CQUFvQix5Q0FBeUMscUJBQXFCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLDJCQUEyQixxQkFBcUIsS0FBSyxzQkFBc0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsNEJBQTRCLDRCQUE0QixnQ0FBZ0Msd0NBQXdDLFNBQVMsaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyxzQkFBc0IseUJBQXlCLHVCQUF1QiwyQ0FBMkMsS0FBSyxpQkFBaUIsMkJBQTJCLHVCQUF1Qiw2Q0FBNkMscUJBQXFCLCtCQUErQix5QkFBeUIsa0JBQWtCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHFCQUFxQixzQkFBc0IsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLDJDQUEyQyxLQUFLLHFCQUFxQixxQkFBcUIsK0JBQStCLHdCQUF3QixvQkFBb0IseUJBQXlCLEtBQUsseUNBQXlDLHFCQUFxQixLQUFLLGdEQUFnRCwwREFBMEQsS0FBSyxnREFBZ0QsNkNBQTZDLHFDQUFxQyxPQUFPLDZCQUE2Qix3QkFBd0IsK0JBQStCLEtBQUssb0JBQW9CLHdCQUF3Qix5Q0FBeUMsS0FBSyxrQkFBa0IsNENBQTRDLHdCQUF3Qiw2Q0FBNkMsOEJBQThCLHNCQUFzQiw4QkFBOEIseUJBQXlCLDhCQUE4QiwwQkFBMEIseUJBQXlCLGtDQUFrQyx3QkFBd0IsOEJBQThCLEtBQUssZ0NBQWdDLHdCQUF3QixhQUFhLGlDQUFpQyxvQkFBb0Isb0JBQW9CLGdDQUFnQyxzQkFBc0IseUJBQXlCLE9BQU8sc0JBQXNCLDJCQUEyQix3QkFBd0Isd0JBQXdCLGlDQUFpQyx5QkFBeUIsK0JBQStCLE9BQU8scUJBQXFCLHdCQUF3Qiw4QkFBOEIsd0NBQXdDLDhCQUE4QiwrQkFBK0IsT0FBTywyQ0FBMkMsa0RBQWtELGtDQUFrQyxvQkFBb0IsNkJBQTZCLHVCQUF1QixhQUFhLGtCQUFrQiwrQkFBK0IscUJBQXFCLEtBQUssaUNBQWlDLDJCQUEyQix3QkFBd0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsS0FBSyxrQkFBa0IsMEJBQTBCLDZCQUE2Qix1QkFBdUIscUJBQXFCLEtBQUssOENBQThDLGNBQWMsMEJBQTBCLFNBQVMsS0FBSyw4Q0FBOEMsY0FBYywwQkFBMEIsU0FBUyxTQUFTLDJCQUEyQix1QkFBdUIsdUJBQXVCLDZCQUE2Qix5QkFBeUIsOEJBQThCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0IsNEJBQTRCLHFEQUFxRCxXQUFXLDJHQUEyRyx1REFBdUQsb0JBQW9CLEtBQUsseUZBQXlGLHNCQUFzQix3QkFBd0IsdUNBQXVDLDZDQUE2QywwQ0FBMEMsZUFBZSxvQkFBb0Isc0NBQXNDLHlDQUF5QyxtRUFBbUUsK0RBQStELDRCQUE0Qix1REFBdUQsa0NBQWtDLHFCQUFxQixzQkFBc0IsK0JBQStCLG1CQUFtQixLQUFLLCtEQUErRCx1QkFBdUIscUJBQXFCLHdCQUF3QiwwQkFBMEIsS0FBSyw2RkFBNkYsb0JBQW9CLDhCQUE4Qix3QkFBd0IsS0FBSyx1Q0FBdUM7QUFDMXZhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFL2YsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRzs7OztBQUluRzs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhOztBQUVwQyxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUNBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0M7O0FBRUE7QUFDQSwrQztBQUNBOzs7O0FBSUE7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEU4QztBQUN2QztBQUNHO0FBQ0g7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVUsV0FBVyxzQ0FBUTtBQUNuQztBQUNBO0FBQ0EsTUFBTSwrREFBWSxhQUFhLHVDQUFVO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7QUFDQSw4QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFMkM7QUFDWDtBQUNFOzs7QUFHbEM7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0Q0FBVztBQUM1Qjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixxQ0FBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNDQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7Ozs7O0FBU0EsaUVBQWUsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUMvQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDTztBQUN3QjtBQUNyRSxVQUFVLDBGQUEwRjs7QUFFL0U7Ozs7QUFJckI7QUFDQSxHQUFHLGdGQUFnRjtBQUNuRixHQUFHLG9GQUFvRjtBQUN2RixHQUFHLCtFQUErRTtBQUNsRixHQUFHLDhFQUE4RTtBQUNqRixHQUFHLG9GQUFvRjtBQUN2RixHQUFHLCtFQUErRTtBQUNsRixHQUFHLDhFQUE4RTtBQUNqRixHQUFHLGdGQUFnRjtBQUNuRixHQUFHLG9GQUFvRjtBQUN2RixHQUFHLGdGQUFnRjtBQUNuRixHQUFHLCtFQUErRTtBQUNsRixHQUFHLHFGQUFxRjtBQUN4RixHQUFHLGdGQUFnRjtBQUNuRixHQUFHLCtFQUErRTtBQUNsRixHQUFHLCtFQUErRTtBQUNsRixHQUFHLHFGQUFxRjtBQUN4RixHQUFHLGdGQUFnRjtBQUNuRixHQUFHLCtFQUErRTtBQUNsRixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEtBQUsscURBQXFEO0FBQzFELEtBQUsseURBQXlEO0FBQzlELEtBQUssdURBQXVEO0FBQzVELEtBQUsscURBQXFEO0FBQzFELEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBLEtBQUssZ0ZBQWdGO0FBQ3JGLEtBQUssb0ZBQW9GO0FBQ3pGLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQTtBQUNBLHFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0Esc0RBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFhLGNBQWM7QUFDL0IseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFNBQVM7Ozs7QUFJVCxPQUFPOzs7QUFHUDs7O0FBR0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWEsbUJBQW1CO0FBQ3BDLHFDQUFxQztBQUNyQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSzs7QUFFM0QsbURBQW1ELEtBQUs7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELEtBQUs7QUFDM0QsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSztBQUMzRDtBQUNBLG9EQUFvRCxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDO0FBQ0E7QUFDQTtBQUNBLHFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpRUFBYTtBQUNuQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XFxyXFxuICAgfVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaWNvbntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzExO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ3LDg1LDE1MSk7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG4uZHJvcE9wdGlvbnN7XFxyXFxuICAgIC8qZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMTA7Ki9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3REaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAxMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKmhlaWdodDogMzUwcHg7Ki9cXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbiBcXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsODUsMTUxLCAwLjUpO1xcclxcbiAgLypvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyovXFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODMsIDgzLCA3Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmF7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMSwyMDEsMjAxKTsqL1xcclxcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDZweCAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1pZGRsZXtcXHJcXG4gICAgICBncmlkLWNvbHVtbjoyLzEwO1xcclxcbiAgICAgIGdyaWQtcm93OjIvMTA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOjIlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLXRvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAvKnRhYmxlICovXFxyXFxuICAgdGFibGUge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuXFxyXFxudGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjplbmQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgzMHB4KXtcXHJcXG4gICAgdGJvZHl7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MzFweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxudGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLypoZWlnaHQ6IDgwZW07Ki9cXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGU7XFxyXFxufVxcclxcbnRoZWFkLCB0Ym9keSB0ciB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cXHJcXG59XFxyXFxudGhlYWQge1xcclxcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDFlbSApLyogc2Nyb2xsYmFyIGlzIGF2ZXJhZ2UgMWVtLzE2cHggd2lkdGgsIHJlbW92ZSBpdCBmcm9tIHRoZWFkIHdpZHRoICovXFxyXFxufVxcclxcblxcclxcbltjbGFzcyo9XFxcInJhZGlvLWJ0blxcXCJdLCAuZWRpdC1idG4sIC5kZWxldGUtYnRue1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLyoqKioqIEVORCBUQUJMRSAqKioqL1xcclxcblxcclxcblxcclxcbi8qRG8gdGhlIGhpZGRlbiBmb3JtKi9cXHJcXG4ubXktZm9ybSwgLm15LWZvcm0tZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAgLypTaXQgb24gdG9wICovIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNDAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSwgLmNsb3NlLWVkaXQge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzLFxcclxcbi5jbG9zZS1lZGl0OmhvdmVyLFxcclxcbi5jbG9zZS1lZGl0OmZvY3VzICAgXFxyXFxuICAgIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGtDQUFrQztHQUNuQzs7QUFFSDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjs7QUFFbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7b0JBQ2dCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTOzs7O0FBSWI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7OztBQUlyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7O0VBR0E7TUFDSSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLG9CQUFvQjtFQUN4Qjs7RUFFQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixvQkFBb0I7RUFDeEI7Ozs7R0FJQyxTQUFTO0dBQ1Q7SUFDQyx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQSx5QkFBeUIseUJBQXlCLENBQUM7O0FBRW5ELGdCQUFnQixzQkFBc0IsQ0FBQzs7QUFFdkM7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CLENBQUMsK0NBQStDO0FBQ3ZFO0FBQ0E7SUFDSSx3QkFBd0IsQ0FBQyxvRUFBb0U7QUFDakc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQSxxQkFBcUI7OztBQUdyQixxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2IsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEdBQUcsY0FBYztJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUM1RDs7Ozs7QUFLQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7OztJQUdJLHFCQUFxQjtBQUN6QjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XFxyXFxuICAgfVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaWNvbntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzExO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ3LDg1LDE1MSk7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG4uZHJvcE9wdGlvbnN7XFxyXFxuICAgIC8qZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMTA7Ki9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3REaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAxMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKmhlaWdodDogMzUwcHg7Ki9cXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbiBcXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsODUsMTUxLCAwLjUpO1xcclxcbiAgLypvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyovXFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODMsIDgzLCA3Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmF7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMSwyMDEsMjAxKTsqL1xcclxcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDZweCAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1pZGRsZXtcXHJcXG4gICAgICBncmlkLWNvbHVtbjoyLzEwO1xcclxcbiAgICAgIGdyaWQtcm93OjIvMTA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOjIlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLXRvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAvKnRhYmxlICovXFxyXFxuICAgdGFibGUge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuXFxyXFxudGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjplbmQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgzMHB4KXtcXHJcXG4gICAgdGJvZHl7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MzFweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxudGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLypoZWlnaHQ6IDgwZW07Ki9cXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGU7XFxyXFxufVxcclxcbnRoZWFkLCB0Ym9keSB0ciB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cXHJcXG59XFxyXFxudGhlYWQge1xcclxcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDFlbSApLyogc2Nyb2xsYmFyIGlzIGF2ZXJhZ2UgMWVtLzE2cHggd2lkdGgsIHJlbW92ZSBpdCBmcm9tIHRoZWFkIHdpZHRoICovXFxyXFxufVxcclxcblxcclxcbltjbGFzcyo9XFxcInJhZGlvLWJ0blxcXCJdLCAuZWRpdC1idG4sIC5kZWxldGUtYnRue1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLyoqKioqIEVORCBUQUJMRSAqKioqL1xcclxcblxcclxcblxcclxcbi8qRG8gdGhlIGhpZGRlbiBmb3JtKi9cXHJcXG4ubXktZm9ybSwgLm15LWZvcm0tZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAgLypTaXQgb24gdG9wICovIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNDAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSwgLmNsb3NlLWVkaXQge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzLFxcclxcbi5jbG9zZS1lZGl0OmhvdmVyLFxcclxcbi5jbG9zZS1lZGl0OmZvY3VzICAgXFxyXFxuICAgIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQuc3ZnJztcclxuXHJcbmNvbnN0IGNvbnRlbnRMb2FkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IGNyZWF0ZUlucHV0QnRuID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBocmVmLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaW5wdXRUYWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGlucHV0VGFnLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgaW5wdXRUYWcudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGlucHV0VGFnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBob21lQnRuID0gY3JlYXRlSW5wdXRCdG4oXCJob21lLWJ0blwiLCBcIiNcIiwgXCJIb21lXCIpO1xyXG4gICAgbGV0IHRvZGF5QnRuID0gY3JlYXRlSW5wdXRCdG4oXCJ0b2RheS1idG5cIiwgXCIjXCIsIFwiVG9kYXlcIik7XHJcbiAgICBsZXQgd2Vla0J0biA9IGNyZWF0ZUlucHV0QnRuKFwid2Vlay1idG5cIiwgXCIjXCIsIFwiV2Vla1wiKTtcclxuICAgIGxldCBwcm9qZWN0c0J0biA9IGNyZWF0ZUlucHV0QnRuKFwicHJvamVjdHMtYnRuXCIsIFwiI1wiLCBcIlByb2plY3RzXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkcm9wZG93bkRpdi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25EaXYpO1xyXG5cclxuICAgIGNvbnN0IGRyb3BPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRyb3BPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJkcm9wT3B0aW9uc1wiKTtcclxuICAgIGRyb3Bkb3duRGl2LmFwcGVuZENoaWxkKGRyb3BPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkRpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpXHJcbiAgICBcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQod2Vla0J0bik7XHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBtaWRkbGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKTtcclxuICAgIG1pZGRsZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiAzLzEwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLyogc3ViIHBvcmplY3RzICovXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcE9wdGlvbnNcIilcclxuICAgIGNvbnN0IHN1YlByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3ViUHJvakRpdi5jbGFzc0xpc3QuYWRkKFwic3ViUHJvamVjdHNcIik7XHJcbiAgICBkcm9wZG93bk9wdGlvbnNFbC5hcHBlbmRDaGlsZChzdWJQcm9qRGl2KTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZFByb2ouY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3REaXZcIik7XHJcbiAgICAvL2Ryb3Bkb3duRGl2RWwuYXBwZW5kQ2hpbGQoYWRkUHJvaik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2opO1xyXG4gICAgY29uc3QgaW5wdXRQcm9qSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0UHJvakljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zcmMgPSBhZGRJY29uO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QWRkXCIpO1xyXG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChpbnB1dFByb2pJY29uKSA7ICBcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWRkUHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7ICAgIFxyXG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dCkgO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50TG9hZDtcclxuXHJcbiIsImltcG9ydCB7Y2hlY2tCdXR0b24sIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbn0gZnJvbSAnLi90YWJsZS1idXR0b25zLmpzJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vZWRpdC5zdmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3RyYXNoLnN2Zyc7XHJcbmltcG9ydCBzb3J0SWNvbiBmcm9tICcuL3NvcnQuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICBsZXQgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gICAgZm9yIChsZXQga2V5IG9mIGRhdGEpIHtcclxuICAgICAgaWYoa2V5PT1cImRhdGVcIil7XHJcbiAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIC8vbGV0IGFuY2hvclNvcnQgPSBkb2MuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgLy9hbmNob3JTb3J0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgIGxldCBhU29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBhU29ydC5jbGFzc0xpc3QuYWRkKFwic29ydFwiKTtcclxuICAgICAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICAgICAgYVNvcnQuc3JjID0gc29ydEljb247XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMHB4XCIpO1xyXG4gICAgICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMwcHhcIik7XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIixcIlNvcnQgQnkgRHVlIERhdGVcIik7XHJcbiAgICAgICAgLy9sZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQoYVNvcnQpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKGtleSk7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcclxuICBsZXQgbWlzc0tleXMgPSBbXCJpZFwiLCBcInByb2plY3RzXCIsIFwiZGV0YWlsc1wiXVxyXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicl9cIisgZWxlbWVudFtcImlkXCJdKTtcclxuICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1idG5cIitlbGVtZW50W1wiaWRcIl0pO1xyXG4gICAgICBjaGVja0J1dHRvbihjZWxsKTtcclxuICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgIGlmKCFtaXNzS2V5cy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgbGV0IGNlbGxFZGl0ID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbEVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xyXG4gICAgICBlZGl0QnV0dG9uKGNlbGxFZGl0LCBlZGl0SWNvbik7XHJcbiAgICAgIGxldCBjZWxsRGVsZXRlID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuICAgICAgZGVsZXRlQnV0dG9uKGNlbGxEZWxldGUsIGRlbGV0ZUljb24pO1xyXG4gIH1cclxuICAvL3Rib2R5SGVpZ2h0KCk7XHJcbn1cclxuXHJcbi8qZnVuY3Rpb24gdGJvZHlIZWlnaHQoKXtcclxuICBjb25zdCB0Ym9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xyXG4gIGlmKHRib2R5RWwpe1xyXG4gICAgbGV0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XHJcbiAgICBsZXQgbmV3SGVpZ2h0ID0gc2NyZWVuSGVpZ2h0KjAuNjtcclxuICAgIC8vdGJvZHlFbC5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQrXCJweFwiOyBcclxuICAgIGNvbnNvbGUubG9nKHNjcmVlbkhlaWdodCk7IFxyXG4gIH1cclxufSovXHJcblxyXG4gIGV4cG9ydCB7Z2VuZXJhdGVUYWJsZUhlYWQsIGdlbmVyYXRlVGFibGV9OyIsImltcG9ydCBwcm9maWxlSWNvbiBmcm9tICcuL3Byb2ZpbGVJbWcucG5nJztcclxuaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQuc3ZnJztcclxuaW1wb3J0IHNvcnRJY29uIGZyb20gJy4vc29ydC5zdmcnO1xyXG5cclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCAtIGFnYWluIG9rYXkgbGllc1wiKVxyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IHByb2ZpbGVJY29uO1xyXG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWltZ1wiKTtcclxuXHJcbiAgICBjb25zdCAgcHJvZmlsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLWljb25cIik7XHJcbiAgICBwcm9maWxEaXYuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gICAgYWRkSW5wdXQuc3JjID0gYWRkSWNvbjtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcblxyXG4gICAgbGV0IGFTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0XCIpO1xyXG4gICAgYVNvcnQuc3JjID0gc29ydEljb247XHJcbiAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMwcHhcIik7XHJcbiAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzMHB4XCIpO1xyXG4gICAgYVNvcnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIixcIlNvcnQgQnkgRHVlIERhdGVcIik7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2UiLCJcclxuXHJcblxyXG5jb25zdCBjaGVja0J1dHRvbiA9IChjZWxsKSA9PiB7XHJcbiAgICBsZXQgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByYWRpb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKHJhZGlvQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGVkaXRCdXR0b24gPSAoY2VsbCwgaWNvbikgPT57XHJcbiAgICAvL2xldCBjZWxsRWRpdCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBlZGl0QnRuLnNyYyA9IGljb247XHJcblxyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG59XHJcblxyXG5cclxuY29uc3QgZGVsZXRlQnV0dG9uID0gKGNlbGwsIGljb24pID0+e1xyXG4gICAgLy9sZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gaWNvbjtcclxuXHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjaGVja0J1dHRvbiwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9ufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UuanMnO1xyXG5pbXBvcnQgY29udGVudExvYWQgZnJvbSAnLi9jb250ZW50cy1sb2FkLmpzJztcclxuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlSGVhZCwgZ2VuZXJhdGVUYWJsZX0gZnJvbSAnLi9nZW5lcmF0ZS10YWJsZS5qcyc7XHJcbi8vaW1wb3J0IHtjbG9zZUZvcm0sIGZvcm1SZXNldCwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgcmVwbGFjZVRhc2tPYmplY3QsY2hlY2tDb25kaXRpb24sIGVkaXRMaXN0bmVyIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zLmpzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5sZXQgbW91bnRhaW5zID0gW1xyXG4gIHsgIGlkOjEsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTAxXCJ9LFxyXG4gIHsgIGlkOjIsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wNy0yNVwifSxcclxuICB7ICBpZDozLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMTAtMDgtMjVcIiB9LFxyXG4gIHsgIGlkOjQsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDo1LCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6NiwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgfSxcclxuICB7ICBpZDo3LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6OCwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsY29cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6OSwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCJ9LFxyXG4gIHsgIGlkOjEwLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiB9LFxyXG4gIHsgIGlkOjExLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTIsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDoxMywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgfSxcclxuICB7ICBpZDoxNCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjE1LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTYsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDoxNywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDA5LTA4LTE2XCIgfSxcclxuICB7ICBpZDoxOCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjE5LCBwcm9qZWN0czpcIlRlc3RcIiwgdGl0bGU6IFwiTW9udGUgQW1pYXRhXCIsIGRldGFpbHM6XCJcIixkYXRlOiBcIjIwMjEtMDgtMDVcIiAgfVxyXG5dO1xyXG5cclxubGV0IGN1cnJlbnRGaWx0ZXI7XHJcbi8qbGV0IG1vdW50YWlucyA9IFtcclxuICAgIHsgIGlkOjEsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogMTY1OH0sXHJcbiAgICB7ICBpZDoyLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiAxNjU0fSxcclxuICAgIHsgIGlkOjMsIHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IDE1MjAgfSxcclxuICAgIHsgIGlkOjQsIHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLGRhdGU6IDE1OTIgIH0sXHJcbiAgICB7ICBpZDo1LCB0aXRsZTogXCJNb250ZSBBbWlhdGFcIiwgZGV0YWlsczpcIlwiLGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9XHJcbiAgXTsqL1xyXG5cclxuXHJcbiAgbGV0IHRlc3QgPSBbXHJcbiAgICB7ICBpZDoxLCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWxjb1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICAgIHsgIGlkOjIsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0xNFwifSxcclxuICAgIHsgIGlkOjMsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yMFwifVxyXG4gIF07XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRGF0ZUZvcm1hdChkYXRlKXtcclxuICBsZXQgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgbGV0IG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGRhdGUgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyVG9EYXRlKHN0ckRhdGUpIHtcclxuICBsZXQgZWxlbWVudERhdGUgPSBuZXcgRGF0ZShzdHJEYXRlKTtcclxuICBlbGVtZW50RGF0ZSA9IGNoYW5nZURhdGVGb3JtYXQoZWxlbWVudERhdGUpO1xyXG4gIGVsZW1lbnREYXRlID0gRGF0ZS5wYXJzZShlbGVtZW50RGF0ZSk7XHJcbiAgcmV0dXJuIGVsZW1lbnREYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUb01vbmRheSggZGF0ZSApIHtcclxuICBsZXQgZGF5ID0gZGF0ZS5nZXREYXkoKSB8fCA3OyAgXHJcbiAgaWYoIGRheSAhPT0gMSApIFxyXG4gICAgICBkYXRlLnNldEhvdXJzKC0yNCAqIChkYXkgLSAxKSk7IFxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUb1N1bmRheSggZGF0ZSApIHtcclxuICBsZXQgZGF5ID0gZGF0ZS5nZXREYXkoKSB8fCA3OyAgXHJcbiAgaWYoIGRheSAhPT0gMSApIFxyXG4gICAgICBkYXRlLnNldEhvdXJzKC0yNCAqIChkYXkgLSA3KSk7IFxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zb2xlLmxvZyhjaGFuZ2VEYXRlRm9ybWF0KHRvZGF5KSk7XHJcbmxldCBtb24gPSBuZXcgRGF0ZSgpO1xyXG5sZXQgc3VuID0gbmV3IERhdGUoKTtcclxudG9kYXkgPSBEYXRlLnBhcnNlKGNoYW5nZURhdGVGb3JtYXQodG9kYXkpKTtcclxubW9uID0gRGF0ZS5wYXJzZShjaGFuZ2VEYXRlRm9ybWF0KHNldFRvTW9uZGF5KG1vbikpKTtcclxuc3VuID0gRGF0ZS5wYXJzZShjaGFuZ2VEYXRlRm9ybWF0KHNldFRvU3VuZGF5KHN1bikpKTtcclxuXHJcblxyXG5cclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5mdW5jdGlvbiB0b2RheVRhYih0b2RheURhdGUpe1xyXG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1idG5cIik7XHJcbiAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpKTtcclxuICAgIGxldCBkYXRhRmlsdGVyID0gW107XHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgICAgaWYoc3RyVG9EYXRlKGVsZW1lbnRbXCJkYXRlXCJdKT09dG9kYXlEYXRlKXtcclxuICAgICAgICBkYXRhRmlsdGVyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGFGaWx0ZXIpO1xyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG4gICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiVG9kYXlcIik7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gd2Vla1RhYihtb25kYXlEYXRlLCBzdW5kYXlEYXRlKXtcclxuICBjb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLWJ0blwiKTtcclxuICB3ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZyh0b2RheURhdGUpO1xyXG4gICAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICBsZXQgZWxlbWVudERhdGUgPSBzdHJUb0RhdGUoZWxlbWVudFtcImRhdGVcIl0pO1xyXG4gICAgICBpZigoZWxlbWVudERhdGU+PW1vbmRheURhdGUpICYmIChlbGVtZW50RGF0ZTw9c3VuZGF5RGF0ZSkpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG4gICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiV2Vla1wiKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjVGFibGVBbGxCdXR0b25zKGRhdGEsIHR5cGUpe1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlTWFpbicpO1xyXG4gICAgaWYoY29udGFpbmVyUmVtKXtcclxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXJSZW0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgLy9sZXQgZGF0YUhlYWQgPSBPYmplY3Qua2V5cyhtb3VudGFpbnNbMF0pO1xyXG4gICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgLy9nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YUhlYWQpOyAvLyB0aGVuIHRoZSBoZWFkXHJcbiAgICBmb3JtUmVzZXQodHlwZSk7XHJcbiAgICBjbG9zZUZvcm0odHlwZSk7XHJcbiAgICBjb25zdCBjaGVja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG4gICAgY2hlY2tFbC5mb3JFYWNoKGJveCA9PntcclxuICAgICAgY2hlY2tDb25kaXRpb24oYm94KTtcclxuXHJcbiAgICB9KTtcclxuICAgIGVkaXRMaXN0bmVyKCk7XHJcbiAgICBleGVjRGVsZXRlVGFzayhkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UodGV4dCl7XHJcbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgc3ViVGl0bGUudGV4dENvbnRlbnQ9dGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEFuY2hvcihzdWJQcm9qZWN0RWxlbWVudCwgdGV4dCl7XHJcbiAgY29uc3QgbmV3UHJvakFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIG5ld1Byb2pBbmNob3IuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcclxuICBuZXdQcm9qQW5jaG9yLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBuZXdQcm9qQW5jaG9yLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgbmV3UHJvakFuY2hvci5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNDBweFwiO1xyXG4gIG5ld1Byb2pBbmNob3Iuc3R5bGUuY29sb3IgPSBcInJnYig0Nyw4NSwxNTEpXCI7XHJcblxyXG4gIHN1YlByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld1Byb2pBbmNob3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJEYXRhKHRpdGxlKXtcclxuICAvL2NvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICBpZih0aXRsZS50ZXh0Q29udGVudCE9XCJIb21lXCIpe1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgIGlmKGVsZW1lbnRbXCJwcm9qZWN0c1wiXT09dGl0bGUudGV4dENvbnRlbnQpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFGaWx0ZXI7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICByZXR1cm4gbW91bnRhaW5zO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgcHJvamVjdExzdD1bXVxyXG5cclxuY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250YWluZXJcIik7XHJcbmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgY29uc3QgYWRkTmV3Q29udHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3REaXZcIilcclxuICAgIGlmKChjb250ZW50cykgJiYgKGFkZE5ld0NvbnRzKSl7XHJcbiAgICAgICAgLy9yZW1vdmVDb250ZW50cygpO1xyXG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZE5ld0NvbnRzLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1pZGRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpO1xyXG4gICAgICAgIG1pZGRsZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiAyLzEwXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighY29udGVudHMpe1xyXG4gICAgICAgIGNvbnRlbnRMb2FkKCk7XHJcbiAgICAgICAgaWYobW91bnRhaW5zLmxlbmd0aD4wKXtcclxuICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICAgICAgICBpZighcHJvamVjdExzdC5pbmNsdWRlcyhlbGVtZW50W1wicHJvamVjdHNcIl0pKXtcclxuICAgICAgICAgICAgICBwcm9qZWN0THN0LnB1c2goZWxlbWVudFtcInByb2plY3RzXCJdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb2plY3RMc3QubGVuZ3RoPjApe1xyXG4gICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHByb2plY3RMc3Qpe1xyXG4gICAgICAgICAgICBjb25zdCBzdWJQcm9qRGl2ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YlByb2plY3RzXCIpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QW5jaG9yKHN1YlByb2pEaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWJQcmpvY0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJQcm9qZWN0c1wiKTtcclxuICAgICAgICBsZXQgc3ViSXRlbXMgPSBzdWJQcmpvY0VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xyXG4gICAgICAgIHN1Ykl0ZW1zLmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhRmlsdGVyID0gZmlsdGVyRGF0YShpdGVtKTtcclxuICAgICAgICAgICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG4gICAgICAgICAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoaXRlbS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRvZGF5VGFiKHRvZGF5KTtcclxuICAgICAgICB3ZWVrVGFiKG1vbiwgc3VuKTtcclxuICAgICAgICBjb25zdCBob21lQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idG5cIik7XHJcbiAgICAgICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMobW91bnRhaW5zLFwiXCIpO1xyXG4gICAgICAgICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiSG9tZVwiKTtcclxuICAgICAgICB9KVxyXG4gIFxyXG4gXHJcbiAgICB9XHJcbiAgICAvKnNpZGUgYmFyIGV2ZW50IGxpc3RuZXJzICovXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEFkZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkXCIpO1xyXG4gICAgaWYocHJvamVjdEFkZEVsKXtcclxuICAgICAgcHJvamVjdEFkZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHN1YlByb2pEaXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgY29uc3QgcHJvalByb21wdCA9IHByb21wdChcIk5ldyBQcm9qZWN0IE5hbWVcIik7XHJcbiAgICAgICAgaWYocHJvalByb21wdCAmJiBzdWJQcm9qRGl2KXtcclxuICAgICAgICAgIGNyZWF0ZVByb2plY3RBbmNob3Ioc3ViUHJvakRpdiwgcHJvalByb21wdCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHN1YlByam9jRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YlByb2plY3RzXCIpO1xyXG4gICAgICAgIGxldCBzdWJJdGVtcyA9IHN1YlByam9jRWwucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgbGV0IGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIpO1xyXG4gICAgICAgICAgICAvKmNoYW5nZSBzdWJ0aXRsZSovXHJcbiAgICAgICAgICAgIHN1YlByb2plY3RUaXRsZUNoYW5nZShpdGVtLnRleHRDb250ZW50KTtcclxuICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKkNyZWF0ZSBteSBib29rIGNvbnN0cnVjdG9yIGhlcmUqL1xyXG5mdW5jdGlvbiBUYXNrKGlkLCBwcm9qZWN0cywgdGl0bGUsIGRldGFpbHMsIGRhdGUpe1xyXG4gICAgdGhpcy5pZD1pZFxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHNcclxuICAgIHRoaXMuZGF0ZT1kYXRlXHJcbiAgfVxyXG5cclxuXHJcbiAgLy9sZXQgbW91bnRhaW5zID0gW107XHJcblxyXG4gIFxyXG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcclxuICBpZiAobW91bnRhaW5zLmxlbmd0aCA+MCkge1xyXG4gICAgLy9sZXQgZGF0YSA9IE9iamVjdC5rZXlzKG1vdW50YWluc1swXSk7XHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBtb3VudGFpbnMpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcclxuICAgIC8vZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IGFkZEl0bUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hZGQtdGFza1wiKTtcclxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtXCIpO1xyXG5hZGRJdG1FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gIFxyXG59KVxyXG5jbG9zZUZvcm0oXCJcIik7XHJcblxyXG4vKiBjbG9zZSBmdW5jdGlvbiovXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybSh0eXBlKSB7XHJcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLW15LWZvcm0ke3R5cGV9YCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNsb3NlJHt0eXBlfWApO1xyXG4gIGlmKGNsb3NlQnRuKXtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgbGV0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy10aGUtZm9ybSR7dHlwZX1gKS5yZXNldCgpO1xyXG4gIH0pICBcclxuICB9XHJcblxyXG5cclxufVxyXG4vKiByZXNldCBhbmQgY2xvc2UgZm9ybSBhZnRlciBkaXNwbGF5IGZ1bmN0aW9uICovXHJcbmZ1bmN0aW9uIGZvcm1SZXNldCh0eXBlKXtcclxuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtbXktZm9ybSR7dHlwZX1gKTtcclxuICBpZihmb3JtRWwpe1xyXG4gICAgbGV0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy10aGUtZm9ybSR7dHlwZX1gKS5yZXNldCgpO1xyXG4gICAgZm9ybUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbi8qIHJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZm9yIHRhYmxlIGJvZHkgLSBmcmVzaCBmb3IgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIGlmKHBhcmVudC5maXJzdENoaWxkKXtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjcmVhdGUgc3VibWl0IGJ1dHRvbiAqL1xyXG5sZXQgbWF4SWQ9bW91bnRhaW5zLmxlbmd0aDtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdWJtaXQtYnRuXCIpO1xyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpdGxlLWZvcm1cIikudmFsdWU7XHJcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikudmFsdWVcclxuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpLnZhbHVlO1xyXG4gICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBuZXcgVGFzayhtYXhJZCsxLCBwcm9qZWN0LCB0aXRsZSwgZGV0YWlscywgZHVlZGF0ZSk7XHJcbiAgICBtb3VudGFpbnMucHVzaChpdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKG1vdW50YWlucyk7XHJcbiAgICBtYXhJZCsrO1xyXG4gICAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICAgIGxldCBkYXRhRmlsdGVyID0gIGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIilcclxuICAgIFxyXG5cclxufSlcclxuXHJcbi8qY2hlY2sgYnV0dG9uIHN0cmlrZSB0aHJvdWdoKi9cclxuZnVuY3Rpb24gY2hlY2tDb25kaXRpb24oYm94KXtcclxuICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihib3guY2hlY2tlZCl7XHJcbiAgICAgIGxldCByYWRpb1BhcmVudCA9IGJveC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgcm93UGFyZW50ID0gcmFkaW9QYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKG5laWdoYm91ci50ZXh0Q29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFib3guY2hlY2tlZCl7XHJcbiAgICAgIGxldCByYWRpb1BhcmVudCA9IGJveC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgcm93UGFyZW50ID0gcmFkaW9QYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcbmNoZWNrRWwuZm9yRWFjaChib3ggPT57XHJcbiAgY2hlY2tDb25kaXRpb24oYm94KTtcclxuXHJcbn0pXHJcblxyXG5cclxuLypoZWxwZXIgKi9cclxuZnVuY3Rpb24gZ2V0Q2xhc3NJRE9QYXJlbnQoZWxlbWVudCl7XHJcbiAgbGV0IGVkaXRQYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgbGV0IGlkeCA9IE51bWJlcihlZGl0UGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKC9cXEQrL2csICcnKSk7XHJcbiAgY29uc29sZS5sb2coaWR4KTtcclxuICByZXR1cm4gaWR4O1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRUYXNrT2JqZWN0KGRhdGEsIGlkeCkge1xyXG4gIGxldCB0YXNrU2VsZWN0ZWQ7XHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEpe1xyXG4gICAgICBmb3IobGV0IGtleSBpbiBlbGVtZW50KXtcclxuICAgICAgICAgIGlmIChrZXk9PVwiaWRcIiAmJiBlbGVtZW50W2tleV09PWlkeCl7XHJcbiAgICAgICAgICAgICAgdGFza1NlbGVjdGVkID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFza1NlbGVjdGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUVkaXRGb3JtKHRhc2spe1xyXG4gIGxldCB0aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aXRsZS1mb3JtLWVkaXRcIik7XHJcbiAgdGl0bGVFbC52YWx1ZSA9IHRhc2tbXCJ0aXRsZVwiXTtcclxuXHJcbiAgbGV0IGRldGFpbHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGV0YWlscy1lZGl0XCIpO1xyXG4gIGRldGFpbHNFbC52YWx1ZSA9IHRhc2tbXCJkZXRhaWxzXCJdO1xyXG5cclxuICBsZXQgcHJvamVjdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZWRpdFwiKTtcclxuICBwcm9qZWN0c0VsLnZhbHVlID0gdGFza1tcInByb2plY3RzXCJdO1xyXG5cclxuICBsZXQgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kdWUtZGF0ZS1lZGl0XCIpO1xyXG4gIGRhdGVFbC52YWx1ZSA9IHRhc2tbXCJkYXRlXCJdO1xyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VUYXNrT2JqZWN0KGRhdGEsIGlkeCwgbmV3UHJvamVjdCwgbmV3VGl0bGUsIG5ld0RldGFpbHMsIG5ld0RhdGUpe1xyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgZWxlbWVudFtcInByb2plY3RzXCJdPW5ld1Byb2plY3Q7XHJcbiAgICAgIGVsZW1lbnRbXCJ0aXRsZVwiXT1uZXdUaXRsZTtcclxuICAgICAgZWxlbWVudFtcImRldGFpbHNcIl09bmV3RGV0YWlscztcclxuICAgICAgZWxlbWVudFtcImRhdGVcIl09bmV3RGF0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbi8qZWRpdCBmb3JtICovXHJcbmxldCBpbmRleFNlbCA7XHJcbmZ1bmN0aW9uIGVkaXRMaXN0bmVyKCl7XHJcbiAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWJ0blwiKTtcclxuICBlZGl0RWwuZm9yRWFjaChlZGl0SXRlbSA9PntcclxuICAgIGVkaXRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57IFxyXG4gICAgICAgIGxldCBpZHggPSBnZXRDbGFzc0lET1BhcmVudChlZGl0SXRlbSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtLWVkaXRcIik7XHJcbiAgICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOyAgICAgXHJcbiAgICAgICAgbGV0IHRhc2tTZWxlY3RlZCA9IGZpbmRUYXNrT2JqZWN0KG1vdW50YWlucywgaWR4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrU2VsZWN0ZWQpO1xyXG4gICAgICAgIHBvcHVsYXRlRWRpdEZvcm0odGFza1NlbGVjdGVkKTtcclxuICAgICAgICBjbG9zZUZvcm0oXCItZWRpdFwiKTtcclxuICAgICAgICBpbmRleFNlbD1pZHg7XHJcbiAgICAgIFxyXG4gIH0pXHJcbn0pICBcclxufVxyXG5cclxuZWRpdExpc3RuZXIoKTtcclxuXHJcblxyXG5cclxuLypkbyBzdWJtaXQgYnV0dG9uIG9uIGVkaXQgZm9ybSAqL1xyXG5cclxuY29uc3Qgc3VibWl0QnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LWJ0bi1lZGl0XCIpO1xyXG5zdWJtaXRCdG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybS1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWVkaXRcIikudmFsdWU7XHJcbiAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlLWVkaXRcIikudmFsdWU7XHJcbiAgcmVwbGFjZVRhc2tPYmplY3QobW91bnRhaW5zLCBpbmRleFNlbCwgcHJvamVjdCwgdGl0bGUsIGRldGFpbHMsIGR1ZWRhdGUpO1xyXG4gIGNvbnNvbGUubG9nKG1vdW50YWlucyk7XHJcbiAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICBsZXQgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiLWVkaXRcIilcclxufSlcclxuXHJcblxyXG4vKiBub3cgZG8gZGVsZXRlIHRhc2sgKi9cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGV4ZWNEZWxldGVUYXNrKGRhdGEpe1xyXG4gIGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xyXG4gIGRlbGV0ZUVsLmZvckVhY2goZGVsZXRlSXRlbSA9PntcclxuICAgIGRlbGV0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICBsZXQgZGVsZXRlUGFyZW50ID0gZGVsZXRlSXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgaWR4ID0gTnVtYmVyKGRlbGV0ZVBhcmVudC5jbGFzc05hbWUucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICBkYXRhLnNwbGljZShpZHgtMSwgMSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVNYWluJyk7XHJcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyUmVtKTtcclxuICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpO1xyXG4gICAgICBleGVjRGVsZXRlVGFzayhkYXRhKTtcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhlY0RlbGV0ZVRhc2sobW91bnRhaW5zKTtcclxuXHJcbi8qIHNvcnQgYnV0dG9uICovXHJcblxyXG5sZXQgYXNjPTE7XHJcbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRcIik7XHJcbiAgc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICAgIGxldCAgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICBkYXRhRmlsdGVyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICBpZihhc2M9PTEpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0clRvRGF0ZShhLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGIuZGF0ZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYXNjPT0oLTEpKXtcclxuICAgICAgICByZXR1cm4gICBwYXJzZUZsb2F0KHN0clRvRGF0ZShiLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGEuZGF0ZSkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgYXNjKj0oLTEpO1xyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG5cclxuICB9KVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==