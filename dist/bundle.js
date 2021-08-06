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
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus   \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,eAAe;IACf,YAAY;IACZ,eAAe;IACf,gBAAgB;;;AAGpB;;AAEA;IACI,kCAAkC;GACnC;;AAEH;IACI,YAAY;IACZ,YAAY;IACZ,sCAAsC;IACtC,+BAA+B;IAC/B,uBAAuB;AAC3B;;;;AAIA;IACI,iBAAiB;IACjB,WAAW;IACX,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;;AAEnC;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,cAAc;IACd,kCAAkC;AACtC;AACA;IACI;oBACgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;;;;AAIb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;EACE,sCAAsC;EACtC,gCAAgC;AAClC;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,gCAAgC;AACpC;;;;AAIA;IACI,iCAAiC;IACjC,eAAe;IACf,sCAAsC;IACtC,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;;;;AAIrB;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;;AAGA;IACI,eAAe;;AAEnB;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,gBAAgB;EAClB;;;EAGA;MACI,gBAAgB;MAChB,aAAa;MACb,aAAa;MACb,sBAAsB;MACtB,cAAc;MACd,oBAAoB;EACxB;;EAEA;MACI,aAAa;MACb,mBAAmB;MACnB,6BAA6B;MAC7B,mBAAmB;MACnB,oBAAoB;EACxB;;;;GAIC,SAAS;GACT;IACC,yCAAyC;IACzC,yBAAyB;IACzB,WAAW;IACX,oBAAoB;IACpB,cAAc;;AAElB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA,yBAAyB,yBAAyB,CAAC;;AAEnD,gBAAgB,sBAAsB,CAAC;;AAEvC;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;AAEJ;;;;AAIA;IACI,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB,CAAC,+CAA+C;AACvE;AACA;IACI,wBAAwB,CAAC,oEAAoE;AACjG;;AAEA;IACI,WAAW;AACf;AACA,qBAAqB;;;AAGrB,qBAAqB;AACrB;IACI,aAAa;IACb,eAAe,EAAE,kBAAkB;IACnC,UAAU,GAAG,cAAc;IAC3B,kBAAkB,EAAE,wBAAwB;IAC5C,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;AAC5D;;;;;AAKA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;;IAGI,qBAAqB;AACzB;IACI,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;;;;;IAKI,WAAW;IACX,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":["\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus   \r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

function getCheckFlag(data){
  for(let element of data ){
    if(element["check"]==1){
      const rowParent = document.querySelector(".r_"+element["id"]);
      rowParent.style.textDecoration = "line-through";
      rowParent.style.textDecorationColor = "red";
      let inputChild = rowParent.firstElementChild;
      let checkboxChild = inputChild.firstElementChild;
      checkboxChild.setAttribute("checked", "true");
    }
  }

}

function generateTable(table, data) {
  let missKeys = ["id", "projects", "details", "check"]
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
  getCheckFlag(data);


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





/*let mountains = [
  {  id:1, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-01", check:0},
  {  id:2, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-07-25", check:0},
  {  id:3, projects:"Test",title: "Poggio Scali", details:"", date: "2010-08-25",check:0 },
  {  id:4, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25", check:0  },
  {  id:5, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25", check:0},
  {  id:6, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25", check:0 },
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
];*/


//localStorage.setItem("alltasks", JSON.stringify(mountains));

let mountains  = JSON.parse(localStorage.getItem("alltasks"));





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
    execTableAllButtons(dataFilter,"");
    localStorage.setItem("alltasks", JSON.stringify(mountains));
    

})

function changeCheckFlag(flag, idx){

  for(let element of mountains){
    if(element["id"]==idx){
      if(flag==1){
        element["check"] = 1;
      }
      else if(flag==flag){
        element["check"] = 0;
      }
    }
  }
  

}

