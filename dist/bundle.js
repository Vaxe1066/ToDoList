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
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/3;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/3;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects {\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 350px;\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n    \r\n    \r\n}\r\n\r\n.subProjects a{\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    white-space: normal;\r\n    display:block;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar,\r\ntbody::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track,\r\ntbody::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb,\r\ntbody::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 200px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 5px solid rgb(47,85,151);\r\n    width: 400px;\r\n}\r\n\r\n/*.details, .details-edit{\r\n    height: 80px;\r\n    width: 400px;\r\n    text-align: start;\r\n}*/\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit, .closePop {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,\r\n.closePop:hover,\r\n.closePop:focus\r\n\r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* pop up box*/\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /*transition: opacity 500ms;*/\r\n    display: none;\r\n    overflow-wrap: break-word;\r\n\r\n    /*opacity: 0;*/\r\n  }\r\n\r\n  \r\n  .popup {\r\n    margin: 70px auto;\r\n    /*padding: 20px;*/\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border: 5px solid rgb(47,85,151);\r\n    width: 30%;\r\n    height: 50%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n    overflow: auto;\r\n\r\n    \r\n  }\r\n\r\n  \r\n /* h4, .divH4{\r\n    margin-top: 0;\r\n    color: #333;\r\n  }*/\r\n  .popup .closePop {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    /*font-weight: bold;*/\r\n    text-decoration: none;\r\n    /*color: #333;*/\r\n  }\r\n  /*.popup .closePop:hover {\r\n    color: #06D85F;\r\n  }*/\r\n\r\n\r\n\r\n\r\n  .divH4{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items:baseline;\r\n      gap: 10px;\r\n      /*padding-top: 10px;*/\r\n      padding-left: 10px;\r\n      overflow-wrap: break-word;\r\n      \r\n  }\r\n\r\n  p{\r\n    float: left;\r\n    padding-right: 5px;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/3;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/3;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects {\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 350px;\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n    \r\n    \r\n}\r\n\r\n.subProjects a{\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    white-space: normal;\r\n    display:block;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar,\r\ntbody::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track,\r\ntbody::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb,\r\ntbody::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 200px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 5px solid rgb(47,85,151);\r\n    width: 400px;\r\n}\r\n\r\n/*.details, .details-edit{\r\n    height: 80px;\r\n    width: 400px;\r\n    text-align: start;\r\n}*/\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit, .closePop {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,\r\n.closePop:hover,\r\n.closePop:focus\r\n\r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* pop up box*/\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /*transition: opacity 500ms;*/\r\n    display: none;\r\n    overflow-wrap: break-word;\r\n\r\n    /*opacity: 0;*/\r\n  }\r\n\r\n  \r\n  .popup {\r\n    margin: 70px auto;\r\n    /*padding: 20px;*/\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border: 5px solid rgb(47,85,151);\r\n    width: 30%;\r\n    height: 50%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n    overflow: auto;\r\n\r\n    \r\n  }\r\n\r\n  \r\n /* h4, .divH4{\r\n    margin-top: 0;\r\n    color: #333;\r\n  }*/\r\n  .popup .closePop {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    /*font-weight: bold;*/\r\n    text-decoration: none;\r\n    /*color: #333;*/\r\n  }\r\n  /*.popup .closePop:hover {\r\n    color: #06D85F;\r\n  }*/\r\n\r\n\r\n\r\n\r\n  .divH4{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items:baseline;\r\n      gap: 10px;\r\n      /*padding-top: 10px;*/\r\n      padding-left: 10px;\r\n      overflow-wrap: break-word;\r\n      \r\n  }\r\n\r\n  p{\r\n    float: left;\r\n    padding-right: 5px;\r\n  }"],"sourceRoot":""}]);
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
        if(key=="title"){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.classList.add("titleCell");
          cell.appendChild(text);
        }
        else{
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
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

//let mountains=[];
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
    //openPopUpBox(dataFilter);
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
    //openPopUpBox(dataFilter);
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
    openPopUpBox(data);
    execDeleteTask(data);
}

function subProjectTitleChange(text){
  const subTitle = document.querySelector("h3");
  subTitle.textContent=text;
}


function createProjectAnchor(subProjectElement, text){
  const newProjAnchor = document.createElement("a");
  let arrText = text.split(" ");
  let newText = arrText.join("-");
  newProjAnchor.classList.add(newText);
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



//let projectLst=["ToDoList"]
let projectLst=[];
if(mountains.length>0){
  for(let element of mountains){
    if(!projectLst.includes(element["projects"])){
      projectLst.push(element["projects"]);
    }

    }
  }

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
        /*if(mountains.length>0){
          for(let element of mountains){
            if(!projectLst.includes(element["projects"])){
              projectLst.push(element["projects"]);
            }

            }
          }*/
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
          //openPopUpBox(mountains);
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
          projectLst.push(projPrompt);
          
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
  createDropDownList(".projects");
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
        createDropDownList(".projects-edit");
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




function execDeleteTask(){
  const deleteEl = document.querySelectorAll(".delete-btn");
  deleteEl.forEach(deleteItem =>{
    deleteItem.addEventListener("click", (e)=>{
      let deleteParent = deleteItem.parentElement;
      let idx = Number(deleteParent.className.replace(/\D+/g, ''));
      console.log(idx);
      let iKeep;
      for(let element of mountains){;
        if(element["id"]==idx){
          iKeep=mountains.indexOf(element);
        }
      }
      mountains.splice(iKeep, 1);
      console.log(mountains);
      const containerRem = document.querySelector('.tableMain');
      removeAllChildNodes(containerRem);
      let table = document.querySelector("table");
      const checkSubTitle = document.querySelector("h3");
      let  dataFilter = filterData(checkSubTitle);
      //let data = Object.keys(data[0]);
      (0,_generate_table_js__WEBPACK_IMPORTED_MODULE_2__.generateTable)(table, dataFilter);
      localStorage.setItem("alltasks", JSON.stringify(mountains));
      //openPopUpBox(data);
      execDeleteTask();
    })
  })
}

execDeleteTask();





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


  /*get details by click function*/
  function closeBox(data) {
    const formEl = document.querySelector(".overlay");
  
    const closeBtn = document.querySelector(".closePop");
    if(closeBtn){
      closeBtn.addEventListener("click", () =>{
        formEl.style.display = "none";
    })  
    }
  }

function openPopUpBox(data){
  const cellEl = document.querySelectorAll(".titleCell");
  cellEl.forEach(cell =>{
    cell.addEventListener("click", ()=>{
      
      let idx=getClassIDOParent(cell);
      const popupEl = document.querySelector(".overlay");
      popupEl.style.display="block";
      const allH4 = document.querySelectorAll(".divH4")
      allH4.forEach(item=>{
        if(item.firstElementChild.className=="taskH4"){
          let pChild = item.lastElementChild;
          pChild.textContent = cell.textContent;
        }
        else if(item.firstElementChild.className=="projectH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["projects"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }
        else if(item.firstElementChild.className=="detailsH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["details"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }
        else if(item.firstElementChild.className=="dateH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["date"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }

      })

      closeBox(data);
    })

  })
  
}

  


openPopUpBox(mountains);

function clearDropDown(){
  const selectEl=  document.querySelectorAll("select");
  selectEl.forEach(selectItem =>{
    while (selectItem.firstChild) {
      selectItem.removeChild(selectItem.lastChild);
    }
  })

}
  function createDropDownList(classname){
    //let DropDownProjectLst=[]
    let DropDownProjectLst=projectLst;
    /*if(mountains.length>0){
      for(let element of mountains){
        if(!DropDownProjectLst.includes(element["projects"])){
          DropDownProjectLst.push(element["projects"]);
        }
  
        }
      }*/
    clearDropDown();
    for(let item of DropDownProjectLst){
      console.log(item);
      const selectEl = document.querySelector(classname)
      const optionEl = document.createElement("option");
      optionEl.setAttribute("value",item);
      optionEl.textContent = item;
      selectEl.appendChild(optionEl);
    }
  }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9jb250ZW50cy1sb2FkLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2dlbmVyYXRlLXRhYmxlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy90YWJsZS1idXR0b25zLmpzIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELDZDQUE2Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLHFCQUFxQiwrQ0FBK0Msd0NBQXdDLGdDQUFnQyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyx3Q0FBd0MsU0FBUyxpQkFBaUIsb0JBQW9CLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxLQUFLLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIsK0JBQStCLHlCQUF5QixrQkFBa0IseUJBQXlCLHVCQUF1Qix5QkFBeUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsMkNBQTJDLEtBQUssc0JBQXNCLHFCQUFxQiwrQkFBK0Isc0JBQXNCLGtCQUFrQix5QkFBeUIscUJBQXFCLHVCQUF1Qiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw0QkFBNEIsc0JBQXNCLEtBQUssc0VBQXNFLHFCQUFxQixLQUFLLG1GQUFtRiwwREFBMEQsS0FBSyxtRkFBbUYsNkNBQTZDLHFDQUFxQyxPQUFPLDZCQUE2Qix3QkFBd0IsK0JBQStCLEtBQUssb0JBQW9CLHdCQUF3Qix5Q0FBeUMsS0FBSyxrQkFBa0IsNENBQTRDLHdCQUF3Qiw2Q0FBNkMsOEJBQThCLHNCQUFzQiw4QkFBOEIseUJBQXlCLDhCQUE4QiwwQkFBMEIseUJBQXlCLGtDQUFrQyx3QkFBd0IsOEJBQThCLEtBQUssZ0NBQWdDLHdCQUF3QixhQUFhLGlDQUFpQyxvQkFBb0Isb0JBQW9CLGdDQUFnQyxzQkFBc0IseUJBQXlCLE9BQU8sc0JBQXNCLDJCQUEyQix3QkFBd0Isd0JBQXdCLGlDQUFpQyx5QkFBeUIsK0JBQStCLE9BQU8scUJBQXFCLHdCQUF3Qiw4QkFBOEIsd0NBQXdDLDhCQUE4QiwrQkFBK0IsT0FBTywyQ0FBMkMsa0RBQWtELGtDQUFrQyxvQkFBb0IsNkJBQTZCLHVCQUF1QixhQUFhLGtCQUFrQiwrQkFBK0IscUJBQXFCLEtBQUssaUNBQWlDLDJCQUEyQix3QkFBd0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsS0FBSyxrQkFBa0IsMEJBQTBCLDZCQUE2Qix1QkFBdUIscUJBQXFCLEtBQUssOENBQThDLGNBQWMsMEJBQTBCLFNBQVMsS0FBSyw4Q0FBOEMsY0FBYywwQkFBMEIsU0FBUyxTQUFTLDJCQUEyQix1QkFBdUIsdUJBQXVCLDZCQUE2Qix5QkFBeUIsOEJBQThCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0IsNEJBQTRCLHFEQUFxRCxXQUFXLDJHQUEyRyx1REFBdUQsb0JBQW9CLEtBQUsseUZBQXlGLHNCQUFzQix3QkFBd0IsdUNBQXVDLDZDQUE2QywwQ0FBMEMsZUFBZSxvQkFBb0Isc0NBQXNDLDJDQUEyQyxtRUFBbUUsK0RBQStELDRCQUE0Qix1REFBdUQsa0NBQWtDLHFCQUFxQixzQkFBc0IseUNBQXlDLHFCQUFxQixLQUFLLGtDQUFrQyxxQkFBcUIscUJBQXFCLDBCQUEwQixLQUFLLDRFQUE0RSx1QkFBdUIscUJBQXFCLHdCQUF3QiwwQkFBMEIsS0FBSyxzSUFBc0ksb0JBQW9CLDhCQUE4Qix3QkFBd0IsS0FBSyxxREFBcUQsd0JBQXdCLGVBQWUsa0JBQWtCLGdCQUFnQixpQkFBaUIsdUNBQXVDLG9DQUFvQyx3QkFBd0Isa0NBQWtDLHlCQUF5QixTQUFTLHdCQUF3QiwwQkFBMEIsd0JBQXdCLDJCQUEyQiwyQkFBMkIseUNBQXlDLG1CQUFtQixvQkFBb0IsMkJBQTJCLHVDQUF1Qyx1QkFBdUIsbUJBQW1CLDZCQUE2QixzQkFBc0Isb0JBQW9CLE9BQU8sMEJBQTBCLDJCQUEyQixrQkFBa0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IsU0FBUyxnQ0FBZ0MsdUJBQXVCLE9BQU8sK0JBQStCLHdCQUF3Qiw4QkFBOEIsK0JBQStCLG9CQUFvQiw4QkFBOEIsK0JBQStCLG9DQUFvQyxpQkFBaUIsWUFBWSxvQkFBb0IsMkJBQTJCLE9BQU8sT0FBTyw0RUFBNEUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8seUJBQXlCLDBCQUEwQixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLE1BQU0sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsS0FBSyxjQUFjLGFBQWEsTUFBTSxVQUFVLHNCQUFzQixxQkFBcUIseUJBQXlCLFdBQVcsVUFBVSxvQkFBb0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIseUJBQXlCLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxRQUFRLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVkseUNBQXlDLDZDQUE2Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLHFCQUFxQiwrQ0FBK0Msd0NBQXdDLGdDQUFnQyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyx3Q0FBd0MsU0FBUyxpQkFBaUIsb0JBQW9CLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxLQUFLLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIsK0JBQStCLHlCQUF5QixrQkFBa0IseUJBQXlCLHVCQUF1Qix5QkFBeUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsMkNBQTJDLEtBQUssc0JBQXNCLHFCQUFxQiwrQkFBK0Isc0JBQXNCLGtCQUFrQix5QkFBeUIscUJBQXFCLHVCQUF1Qiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw0QkFBNEIsc0JBQXNCLEtBQUssc0VBQXNFLHFCQUFxQixLQUFLLG1GQUFtRiwwREFBMEQsS0FBSyxtRkFBbUYsNkNBQTZDLHFDQUFxQyxPQUFPLDZCQUE2Qix3QkFBd0IsK0JBQStCLEtBQUssb0JBQW9CLHdCQUF3Qix5Q0FBeUMsS0FBSyxrQkFBa0IsNENBQTRDLHdCQUF3Qiw2Q0FBNkMsOEJBQThCLHNCQUFzQiw4QkFBOEIseUJBQXlCLDhCQUE4QiwwQkFBMEIseUJBQXlCLGtDQUFrQyx3QkFBd0IsOEJBQThCLEtBQUssZ0NBQWdDLHdCQUF3QixhQUFhLGlDQUFpQyxvQkFBb0Isb0JBQW9CLGdDQUFnQyxzQkFBc0IseUJBQXlCLE9BQU8sc0JBQXNCLDJCQUEyQix3QkFBd0Isd0JBQXdCLGlDQUFpQyx5QkFBeUIsK0JBQStCLE9BQU8scUJBQXFCLHdCQUF3Qiw4QkFBOEIsd0NBQXdDLDhCQUE4QiwrQkFBK0IsT0FBTywyQ0FBMkMsa0RBQWtELGtDQUFrQyxvQkFBb0IsNkJBQTZCLHVCQUF1QixhQUFhLGtCQUFrQiwrQkFBK0IscUJBQXFCLEtBQUssaUNBQWlDLDJCQUEyQix3QkFBd0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsS0FBSyxrQkFBa0IsMEJBQTBCLDZCQUE2Qix1QkFBdUIscUJBQXFCLEtBQUssOENBQThDLGNBQWMsMEJBQTBCLFNBQVMsS0FBSyw4Q0FBOEMsY0FBYywwQkFBMEIsU0FBUyxTQUFTLDJCQUEyQix1QkFBdUIsdUJBQXVCLDZCQUE2Qix5QkFBeUIsOEJBQThCLEtBQUsscUJBQXFCLHVCQUF1QixvQkFBb0IsNEJBQTRCLHFEQUFxRCxXQUFXLDJHQUEyRyx1REFBdUQsb0JBQW9CLEtBQUsseUZBQXlGLHNCQUFzQix3QkFBd0IsdUNBQXVDLDZDQUE2QywwQ0FBMEMsZUFBZSxvQkFBb0Isc0NBQXNDLDJDQUEyQyxtRUFBbUUsK0RBQStELDRCQUE0Qix1REFBdUQsa0NBQWtDLHFCQUFxQixzQkFBc0IseUNBQXlDLHFCQUFxQixLQUFLLGtDQUFrQyxxQkFBcUIscUJBQXFCLDBCQUEwQixLQUFLLDRFQUE0RSx1QkFBdUIscUJBQXFCLHdCQUF3QiwwQkFBMEIsS0FBSyxzSUFBc0ksb0JBQW9CLDhCQUE4Qix3QkFBd0IsS0FBSyxxREFBcUQsd0JBQXdCLGVBQWUsa0JBQWtCLGdCQUFnQixpQkFBaUIsdUNBQXVDLG9DQUFvQyx3QkFBd0Isa0NBQWtDLHlCQUF5QixTQUFTLHdCQUF3QiwwQkFBMEIsd0JBQXdCLDJCQUEyQiwyQkFBMkIseUNBQXlDLG1CQUFtQixvQkFBb0IsMkJBQTJCLHVDQUF1Qyx1QkFBdUIsbUJBQW1CLDZCQUE2QixzQkFBc0Isb0JBQW9CLE9BQU8sMEJBQTBCLDJCQUEyQixrQkFBa0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IsU0FBUyxnQ0FBZ0MsdUJBQXVCLE9BQU8sK0JBQStCLHdCQUF3Qiw4QkFBOEIsK0JBQStCLG9CQUFvQiw4QkFBOEIsK0JBQStCLG9DQUFvQyxpQkFBaUIsWUFBWSxvQkFBb0IsMkJBQTJCLE9BQU8sbUJBQW1CO0FBQ2x5aUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUUvZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HOzs7O0FBSW5HOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7O0FBRXBDLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnQzs7QUFFaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQ0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQSx3Qzs7QUFFQTtBQUNBLCtDO0FBQ0E7Ozs7QUFJQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RThDO0FBQ3ZDO0FBQ0c7QUFDSDs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVUsV0FBVyxzQ0FBUTtBQUNuQztBQUNBO0FBQ0EsTUFBTSwrREFBWSxhQUFhLHVDQUFVO0FBQ3pDO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0EsOEI7QUFDQTtBQUNBLENBQUM7O0FBRUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RjJDO0FBQ1g7QUFDRTs7O0FBR2xDO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNENBQVc7QUFDNUI7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIscUNBQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzQ0FBUTtBQUN4QjtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7OztBQVNBLGlFQUFlLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVStDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDL0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ087QUFDd0I7QUFDckUsVUFBVSwwRkFBMEY7O0FBRS9FOzs7O0FBSXJCO0FBQ0EsR0FBRyx5RkFBeUY7QUFDNUYsR0FBRyw2RkFBNkY7QUFDaEcsR0FBRyx1RkFBdUY7QUFDMUYsR0FBRyx1RkFBdUY7QUFDMUYsR0FBRyw2RkFBNkY7QUFDaEcsR0FBRyx3RkFBd0Y7QUFDM0YsR0FBRyw4RUFBOEU7QUFDakYsR0FBRyxnRkFBZ0Y7QUFDbkYsR0FBRyxvRkFBb0Y7QUFDdkYsR0FBRyxnRkFBZ0Y7QUFDbkYsR0FBRywrRUFBK0U7QUFDbEYsR0FBRyxxRkFBcUY7QUFDeEYsR0FBRyxnRkFBZ0Y7QUFDbkYsR0FBRywrRUFBK0U7QUFDbEYsR0FBRywrRUFBK0U7QUFDbEYsR0FBRyxxRkFBcUY7QUFDeEYsR0FBRyxnRkFBZ0Y7QUFDbkYsR0FBRywrRUFBK0U7QUFDbEYsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQjtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQTtBQUNBLHFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxzREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBYSxjQUFjO0FBQy9CLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsU0FBUzs7OztBQUlULE9BQU87OztBQUdQOzs7QUFHQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBYSxtQkFBbUI7QUFDcEMscUNBQXFDO0FBQ3JDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELEtBQUs7O0FBRTNELG1EQUFtRCxLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxLQUFLO0FBQzNELEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELEtBQUs7QUFDM0Q7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMLEdBQUc7O0FBRUg7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NyaW1zb24gVGV4dCcsIHNlcmlmO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlci1sZWZ0e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8xMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw4NSwxNTEpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWljb257XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMC8xMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0Nyw4NSwxNTEpO1xcclxcblxcclxcbn1cXHJcXG4ucHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMi8xMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG59XFxyXFxuLmRyb3BPcHRpb25ze1xcclxcbiAgICAvKmdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwOyovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6MTVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0RGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMTE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMgYXtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhcixcXHJcXG50Ym9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMC41ZW07XFxyXFxufVxcclxcbiBcXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxcclxcbnRib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbiBcXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxcclxcbnRib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LDg1LDE1MSwgMC41KTtcXHJcXG4gIC8qb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMgYTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgzLCA4MywgNzcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5heyAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDEsMjAxLDIwMSk7Ki9cXHJcXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXI6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGFpbmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiA2cHggMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5taWRkbGV7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46Mi8xMDtcXHJcXG4gICAgICBncmlkLXJvdzoyLzEwO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDoyJTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJsZS10b3B7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgLyp0YWJsZSAqL1xcclxcbiAgIHRhYmxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxcclxcblxcclxcbnRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246ZW5kO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MzBweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODMxcHgpe1xcclxcbiAgICB0Ym9keXtcXHJcXG4gICAgICAgIGhlaWdodDogNjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qaGVpZ2h0OiA4MGVtOyovXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG5bY2xhc3MqPVxcXCJyYWRpby1idG5cXFwiXSwgLmVkaXQtYnRuLCAuZGVsZXRlLWJ0bntcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcbi8qKioqKiBFTkQgVEFCTEUgKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKkRvIHRoZSBoaWRkZW4gZm9ybSovXFxyXFxuLm15LWZvcm0sIC5teS1mb3JtLWVkaXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTsgIC8qU2l0IG9uIHRvcCAqLyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNDcsODUsMTUxKTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKi5kZXRhaWxzLCAuZGV0YWlscy1lZGl0e1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufSovXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UsIC5jbG9zZS1lZGl0LCAuY2xvc2VQb3Age1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzLFxcclxcbi5jbG9zZS1lZGl0OmhvdmVyLFxcclxcbi5jbG9zZS1lZGl0OmZvY3VzLFxcclxcbi5jbG9zZVBvcDpob3ZlcixcXHJcXG4uY2xvc2VQb3A6Zm9jdXNcXHJcXG5cXHJcXG4gICAge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIHBvcCB1cCBib3gqL1xcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zOyovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFxyXFxuICAgIC8qb3BhY2l0eTogMDsqL1xcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuICAucG9wdXAge1xcclxcbiAgICBtYXJnaW46IDcwcHggYXV0bztcXHJcXG4gICAgLypwYWRkaW5nOiAyMHB4OyovXFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuIC8qIGg0LCAuZGl2SDR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfSovXFxyXFxuICAucG9wdXAgLmNsb3NlUG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgLypmb250LXdlaWdodDogYm9sZDsqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIC8qY29sb3I6ICMzMzM7Ki9cXHJcXG4gIH1cXHJcXG4gIC8qLnBvcHVwIC5jbG9zZVBvcDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMDZEODVGO1xcclxcbiAgfSovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAuZGl2SDR7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xcclxcbiAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAvKnBhZGRpbmctdG9wOiAxMHB4OyovXFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBwe1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjs7O0FBR3BCOztBQUVBO0lBQ0ksa0NBQWtDO0dBQ25DOztBQUVIO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCOztBQUVuQztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSTtvQkFDZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFNBQVM7Ozs7QUFJYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTs7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O0lBR0c7RUFDRjtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0VBQ0E7O0lBRUU7Ozs7O0VBS0Y7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixTQUFTO01BQ1QscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQix5QkFBeUI7O0VBRTdCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5odG1sLCBib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDcmltc29uIFRleHQnLCBzZXJpZjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXItbGVmdHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTA7XFxyXFxuICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsODUsMTUxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1pY29ue1xcclxcbiAgICBncmlkLWNvbHVtbjogMTAvMTE7XFxyXFxuICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDcsODUsMTUxKTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb2ZpbGUtaW1ne1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd24tY29udGVudHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMTA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcbi5kcm9wT3B0aW9uc3tcXHJcXG4gICAgLypncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMi8xMDsqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOjE1cHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdERpdntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDExO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzIGF7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0czo6LXdlYmtpdC1zY3JvbGxiYXIsXFxyXFxudGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcXHJcXG50Ym9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcXHJcXG50Ym9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0Nyw4NSwxNTEsIDAuNSk7XFxyXFxuICAvKm91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzIGE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig4MywgODMsIDc3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYXsgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDEsMjAxLDIwMSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAxLDIwMSwyMDEpOyovXFxyXFxuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGFpbmVyOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhcjEsIC5iYXIyLCAuYmFyMyB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogNnB4IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAubWlkZGxle1xcclxcbiAgICAgIGdyaWQtY29sdW1uOjIvMTA7XFxyXFxuICAgICAgZ3JpZC1yb3c6Mi8xMDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgcGFkZGluZy10b3A6MiU7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFibGUtdG9we1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgIC8qdGFibGUgKi9cXHJcXG4gICB0YWJsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cXHJcXG5cXHJcXG50YWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XFxyXFxuXFxyXFxudGFibGUgdGQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRoIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOmVuZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODMwcHgpe1xcclxcbiAgICB0Ym9keXtcXHJcXG4gICAgICAgIGhlaWdodDogNDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDgzMXB4KXtcXHJcXG4gICAgdGJvZHl7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbiAgICBcXHJcXG5cXHJcXG5cXHJcXG50Ym9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvKmhlaWdodDogODBlbTsqL1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZTtcXHJcXG59XFxyXFxudGhlYWQsIHRib2R5IHRyIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkOy8qIGV2ZW4gY29sdW1ucyB3aWR0aCAsIGZpeCB3aWR0aCBvZiB0YWJsZSB0b28qL1xcclxcbn1cXHJcXG50aGVhZCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMWVtICkvKiBzY3JvbGxiYXIgaXMgYXZlcmFnZSAxZW0vMTZweCB3aWR0aCwgcmVtb3ZlIGl0IGZyb20gdGhlYWQgd2lkdGggKi9cXHJcXG59XFxyXFxuXFxyXFxuW2NsYXNzKj1cXFwicmFkaW8tYnRuXFxcIl0sIC5lZGl0LWJ0biwgLmRlbGV0ZS1idG57XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG4vKioqKiogRU5EIFRBQkxFICoqKiovXFxyXFxuXFxyXFxuXFxyXFxuLypEbyB0aGUgaGlkZGVuIGZvcm0qL1xcclxcbi5teS1mb3JtLCAubXktZm9ybS1lZGl0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIHotaW5kZXg6IDE7ICAvKlNpdCBvbiB0b3AgKi8gXFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQsIC5mb3JtLWNvbnRlbnQtZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyouZGV0YWlscywgLmRldGFpbHMtZWRpdHtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn0qL1xcclxcblxcclxcblxcclxcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlLCAuY2xvc2UtZWRpdCwgLmNsb3NlUG9wIHtcXHJcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyxcXHJcXG4uY2xvc2UtZWRpdDpob3ZlcixcXHJcXG4uY2xvc2UtZWRpdDpmb2N1cyxcXHJcXG4uY2xvc2VQb3A6aG92ZXIsXFxyXFxuLmNsb3NlUG9wOmZvY3VzXFxyXFxuXFxyXFxuICAgIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBwb3AgdXAgYm94Ki9cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIC8qdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtczsqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcblxcclxcbiAgICAvKm9wYWNpdHk6IDA7Ki9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgLnBvcHVwIHtcXHJcXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XFxyXFxuICAgIC8qcGFkZGluZzogMjBweDsqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYig0Nyw4NSwxNTEpO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcblxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAvKiBoNCwgLmRpdkg0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH0qL1xcclxcbiAgLnBvcHVwIC5jbG9zZVBvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAvKmNvbG9yOiAjMzMzOyovXFxyXFxuICB9XFxyXFxuICAvKi5wb3B1cCAuY2xvc2VQb3A6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzA2RDg1RjtcXHJcXG4gIH0qL1xcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgLmRpdkg0e1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcXHJcXG4gICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgLypwYWRkaW5nLXRvcDogMTBweDsqL1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgcHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQuc3ZnJztcclxuXHJcbmNvbnN0IGNvbnRlbnRMb2FkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IGNyZWF0ZUlucHV0QnRuID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBocmVmLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaW5wdXRUYWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIGlucHV0VGFnLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgaW5wdXRUYWcudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGlucHV0VGFnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBob21lQnRuID0gY3JlYXRlSW5wdXRCdG4oXCJob21lLWJ0blwiLCBcIiNcIiwgXCJIb21lXCIpO1xyXG4gICAgbGV0IHRvZGF5QnRuID0gY3JlYXRlSW5wdXRCdG4oXCJ0b2RheS1idG5cIiwgXCIjXCIsIFwiVG9kYXlcIik7XHJcbiAgICBsZXQgd2Vla0J0biA9IGNyZWF0ZUlucHV0QnRuKFwid2Vlay1idG5cIiwgXCIjXCIsIFwiV2Vla1wiKTtcclxuICAgIGxldCBwcm9qZWN0c0J0biA9IGNyZWF0ZUlucHV0QnRuKFwicHJvamVjdHMtYnRuXCIsIFwiI1wiLCBcIlByb2plY3RzXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkcm9wZG93bkRpdi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25EaXYpO1xyXG5cclxuICAgIGNvbnN0IGRyb3BPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRyb3BPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJkcm9wT3B0aW9uc1wiKTtcclxuICAgIGRyb3Bkb3duRGl2LmFwcGVuZENoaWxkKGRyb3BPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkRpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpXHJcbiAgICBcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQod2Vla0J0bik7XHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBtaWRkbGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKTtcclxuICAgIG1pZGRsZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiA0LzEwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLyogc3ViIHBvcmplY3RzICovXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcE9wdGlvbnNcIilcclxuICAgIGNvbnN0IHN1YlByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3ViUHJvakRpdi5jbGFzc0xpc3QuYWRkKFwic3ViUHJvamVjdHNcIik7XHJcbiAgICBkcm9wZG93bk9wdGlvbnNFbC5hcHBlbmRDaGlsZChzdWJQcm9qRGl2KTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZFByb2ouY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3REaXZcIik7XHJcbiAgICAvL2Ryb3Bkb3duRGl2RWwuYXBwZW5kQ2hpbGQoYWRkUHJvaik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2opO1xyXG4gICAgY29uc3QgaW5wdXRQcm9qSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0UHJvakljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zcmMgPSBhZGRJY29uO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QWRkXCIpO1xyXG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChpbnB1dFByb2pJY29uKSA7ICBcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWRkUHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7ICAgIFxyXG4gICAgYWRkUHJvai5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dCkgO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50TG9hZDtcclxuXHJcbiIsImltcG9ydCB7Y2hlY2tCdXR0b24sIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbn0gZnJvbSAnLi90YWJsZS1idXR0b25zLmpzJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vZWRpdC5zdmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3RyYXNoLnN2Zyc7XHJcbmltcG9ydCBzb3J0SWNvbiBmcm9tICcuL3NvcnQuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICBsZXQgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gICAgZm9yIChsZXQga2V5IG9mIGRhdGEpIHtcclxuICAgICAgaWYoa2V5PT1cImRhdGVcIil7XHJcbiAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIC8vbGV0IGFuY2hvclNvcnQgPSBkb2MuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgLy9hbmNob3JTb3J0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgIGxldCBhU29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBhU29ydC5jbGFzc0xpc3QuYWRkKFwic29ydFwiKTtcclxuICAgICAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICAgICAgYVNvcnQuc3JjID0gc29ydEljb247XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMHB4XCIpO1xyXG4gICAgICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMwcHhcIik7XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIixcIlNvcnQgQnkgRHVlIERhdGVcIik7XHJcbiAgICAgICAgLy9sZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQoYVNvcnQpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKGtleSk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hlY2tGbGFnKGRhdGEpe1xyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhICl7XHJcbiAgICBpZihlbGVtZW50W1wiY2hlY2tcIl09PTEpe1xyXG4gICAgICBjb25zdCByb3dQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJfXCIrZWxlbWVudFtcImlkXCJdKTtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICBsZXQgaW5wdXRDaGlsZCA9IHJvd1BhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgbGV0IGNoZWNrYm94Q2hpbGQgPSBpbnB1dENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICBjaGVja2JveENoaWxkLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcclxuICBsZXQgbWlzc0tleXMgPSBbXCJpZFwiLCBcInByb2plY3RzXCIsIFwiZGV0YWlsc1wiLCBcImNoZWNrXCJdXHJcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyX1wiKyBlbGVtZW50W1wiaWRcIl0pO1xyXG4gICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJhZGlvLWJ0blwiK2VsZW1lbnRbXCJpZFwiXSk7XHJcbiAgICAgIGNoZWNrQnV0dG9uKGNlbGwpO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGVsZW1lbnQpIHtcclxuICAgICAgaWYoIW1pc3NLZXlzLmluY2x1ZGVzKGtleSkpe1xyXG4gICAgICAgIGlmKGtleT09XCJ0aXRsZVwiKXtcclxuICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRpdGxlQ2VsbFwiKTtcclxuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBsZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjZWxsRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XHJcbiAgICAgIGVkaXRCdXR0b24oY2VsbEVkaXQsIGVkaXRJY29uKTtcclxuICAgICAgbGV0IGNlbGxEZWxldGUgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjZWxsRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xyXG4gICAgICBkZWxldGVCdXR0b24oY2VsbERlbGV0ZSwgZGVsZXRlSWNvbik7XHJcbiAgfVxyXG4gIGdldENoZWNrRmxhZyhkYXRhKTtcclxuXHJcblxyXG4gIC8vdGJvZHlIZWlnaHQoKTtcclxufVxyXG5cclxuLypmdW5jdGlvbiB0Ym9keUhlaWdodCgpe1xyXG4gIGNvbnN0IHRib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XHJcbiAgaWYodGJvZHlFbCl7XHJcbiAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodDtcclxuICAgIGxldCBuZXdIZWlnaHQgPSBzY3JlZW5IZWlnaHQqMC42O1xyXG4gICAgLy90Ym9keUVsLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCtcInB4XCI7IFxyXG4gICAgY29uc29sZS5sb2coc2NyZWVuSGVpZ2h0KTsgXHJcbiAgfVxyXG59Ki9cclxuXHJcbiAgZXhwb3J0IHtnZW5lcmF0ZVRhYmxlSGVhZCwgZ2VuZXJhdGVUYWJsZX07IiwiaW1wb3J0IHByb2ZpbGVJY29uIGZyb20gJy4vcHJvZmlsZUltZy5wbmcnO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tICcuL2FkZC5zdmcnO1xyXG5pbXBvcnQgc29ydEljb24gZnJvbSAnLi9zb3J0LnN2Zyc7XHJcblxyXG5cclxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIC0gYWdhaW4gb2theSBsaWVzXCIpXHJcblxyXG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBteUljb24uc3JjID0gcHJvZmlsZUljb247XHJcbiAgICBteUljb24uY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtaW1nXCIpO1xyXG5cclxuICAgIGNvbnN0ICBwcm9maWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtaWNvblwiKTtcclxuICAgIHByb2ZpbERpdi5hcHBlbmRDaGlsZChteUljb24pO1xyXG5cclxuXHJcbiAgICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbiAgICBhZGRJbnB1dC5zcmMgPSBhZGRJY29uO1xyXG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMHB4XCIpO1xyXG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuXHJcbiAgICBsZXQgYVNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRcIik7XHJcbiAgICBhU29ydC5zcmMgPSBzb3J0SWNvbjtcclxuICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzBweFwiKTtcclxuICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMwcHhcIik7XHJcbiAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLFwiU29ydCBCeSBEdWUgRGF0ZVwiKTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZSIsIlxyXG5cclxuXHJcbmNvbnN0IGNoZWNrQnV0dG9uID0gKGNlbGwpID0+IHtcclxuICAgIGxldCByYWRpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHJhZGlvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQocmFkaW9CdG4pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZWRpdEJ1dHRvbiA9IChjZWxsLCBpY29uKSA9PntcclxuICAgIC8vbGV0IGNlbGxFZGl0ID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGVkaXRCdG4uc3JjID0gaWNvbjtcclxuXHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGVkaXRCdG4pXHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWxldGVCdXR0b24gPSAoY2VsbCwgaWNvbikgPT57XHJcbiAgICAvL2xldCBjZWxsRWRpdCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGRlbGV0ZUJ0bi5zcmMgPSBpY29uO1xyXG5cclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2NoZWNrQnV0dG9uLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b259O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZS5qcyc7XHJcbmltcG9ydCBjb250ZW50TG9hZCBmcm9tICcuL2NvbnRlbnRzLWxvYWQuanMnO1xyXG5pbXBvcnQge2dlbmVyYXRlVGFibGVIZWFkLCBnZW5lcmF0ZVRhYmxlfSBmcm9tICcuL2dlbmVyYXRlLXRhYmxlLmpzJztcclxuLy9pbXBvcnQge2Nsb3NlRm9ybSwgZm9ybVJlc2V0LCByZW1vdmVBbGxDaGlsZE5vZGVzLCByZXBsYWNlVGFza09iamVjdCxjaGVja0NvbmRpdGlvbiwgZWRpdExpc3RuZXIgfSBmcm9tICcuL2hlbHBlci1mdW5jdGlvbnMuanMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbi8qbGV0IG1vdW50YWlucyA9IFtcclxuICB7ICBpZDoxLCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWxjb1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0wMVwiLCBjaGVjazowfSxcclxuICB7ICBpZDoyLCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDctMjVcIiwgY2hlY2s6MH0sXHJcbiAgeyAgaWQ6MywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDEwLTA4LTI1XCIsY2hlY2s6MCB9LFxyXG4gIHsgIGlkOjQsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiwgY2hlY2s6MCAgfSxcclxuICB7ICBpZDo1LCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiwgY2hlY2s6MH0sXHJcbiAgeyAgaWQ6NiwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIsIGNoZWNrOjAgfSxcclxuICB7ICBpZDo3LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6OCwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsY29cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6OSwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCJ9LFxyXG4gIHsgIGlkOjEwLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiB9LFxyXG4gIHsgIGlkOjExLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTIsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDoxMywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgfSxcclxuICB7ICBpZDoxNCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjE1LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTYsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDoxNywgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUG9nZ2lvIFNjYWxpXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDA5LTA4LTE2XCIgfSxcclxuICB7ICBpZDoxOCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiICB9LFxyXG4gIHsgIGlkOjE5LCBwcm9qZWN0czpcIlRlc3RcIiwgdGl0bGU6IFwiTW9udGUgQW1pYXRhXCIsIGRldGFpbHM6XCJcIixkYXRlOiBcIjIwMjEtMDgtMDVcIiAgfVxyXG5dOyovXHJcblxyXG4vL2xldCBtb3VudGFpbnM9W107XHJcbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuXHJcbmxldCBtb3VudGFpbnMgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbHRhc2tzXCIpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEYXRlRm9ybWF0KGRhdGUpe1xyXG4gIGxldCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBsZXQgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbiAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgZGF0ZSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJUb0RhdGUoc3RyRGF0ZSkge1xyXG4gIGxldCBlbGVtZW50RGF0ZSA9IG5ldyBEYXRlKHN0ckRhdGUpO1xyXG4gIGVsZW1lbnREYXRlID0gY2hhbmdlRGF0ZUZvcm1hdChlbGVtZW50RGF0ZSk7XHJcbiAgZWxlbWVudERhdGUgPSBEYXRlLnBhcnNlKGVsZW1lbnREYXRlKTtcclxuICByZXR1cm4gZWxlbWVudERhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRvTW9uZGF5KCBkYXRlICkge1xyXG4gIGxldCBkYXkgPSBkYXRlLmdldERheSgpIHx8IDc7ICBcclxuICBpZiggZGF5ICE9PSAxICkgXHJcbiAgICAgIGRhdGUuc2V0SG91cnMoLTI0ICogKGRheSAtIDEpKTsgXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRvU3VuZGF5KCBkYXRlICkge1xyXG4gIGxldCBkYXkgPSBkYXRlLmdldERheSgpIHx8IDc7ICBcclxuICBpZiggZGF5ICE9PSAxICkgXHJcbiAgICAgIGRhdGUuc2V0SG91cnMoLTI0ICogKGRheSAtIDcpKTsgXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnNvbGUubG9nKGNoYW5nZURhdGVGb3JtYXQodG9kYXkpKTtcclxubGV0IG1vbiA9IG5ldyBEYXRlKCk7XHJcbmxldCBzdW4gPSBuZXcgRGF0ZSgpO1xyXG50b2RheSA9IERhdGUucGFyc2UoY2hhbmdlRGF0ZUZvcm1hdCh0b2RheSkpO1xyXG5tb24gPSBEYXRlLnBhcnNlKGNoYW5nZURhdGVGb3JtYXQoc2V0VG9Nb25kYXkobW9uKSkpO1xyXG5zdW4gPSBEYXRlLnBhcnNlKGNoYW5nZURhdGVGb3JtYXQoc2V0VG9TdW5kYXkoc3VuKSkpO1xyXG5cclxuXHJcblxyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcbmZ1bmN0aW9uIHRvZGF5VGFiKHRvZGF5RGF0ZSl7XHJcbiAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ0blwiKTtcclxuICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZURhdGVGb3JtYXQobmV3IERhdGUoKSkpO1xyXG4gICAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICBpZihzdHJUb0RhdGUoZWxlbWVudFtcImRhdGVcIl0pPT10b2RheURhdGUpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YUZpbHRlcik7XHJcbiAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICAvL29wZW5Qb3BVcEJveChkYXRhRmlsdGVyKTtcclxuICAgIHN1YlByb2plY3RUaXRsZUNoYW5nZShcIlRvZGF5XCIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlZWtUYWIobW9uZGF5RGF0ZSwgc3VuZGF5RGF0ZSl7XHJcbiAgY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vlay1idG5cIik7XHJcbiAgd2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIC8vY29uc29sZS5sb2codG9kYXlEYXRlKTtcclxuICAgIGxldCBkYXRhRmlsdGVyID0gW107XHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgICAgbGV0IGVsZW1lbnREYXRlID0gc3RyVG9EYXRlKGVsZW1lbnRbXCJkYXRlXCJdKTtcclxuICAgICAgaWYoKGVsZW1lbnREYXRlPj1tb25kYXlEYXRlKSAmJiAoZWxlbWVudERhdGU8PXN1bmRheURhdGUpKXtcclxuICAgICAgICBkYXRhRmlsdGVyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIlwiKTtcclxuICAgIC8vb3BlblBvcFVwQm94KGRhdGFGaWx0ZXIpO1xyXG4gICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiV2Vla1wiKTtcclxuXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhLCB0eXBlKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZU1haW4nKTtcclxuICAgIGlmKGNvbnRhaW5lclJlbSl7XHJcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyUmVtKTtcclxuICAgIH1cclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcclxuICAgIC8vbGV0IGRhdGFIZWFkID0gT2JqZWN0LmtleXMobW91bnRhaW5zWzBdKTtcclxuICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcclxuICAgIC8vZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGFIZWFkKTsgLy8gdGhlbiB0aGUgaGVhZFxyXG4gICAgZm9ybVJlc2V0KHR5cGUpO1xyXG4gICAgY2xvc2VGb3JtKHR5cGUpO1xyXG4gICAgY29uc3QgY2hlY2tFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuICAgIGNoZWNrRWwuZm9yRWFjaChib3ggPT57XHJcbiAgICAgIGNoZWNrQ29uZGl0aW9uKGJveCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBlZGl0TGlzdG5lcigpO1xyXG4gICAgb3BlblBvcFVwQm94KGRhdGEpO1xyXG4gICAgZXhlY0RlbGV0ZVRhc2soZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1YlByb2plY3RUaXRsZUNoYW5nZSh0ZXh0KXtcclxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICBzdWJUaXRsZS50ZXh0Q29udGVudD10ZXh0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEFuY2hvcihzdWJQcm9qZWN0RWxlbWVudCwgdGV4dCl7XHJcbiAgY29uc3QgbmV3UHJvakFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGxldCBhcnJUZXh0ID0gdGV4dC5zcGxpdChcIiBcIik7XHJcbiAgbGV0IG5ld1RleHQgPSBhcnJUZXh0LmpvaW4oXCItXCIpO1xyXG4gIG5ld1Byb2pBbmNob3IuY2xhc3NMaXN0LmFkZChuZXdUZXh0KTtcclxuICBuZXdQcm9qQW5jaG9yLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBuZXdQcm9qQW5jaG9yLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgbmV3UHJvakFuY2hvci5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNDBweFwiO1xyXG4gIG5ld1Byb2pBbmNob3Iuc3R5bGUuY29sb3IgPSBcInJnYig0Nyw4NSwxNTEpXCI7XHJcblxyXG4gIHN1YlByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld1Byb2pBbmNob3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJEYXRhKHRpdGxlKXtcclxuICAvL2NvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICBpZih0aXRsZS50ZXh0Q29udGVudCE9XCJIb21lXCIpe1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgIGlmKGVsZW1lbnRbXCJwcm9qZWN0c1wiXT09dGl0bGUudGV4dENvbnRlbnQpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFGaWx0ZXI7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICByZXR1cm4gbW91bnRhaW5zO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy9sZXQgcHJvamVjdExzdD1bXCJUb0RvTGlzdFwiXVxyXG5sZXQgcHJvamVjdExzdD1bXTtcclxuaWYobW91bnRhaW5zLmxlbmd0aD4wKXtcclxuICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgIGlmKCFwcm9qZWN0THN0LmluY2x1ZGVzKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSkpe1xyXG4gICAgICBwcm9qZWN0THN0LnB1c2goZWxlbWVudFtcInByb2plY3RzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250YWluZXJcIik7XHJcbmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgY29uc3QgYWRkTmV3Q29udHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3REaXZcIilcclxuICAgIGlmKChjb250ZW50cykgJiYgKGFkZE5ld0NvbnRzKSl7XHJcbiAgICAgICAgLy9yZW1vdmVDb250ZW50cygpO1xyXG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZE5ld0NvbnRzLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1pZGRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpO1xyXG4gICAgICAgIG1pZGRsZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiAyLzEwXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighY29udGVudHMpe1xyXG4gICAgICAgIGNvbnRlbnRMb2FkKCk7XHJcbiAgICAgICAgLyppZihtb3VudGFpbnMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgICAgICAgIGlmKCFwcm9qZWN0THN0LmluY2x1ZGVzKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSkpe1xyXG4gICAgICAgICAgICAgIHByb2plY3RMc3QucHVzaChlbGVtZW50W1wicHJvamVjdHNcIl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9Ki9cclxuICAgICAgICBpZihwcm9qZWN0THN0Lmxlbmd0aD4wKXtcclxuICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiBwcm9qZWN0THN0KXtcclxuICAgICAgICAgICAgY29uc3Qgc3ViUHJvakRpdiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJQcm9qZWN0c1wiKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEFuY2hvcihzdWJQcm9qRGl2LCBpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViUHJqb2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgbGV0IHN1Ykl0ZW1zID0gc3ViUHJqb2NFbC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgICAgICBzdWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIlwiKTtcclxuICAgICAgICAgICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0b2RheVRhYih0b2RheSk7XHJcbiAgICAgICAgd2Vla1RhYihtb24sIHN1bik7XHJcbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpO1xyXG4gICAgICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICBleGVjVGFibGVBbGxCdXR0b25zKG1vdW50YWlucyxcIlwiKTtcclxuICAgICAgICAgIC8vb3BlblBvcFVwQm94KG1vdW50YWlucyk7XHJcbiAgICAgICAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoXCJIb21lXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgXHJcbiBcclxuICAgIH1cclxuICAgIC8qc2lkZSBiYXIgZXZlbnQgbGlzdG5lcnMgKi9cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QWRkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRcIik7XHJcbiAgICBpZihwcm9qZWN0QWRkRWwpe1xyXG4gICAgICBwcm9qZWN0QWRkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvakRpdiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJQcm9qZWN0c1wiKTtcclxuICAgICAgICBjb25zdCBwcm9qUHJvbXB0ID0gcHJvbXB0KFwiTmV3IFByb2plY3QgTmFtZVwiKTtcclxuICAgICAgICBpZihwcm9qUHJvbXB0ICYmIHN1YlByb2pEaXYpe1xyXG4gICAgICAgICAgY3JlYXRlUHJvamVjdEFuY2hvcihzdWJQcm9qRGl2LCBwcm9qUHJvbXB0KTtcclxuICAgICAgICAgIHByb2plY3RMc3QucHVzaChwcm9qUHJvbXB0KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3ViUHJqb2NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgbGV0IHN1Ykl0ZW1zID0gc3ViUHJqb2NFbC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgICAgICBzdWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcik7XHJcbiAgICAgICAgICAgIC8qY2hhbmdlIHN1YnRpdGxlKi9cclxuICAgICAgICAgICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKGl0ZW0udGV4dENvbnRlbnQpO1xyXG4gIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qQ3JlYXRlIG15IGJvb2sgY29uc3RydWN0b3IgaGVyZSovXHJcbmZ1bmN0aW9uIFRhc2soaWQsIHByb2plY3RzLCB0aXRsZSwgZGV0YWlscywgZGF0ZSl7XHJcbiAgICB0aGlzLmlkPWlkXHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlsc1xyXG4gICAgdGhpcy5kYXRlPWRhdGVcclxuICB9XHJcblxyXG5cclxuICAvL2xldCBtb3VudGFpbnMgPSBbXTtcclxuXHJcbiAgXHJcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gIGlmIChtb3VudGFpbnMubGVuZ3RoID4wKSB7XHJcbiAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMobW91bnRhaW5zWzBdKTtcclxuICAgIGdlbmVyYXRlVGFibGUodGFibGUsIG1vdW50YWlucyk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgLy9nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7IC8vIHRoZW4gdGhlIGhlYWRcclxuICB9XHJcblxyXG5cclxuY29uc3QgYWRkSXRtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFkZC10YXNrXCIpO1xyXG5jb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW15LWZvcm1cIik7XHJcbmFkZEl0bUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuICBjcmVhdGVEcm9wRG93bkxpc3QoXCIucHJvamVjdHNcIik7XHJcbiAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gIFxyXG59KVxyXG5jbG9zZUZvcm0oXCJcIik7XHJcblxyXG4vKiBjbG9zZSBmdW5jdGlvbiovXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybSh0eXBlKSB7XHJcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLW15LWZvcm0ke3R5cGV9YCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNsb3NlJHt0eXBlfWApO1xyXG4gIGlmKGNsb3NlQnRuKXtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgbGV0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy10aGUtZm9ybSR7dHlwZX1gKS5yZXNldCgpO1xyXG4gIH0pICBcclxuICB9XHJcblxyXG5cclxufVxyXG4vKiByZXNldCBhbmQgY2xvc2UgZm9ybSBhZnRlciBkaXNwbGF5IGZ1bmN0aW9uICovXHJcbmZ1bmN0aW9uIGZvcm1SZXNldCh0eXBlKXtcclxuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtbXktZm9ybSR7dHlwZX1gKTtcclxuICBpZihmb3JtRWwpe1xyXG4gICAgbGV0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy10aGUtZm9ybSR7dHlwZX1gKS5yZXNldCgpO1xyXG4gICAgZm9ybUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbi8qIHJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZm9yIHRhYmxlIGJvZHkgLSBmcmVzaCBmb3IgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIGlmKHBhcmVudC5maXJzdENoaWxkKXtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjcmVhdGUgc3VibWl0IGJ1dHRvbiAqL1xyXG5sZXQgbWF4SWQ9bW91bnRhaW5zLmxlbmd0aDtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdWJtaXQtYnRuXCIpO1xyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpdGxlLWZvcm1cIikudmFsdWU7XHJcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikudmFsdWVcclxuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpLnZhbHVlO1xyXG4gICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBuZXcgVGFzayhtYXhJZCsxLCBwcm9qZWN0LCB0aXRsZSwgZGV0YWlscywgZHVlZGF0ZSk7XHJcbiAgICBtb3VudGFpbnMucHVzaChpdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKG1vdW50YWlucyk7XHJcbiAgICBtYXhJZCsrO1xyXG4gICAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICAgIGxldCBkYXRhRmlsdGVyID0gIGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG4gICAgXHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2hlY2tGbGFnKGZsYWcsIGlkeCl7XHJcblxyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgaWYoZWxlbWVudFtcImlkXCJdPT1pZHgpe1xyXG4gICAgICBpZihmbGFnPT0xKXtcclxuICAgICAgICBlbGVtZW50W1wiY2hlY2tcIl0gPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZmxhZz09ZmxhZyl7XHJcbiAgICAgICAgZWxlbWVudFtcImNoZWNrXCJdID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbn1cclxuXHJcbi8qY2hlY2sgYnV0dG9uIHN0cmlrZSB0aHJvdWdoKi9cclxuZnVuY3Rpb24gY2hlY2tDb25kaXRpb24oYm94KXtcclxuICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihib3guY2hlY2tlZCl7XHJcbiAgICAgIGxldCByYWRpb1BhcmVudCA9IGJveC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgcm93UGFyZW50ID0gcmFkaW9QYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICBsZXQgaWR4ID0gZ2V0Q2xhc3NJRE9QYXJlbnQocmFkaW9QYXJlbnQpO1xyXG4gICAgICBjaGFuZ2VDaGVja0ZsYWcoMSwgaWR4KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWJveC5jaGVja2VkKXtcclxuICAgICAgbGV0IHJhZGlvUGFyZW50ID0gYm94LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCByb3dQYXJlbnQgPSByYWRpb1BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICByb3dQYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgbGV0IGlkeCA9IGdldENsYXNzSURPUGFyZW50KHJhZGlvUGFyZW50KTtcclxuICAgICAgY2hhbmdlQ2hlY2tGbGFnKDAsIGlkeCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW91bnRhaW5zKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcbmNoZWNrRWwuZm9yRWFjaChib3ggPT57XHJcbiAgY2hlY2tDb25kaXRpb24oYm94KTtcclxuXHJcbn0pXHJcblxyXG5cclxuLypoZWxwZXIgKi9cclxuZnVuY3Rpb24gZ2V0Q2xhc3NJRE9QYXJlbnQoZWxlbWVudCl7XHJcbiAgbGV0IGVkaXRQYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgbGV0IGlkeCA9IE51bWJlcihlZGl0UGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKC9cXEQrL2csICcnKSk7XHJcbiAgY29uc29sZS5sb2coaWR4KTtcclxuICByZXR1cm4gaWR4O1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRUYXNrT2JqZWN0KGRhdGEsIGlkeCkge1xyXG4gIGxldCB0YXNrU2VsZWN0ZWQ7XHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEpe1xyXG4gICAgICBmb3IobGV0IGtleSBpbiBlbGVtZW50KXtcclxuICAgICAgICAgIGlmIChrZXk9PVwiaWRcIiAmJiBlbGVtZW50W2tleV09PWlkeCl7XHJcbiAgICAgICAgICAgICAgdGFza1NlbGVjdGVkID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFza1NlbGVjdGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUVkaXRGb3JtKHRhc2spe1xyXG4gIGxldCB0aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aXRsZS1mb3JtLWVkaXRcIik7XHJcbiAgdGl0bGVFbC52YWx1ZSA9IHRhc2tbXCJ0aXRsZVwiXTtcclxuXHJcbiAgbGV0IGRldGFpbHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGV0YWlscy1lZGl0XCIpO1xyXG4gIGRldGFpbHNFbC52YWx1ZSA9IHRhc2tbXCJkZXRhaWxzXCJdO1xyXG5cclxuICBsZXQgcHJvamVjdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZWRpdFwiKTtcclxuICBwcm9qZWN0c0VsLnZhbHVlID0gdGFza1tcInByb2plY3RzXCJdO1xyXG5cclxuICBsZXQgZGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kdWUtZGF0ZS1lZGl0XCIpO1xyXG4gIGRhdGVFbC52YWx1ZSA9IHRhc2tbXCJkYXRlXCJdO1xyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VUYXNrT2JqZWN0KGRhdGEsIGlkeCwgbmV3UHJvamVjdCwgbmV3VGl0bGUsIG5ld0RldGFpbHMsIG5ld0RhdGUpe1xyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgZWxlbWVudFtcInByb2plY3RzXCJdPW5ld1Byb2plY3Q7XHJcbiAgICAgIGVsZW1lbnRbXCJ0aXRsZVwiXT1uZXdUaXRsZTtcclxuICAgICAgZWxlbWVudFtcImRldGFpbHNcIl09bmV3RGV0YWlscztcclxuICAgICAgZWxlbWVudFtcImRhdGVcIl09bmV3RGF0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbi8qZWRpdCBmb3JtICovXHJcbmxldCBpbmRleFNlbCA7XHJcbmZ1bmN0aW9uIGVkaXRMaXN0bmVyKCl7XHJcbiAgY29uc3QgZWRpdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWJ0blwiKTtcclxuICBlZGl0RWwuZm9yRWFjaChlZGl0SXRlbSA9PntcclxuICAgIGVkaXRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57IFxyXG4gICAgICAgIGxldCBpZHggPSBnZXRDbGFzc0lET1BhcmVudChlZGl0SXRlbSk7XHJcbiAgICAgICAgY3JlYXRlRHJvcERvd25MaXN0KFwiLnByb2plY3RzLWVkaXRcIik7XHJcbiAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtLWVkaXRcIik7XHJcbiAgICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiOyAgICAgXHJcbiAgICAgICAgbGV0IHRhc2tTZWxlY3RlZCA9IGZpbmRUYXNrT2JqZWN0KG1vdW50YWlucywgaWR4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrU2VsZWN0ZWQpO1xyXG4gICAgICAgIHBvcHVsYXRlRWRpdEZvcm0odGFza1NlbGVjdGVkKTtcclxuICAgICAgICBjbG9zZUZvcm0oXCItZWRpdFwiKTtcclxuICAgICAgICBpbmRleFNlbD1pZHg7XHJcbiAgICAgIFxyXG4gIH0pXHJcbn0pICBcclxufVxyXG5cclxuZWRpdExpc3RuZXIoKTtcclxuXHJcblxyXG5cclxuLypkbyBzdWJtaXQgYnV0dG9uIG9uIGVkaXQgZm9ybSAqL1xyXG5cclxuY29uc3Qgc3VibWl0QnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LWJ0bi1lZGl0XCIpO1xyXG5zdWJtaXRCdG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybS1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWVkaXRcIikudmFsdWU7XHJcbiAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWR1ZS1kYXRlLWVkaXRcIikudmFsdWU7XHJcbiAgcmVwbGFjZVRhc2tPYmplY3QobW91bnRhaW5zLCBpbmRleFNlbCwgcHJvamVjdCwgdGl0bGUsIGRldGFpbHMsIGR1ZWRhdGUpO1xyXG4gIGNvbnNvbGUubG9nKG1vdW50YWlucyk7XHJcbiAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICBsZXQgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiLWVkaXRcIik7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuXHJcbn0pXHJcblxyXG5cclxuLyogbm93IGRvIGRlbGV0ZSB0YXNrICovXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBleGVjRGVsZXRlVGFzaygpe1xyXG4gIGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xyXG4gIGRlbGV0ZUVsLmZvckVhY2goZGVsZXRlSXRlbSA9PntcclxuICAgIGRlbGV0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICBsZXQgZGVsZXRlUGFyZW50ID0gZGVsZXRlSXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgaWR4ID0gTnVtYmVyKGRlbGV0ZVBhcmVudC5jbGFzc05hbWUucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICBsZXQgaUtlZXA7XHJcbiAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpeztcclxuICAgICAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgICAgICBpS2VlcD1tb3VudGFpbnMuaW5kZXhPZihlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW91bnRhaW5zLnNwbGljZShpS2VlcCwgMSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1vdW50YWlucyk7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZU1haW4nKTtcclxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXJSZW0pO1xyXG4gICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XHJcbiAgICAgIGNvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgICAgIGxldCAgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICAgIC8vbGV0IGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YUZpbHRlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW91bnRhaW5zKSk7XHJcbiAgICAgIC8vb3BlblBvcFVwQm94KGRhdGEpO1xyXG4gICAgICBleGVjRGVsZXRlVGFzaygpO1xyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leGVjRGVsZXRlVGFzaygpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIHNvcnQgYnV0dG9uICovXHJcblxyXG5sZXQgYXNjPTE7XHJcbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRcIik7XHJcbiAgc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgY29uc3QgY2hlY2tTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcclxuICAgIGxldCAgZGF0YUZpbHRlciA9IGZpbHRlckRhdGEoY2hlY2tTdWJUaXRsZSk7XHJcbiAgICBkYXRhRmlsdGVyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICBpZihhc2M9PTEpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0clRvRGF0ZShhLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGIuZGF0ZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYXNjPT0oLTEpKXtcclxuICAgICAgICByZXR1cm4gICBwYXJzZUZsb2F0KHN0clRvRGF0ZShiLmRhdGUpKSAtIHBhcnNlRmxvYXQoc3RyVG9EYXRlKGEuZGF0ZSkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgYXNjKj0oLTEpO1xyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG5cclxuICB9KVxyXG5cclxuXHJcbiAgLypnZXQgZGV0YWlscyBieSBjbGljayBmdW5jdGlvbiovXHJcbiAgZnVuY3Rpb24gY2xvc2VCb3goZGF0YSkge1xyXG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gIFxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wXCIpO1xyXG4gICAgaWYoY2xvc2VCdG4pe1xyXG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgICAgICAgZm9ybUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pICBcclxuICAgIH1cclxuICB9XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wVXBCb3goZGF0YSl7XHJcbiAgY29uc3QgY2VsbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aXRsZUNlbGxcIik7XHJcbiAgY2VsbEVsLmZvckVhY2goY2VsbCA9PntcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaWR4PWdldENsYXNzSURPUGFyZW50KGNlbGwpO1xyXG4gICAgICBjb25zdCBwb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBwb3B1cEVsLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICBjb25zdCBhbGxINCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGl2SDRcIilcclxuICAgICAgYWxsSDQuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgaWYoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWU9PVwidGFza0g0XCIpe1xyXG4gICAgICAgICAgbGV0IHBDaGlsZCA9IGl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIHBDaGlsZC50ZXh0Q29udGVudCA9IGNlbGwudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWU9PVwicHJvamVjdEg0XCIpe1xyXG4gICAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgICAgICAgICB0ZXh0PWVsZW1lbnRbXCJwcm9qZWN0c1wiXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgcENoaWxkID0gaXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgcENoaWxkLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpdGVtLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZT09XCJkZXRhaWxzSDRcIil7XHJcbiAgICAgICAgICBsZXQgdGV4dDtcclxuICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgICAgICAgICAgaWYoZWxlbWVudFtcImlkXCJdPT1pZHgpe1xyXG4gICAgICAgICAgICAgIHRleHQ9ZWxlbWVudFtcImRldGFpbHNcIl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHBDaGlsZCA9IGl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIHBDaGlsZC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWU9PVwiZGF0ZUg0XCIpe1xyXG4gICAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgICAgICAgICB0ZXh0PWVsZW1lbnRbXCJkYXRlXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBwQ2hpbGQgPSBpdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICBwQ2hpbGQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjbG9zZUJveChkYXRhKTtcclxuICAgIH0pXHJcblxyXG4gIH0pXHJcbiAgXHJcbn1cclxuXHJcbiAgXHJcblxyXG5cclxub3BlblBvcFVwQm94KG1vdW50YWlucyk7XHJcblxyXG5mdW5jdGlvbiBjbGVhckRyb3BEb3duKCl7XHJcbiAgY29uc3Qgc2VsZWN0RWw9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xyXG4gIHNlbGVjdEVsLmZvckVhY2goc2VsZWN0SXRlbSA9PntcclxuICAgIHdoaWxlIChzZWxlY3RJdGVtLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc2VsZWN0SXRlbS5yZW1vdmVDaGlsZChzZWxlY3RJdGVtLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn1cclxuICBmdW5jdGlvbiBjcmVhdGVEcm9wRG93bkxpc3QoY2xhc3NuYW1lKXtcclxuICAgIC8vbGV0IERyb3BEb3duUHJvamVjdExzdD1bXVxyXG4gICAgbGV0IERyb3BEb3duUHJvamVjdExzdD1wcm9qZWN0THN0O1xyXG4gICAgLyppZihtb3VudGFpbnMubGVuZ3RoPjApe1xyXG4gICAgICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgICAgICBpZighRHJvcERvd25Qcm9qZWN0THN0LmluY2x1ZGVzKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSkpe1xyXG4gICAgICAgICAgRHJvcERvd25Qcm9qZWN0THN0LnB1c2goZWxlbWVudFtcInByb2plY3RzXCJdKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9Ki9cclxuICAgIGNsZWFyRHJvcERvd24oKTtcclxuICAgIGZvcihsZXQgaXRlbSBvZiBEcm9wRG93blByb2plY3RMc3Qpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgY29uc3Qgc2VsZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSlcclxuICAgICAgY29uc3Qgb3B0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb25FbC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGl0ZW0pO1xyXG4gICAgICBvcHRpb25FbC50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgIHNlbGVjdEVsLmFwcGVuZENoaWxkKG9wdGlvbkVsKTtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==