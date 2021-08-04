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
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    height: 100vh;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    grid-column: 1/3;\r\n    grid-row: 2/9;\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/3;\r\n    grid-row: 10;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 100px;\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td, table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #04AA6D;\r\n    color: white;\r\n}\r\n\r\ntbody {\r\n    display: block;\r\n    height: 550px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n.radio-btn, .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,      \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    height: 100vh;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    grid-column: 1/3;\r\n    grid-row: 2/9;\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/3;\r\n    grid-row: 10;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 100px;\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td, table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #04AA6D;\r\n    color: white;\r\n}\r\n\r\ntbody {\r\n    display: block;\r\n    height: 550px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n.radio-btn, .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,      \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
    middleDiv.setAttribute("style", "grid-column: 4/10");



    /* sub porjects */
    const dropdownOptionsEl = document.querySelector(".dropOptions")
    const subProjDiv = document.createElement("div");
    subProjDiv.classList.add("subProjects");
    dropdownOptionsEl.appendChild(subProjDiv);

    const addProj = document.createElement("div");
    addProj.classList.add("addProjectDiv");
    dropdownDivEl.appendChild(addProj);
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




function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        row.classList.add("r_"+ element["id"]);
        let cell = row.insertCell();
        cell.classList.add("radio-btn"+element["id"]);
        (0,_table_buttons_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)(cell);
      for (let key in element) {
        if(key!="id"){
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
  }


  

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






  
(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.default)();



const bar = document.querySelector(".dropdown-container");
bar.addEventListener("click", ()=>{
    const contents = document.querySelector(".dropdown-content");
    if(contents){
        //removeContents();
        contents.remove();
        const middleDiv = document.querySelector(".middle");
        middleDiv.setAttribute("style", "grid-column: 2/10");
    }
    else if(!contents){
        (0,_contents_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    }
    /*side bar event listners */

    const projectAddEl = document.querySelector(".projectAdd");
    if(projectAddEl){
      projectAddEl.addEventListener("click", ()=>{
        console.log("Hello");
        const subProjDiv =document.querySelector(".subProjects");
        const projPrompt = prompt("New Project Name");
        if(projPrompt && subProjDiv){
          const newProjAnchor = document.createElement("a");
          newProjAnchor.classList.add(projPrompt);
          newProjAnchor.textContent = projPrompt;
          newProjAnchor.style.fontSize = "15px";
          newProjAnchor.style.paddingLeft = "40px";
          newProjAnchor.style.color = "rgb(47,85,151)";

          subProjDiv.appendChild(newProjAnchor);
          
        }
        ;

      })
    }
 
})

/*Create my book constructor here*/
function Task(id, title, details, date){
    this.id=id
    this.title = title
    this.details = details
    this.date=date
  }

let overall = [
  {  id:1, title: "Monte Falco", details:"", date: 1658},
  {  id:2, title: "Monte Falterona", details:"", date: 1654},
  {  id:3, title: "Poggio Scali", details:"", date: 1520 },
  {  id:4, title: "Pratomagno", details:"",date: 1592  },
  {  id:5, title: "Monte Amiata", details:"",date: "2021-08-25"  }
];

let mountains = [
    {  id:1, title: "Monte Falco", details:"", date: 1658},
    {  id:2, title: "Monte Falterona", details:"", date: 1654},
    {  id:3, title: "Poggio Scali", details:"", date: 1520 },
    {  id:4, title: "Pratomagno", details:"",date: 1592  },
    {  id:5, title: "Monte Amiata", details:"",date: "2021-08-25"  }
  ];
  
  //let mountains = [];

  
  let table = document.querySelector("table");
  if (mountains.length >0) {
    let data = Object.keys(mountains[0]);
    (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, mountains); // generate the table first
    //generateTableHead(table, data); // then the head
  }


const addItmEl = document.querySelector(".js-add-task");
const formEl = document.querySelector(".js-my-form");
addItmEl.addEventListener("click", () =>{
  formEl.style.display="block";
  
})

/* close function*/
function closeForm(type) {
  const formEl = document.querySelector(`.js-my-form${type}`);

  const closeBtn = document.querySelector(`.close${type}`);

  closeBtn.addEventListener("click", () =>{
      formEl.style.display = "none";
      let res = document.querySelector(`.js-the-form${type}`).reset();
  })  
}
/* reset and close form after display function */
function formReset(type){
  const formEl = document.querySelector(`.js-my-form${type}`);
  let res = document.querySelector(`.js-the-form${type}`).reset();
  formEl.style.display = "none";
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
    let details = document.querySelector(".details").value;
    let duedate = document.querySelector(".js-due-date").value;
    let item = new Task(maxId+1, title, details, duedate);
    mountains.push(item);
    console.log(mountains);
    const containerRem = document.querySelector('.tableMain');
    removeAllChildNodes(containerRem);

    let table = document.querySelector("table");
    //let data = Object.keys(mountains[0]);
    maxId++;
    (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, mountains);
    formReset("");
    closeForm("");
    //checkTask();
    const checkEl = document.querySelectorAll("input[type=checkbox]");
    checkEl.forEach(box =>{
      checkCondition(box);

    });
    editListner();
    execDeleteTask(mountains);
    

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

  let dateEl = document.querySelector(".js-due-date-edit");
  dateEl.value = task["date"];


}

function replaceTaskObject(data, idx, newTitle, newDetails, newDate){
  for(let element of data){
    if(element["id"]==idx){
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
  let details = document.querySelector(".details-edit").value;
  let duedate = document.querySelector(".js-due-date-edit").value;
  replaceTaskObject(mountains, indexSel, title, details, duedate);
  const containerRem = document.querySelector('.tableMain');
  removeAllChildNodes(containerRem);
  let table = document.querySelector("table");
  (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, mountains);
  const formEl = document.querySelector(".js-my-form-edit")
  formEl.style.display = "none";
  formReset("-edit");
  editListner();
  const checkEl = document.querySelectorAll("input[type=checkbox]");
  checkEl.forEach(box =>{
    checkCondition(box);
  })
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9jb250ZW50cy1sb2FkLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2dlbmVyYXRlLXRhYmxlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy90YWJsZS1idXR0b25zLmpzIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELDZDQUE2Qyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLCtDQUErQyxvQ0FBb0MsZ0NBQWdDLEtBQUssNkJBQTZCLDBCQUEwQixvQkFBb0IseUNBQXlDLHFCQUFxQiw0QkFBNEIsNEJBQTRCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEtBQUssc0JBQXNCLDJCQUEyQixvQkFBb0Isc0JBQXNCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLHdDQUF3QyxTQUFTLGlCQUFpQixvQkFBb0IscUJBQXFCLEtBQUssc0JBQXNCLHNCQUFzQiwyQ0FBMkMsS0FBSyxpQkFBaUIseUJBQXlCLHNCQUFzQiwyQ0FBMkMscUJBQXFCLCtCQUErQix5QkFBeUIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QztBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHRDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUVBQWE7QUFDbkI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XFxyXFxuICAgfVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaWNvbntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzExO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ3LDg1LDE1MSk7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcbi5kcm9wT3B0aW9uc3tcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvOTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3REaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5zdWJQcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODMsIDgzLCA3Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmF7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMSwyMDEsMjAxKTsqL1xcclxcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDZweCAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1pZGRsZXtcXHJcXG4gICAgICBncmlkLWNvbHVtbjoyLzEwO1xcclxcbiAgICAgIGdyaWQtcm93OjIvMTA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOjIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLXRvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICAvKnRhYmxlICovXFxyXFxuICAgdGFibGUge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGQsIHRhYmxlIHRoIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuXFxyXFxudGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLCAuZWRpdC1idG4sIC5kZWxldGUtYnRue1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLyoqKioqIEVORCBUQUJMRSAqKioqL1xcclxcblxcclxcblxcclxcbi8qRG8gdGhlIGhpZGRlbiBmb3JtKi9cXHJcXG4ubXktZm9ybSwgLm15LWZvcm0tZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAgLypTaXQgb24gdG9wICovIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNDAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSwgLmNsb3NlLWVkaXQge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzLFxcclxcbi5jbG9zZS1lZGl0OmhvdmVyLFxcclxcbi5jbG9zZS1lZGl0OmZvY3VzLCAgICAgIFxcclxcbiAgICB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7SUFDSSxrQ0FBa0M7R0FDbkM7O0FBRUg7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjs7QUFFbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTOzs7O0FBSWI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7OztBQUlyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7O0VBR0E7TUFDSSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsY0FBYztFQUNsQjs7RUFFQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixvQkFBb0I7RUFDeEI7O0dBRUMsU0FBUztHQUNUO0lBQ0MseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQSx5QkFBeUIseUJBQXlCLENBQUM7O0FBRW5ELGdCQUFnQixzQkFBc0IsQ0FBQzs7QUFFdkM7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CLENBQUMsK0NBQStDO0FBQ3ZFO0FBQ0E7SUFDSSx3QkFBd0IsQ0FBQyxvRUFBb0U7QUFDakc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQSxxQkFBcUI7OztBQUdyQixxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2IsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEdBQUcsY0FBYztJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUM1RDs7Ozs7QUFLQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7OztJQUdJLHFCQUFxQjtBQUN6QjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XFxyXFxuICAgfVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaWNvbntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzExO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ3LDg1LDE1MSk7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcbi5kcm9wT3B0aW9uc3tcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvOTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3REaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbi5zdWJQcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODMsIDgzLCA3Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmF7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMSwyMDEsMjAxKTsqL1xcclxcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDZweCAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1pZGRsZXtcXHJcXG4gICAgICBncmlkLWNvbHVtbjoyLzEwO1xcclxcbiAgICAgIGdyaWQtcm93OjIvMTA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOjIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLXRvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICAvKnRhYmxlICovXFxyXFxuICAgdGFibGUge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGQsIHRhYmxlIHRoIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuXFxyXFxudGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tYnRuLCAuZWRpdC1idG4sIC5kZWxldGUtYnRue1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLyoqKioqIEVORCBUQUJMRSAqKioqL1xcclxcblxcclxcblxcclxcbi8qRG8gdGhlIGhpZGRlbiBmb3JtKi9cXHJcXG4ubXktZm9ybSwgLm15LWZvcm0tZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAgLypTaXQgb24gdG9wICovIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNDAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSwgLmNsb3NlLWVkaXQge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzLFxcclxcbi5jbG9zZS1lZGl0OmhvdmVyLFxcclxcbi5jbG9zZS1lZGl0OmZvY3VzLCAgICAgIFxcclxcbiAgICB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhZGRJY29uIGZyb20gJy4vYWRkLnN2Zyc7XHJcblxyXG5jb25zdCBjb250ZW50TG9hZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICAgIGxldCBjcmVhdGVJbnB1dEJ0biA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgaHJlZiwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGlucHV0VGFnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICBpbnB1dFRhZy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgIGlucHV0VGFnLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBpbnB1dFRhZ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG9tZUJ0biA9IGNyZWF0ZUlucHV0QnRuKFwiaG9tZS1idG5cIiwgXCIjXCIsIFwiSG9tZVwiKTtcclxuICAgIGxldCB0b2RheUJ0biA9IGNyZWF0ZUlucHV0QnRuKFwidG9kYXktYnRuXCIsIFwiI1wiLCBcIlRvZGF5XCIpO1xyXG4gICAgbGV0IHdlZWtCdG4gPSBjcmVhdGVJbnB1dEJ0bihcIndlZWstYnRuXCIsIFwiI1wiLCBcIldlZWtcIik7XHJcbiAgICBsZXQgcHJvamVjdHNCdG4gPSBjcmVhdGVJbnB1dEJ0bihcInByb2plY3RzLWJ0blwiLCBcIiNcIiwgXCJQcm9qZWN0c1wiKTtcclxuXHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZHJvcGRvd25EaXYuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRyb3Bkb3duRGl2KTtcclxuXHJcbiAgICBjb25zdCBkcm9wT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkcm9wT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZHJvcE9wdGlvbnNcIik7XHJcbiAgICBkcm9wZG93bkRpdi5hcHBlbmRDaGlsZChkcm9wT3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25EaXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tY29udGVudFwiKVxyXG4gICAgXHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKHdlZWtCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgbWlkZGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVcIik7XHJcbiAgICBtaWRkbGVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjogNC8xMFwiKTtcclxuXHJcblxyXG5cclxuICAgIC8qIHN1YiBwb3JqZWN0cyAqL1xyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3BPcHRpb25zXCIpXHJcbiAgICBjb25zdCBzdWJQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YlByb2pEaXYuY2xhc3NMaXN0LmFkZChcInN1YlByb2plY3RzXCIpO1xyXG4gICAgZHJvcGRvd25PcHRpb25zRWwuYXBwZW5kQ2hpbGQoc3ViUHJvakRpdik7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRQcm9qLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0RGl2XCIpO1xyXG4gICAgZHJvcGRvd25EaXZFbC5hcHBlbmRDaGlsZChhZGRQcm9qKTtcclxuICAgIGNvbnN0IGlucHV0UHJvakljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcclxuICAgIGlucHV0UHJvakljb24uc3JjID0gYWRkSWNvbjtcclxuICAgIGlucHV0UHJvakljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMHB4XCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZFwiKTtcclxuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoaW5wdXRQcm9qSWNvbikgOyAgXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZFByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiOyAgICBcclxuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpIDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudExvYWQ7XHJcblxyXG4iLCJpbXBvcnQge2NoZWNrQnV0dG9uLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b259IGZyb20gJy4vdGFibGUtYnV0dG9ucy5qcyc7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi90cmFzaC5zdmcnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcclxuICAgIGxldCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICBsZXQgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgICBmb3IgKGxldCBrZXkgb2YgZGF0YSkge1xyXG4gICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcclxuICAgICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcclxuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJfXCIrIGVsZW1lbnRbXCJpZFwiXSk7XHJcbiAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJhZGlvLWJ0blwiK2VsZW1lbnRbXCJpZFwiXSk7XHJcbiAgICAgICAgY2hlY2tCdXR0b24oY2VsbCk7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYoa2V5IT1cImlkXCIpe1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICBsZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgIGNlbGxFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcclxuICAgICAgICBlZGl0QnV0dG9uKGNlbGxFZGl0LCBlZGl0SWNvbik7XHJcbiAgICAgICAgbGV0IGNlbGxEZWxldGUgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgIGNlbGxEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uKGNlbGxEZWxldGUsIGRlbGV0ZUljb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGV4cG9ydCB7Z2VuZXJhdGVUYWJsZUhlYWQsIGdlbmVyYXRlVGFibGV9OyIsImltcG9ydCBwcm9maWxlSWNvbiBmcm9tICcuL3Byb2ZpbGVJbWcucG5nJztcclxuaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQuc3ZnJztcclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCAtIGFnYWluIG9rYXkgbGllc1wiKVxyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IHByb2ZpbGVJY29uO1xyXG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWltZ1wiKTtcclxuXHJcbiAgICBjb25zdCAgcHJvZmlsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLWljb25cIik7XHJcbiAgICBwcm9maWxEaXYuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gICAgYWRkSW5wdXQuc3JjID0gYWRkSWNvbjtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2UiLCJcclxuXHJcblxyXG5jb25zdCBjaGVja0J1dHRvbiA9IChjZWxsKSA9PiB7XHJcbiAgICBsZXQgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByYWRpb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKHJhZGlvQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGVkaXRCdXR0b24gPSAoY2VsbCwgaWNvbikgPT57XHJcbiAgICAvL2xldCBjZWxsRWRpdCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBlZGl0QnRuLnNyYyA9IGljb247XHJcblxyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG59XHJcblxyXG5cclxuY29uc3QgZGVsZXRlQnV0dG9uID0gKGNlbGwsIGljb24pID0+e1xyXG4gICAgLy9sZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gaWNvbjtcclxuXHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjaGVja0J1dHRvbiwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9ufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UuanMnO1xyXG5pbXBvcnQgY29udGVudExvYWQgZnJvbSAnLi9jb250ZW50cy1sb2FkLmpzJztcclxuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlfSBmcm9tICcuL2dlbmVyYXRlLXRhYmxlLmpzJztcclxuLy9pbXBvcnQge2Nsb3NlRm9ybSwgZm9ybVJlc2V0LCByZW1vdmVBbGxDaGlsZE5vZGVzLCByZXBsYWNlVGFza09iamVjdCxjaGVja0NvbmRpdGlvbiwgZWRpdExpc3RuZXIgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMuanMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5sb2FkUGFnZSgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRhaW5lclwiKTtcclxuYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICBpZihjb250ZW50cyl7XHJcbiAgICAgICAgLy9yZW1vdmVDb250ZW50cygpO1xyXG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1pZGRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpO1xyXG4gICAgICAgIG1pZGRsZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiAyLzEwXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighY29udGVudHMpe1xyXG4gICAgICAgIGNvbnRlbnRMb2FkKCk7XHJcbiAgICB9XHJcbiAgICAvKnNpZGUgYmFyIGV2ZW50IGxpc3RuZXJzICovXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEFkZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkXCIpO1xyXG4gICAgaWYocHJvamVjdEFkZEVsKXtcclxuICAgICAgcHJvamVjdEFkZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIik7XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvakRpdiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJQcm9qZWN0c1wiKTtcclxuICAgICAgICBjb25zdCBwcm9qUHJvbXB0ID0gcHJvbXB0KFwiTmV3IFByb2plY3QgTmFtZVwiKTtcclxuICAgICAgICBpZihwcm9qUHJvbXB0ICYmIHN1YlByb2pEaXYpe1xyXG4gICAgICAgICAgY29uc3QgbmV3UHJvakFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgbmV3UHJvakFuY2hvci5jbGFzc0xpc3QuYWRkKHByb2pQcm9tcHQpO1xyXG4gICAgICAgICAgbmV3UHJvakFuY2hvci50ZXh0Q29udGVudCA9IHByb2pQcm9tcHQ7XHJcbiAgICAgICAgICBuZXdQcm9qQW5jaG9yLnN0eWxlLmZvbnRTaXplID0gXCIxNXB4XCI7XHJcbiAgICAgICAgICBuZXdQcm9qQW5jaG9yLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI0MHB4XCI7XHJcbiAgICAgICAgICBuZXdQcm9qQW5jaG9yLnN0eWxlLmNvbG9yID0gXCJyZ2IoNDcsODUsMTUxKVwiO1xyXG5cclxuICAgICAgICAgIHN1YlByb2pEaXYuYXBwZW5kQ2hpbGQobmV3UHJvakFuY2hvcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgfSlcclxuICAgIH1cclxuIFxyXG59KVxyXG5cclxuLypDcmVhdGUgbXkgYm9vayBjb25zdHJ1Y3RvciBoZXJlKi9cclxuZnVuY3Rpb24gVGFzayhpZCwgdGl0bGUsIGRldGFpbHMsIGRhdGUpe1xyXG4gICAgdGhpcy5pZD1pZFxyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzXHJcbiAgICB0aGlzLmRhdGU9ZGF0ZVxyXG4gIH1cclxuXHJcbmxldCBvdmVyYWxsID0gW1xyXG4gIHsgIGlkOjEsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogMTY1OH0sXHJcbiAgeyAgaWQ6MiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogMTY1NH0sXHJcbiAgeyAgaWQ6MywgdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogMTUyMCB9LFxyXG4gIHsgIGlkOjQsIHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLGRhdGU6IDE1OTIgIH0sXHJcbiAgeyAgaWQ6NSwgdGl0bGU6IFwiTW9udGUgQW1pYXRhXCIsIGRldGFpbHM6XCJcIixkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfVxyXG5dO1xyXG5cclxubGV0IG1vdW50YWlucyA9IFtcclxuICAgIHsgIGlkOjEsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogMTY1OH0sXHJcbiAgICB7ICBpZDoyLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiAxNjU0fSxcclxuICAgIHsgIGlkOjMsIHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IDE1MjAgfSxcclxuICAgIHsgIGlkOjQsIHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLGRhdGU6IDE1OTIgIH0sXHJcbiAgICB7ICBpZDo1LCB0aXRsZTogXCJNb250ZSBBbWlhdGFcIiwgZGV0YWlsczpcIlwiLGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9XHJcbiAgXTtcclxuICBcclxuICAvL2xldCBtb3VudGFpbnMgPSBbXTtcclxuXHJcbiAgXHJcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gIGlmIChtb3VudGFpbnMubGVuZ3RoID4wKSB7XHJcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKG1vdW50YWluc1swXSk7XHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBtb3VudGFpbnMpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcclxuICAgIC8vZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IGFkZEl0bUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hZGQtdGFza1wiKTtcclxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtXCIpO1xyXG5hZGRJdG1FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gIFxyXG59KVxyXG5cclxuLyogY2xvc2UgZnVuY3Rpb24qL1xyXG5mdW5jdGlvbiBjbG9zZUZvcm0odHlwZSkge1xyXG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1teS1mb3JtJHt0eXBlfWApO1xyXG5cclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jbG9zZSR7dHlwZX1gKTtcclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4gICAgICBmb3JtRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBsZXQgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXRoZS1mb3JtJHt0eXBlfWApLnJlc2V0KCk7XHJcbiAgfSkgIFxyXG59XHJcbi8qIHJlc2V0IGFuZCBjbG9zZSBmb3JtIGFmdGVyIGRpc3BsYXkgZnVuY3Rpb24gKi9cclxuZnVuY3Rpb24gZm9ybVJlc2V0KHR5cGUpe1xyXG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1teS1mb3JtJHt0eXBlfWApO1xyXG4gIGxldCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtdGhlLWZvcm0ke3R5cGV9YCkucmVzZXQoKTtcclxuICBmb3JtRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG4vKiByZW1vdmUgYWxsIGNoaWxkIG5vZGVzIGZvciB0YWJsZSBib2R5IC0gZnJlc2ggZm9yIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcclxuICBpZihwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogY3JlYXRlIHN1Ym1pdCBidXR0b24gKi9cclxubGV0IG1heElkPW1vdW50YWlucy5sZW5ndGg7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LWJ0blwiKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aXRsZS1mb3JtXCIpLnZhbHVlO1xyXG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIikudmFsdWU7XHJcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHVlLWRhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IG5ldyBUYXNrKG1heElkKzEsIHRpdGxlLCBkZXRhaWxzLCBkdWVkYXRlKTtcclxuICAgIG1vdW50YWlucy5wdXNoKGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2cobW91bnRhaW5zKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZU1haW4nKTtcclxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyUmVtKTtcclxuXHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XHJcbiAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMobW91bnRhaW5zWzBdKTtcclxuICAgIG1heElkKys7XHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBtb3VudGFpbnMpO1xyXG4gICAgZm9ybVJlc2V0KFwiXCIpO1xyXG4gICAgY2xvc2VGb3JtKFwiXCIpO1xyXG4gICAgLy9jaGVja1Rhc2soKTtcclxuICAgIGNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcbiAgICBjaGVja0VsLmZvckVhY2goYm94ID0+e1xyXG4gICAgICBjaGVja0NvbmRpdGlvbihib3gpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgZWRpdExpc3RuZXIoKTtcclxuICAgIGV4ZWNEZWxldGVUYXNrKG1vdW50YWlucyk7XHJcbiAgICBcclxuXHJcbn0pXHJcblxyXG4vKmNoZWNrIGJ1dHRvbiBzdHJpa2UgdGhyb3VnaCovXHJcbmZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uKGJveCl7XHJcbiAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoYm94LmNoZWNrZWQpe1xyXG4gICAgICBsZXQgcmFkaW9QYXJlbnQgPSBib3gucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IHJvd1BhcmVudCA9IHJhZGlvUGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhuZWlnaGJvdXIudGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighYm94LmNoZWNrZWQpe1xyXG4gICAgICBsZXQgcmFkaW9QYXJlbnQgPSBib3gucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IHJvd1BhcmVudCA9IHJhZGlvUGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjaGVja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG5jaGVja0VsLmZvckVhY2goYm94ID0+e1xyXG4gIGNoZWNrQ29uZGl0aW9uKGJveCk7XHJcblxyXG59KVxyXG5cclxuXHJcbi8qaGVscGVyICovXHJcbmZ1bmN0aW9uIGdldENsYXNzSURPUGFyZW50KGVsZW1lbnQpe1xyXG4gIGxldCBlZGl0UGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIGxldCBpZHggPSBOdW1iZXIoZWRpdFBhcmVudC5jbGFzc05hbWUucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xyXG4gIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgcmV0dXJuIGlkeDtcclxufVxyXG5mdW5jdGlvbiBmaW5kVGFza09iamVjdChkYXRhLCBpZHgpIHtcclxuICBsZXQgdGFza1NlbGVjdGVkO1xyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgICAgZm9yKGxldCBrZXkgaW4gZWxlbWVudCl7XHJcbiAgICAgICAgICBpZiAoa2V5PT1cImlkXCIgJiYgZWxlbWVudFtrZXldPT1pZHgpe1xyXG4gICAgICAgICAgICAgIHRhc2tTZWxlY3RlZCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhc2tTZWxlY3RlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVFZGl0Rm9ybSh0YXNrKXtcclxuICBsZXQgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybS1lZGl0XCIpO1xyXG4gIHRpdGxlRWwudmFsdWUgPSB0YXNrW1widGl0bGVcIl07XHJcblxyXG4gIGxldCBkZXRhaWxzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRldGFpbHMtZWRpdFwiKTtcclxuICBkZXRhaWxzRWwudmFsdWUgPSB0YXNrW1wiZGV0YWlsc1wiXTtcclxuXHJcbiAgbGV0IGRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHVlLWRhdGUtZWRpdFwiKTtcclxuICBkYXRlRWwudmFsdWUgPSB0YXNrW1wiZGF0ZVwiXTtcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlVGFza09iamVjdChkYXRhLCBpZHgsIG5ld1RpdGxlLCBuZXdEZXRhaWxzLCBuZXdEYXRlKXtcclxuICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgIGVsZW1lbnRbXCJ0aXRsZVwiXT1uZXdUaXRsZTtcclxuICAgICAgZWxlbWVudFtcImRldGFpbHNcIl09bmV3RGV0YWlscztcclxuICAgICAgZWxlbWVudFtcImRhdGVcIl09bmV3RGF0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbi8qZWRpdCBmb3JtICovXHJcbmxldCBpbmRleFNlbCA7XHJcbmZ1bmN0aW9uIGVkaXRMaXN0bmVyKCl7XHJcbiAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWJ0blwiKTtcclxuICBlZGl0RWwuZm9yRWFjaChlZGl0SXRlbSA9PntcclxuICAgIGVkaXRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57IFxyXG4gICAgICAgIGxldCBpZHggPSBnZXRDbGFzc0lET1BhcmVudChlZGl0SXRlbSk7XHJcbiAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtLWVkaXRcIik7XHJcbiAgICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOyAgICAgXHJcbiAgICAgICAgbGV0IHRhc2tTZWxlY3RlZCA9IGZpbmRUYXNrT2JqZWN0KG1vdW50YWlucywgaWR4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrU2VsZWN0ZWQpO1xyXG4gICAgICAgIHBvcHVsYXRlRWRpdEZvcm0odGFza1NlbGVjdGVkKTtcclxuICAgICAgICBjbG9zZUZvcm0oXCItZWRpdFwiKTtcclxuICAgICAgICBpbmRleFNlbD1pZHg7XHJcbiAgICAgIFxyXG4gIH0pXHJcbn0pICBcclxufVxyXG5cclxuZWRpdExpc3RuZXIoKTtcclxuXHJcblxyXG5cclxuLypkbyBzdWJtaXQgYnV0dG9uIG9uIGVkaXQgZm9ybSAqL1xyXG5cclxuY29uc3Qgc3VibWl0QnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LWJ0bi1lZGl0XCIpO1xyXG5zdWJtaXRCdG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybS1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWVkaXRcIikudmFsdWU7XHJcbiAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlLWVkaXRcIikudmFsdWU7XHJcbiAgcmVwbGFjZVRhc2tPYmplY3QobW91bnRhaW5zLCBpbmRleFNlbCwgdGl0bGUsIGRldGFpbHMsIGR1ZWRhdGUpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZU1haW4nKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRhaW5lclJlbSk7XHJcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gIGdlbmVyYXRlVGFibGUodGFibGUsIG1vdW50YWlucyk7XHJcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtLWVkaXRcIilcclxuICBmb3JtRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGZvcm1SZXNldChcIi1lZGl0XCIpO1xyXG4gIGVkaXRMaXN0bmVyKCk7XHJcbiAgY29uc3QgY2hlY2tFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuICBjaGVja0VsLmZvckVhY2goYm94ID0+e1xyXG4gICAgY2hlY2tDb25kaXRpb24oYm94KTtcclxuICB9KVxyXG59KVxyXG5cclxuXHJcbi8qIG5vdyBkbyBkZWxldGUgdGFzayAqL1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZXhlY0RlbGV0ZVRhc2soZGF0YSl7XHJcbiAgY29uc3QgZGVsZXRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1idG5cIik7XHJcbiAgZGVsZXRlRWwuZm9yRWFjaChkZWxldGVJdGVtID0+e1xyXG4gICAgZGVsZXRlSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgIGxldCBkZWxldGVQYXJlbnQgPSBkZWxldGVJdGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCBpZHggPSBOdW1iZXIoZGVsZXRlUGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKC9cXEQrL2csICcnKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgICAgIGRhdGEuc3BsaWNlKGlkeC0xLCAxKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZU1haW4nKTtcclxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXJSZW0pO1xyXG4gICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XHJcbiAgICAgIC8vbGV0IGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSk7XHJcbiAgICAgIGV4ZWNEZWxldGVUYXNrKGRhdGEpO1xyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leGVjRGVsZXRlVGFzayhtb3VudGFpbnMpO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=