/*check button strike through*/
function checkCondition(box){
  box.addEventListener('change', function(e){
    if(box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "line-through";
      rowParent.style.textDecorationColor = "red";
      let idx = getClassIDOParent(radioParent);
      changeCheckFlag(1, idx);
      localStorage.setItem("alltasks", JSON.stringify(mountains));
    }
    else if(!box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "none";
      let idx = getClassIDOParent(radioParent);
      changeCheckFlag(0, idx);
      localStorage.setItem("alltasks", JSON.stringify(mountains));

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
  execTableAllButtons(dataFilter,"-edit");
  localStorage.setItem("alltasks", JSON.stringify(mountains));

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
      localStorage.setItem("alltasks", JSON.stringify(mountains));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9jb250ZW50cy1sb2FkLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2dlbmVyYXRlLXRhYmxlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy90YWJsZS1idXR0b25zLmpzIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELDZDQUE2Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLHFCQUFxQiwrQ0FBK0Msd0NBQXdDLGdDQUFnQyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyx3Q0FBd0MsU0FBUyxpQkFBaUIsb0JBQW9CLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxLQUFLLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIs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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFhO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsR0FBRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NyaW1zb24gVGV4dCcsIHNlcmlmO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlci1sZWZ0e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8xMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw4NSwxNTEpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWljb257XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMC8xMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0Nyw4NSwxNTEpO1xcclxcblxcclxcbn1cXHJcXG4ucHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMi8xMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG59XFxyXFxuLmRyb3BPcHRpb25ze1xcclxcbiAgICAvKmdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwOyovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6MTVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0RGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMTE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLypoZWlnaHQ6IDM1MHB4OyovXFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVlbTtcXHJcXG59XFxyXFxuIFxcclxcbi5zdWJQcm9qZWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LDg1LDE1MSwgMC41KTtcXHJcXG4gIC8qb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMgYTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgzLCA4MywgNzcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5heyAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDEsMjAxLDIwMSk7Ki9cXHJcXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXI6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGFpbmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiA2cHggMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5taWRkbGV7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46Mi8xMDtcXHJcXG4gICAgICBncmlkLXJvdzoyLzEwO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDoyJTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJsZS10b3B7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgLyp0YWJsZSAqL1xcclxcbiAgIHRhYmxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxcclxcblxcclxcbnRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246ZW5kO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MzBweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODMxcHgpe1xcclxcbiAgICB0Ym9keXtcXHJcXG4gICAgICAgIGhlaWdodDogNjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qaGVpZ2h0OiA4MGVtOyovXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG5bY2xhc3MqPVxcXCJyYWRpby1idG5cXFwiXSwgLmVkaXQtYnRuLCAuZGVsZXRlLWJ0bntcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcbi8qKioqKiBFTkQgVEFCTEUgKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKkRvIHRoZSBoaWRkZW4gZm9ybSovXFxyXFxuLm15LWZvcm0sIC5teS1mb3JtLWVkaXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTsgIC8qU2l0IG9uIHRvcCAqLyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQsIC5mb3JtLWNvbnRlbnQtZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UsIC5jbG9zZS1lZGl0IHtcXHJcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyxcXHJcXG4uY2xvc2UtZWRpdDpob3ZlcixcXHJcXG4uY2xvc2UtZWRpdDpmb2N1cyAgIFxcclxcbiAgICB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7SUFDSSxrQ0FBa0M7R0FDbkM7O0FB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LE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDNUQ7Ozs7O0FBS0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOzs7SUFHSSxxQkFBcUI7QUFDekI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NyaW1zb24gVGV4dCcsIHNlcmlmO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlci1sZWZ0e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8xMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw4NSwxNTEpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWljb257XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMC8xMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0Nyw4NSwxNTEpO1xcclxcblxcclxcbn1cXHJcXG4ucHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMi8xMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG59XFxyXFxuLmRyb3BPcHRpb25ze1xcclxcbiAgICAvKmdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwOyovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6MTVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0RGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMTE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLypoZWlnaHQ6IDM1MHB4OyovXFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVlbTtcXHJcXG59XFxyXFxuIFxcclxcbi5zdWJQcm9qZWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LDg1LDE1MSwgMC41KTtcXHJcXG4gIC8qb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMgYTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgzLCA4MywgNzcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5heyAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDEsMjAxLDIwMSk7Ki9cXHJcXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXI6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGFpbmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiA2cHggMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5taWRkbGV7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46Mi8xMDtcXHJcXG4gICAgICBncmlkLXJvdzoyLzEwO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDoyJTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJsZS10b3B7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgLyp0YWJsZSAqL1xcclxcbiAgIHRhYmxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxcclxcblxcclxcbnRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246ZW5kO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MzBweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODMxcHgpe1xcclxcbiAgICB0Ym9keXtcXHJcXG4gICAgICAgIGhlaWdodDogNjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qaGVpZ2h0OiA4MGVtOyovXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG5bY2xhc3MqPVxcXCJyYWRpby1idG5cXFwiXSwgLmVkaXQtYnRuLCAuZGVsZXRlLWJ0bntcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcbi8qKioqKiBFTkQgVEFCTEUgKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKkRvIHRoZSBoaWRkZW4gZm9ybSovXFxyXFxuLm15LWZvcm0sIC5teS1mb3JtLWVkaXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTsgIC8qU2l0IG9uIHRvcCAqLyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQsIC5mb3JtLWNvbnRlbnQtZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UsIC5jbG9zZS1lZGl0IHtcXHJcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyxcXHJcXG4uY2xvc2UtZWRpdDpob3ZlcixcXHJcXG4uY2xvc2UtZWRpdDpmb2N1cyAgIFxcclxcbiAgICB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhZGRJY29uIGZyb20gJy4vYWRkLnN2Zyc7XHJcblxyXG5jb25zdCBjb250ZW50TG9hZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICAgIGxldCBjcmVhdGVJbnB1dEJ0biA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgaHJlZiwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGlucHV0VGFnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICBpbnB1dFRhZy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgIGlucHV0VGFnLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBpbnB1dFRhZ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG9tZUJ0biA9IGNyZWF0ZUlucHV0QnRuKFwiaG9tZS1idG5cIiwgXCIjXCIsIFwiSG9tZVwiKTtcclxuICAgIGxldCB0b2RheUJ0biA9IGNyZWF0ZUlucHV0QnRuKFwidG9kYXktYnRuXCIsIFwiI1wiLCBcIlRvZGF5XCIpO1xyXG4gICAgbGV0IHdlZWtCdG4gPSBjcmVhdGVJbnB1dEJ0bihcIndlZWstYnRuXCIsIFwiI1wiLCBcIldlZWtcIik7XHJcbiAgICBsZXQgcHJvamVjdHNCdG4gPSBjcmVhdGVJbnB1dEJ0bihcInByb2plY3RzLWJ0blwiLCBcIiNcIiwgXCJQcm9qZWN0c1wiKTtcclxuXHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZHJvcGRvd25EaXYuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRyb3Bkb3duRGl2KTtcclxuXHJcbiAgICBjb25zdCBkcm9wT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkcm9wT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwiZHJvcE9wdGlvbnNcIik7XHJcbiAgICBkcm9wZG93bkRpdi5hcHBlbmRDaGlsZChkcm9wT3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25EaXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tY29udGVudFwiKVxyXG4gICAgXHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKHdlZWtCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgbWlkZGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVcIik7XHJcbiAgICBtaWRkbGVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjogMy8xMFwiKTtcclxuXHJcblxyXG5cclxuICAgIC8qIHN1YiBwb3JqZWN0cyAqL1xyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3BPcHRpb25zXCIpXHJcbiAgICBjb25zdCBzdWJQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YlByb2pEaXYuY2xhc3NMaXN0LmFkZChcInN1YlByb2plY3RzXCIpO1xyXG4gICAgZHJvcGRvd25PcHRpb25zRWwuYXBwZW5kQ2hpbGQoc3ViUHJvakRpdik7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRQcm9qLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0RGl2XCIpO1xyXG4gICAgLy9kcm9wZG93bkRpdkVsLmFwcGVuZENoaWxkKGFkZFByb2opO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhZGRQcm9qKTtcclxuICAgIGNvbnN0IGlucHV0UHJvakljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcclxuICAgIGlucHV0UHJvakljb24uc3JjID0gYWRkSWNvbjtcclxuICAgIGlucHV0UHJvakljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMHB4XCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEFkZFwiKTtcclxuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoaW5wdXRQcm9qSWNvbikgOyAgXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZFByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiOyAgICBcclxuICAgIGFkZFByb2ouYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpIDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudExvYWQ7XHJcblxyXG4iLCJpbXBvcnQge2NoZWNrQnV0dG9uLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b259IGZyb20gJy4vdGFibGUtYnV0dG9ucy5qcyc7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQuc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi90cmFzaC5zdmcnO1xyXG5pbXBvcnQgc29ydEljb24gZnJvbSAnLi9zb3J0LnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xyXG4gICAgbGV0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICAgIGxldCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcclxuICAgIGZvciAobGV0IGtleSBvZiBkYXRhKSB7XHJcbiAgICAgIGlmKGtleT09XCJkYXRlXCIpe1xyXG4gICAgICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAvL2xldCBhbmNob3JTb3J0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIC8vYW5jaG9yU29ydC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICBsZXQgYVNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgYVNvcnQuY2xhc3NMaXN0LmFkZChcInNvcnRcIik7XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgICAgIGFTb3J0LnNyYyA9IHNvcnRJY29uO1xyXG4gICAgICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzBweFwiKTtcclxuICAgICAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzMHB4XCIpO1xyXG4gICAgICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsXCJTb3J0IEJ5IER1ZSBEYXRlXCIpO1xyXG4gICAgICAgIC8vbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xyXG4gICAgICAgIHRoLmFwcGVuZENoaWxkKGFTb3J0KTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhrZXkpO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGdldENoZWNrRmxhZyhkYXRhKXtcclxuICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSApe1xyXG4gICAgaWYoZWxlbWVudFtcImNoZWNrXCJdPT0xKXtcclxuICAgICAgY29uc3Qgcm93UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yX1wiK2VsZW1lbnRbXCJpZFwiXSk7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgbGV0IGlucHV0Q2hpbGQgPSByb3dQYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIGxldCBjaGVja2JveENoaWxkID0gaW5wdXRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgY2hlY2tib3hDaGlsZC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XHJcbiAgbGV0IG1pc3NLZXlzID0gW1wiaWRcIiwgXCJwcm9qZWN0c1wiLCBcImRldGFpbHNcIiwgXCJjaGVja1wiXVxyXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicl9cIisgZWxlbWVudFtcImlkXCJdKTtcclxuICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1idG5cIitlbGVtZW50W1wiaWRcIl0pO1xyXG4gICAgICBjaGVja0J1dHRvbihjZWxsKTtcclxuICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgIGlmKCFtaXNzS2V5cy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgbGV0IGNlbGxFZGl0ID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbEVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xyXG4gICAgICBlZGl0QnV0dG9uKGNlbGxFZGl0LCBlZGl0SWNvbik7XHJcbiAgICAgIGxldCBjZWxsRGVsZXRlID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuICAgICAgZGVsZXRlQnV0dG9uKGNlbGxEZWxldGUsIGRlbGV0ZUljb24pO1xyXG4gIH1cclxuICBnZXRDaGVja0ZsYWcoZGF0YSk7XHJcblxyXG5cclxuICAvL3Rib2R5SGVpZ2h0KCk7XHJcbn1cclxuXHJcbi8qZnVuY3Rpb24gdGJvZHlIZWlnaHQoKXtcclxuICBjb25zdCB0Ym9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xyXG4gIGlmKHRib2R5RWwpe1xyXG4gICAgbGV0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XHJcbiAgICBsZXQgbmV3SGVpZ2h0ID0gc2NyZWVuSGVpZ2h0KjAuNjtcclxuICAgIC8vdGJvZHlFbC5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQrXCJweFwiOyBcclxuICAgIGNvbnNvbGUubG9nKHNjcmVlbkhlaWdodCk7IFxyXG4gIH1cclxufSovXHJcblxyXG4gIGV4cG9ydCB7Z2VuZXJhdGVUYWJsZUhlYWQsIGdlbmVyYXRlVGFibGV9OyIsImltcG9ydCBwcm9maWxlSWNvbiBmcm9tICcuL3Byb2ZpbGVJbWcucG5nJztcclxuaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQuc3ZnJztcclxuaW1wb3J0IHNvcnRJY29uIGZyb20gJy4vc29ydC5zdmcnO1xyXG5cclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCAtIGFnYWluIG9rYXkgbGllc1wiKVxyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IHByb2ZpbGVJY29uO1xyXG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWltZ1wiKTtcclxuXHJcbiAgICBjb25zdCAgcHJvZmlsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLWljb25cIik7XHJcbiAgICBwcm9maWxEaXYuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG4gICAgYWRkSW5wdXQuc3JjID0gYWRkSWNvbjtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcblxyXG4gICAgbGV0IGFTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0XCIpO1xyXG4gICAgYVNvcnQuc3JjID0gc29ydEljb247XHJcbiAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMwcHhcIik7XHJcbiAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzMHB4XCIpO1xyXG4gICAgYVNvcnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIixcIlNvcnQgQnkgRHVlIERhdGVcIik7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2UiLCJcclxuXHJcblxyXG5jb25zdCBjaGVja0J1dHRvbiA9IChjZWxsKSA9PiB7XHJcbiAgICBsZXQgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByYWRpb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKHJhZGlvQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGVkaXRCdXR0b24gPSAoY2VsbCwgaWNvbikgPT57XHJcbiAgICAvL2xldCBjZWxsRWRpdCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBlZGl0QnRuLnNyYyA9IGljb247XHJcblxyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG59XHJcblxyXG5cclxuY29uc3QgZGVsZXRlQnV0dG9uID0gKGNlbGwsIGljb24pID0+e1xyXG4gICAgLy9sZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gaWNvbjtcclxuXHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjaGVja0J1dHRvbiwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9ufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UuanMnO1xyXG5pbXBvcnQgY29udGVudExvYWQgZnJvbSAnLi9jb250ZW50cy1sb2FkLmpzJztcclxuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlSGVhZCwgZ2VuZXJhdGVUYWJsZX0gZnJvbSAnLi9nZW5lcmF0ZS10YWJsZS5qcyc7XHJcbi8vaW1wb3J0IHtjbG9zZUZvcm0sIGZvcm1SZXNldCwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgcmVwbGFjZVRhc2tPYmplY3QsY2hlY2tDb25kaXRpb24sIGVkaXRMaXN0bmVyIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zLmpzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG4vKmxldCBtb3VudGFpbnMgPSBbXHJcbiAgeyAgaWQ6MSwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsY29cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMDFcIiwgY2hlY2s6MH0sXHJcbiAgeyAgaWQ6MiwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA3LTI1XCIsIGNoZWNrOjB9LFxyXG4gIHsgIGlkOjMsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAxMC0wOC0yNVwiLGNoZWNrOjAgfSxcclxuICB7ICBpZDo0LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIsIGNoZWNrOjAgIH0sXHJcbiAgeyAgaWQ6NSwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIsIGNoZWNrOjB9LFxyXG4gIHsgIGlkOjYsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiLCBjaGVjazowIH0sXHJcbiAgeyAgaWQ6NywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjgsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCJ9LFxyXG4gIHsgIGlkOjksIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDoxMCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgfSxcclxuICB7ICBpZDoxMSwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjEyLCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6MTMsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiIH0sXHJcbiAgeyAgaWQ6MTQsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDoxNSwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjE2LCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6MTcsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAwOS0wOC0xNlwiIH0sXHJcbiAgeyAgaWQ6MTgsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDoxOSwgcHJvamVjdHM6XCJUZXN0XCIsIHRpdGxlOiBcIk1vbnRlIEFtaWF0YVwiLCBkZXRhaWxzOlwiXCIsZGF0ZTogXCIyMDIxLTA4LTA1XCIgIH1cclxuXTsqL1xyXG5cclxuXHJcbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuXHJcbmxldCBtb3VudGFpbnMgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbHRhc2tzXCIpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEYXRlRm9ybWF0KGRhdGUpe1xyXG4gIGxldCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBsZXQgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgZGF0ZSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJUb0RhdGUoc3RyRGF0ZSkge1xyXG4gIGxldCBlbGVtZW50RGF0ZSA9IG5ldyBEYXRlKHN0ckRhdGUpO1xyXG4gIGVsZW1lbnREYXRlID0gY2hhbmdlRGF0ZUZvcm1hdChlbGVtZW50RGF0ZSk7XHJcbiAgZWxlbWVudERhdGUgPSBEYXRlLnBhcnNlKGVsZW1lbnREYXRlKTtcclxuICByZXR1cm4gZWxlbWVudERhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRvTW9uZGF5KCBkYXRlICkge1xyXG4gIGxldCBkYXkgPSBkYXRlLmdldERheSgpIHx8IDc7ICBcclxuICBpZiggZGF5ICE9PSAxICkgXHJcbiAgICAgIGRhdGUuc2V0SG91cnMoLTI0ICogKGRheSAtIDEpKTsgXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRvU3VuZGF5KCBkYXRlICkge1xyXG4gIGxldCBkYXkgPSBkYXRlLmdldERheSgpIHx8IDc7ICBcclxuICBpZiggZGF5ICE9PSAxICkgXHJcbiAgICAgIGRhdGUuc2V0SG91cnMoLTI0ICogKGRheSAtIDcpKTsgXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnNvbGUubG9nKGNoYW5nZURhdGVGb3JtYXQodG9kYXkpKTtcclxubGV0IG1vbiA9IG5ldyBEYXRlKCk7XHJcbmxldCBzdW4gPSBuZXcgRGF0ZSgpO1xyXG50b2RheSA9IERhdGUucGFyc2UoY2hhbmdlRGF0ZUZvcm1hdCh0b2RheSkpO1xyXG5tb24gPSBEYXRlLnBhcnNlKGNoYW5nZURhdGVGb3JtYXQoc2V0VG9Nb25kYXkobW9uKSkpO1xyXG5zdW4gPSBEYXRlLnBhcnNlKGNoYW5nZURhdGVGb3JtYXQoc2V0VG9TdW5kYXkoc3VuKSkpO1xyXG5cclxuXHJcblxyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcbmZ1bmN0aW9uIHRvZGF5VGFiKHRvZGF5RGF0ZSl7XHJcbiAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ0blwiKTtcclxuICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZURhdGVGb3JtYXQobmV3IERhdGUoKSkpO1xyXG4gICAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICBpZihzdHJUb0RhdGUoZWxlbWVudFtcImRhdGVcIl0pPT10b2RheURhdGUpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YUZpbHRlcik7XHJcbiAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoXCJUb2RheVwiKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWVrVGFiKG1vbmRheURhdGUsIHN1bmRheURhdGUpe1xyXG4gIGNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWstYnRuXCIpO1xyXG4gIHdlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKHRvZGF5RGF0ZSk7XHJcbiAgICBsZXQgZGF0YUZpbHRlciA9IFtdO1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgIGxldCBlbGVtZW50RGF0ZSA9IHN0clRvRGF0ZShlbGVtZW50W1wiZGF0ZVwiXSk7XHJcbiAgICAgIGlmKChlbGVtZW50RGF0ZT49bW9uZGF5RGF0ZSkgJiYgKGVsZW1lbnREYXRlPD1zdW5kYXlEYXRlKSl7XHJcbiAgICAgICAgZGF0YUZpbHRlci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoXCJXZWVrXCIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YSwgdHlwZSl7XHJcbiAgICBjb25zdCBjb250YWluZXJSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVNYWluJyk7XHJcbiAgICBpZihjb250YWluZXJSZW0pe1xyXG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRhaW5lclJlbSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XHJcbiAgICAvL2xldCBkYXRhSGVhZCA9IE9iamVjdC5rZXlzKG1vdW50YWluc1swXSk7XHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XHJcbiAgICAvL2dlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhSGVhZCk7IC8vIHRoZW4gdGhlIGhlYWRcclxuICAgIGZvcm1SZXNldCh0eXBlKTtcclxuICAgIGNsb3NlRm9ybSh0eXBlKTtcclxuICAgIGNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcbiAgICBjaGVja0VsLmZvckVhY2goYm94ID0+e1xyXG4gICAgICBjaGVja0NvbmRpdGlvbihib3gpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgZWRpdExpc3RuZXIoKTtcclxuICAgIGV4ZWNEZWxldGVUYXNrKGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1YlByb2plY3RUaXRsZUNoYW5nZSh0ZXh0KXtcclxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICBzdWJUaXRsZS50ZXh0Q29udGVudD10ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QW5jaG9yKHN1YlByb2plY3RFbGVtZW50LCB0ZXh0KXtcclxuICBjb25zdCBuZXdQcm9qQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbmV3UHJvakFuY2hvci5jbGFzc0xpc3QuYWRkKHRleHQpO1xyXG4gIG5ld1Byb2pBbmNob3IudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIG5ld1Byb2pBbmNob3Iuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcclxuICBuZXdQcm9qQW5jaG9yLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI0MHB4XCI7XHJcbiAgbmV3UHJvakFuY2hvci5zdHlsZS5jb2xvciA9IFwicmdiKDQ3LDg1LDE1MSlcIjtcclxuXHJcbiAgc3ViUHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3UHJvakFuY2hvcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckRhdGEodGl0bGUpe1xyXG4gIC8vY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICBsZXQgZGF0YUZpbHRlciA9IFtdO1xyXG4gIGlmKHRpdGxlLnRleHRDb250ZW50IT1cIkhvbWVcIil7XHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgICAgaWYoZWxlbWVudFtcInByb2plY3RzXCJdPT10aXRsZS50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgZGF0YUZpbHRlci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YUZpbHRlcjtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHJldHVybiBtb3VudGFpbnM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmxldCBwcm9qZWN0THN0PVtdXHJcblxyXG5jb25zdCBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRhaW5lclwiKTtcclxuYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBhZGROZXdDb250cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdERpdlwiKVxyXG4gICAgaWYoKGNvbnRlbnRzKSAmJiAoYWRkTmV3Q29udHMpKXtcclxuICAgICAgICAvL3JlbW92ZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgY29udGVudHMucmVtb3ZlKCk7XHJcbiAgICAgICAgYWRkTmV3Q29udHMucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgbWlkZGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVcIik7XHJcbiAgICAgICAgbWlkZGxlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1jb2x1bW46IDIvMTBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFjb250ZW50cyl7XHJcbiAgICAgICAgY29udGVudExvYWQoKTtcclxuICAgICAgICBpZihtb3VudGFpbnMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgICAgICAgIGlmKCFwcm9qZWN0THN0LmluY2x1ZGVzKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSkpe1xyXG4gICAgICAgICAgICAgIHByb2plY3RMc3QucHVzaChlbGVtZW50W1wicHJvamVjdHNcIl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgaWYocHJvamVjdExzdC5sZW5ndGg+MCl7XHJcbiAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgcHJvamVjdExzdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlByb2pEaXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RBbmNob3Ioc3ViUHJvakRpdiwgaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YlByam9jRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YlByb2plY3RzXCIpO1xyXG4gICAgICAgIGxldCBzdWJJdGVtcyA9IHN1YlByam9jRWwucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgbGV0IGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICAgICAgICAgIHN1YlByb2plY3RUaXRsZUNoYW5nZShpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdG9kYXlUYWIodG9kYXkpO1xyXG4gICAgICAgIHdlZWtUYWIobW9uLCBzdW4pO1xyXG4gICAgICAgIGNvbnN0IGhvbWVCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ0blwiKTtcclxuICAgICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhtb3VudGFpbnMsXCJcIik7XHJcbiAgICAgICAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoXCJIb21lXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgXHJcbiBcclxuICAgIH1cclxuICAgIC8qc2lkZSBiYXIgZXZlbnQgbGlzdG5lcnMgKi9cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QWRkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRcIik7XHJcbiAgICBpZihwcm9qZWN0QWRkRWwpe1xyXG4gICAgICBwcm9qZWN0QWRkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvakRpdiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJQcm9qZWN0c1wiKTtcclxuICAgICAgICBjb25zdCBwcm9qUHJvbXB0ID0gcHJvbXB0KFwiTmV3IFByb2plY3QgTmFtZVwiKTtcclxuICAgICAgICBpZihwcm9qUHJvbXB0ICYmIHN1YlByb2pEaXYpe1xyXG4gICAgICAgICAgY3JlYXRlUHJvamVjdEFuY2hvcihzdWJQcm9qRGl2LCBwcm9qUHJvbXB0KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3ViUHJqb2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgbGV0IHN1Ykl0ZW1zID0gc3ViUHJqb2NFbC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgICAgICBzdWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcik7XHJcbiAgICAgICAgICAgIC8qY2hhbmdlIHN1YnRpdGxlKi9cclxuICAgICAgICAgICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qQ3JlYXRlIG15IGJvb2sgY29uc3RydWN0b3IgaGVyZSovXHJcbmZ1bmN0aW9uIFRhc2soaWQsIHByb2plY3RzLCB0aXRsZSwgZGV0YWlscywgZGF0ZSl7XHJcbiAgICB0aGlzLmlkPWlkXHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlsc1xyXG4gICAgdGhpcy5kYXRlPWRhdGVcclxuICB9XHJcblxyXG5cclxuICAvL2xldCBtb3VudGFpbnMgPSBbXTtcclxuXHJcbiAgXHJcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gIGlmIChtb3VudGFpbnMubGVuZ3RoID4wKSB7XHJcbiAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMobW91bnRhaW5zWzBdKTtcclxuICAgIGdlbmVyYXRlVGFibGUodGFibGUsIG1vdW50YWlucyk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgLy9nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7IC8vIHRoZW4gdGhlIGhlYWRcclxuICB9XHJcblxyXG5cclxuY29uc3QgYWRkSXRtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFkZC10YXNrXCIpO1xyXG5jb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW15LWZvcm1cIik7XHJcbmFkZEl0bUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuICBmb3JtRWwuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgXHJcbn0pXHJcbmNsb3NlRm9ybShcIlwiKTtcclxuXHJcbi8qIGNsb3NlIGZ1bmN0aW9uKi9cclxuZnVuY3Rpb24gY2xvc2VGb3JtKHR5cGUpIHtcclxuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtbXktZm9ybSR7dHlwZX1gKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2xvc2Uke3R5cGV9YCk7XHJcbiAgaWYoY2xvc2VCdG4pe1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4gICAgICBmb3JtRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBsZXQgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXRoZS1mb3JtJHt0eXBlfWApLnJlc2V0KCk7XHJcbiAgfSkgIFxyXG4gIH1cclxuXHJcblxyXG59XHJcbi8qIHJlc2V0IGFuZCBjbG9zZSBmb3JtIGFmdGVyIGRpc3BsYXkgZnVuY3Rpb24gKi9cclxuZnVuY3Rpb24gZm9ybVJlc2V0KHR5cGUpe1xyXG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1teS1mb3JtJHt0eXBlfWApO1xyXG4gIGlmKGZvcm1FbCl7XHJcbiAgICBsZXQgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXRoZS1mb3JtJHt0eXBlfWApLnJlc2V0KCk7XHJcbiAgICBmb3JtRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG5cclxuLyogcmVtb3ZlIGFsbCBjaGlsZCBub2RlcyBmb3IgdGFibGUgYm9keSAtIGZyZXNoIGZvciBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XHJcbiAgaWYocGFyZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIGNyZWF0ZSBzdWJtaXQgYnV0dG9uICovXHJcbmxldCBtYXhJZD1tb3VudGFpbnMubGVuZ3RoO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN1Ym1pdC1idG5cIik7XHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybVwiKS52YWx1ZTtcclxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKS52YWx1ZVxyXG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIikudmFsdWU7XHJcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHVlLWRhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IG5ldyBUYXNrKG1heElkKzEsIHByb2plY3QsIHRpdGxlLCBkZXRhaWxzLCBkdWVkYXRlKTtcclxuICAgIG1vdW50YWlucy5wdXNoKGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2cobW91bnRhaW5zKTtcclxuICAgIG1heElkKys7XHJcbiAgICBjb25zdCBjaGVja1N1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gICAgbGV0IGRhdGFGaWx0ZXIgPSAgZmlsdGVyRGF0YShjaGVja1N1YlRpdGxlKTtcclxuICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIlwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW91bnRhaW5zKSk7XHJcbiAgICBcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDaGVja0ZsYWcoZmxhZywgaWR4KXtcclxuXHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgIGlmKGZsYWc9PTEpe1xyXG4gICAgICAgIGVsZW1lbnRbXCJjaGVja1wiXSA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihmbGFnPT1mbGFnKXtcclxuICAgICAgICBlbGVtZW50W1wiY2hlY2tcIl0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxufVxyXG5cclxuLypjaGVjayBidXR0b24gc3RyaWtlIHRocm91Z2gqL1xyXG5mdW5jdGlvbiBjaGVja0NvbmRpdGlvbihib3gpe1xyXG4gIGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGlmKGJveC5jaGVja2VkKXtcclxuICAgICAgbGV0IHJhZGlvUGFyZW50ID0gYm94LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCByb3dQYXJlbnQgPSByYWRpb1BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICByb3dQYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICByb3dQYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb25Db2xvciA9IFwicmVkXCI7XHJcbiAgICAgIGxldCBpZHggPSBnZXRDbGFzc0lET1BhcmVudChyYWRpb1BhcmVudCk7XHJcbiAgICAgIGNoYW5nZUNoZWNrRmxhZygxLCBpZHgpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighYm94LmNoZWNrZWQpe1xyXG4gICAgICBsZXQgcmFkaW9QYXJlbnQgPSBib3gucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IHJvd1BhcmVudCA9IHJhZGlvUGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBsZXQgaWR4ID0gZ2V0Q2xhc3NJRE9QYXJlbnQocmFkaW9QYXJlbnQpO1xyXG4gICAgICBjaGFuZ2VDaGVja0ZsYWcoMCwgaWR4KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY2hlY2tFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuY2hlY2tFbC5mb3JFYWNoKGJveCA9PntcclxuICBjaGVja0NvbmRpdGlvbihib3gpO1xyXG5cclxufSlcclxuXHJcblxyXG4vKmhlbHBlciAqL1xyXG5mdW5jdGlvbiBnZXRDbGFzc0lET1BhcmVudChlbGVtZW50KXtcclxuICBsZXQgZWRpdFBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICBsZXQgaWR4ID0gTnVtYmVyKGVkaXRQYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcRCsvZywgJycpKTtcclxuICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gIHJldHVybiBpZHg7XHJcbn1cclxuZnVuY3Rpb24gZmluZFRhc2tPYmplY3QoZGF0YSwgaWR4KSB7XHJcbiAgbGV0IHRhc2tTZWxlY3RlZDtcclxuICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICAgIGZvcihsZXQga2V5IGluIGVsZW1lbnQpe1xyXG4gICAgICAgICAgaWYgKGtleT09XCJpZFwiICYmIGVsZW1lbnRba2V5XT09aWR4KXtcclxuICAgICAgICAgICAgICB0YXNrU2VsZWN0ZWQgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0YXNrU2VsZWN0ZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlRWRpdEZvcm0odGFzayl7XHJcbiAgbGV0IHRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpdGxlLWZvcm0tZWRpdFwiKTtcclxuICB0aXRsZUVsLnZhbHVlID0gdGFza1tcInRpdGxlXCJdO1xyXG5cclxuICBsZXQgZGV0YWlsc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kZXRhaWxzLWVkaXRcIik7XHJcbiAgZGV0YWlsc0VsLnZhbHVlID0gdGFza1tcImRldGFpbHNcIl07XHJcblxyXG4gIGxldCBwcm9qZWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1lZGl0XCIpO1xyXG4gIHByb2plY3RzRWwudmFsdWUgPSB0YXNrW1wicHJvamVjdHNcIl07XHJcblxyXG4gIGxldCBkYXRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlLWVkaXRcIik7XHJcbiAgZGF0ZUVsLnZhbHVlID0gdGFza1tcImRhdGVcIl07XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZVRhc2tPYmplY3QoZGF0YSwgaWR4LCBuZXdQcm9qZWN0LCBuZXdUaXRsZSwgbmV3RGV0YWlscywgbmV3RGF0ZSl7XHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEpe1xyXG4gICAgaWYoZWxlbWVudFtcImlkXCJdPT1pZHgpe1xyXG4gICAgICBlbGVtZW50W1wicHJvamVjdHNcIl09bmV3UHJvamVjdDtcclxuICAgICAgZWxlbWVudFtcInRpdGxlXCJdPW5ld1RpdGxlO1xyXG4gICAgICBlbGVtZW50W1wiZGV0YWlsc1wiXT1uZXdEZXRhaWxzO1xyXG4gICAgICBlbGVtZW50W1wiZGF0ZVwiXT1uZXdEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufVxyXG5cclxuLyplZGl0IGZvcm0gKi9cclxubGV0IGluZGV4U2VsIDtcclxuZnVuY3Rpb24gZWRpdExpc3RuZXIoKXtcclxuICBjb25zdCBlZGl0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtYnRuXCIpO1xyXG4gIGVkaXRFbC5mb3JFYWNoKGVkaXRJdGVtID0+e1xyXG4gICAgZWRpdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PnsgXHJcbiAgICAgICAgbGV0IGlkeCA9IGdldENsYXNzSURPUGFyZW50KGVkaXRJdGVtKTtcclxuICAgICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW15LWZvcm0tZWRpdFwiKTtcclxuICAgICAgICBmb3JtRWwuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7ICAgICBcclxuICAgICAgICBsZXQgdGFza1NlbGVjdGVkID0gZmluZFRhc2tPYmplY3QobW91bnRhaW5zLCBpZHgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tTZWxlY3RlZCk7XHJcbiAgICAgICAgcG9wdWxhdGVFZGl0Rm9ybSh0YXNrU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNsb3NlRm9ybShcIi1lZGl0XCIpO1xyXG4gICAgICAgIGluZGV4U2VsPWlkeDtcclxuICAgICAgXHJcbiAgfSlcclxufSkgIFxyXG59XHJcblxyXG5lZGl0TGlzdG5lcigpO1xyXG5cclxuXHJcblxyXG4vKmRvIHN1Ym1pdCBidXR0b24gb24gZWRpdCBmb3JtICovXHJcblxyXG5jb25zdCBzdWJtaXRCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdWJtaXQtYnRuLWVkaXRcIik7XHJcbnN1Ym1pdEJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aXRsZS1mb3JtLWVkaXRcIikudmFsdWU7XHJcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWVkaXRcIikudmFsdWU7XHJcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtZWRpdFwiKS52YWx1ZTtcclxuICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHVlLWRhdGUtZWRpdFwiKS52YWx1ZTtcclxuICByZXBsYWNlVGFza09iamVjdChtb3VudGFpbnMsIGluZGV4U2VsLCBwcm9qZWN0LCB0aXRsZSwgZGV0YWlscywgZHVlZGF0ZSk7XHJcbiAgY29uc29sZS5sb2cobW91bnRhaW5zKTtcclxuICBjb25zdCBjaGVja1N1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gIGxldCBkYXRhRmlsdGVyID0gZmlsdGVyRGF0YShjaGVja1N1YlRpdGxlKTtcclxuICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCItZWRpdFwiKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG5cclxufSlcclxuXHJcblxyXG4vKiBub3cgZG8gZGVsZXRlIHRhc2sgKi9cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGV4ZWNEZWxldGVUYXNrKGRhdGEpe1xyXG4gIGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xyXG4gIGRlbGV0ZUVsLmZvckVhY2goZGVsZXRlSXRlbSA9PntcclxuICAgIGRlbGV0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICBsZXQgZGVsZXRlUGFyZW50ID0gZGVsZXRlSXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgaWR4ID0gTnVtYmVyKGRlbGV0ZVBhcmVudC5jbGFzc05hbWUucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICBkYXRhLnNwbGljZShpZHgtMSwgMSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVNYWluJyk7XHJcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyUmVtKTtcclxuICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG4gICAgICBleGVjRGVsZXRlVGFzayhkYXRhKTtcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhlY0RlbGV0ZVRhc2sobW91bnRhaW5zKTtcclxuXHJcbi8qIHNvcnQgYnV0dG9uICovXHJcblxyXG5sZXQgYXNjPTE7XHJcbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRcIik7XHJcbiAgc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICAgIGxldCAgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICBkYXRhRmlsdGVyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICBpZihhc2M9PTEpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0clRvRGF0ZShhLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGIuZGF0ZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYXNjPT0oLTEpKXtcclxuICAgICAgICByZXR1cm4gICBwYXJzZUZsb2F0KHN0clRvRGF0ZShiLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGEuZGF0ZSkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgYXNjKj0oLTEpO1xyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG5cclxuICB9KVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==