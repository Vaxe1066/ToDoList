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
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n.details, .details-edit{\r\n    height: 80px;\r\n    width: 400px;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit, .closePop {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,\r\n.closePop:hover,\r\n.closePop:focus\r\n\r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* pop up box*/\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /*transition: opacity 500ms;*/\r\n    display: none;\r\n    /*opacity: 0;*/\r\n  }\r\n\r\n  \r\n  .popup {\r\n    margin: 70px auto;\r\n    /*padding: 20px;*/\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 60%;\r\n    height: 50%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n    overflow: auto;\r\n  }\r\n\r\n  \r\n  h4, .divH4{\r\n    margin-top: 0;\r\n    color: #333;\r\n  }\r\n  .popup .closePop {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    /*font-weight: bold;*/\r\n    text-decoration: none;\r\n    /*color: #333;*/\r\n  }\r\n  /*.popup .closePop:hover {\r\n    color: #06D85F;\r\n  }*/\r\n\r\n\r\n\r\n\r\n  .divH4, h4{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 10px;\r\n      padding-top: 10px;\r\n      padding-left: 10px;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,eAAe;IACf,YAAY;IACZ,eAAe;IACf,gBAAgB;;;AAGpB;;AAEA;IACI,kCAAkC;GACnC;;AAEH;IACI,YAAY;IACZ,YAAY;IACZ,sCAAsC;IACtC,+BAA+B;IAC/B,uBAAuB;AAC3B;;;;AAIA;IACI,iBAAiB;IACjB,WAAW;IACX,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;;AAEnC;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,cAAc;IACd,kCAAkC;AACtC;AACA;IACI;oBACgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;;;;AAIb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;EACE,sCAAsC;EACtC,gCAAgC;AAClC;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,gCAAgC;AACpC;;;;AAIA;IACI,iCAAiC;IACjC,eAAe;IACf,sCAAsC;IACtC,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;;;;AAIrB;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;;AAGA;IACI,eAAe;;AAEnB;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,gBAAgB;EAClB;;;EAGA;MACI,gBAAgB;MAChB,aAAa;MACb,aAAa;MACb,sBAAsB;MACtB,cAAc;MACd,oBAAoB;EACxB;;EAEA;MACI,aAAa;MACb,mBAAmB;MACnB,6BAA6B;MAC7B,mBAAmB;MACnB,oBAAoB;EACxB;;;;GAIC,SAAS;GACT;IACC,yCAAyC;IACzC,yBAAyB;IACzB,WAAW;IACX,oBAAoB;IACpB,cAAc;;AAElB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA,yBAAyB,yBAAyB,CAAC;;AAEnD,gBAAgB,sBAAsB,CAAC;;AAEvC;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;AAEJ;;;;AAIA;IACI,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB,CAAC,+CAA+C;AACvE;AACA;IACI,wBAAwB,CAAC,oEAAoE;AACjG;;AAEA;IACI,WAAW;AACf;AACA,qBAAqB;;;AAGrB,qBAAqB;AACrB;IACI,aAAa;IACb,eAAe,EAAE,kBAAkB;IACnC,UAAU,GAAG,cAAc;IAC3B,kBAAkB,EAAE,wBAAwB;IAC5C,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;AAC5D;;;;;AAKA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;;IAGI,qBAAqB;AACzB;IACI,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;;;;;;;;IAQI,WAAW;IACX,qBAAqB;IACrB,eAAe;AACnB;;;;;AAKA,cAAc;;AAEd;IACI,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,8BAA8B;IAC9B,6BAA6B;IAC7B,aAAa;IACb,cAAc;EAChB;;;EAGA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,8BAA8B;IAC9B,cAAc;EAChB;;;EAGA;IACE,aAAa;IACb,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,qBAAqB;IACrB,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;EACjB;EACA;;IAEE;;;;;EAKF;MACI,aAAa;MACb,mBAAmB;MACnB,mBAAmB;MACnB,SAAS;MACT,iBAAiB;MACjB,kBAAkB;EACtB","sourcesContent":["\r\nhtml, body{\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    margin: 0 0 0 0;\r\n    overflow: hidden;\r\n    \r\n\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Crimson Text', serif;\r\n   }\r\n\r\n.content{\r\n    display:grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: 1fr 9fr 1fr;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.header-left{\r\n    grid-column: 1/10;\r\n    grid-row: 1;\r\n    background-color: rgb(47,85,151);\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 20px;\r\n    color: white;\r\n}\r\n\r\n.profile-icon{\r\n    grid-column: 10/11;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:rgb(47,85,151);\r\n\r\n}\r\n.profile-img{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.dropdown-content{\r\n    grid-column: 1/2;\r\n    grid-row: 2/10;\r\n    background-color: rgb(201,201,201);\r\n}\r\n.dropOptions{\r\n    /*grid-column: 1/3;\r\n    grid-row: 2/10;*/\r\n    background-color: rgb(201,201,201);\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding-top:15px;\r\n    gap: 20px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.addProjectDiv{\r\n    grid-column: 1/2;\r\n    grid-row: 11;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n    background-color: rgb(201,201,201);\r\n}\r\n\r\n.subProjects{\r\n    display:flex;\r\n    flex-direction: column;\r\n    /*height: 350px;*/\r\n    gap: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.subProjects::-webkit-scrollbar {\r\n    width: 0.5em;\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n \r\n.subProjects::-webkit-scrollbar-thumb {\r\n  background-color: rgba(47,85,151, 0.5);\r\n  /*outline: 1px solid slategrey;*/\r\n}\r\n\r\n.subProjects a:hover{\r\n    cursor: pointer;\r\n    background-color:white;\r\n}\r\n\r\n\r\na:hover{\r\n    cursor: pointer;\r\n    background-color:rgb(83, 83, 77);\r\n}\r\n\r\n\r\n\r\na{  \r\n    background-color:rgb(201,201,201);\r\n    font-size: 30px;\r\n    /*border: 1px solid rgb(201,201,201);*/\r\n    /*padding-top: 20px;*/\r\n    color:white;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    vertical-align:middle;\r\n    padding-left:15px;\r\n    \r\n\r\n    \r\n}\r\n\r\n.dropdown-container:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.dropdown-container{\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n\r\n  .middle{\r\n      grid-column:2/10;\r\n      grid-row:2/10;\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding-top:2%;\r\n      padding-bottom: 20px;\r\n  }\r\n\r\n  .table-top{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content:space-between;\r\n      align-items: center;\r\n      padding-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n   /*table */\r\n   table {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    padding-bottom: 20px;\r\n    overflow: auto;\r\n    \r\n}\r\n\r\ntable td {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\ntable tr:hover {background-color: #ddd;}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align:end;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-height: 830px){\r\n    tbody{\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 831px){\r\n    tbody{\r\n        height: 650px;\r\n    }\r\n\r\n}\r\n    \r\n\r\n\r\ntbody {\r\n    display: block;\r\n    /*height: 80em;*/\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-bottom: double;\r\n}\r\nthead, tbody tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;/* even columns width , fix width of table too*/\r\n}\r\nthead {\r\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\r\n}\r\n\r\n[class*=\"radio-btn\"], .edit-btn, .delete-btn{\r\n    width: 25px;\r\n}\r\n/***** END TABLE ****/\r\n\r\n\r\n/*Do the hidden form*/\r\n.my-form, .my-form-edit {\r\n    display: none;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1;  /*Sit on top */ \r\n    padding-top: 400px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n\r\n\r\n.form-content, .form-content-edit {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n.details, .details-edit{\r\n    height: 80px;\r\n    width: 400px;\r\n}\r\n\r\n\r\n    /* The Close Button */\r\n.close, .close-edit, .closePop {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus,\r\n.close-edit:hover,\r\n.close-edit:focus,\r\n.closePop:hover,\r\n.closePop:focus\r\n\r\n    {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* pop up box*/\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /*transition: opacity 500ms;*/\r\n    display: none;\r\n    /*opacity: 0;*/\r\n  }\r\n\r\n  \r\n  .popup {\r\n    margin: 70px auto;\r\n    /*padding: 20px;*/\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 60%;\r\n    height: 50%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n    overflow: auto;\r\n  }\r\n\r\n  \r\n  h4, .divH4{\r\n    margin-top: 0;\r\n    color: #333;\r\n  }\r\n  .popup .closePop {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    /*font-weight: bold;*/\r\n    text-decoration: none;\r\n    /*color: #333;*/\r\n  }\r\n  /*.popup .closePop:hover {\r\n    color: #06D85F;\r\n  }*/\r\n\r\n\r\n\r\n\r\n  .divH4, h4{\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      gap: 10px;\r\n      padding-top: 10px;\r\n      padding-left: 10px;\r\n  }"],"sourceRoot":""}]);
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



let projectLst=["ToDoList"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9jb250ZW50cy1sb2FkLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2dlbmVyYXRlLXRhYmxlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy90YWJsZS1idXR0b25zLmpzIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvRG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELDZDQUE2Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLGdDQUFnQywyQ0FBMkMsUUFBUSxpQkFBaUIscUJBQXFCLHFCQUFxQiwrQ0FBK0Msd0NBQXdDLGdDQUFnQyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsNEJBQTRCLDRCQUE0QixrQkFBa0IsMkJBQTJCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsNEJBQTRCLGdDQUFnQyx3Q0FBd0MsU0FBUyxpQkFBaUIsb0JBQW9CLHFCQUFxQixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxLQUFLLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDZDQUE2QyxxQkFBcUIs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMLEdBQUc7O0FBRUg7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NyaW1zb24gVGV4dCcsIHNlcmlmO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlci1sZWZ0e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8xMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw4NSwxNTEpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWljb257XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxMC8xMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0Nyw4NSwxNTEpO1xcclxcblxcclxcbn1cXHJcXG4ucHJvZmlsZS1pbWd7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMi8xMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG59XFxyXFxuLmRyb3BPcHRpb25ze1xcclxcbiAgICAvKmdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwOyovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6MTVweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0RGl2e1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBncmlkLXJvdzogMTE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLypoZWlnaHQ6IDM1MHB4OyovXFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVlbTtcXHJcXG59XFxyXFxuIFxcclxcbi5zdWJQcm9qZWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LDg1LDE1MSwgMC41KTtcXHJcXG4gIC8qb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHMgYTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgzLCA4MywgNzcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5heyAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDEsMjAxLDIwMSk7Ki9cXHJcXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXI6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGFpbmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiA2cHggMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5taWRkbGV7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46Mi8xMDtcXHJcXG4gICAgICBncmlkLXJvdzoyLzEwO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDoyJTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJsZS10b3B7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgLyp0YWJsZSAqL1xcclxcbiAgIHRhYmxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxcclxcblxcclxcbnRhYmxlIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXHJcXG5cXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246ZW5kO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MzBweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODMxcHgpe1xcclxcbiAgICB0Ym9keXtcXHJcXG4gICAgICAgIGhlaWdodDogNjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8qaGVpZ2h0OiA4MGVtOyovXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbn1cXHJcXG50aGVhZCwgdGJvZHkgdHIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXFxyXFxufVxcclxcbnRoZWFkIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxZW0gKS8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xcclxcbn1cXHJcXG5cXHJcXG5bY2xhc3MqPVxcXCJyYWRpby1idG5cXFwiXSwgLmVkaXQtYnRuLCAuZGVsZXRlLWJ0bntcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcbi8qKioqKiBFTkQgVEFCTEUgKioqKi9cXHJcXG5cXHJcXG5cXHJcXG4vKkRvIHRoZSBoaWRkZW4gZm9ybSovXFxyXFxuLm15LWZvcm0sIC5teS1mb3JtLWVkaXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTsgIC8qU2l0IG9uIHRvcCAqLyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQsIC5mb3JtLWNvbnRlbnQtZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMsIC5kZXRhaWxzLWVkaXR7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSwgLmNsb3NlLWVkaXQsIC5jbG9zZVBvcCB7XFxyXFxuICAgIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMsXFxyXFxuLmNsb3NlLWVkaXQ6aG92ZXIsXFxyXFxuLmNsb3NlLWVkaXQ6Zm9jdXMsXFxyXFxuLmNsb3NlUG9wOmhvdmVyLFxcclxcbi5jbG9zZVBvcDpmb2N1c1xcclxcblxcclxcbiAgICB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogcG9wIHVwIGJveCovXFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICAvKnRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7Ki9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgLypvcGFjaXR5OiAwOyovXFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xcclxcbiAgICAvKnBhZGRpbmc6IDIwcHg7Ki9cXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuICBoNCwgLmRpdkg0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG4gIC5wb3B1cCAuY2xvc2VQb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgLypjb2xvcjogIzMzMzsqL1xcclxcbiAgfVxcclxcbiAgLyoucG9wdXAgLmNsb3NlUG9wOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwNkQ4NUY7XFxyXFxuICB9Ki9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5kaXZINCwgaDR7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGtDQUFrQztHQUNuQzs7QUFFSDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjs7QUFFbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7b0JBQ2dCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTOzs7O0FBSWI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpREFBaUQ7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UztJQUNULFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtFQUNBOztJQUVFOzs7OztFQUtGO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsU0FBUztNQUNULGlCQUFpQjtNQUNqQixrQkFBa0I7RUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XFxyXFxuICAgfVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzEwO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LDg1LDE1MSk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaWNvbntcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzExO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ3LDg1LDE1MSk7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9maWxlLWltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLWNvbnRlbnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAyLzEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLDIwMSwyMDEpO1xcclxcbn1cXHJcXG4uZHJvcE9wdGlvbnN7XFxyXFxuICAgIC8qZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMTA7Ki9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwyMDEsMjAxKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3REaXZ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAxMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsMjAxLDIwMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKmhlaWdodDogMzUwcHg7Ki9cXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLnN1YlByb2plY3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcbiBcXHJcXG4uc3ViUHJvamVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsODUsMTUxLCAwLjUpO1xcclxcbiAgLypvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyovXFxyXFxufVxcclxcblxcclxcbi5zdWJQcm9qZWN0cyBhOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODMsIDgzLCA3Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmF7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAxLDIwMSwyMDEpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMSwyMDEsMjAxKTsqL1xcclxcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250YWluZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDZweCAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1pZGRsZXtcXHJcXG4gICAgICBncmlkLWNvbHVtbjoyLzEwO1xcclxcbiAgICAgIGdyaWQtcm93OjIvMTA7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOjIlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLXRvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAvKnRhYmxlICovXFxyXFxuICAgdGFibGUge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuXFxyXFxudGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcclxcblxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjplbmQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgzMHB4KXtcXHJcXG4gICAgdGJvZHl7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MzFweCl7XFxyXFxuICAgIHRib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxudGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLypoZWlnaHQ6IDgwZW07Ki9cXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGU7XFxyXFxufVxcclxcbnRoZWFkLCB0Ym9keSB0ciB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cXHJcXG59XFxyXFxudGhlYWQge1xcclxcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDFlbSApLyogc2Nyb2xsYmFyIGlzIGF2ZXJhZ2UgMWVtLzE2cHggd2lkdGgsIHJlbW92ZSBpdCBmcm9tIHRoZWFkIHdpZHRoICovXFxyXFxufVxcclxcblxcclxcbltjbGFzcyo9XFxcInJhZGlvLWJ0blxcXCJdLCAuZWRpdC1idG4sIC5kZWxldGUtYnRue1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLyoqKioqIEVORCBUQUJMRSAqKioqL1xcclxcblxcclxcblxcclxcbi8qRG8gdGhlIGhpZGRlbiBmb3JtKi9cXHJcXG4ubXktZm9ybSwgLm15LWZvcm0tZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgICB6LWluZGV4OiAxOyAgLypTaXQgb24gdG9wICovIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNDAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCwgLmZvcm0tY29udGVudC1lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscywgLmRldGFpbHMtZWRpdHtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlLCAuY2xvc2UtZWRpdCwgLmNsb3NlUG9wIHtcXHJcXG4gICAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyxcXHJcXG4uY2xvc2UtZWRpdDpob3ZlcixcXHJcXG4uY2xvc2UtZWRpdDpmb2N1cyxcXHJcXG4uY2xvc2VQb3A6aG92ZXIsXFxyXFxuLmNsb3NlUG9wOmZvY3VzXFxyXFxuXFxyXFxuICAgIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBwb3AgdXAgYm94Ki9cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIC8qdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtczsqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAvKm9wYWNpdHk6IDA7Ki9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgLnBvcHVwIHtcXHJcXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XFxyXFxuICAgIC8qcGFkZGluZzogMjBweDsqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIGg0LCAuZGl2SDR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbiAgLnBvcHVwIC5jbG9zZVBvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAvKmNvbG9yOiAjMzMzOyovXFxyXFxuICB9XFxyXFxuICAvKi5wb3B1cCAuY2xvc2VQb3A6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzA2RDg1RjtcXHJcXG4gIH0qL1xcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgLmRpdkg0LCBoNHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWRkSWNvbiBmcm9tICcuL2FkZC5zdmcnO1xyXG5cclxuY29uc3QgY29udGVudExvYWQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlSW5wdXRCdG4gPSBmdW5jdGlvbihjbGFzc05hbWUsIGhyZWYsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBpbnB1dFRhZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgaW5wdXRUYWcuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICBpbnB1dFRhZy50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gaW5wdXRUYWdcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhvbWVCdG4gPSBjcmVhdGVJbnB1dEJ0bihcImhvbWUtYnRuXCIsIFwiI1wiLCBcIkhvbWVcIik7XHJcbiAgICBsZXQgdG9kYXlCdG4gPSBjcmVhdGVJbnB1dEJ0bihcInRvZGF5LWJ0blwiLCBcIiNcIiwgXCJUb2RheVwiKTtcclxuICAgIGxldCB3ZWVrQnRuID0gY3JlYXRlSW5wdXRCdG4oXCJ3ZWVrLWJ0blwiLCBcIiNcIiwgXCJXZWVrXCIpO1xyXG4gICAgbGV0IHByb2plY3RzQnRuID0gY3JlYXRlSW5wdXRCdG4oXCJwcm9qZWN0cy1idG5cIiwgXCIjXCIsIFwiUHJvamVjdHNcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRyb3Bkb3duRGl2LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkcm9wZG93bkRpdik7XHJcblxyXG4gICAgY29uc3QgZHJvcE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZHJvcE9wdGlvbnMuY2xhc3NMaXN0LmFkZChcImRyb3BPcHRpb25zXCIpO1xyXG4gICAgZHJvcGRvd25EaXYuYXBwZW5kQ2hpbGQoZHJvcE9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duRGl2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRlbnRcIilcclxuICAgIFxyXG4gICAgZHJvcE9wdGlvbnMuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XHJcbiAgICBkcm9wT3B0aW9ucy5hcHBlbmRDaGlsZCh3ZWVrQnRuKTtcclxuICAgIGRyb3BPcHRpb25zLmFwcGVuZENoaWxkKHByb2plY3RzQnRuKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG1pZGRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpO1xyXG4gICAgbWlkZGxlRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1jb2x1bW46IDMvMTBcIik7XHJcblxyXG5cclxuXHJcbiAgICAvKiBzdWIgcG9yamVjdHMgKi9cclxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wT3B0aW9uc1wiKVxyXG4gICAgY29uc3Qgc3ViUHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJQcm9qRGl2LmNsYXNzTGlzdC5hZGQoXCJzdWJQcm9qZWN0c1wiKTtcclxuICAgIGRyb3Bkb3duT3B0aW9uc0VsLmFwcGVuZENoaWxkKHN1YlByb2pEaXYpO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkUHJvai5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdERpdlwiKTtcclxuICAgIC8vZHJvcGRvd25EaXZFbC5hcHBlbmRDaGlsZChhZGRQcm9qKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkUHJvaik7XHJcbiAgICBjb25zdCBpbnB1dFByb2pJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XHJcbiAgICBpbnB1dFByb2pJY29uLnNyYyA9IGFkZEljb247XHJcbiAgICBpbnB1dFByb2pJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjBweFwiKTtcclxuICAgIGlucHV0UHJvakljb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuICAgIGlucHV0UHJvakljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3RBZGRcIik7XHJcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGlucHV0UHJvakljb24pIDsgIFxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhZGRQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjsgICAgXHJcbiAgICBhZGRQcm9qLmFwcGVuZENoaWxkKGFkZFByb2plY3RUZXh0KSA7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRMb2FkO1xyXG5cclxuIiwiaW1wb3J0IHtjaGVja0J1dHRvbiwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9ufSBmcm9tICcuL3RhYmxlLWJ1dHRvbnMuanMnO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9lZGl0LnN2Zyc7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vdHJhc2guc3ZnJztcclxuaW1wb3J0IHNvcnRJY29uIGZyb20gJy4vc29ydC5zdmcnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcclxuICAgIGxldCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICBsZXQgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgICBmb3IgKGxldCBrZXkgb2YgZGF0YSkge1xyXG4gICAgICBpZihrZXk9PVwiZGF0ZVwiKXtcclxuICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgLy9sZXQgYW5jaG9yU29ydCA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAvL2FuY2hvclNvcnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgbGV0IGFTb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGFTb3J0LmNsYXNzTGlzdC5hZGQoXCJzb3J0XCIpO1xyXG4gICAgICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcclxuICAgICAgICBhU29ydC5zcmMgPSBzb3J0SWNvbjtcclxuICAgICAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMwcHhcIik7XHJcbiAgICAgICAgYVNvcnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMzBweFwiKTtcclxuICAgICAgICBhU29ydC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLFwiU29ydCBCeSBEdWUgRGF0ZVwiKTtcclxuICAgICAgICAvL2xldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcclxuICAgICAgICB0aC5hcHBlbmRDaGlsZChhU29ydCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coa2V5KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXRDaGVja0ZsYWcoZGF0YSl7XHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEgKXtcclxuICAgIGlmKGVsZW1lbnRbXCJjaGVja1wiXT09MSl7XHJcbiAgICAgIGNvbnN0IHJvd1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucl9cIitlbGVtZW50W1wiaWRcIl0pO1xyXG4gICAgICByb3dQYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICByb3dQYXJlbnQuc3R5bGUudGV4dERlY29yYXRpb25Db2xvciA9IFwicmVkXCI7XHJcbiAgICAgIGxldCBpbnB1dENoaWxkID0gcm93UGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICBsZXQgY2hlY2tib3hDaGlsZCA9IGlucHV0Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIGNoZWNrYm94Q2hpbGQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xyXG4gIGxldCBtaXNzS2V5cyA9IFtcImlkXCIsIFwicHJvamVjdHNcIiwgXCJkZXRhaWxzXCIsIFwiY2hlY2tcIl1cclxuICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJfXCIrIGVsZW1lbnRbXCJpZFwiXSk7XHJcbiAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmFkaW8tYnRuXCIrZWxlbWVudFtcImlkXCJdKTtcclxuICAgICAgY2hlY2tCdXR0b24oY2VsbCk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICBpZighbWlzc0tleXMuaW5jbHVkZXMoa2V5KSl7XHJcbiAgICAgICAgaWYoa2V5PT1cInRpdGxlXCIpe1xyXG4gICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwidGl0bGVDZWxsXCIpO1xyXG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGxldCBjZWxsRWRpdCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgIGNlbGxFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcclxuICAgICAgZWRpdEJ1dHRvbihjZWxsRWRpdCwgZWRpdEljb24pO1xyXG4gICAgICBsZXQgY2VsbERlbGV0ZSA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgIGNlbGxEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbihjZWxsRGVsZXRlLCBkZWxldGVJY29uKTtcclxuICB9XHJcbiAgZ2V0Q2hlY2tGbGFnKGRhdGEpO1xyXG5cclxuXHJcbiAgLy90Ym9keUhlaWdodCgpO1xyXG59XHJcblxyXG4vKmZ1bmN0aW9uIHRib2R5SGVpZ2h0KCl7XHJcbiAgY29uc3QgdGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKTtcclxuICBpZih0Ym9keUVsKXtcclxuICAgIGxldCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0O1xyXG4gICAgbGV0IG5ld0hlaWdodCA9IHNjcmVlbkhlaWdodCowLjY7XHJcbiAgICAvL3Rib2R5RWwuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0K1wicHhcIjsgXHJcbiAgICBjb25zb2xlLmxvZyhzY3JlZW5IZWlnaHQpOyBcclxuICB9XHJcbn0qL1xyXG5cclxuICBleHBvcnQge2dlbmVyYXRlVGFibGVIZWFkLCBnZW5lcmF0ZVRhYmxlfTsiLCJpbXBvcnQgcHJvZmlsZUljb24gZnJvbSAnLi9wcm9maWxlSW1nLnBuZyc7XHJcbmltcG9ydCBhZGRJY29uIGZyb20gJy4vYWRkLnN2Zyc7XHJcbmltcG9ydCBzb3J0SWNvbiBmcm9tICcuL3NvcnQuc3ZnJztcclxuXHJcblxyXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQgLSBhZ2FpbiBva2F5IGxpZXNcIilcclxuXHJcbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIG15SWNvbi5zcmMgPSBwcm9maWxlSWNvbjtcclxuICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1pbWdcIik7XHJcblxyXG4gICAgY29uc3QgIHByb2ZpbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS1pY29uXCIpO1xyXG4gICAgcHJvZmlsRGl2LmFwcGVuZENoaWxkKG15SWNvbik7XHJcblxyXG5cclxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuICAgIGFkZElucHV0LnNyYyA9IGFkZEljb247XHJcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwcHhcIik7XHJcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMHB4XCIpO1xyXG5cclxuICAgIGxldCBhU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydFwiKTtcclxuICAgIGFTb3J0LnNyYyA9IHNvcnRJY29uO1xyXG4gICAgYVNvcnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMHB4XCIpO1xyXG4gICAgYVNvcnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMzBweFwiKTtcclxuICAgIGFTb3J0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsXCJTb3J0IEJ5IER1ZSBEYXRlXCIpO1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlIiwiXHJcblxyXG5cclxuY29uc3QgY2hlY2tCdXR0b24gPSAoY2VsbCkgPT4ge1xyXG4gICAgbGV0IHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChyYWRpb0J0bik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBlZGl0QnV0dG9uID0gKGNlbGwsIGljb24pID0+e1xyXG4gICAgLy9sZXQgY2VsbEVkaXQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjBweFwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMHB4XCIpO1xyXG4gICAgZWRpdEJ0bi5zcmMgPSBpY29uO1xyXG5cclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IChjZWxsLCBpY29uKSA9PntcclxuICAgIC8vbGV0IGNlbGxFZGl0ID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwcHhcIik7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMHB4XCIpO1xyXG4gICAgZGVsZXRlQnRuLnNyYyA9IGljb247XHJcblxyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y2hlY2tCdXR0b24sIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlLmpzJztcclxuaW1wb3J0IGNvbnRlbnRMb2FkIGZyb20gJy4vY29udGVudHMtbG9hZC5qcyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVUYWJsZUhlYWQsIGdlbmVyYXRlVGFibGV9IGZyb20gJy4vZ2VuZXJhdGUtdGFibGUuanMnO1xyXG4vL2ltcG9ydCB7Y2xvc2VGb3JtLCBmb3JtUmVzZXQsIHJlbW92ZUFsbENoaWxkTm9kZXMsIHJlcGxhY2VUYXNrT2JqZWN0LGNoZWNrQ29uZGl0aW9uLCBlZGl0TGlzdG5lciB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucy5qcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG5cclxuLypsZXQgbW91bnRhaW5zID0gW1xyXG4gIHsgIGlkOjEsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbGNvXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTAxXCIsIGNoZWNrOjB9LFxyXG4gIHsgIGlkOjIsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wNy0yNVwiLCBjaGVjazowfSxcclxuICB7ICBpZDozLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMTAtMDgtMjVcIixjaGVjazowIH0sXHJcbiAgeyAgaWQ6NCwgcHJvamVjdHM6XCJUZXN0XCIsdGl0bGU6IFwiUHJhdG9tYWdub1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiLCBjaGVjazowICB9LFxyXG4gIHsgIGlkOjUsIHByb2plY3RzOlwiQ2hvcmVzXCIsIHRpdGxlOiBcIk1vbnRlIEZhbHRlcm9uYVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiLCBjaGVjazowfSxcclxuICB7ICBpZDo2LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiwgY2hlY2s6MCB9LFxyXG4gIHsgIGlkOjcsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDo4LCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWxjb1wiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwifSxcclxuICB7ICBpZDo5LCBwcm9qZWN0czpcIkNob3Jlc1wiLCB0aXRsZTogXCJNb250ZSBGYWx0ZXJvbmFcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIn0sXHJcbiAgeyAgaWQ6MTAsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlBvZ2dpbyBTY2FsaVwiLCBkZXRhaWxzOlwiXCIsIGRhdGU6IFwiMjAyMS0wOC0yNVwiIH0sXHJcbiAgeyAgaWQ6MTEsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDoxMiwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCJ9LFxyXG4gIHsgIGlkOjEzLCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiB9LFxyXG4gIHsgIGlkOjE0LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTUsIHByb2plY3RzOlwiVGVzdFwiLHRpdGxlOiBcIlByYXRvbWFnbm9cIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMjEtMDgtMjVcIiAgfSxcclxuICB7ICBpZDoxNiwgcHJvamVjdHM6XCJDaG9yZXNcIiwgdGl0bGU6IFwiTW9udGUgRmFsdGVyb25hXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCJ9LFxyXG4gIHsgIGlkOjE3LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQb2dnaW8gU2NhbGlcIiwgZGV0YWlsczpcIlwiLCBkYXRlOiBcIjIwMDktMDgtMTZcIiB9LFxyXG4gIHsgIGlkOjE4LCBwcm9qZWN0czpcIlRlc3RcIix0aXRsZTogXCJQcmF0b21hZ25vXCIsIGRldGFpbHM6XCJcIiwgZGF0ZTogXCIyMDIxLTA4LTI1XCIgIH0sXHJcbiAgeyAgaWQ6MTksIHByb2plY3RzOlwiVGVzdFwiLCB0aXRsZTogXCJNb250ZSBBbWlhdGFcIiwgZGV0YWlsczpcIlwiLGRhdGU6IFwiMjAyMS0wOC0wNVwiICB9XHJcbl07Ki9cclxuXHJcbi8vbGV0IG1vdW50YWlucz1bXTtcclxuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG5cclxubGV0IG1vdW50YWlucyAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsdGFza3NcIikpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZURhdGVGb3JtYXQoZGF0ZSl7XHJcbiAgbGV0IGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGxldCBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcclxuICBsZXQgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBkYXRlID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0clRvRGF0ZShzdHJEYXRlKSB7XHJcbiAgbGV0IGVsZW1lbnREYXRlID0gbmV3IERhdGUoc3RyRGF0ZSk7XHJcbiAgZWxlbWVudERhdGUgPSBjaGFuZ2VEYXRlRm9ybWF0KGVsZW1lbnREYXRlKTtcclxuICBlbGVtZW50RGF0ZSA9IERhdGUucGFyc2UoZWxlbWVudERhdGUpO1xyXG4gIHJldHVybiBlbGVtZW50RGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VG9Nb25kYXkoIGRhdGUgKSB7XHJcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCkgfHwgNzsgIFxyXG4gIGlmKCBkYXkgIT09IDEgKSBcclxuICAgICAgZGF0ZS5zZXRIb3VycygtMjQgKiAoZGF5IC0gMSkpOyBcclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VG9TdW5kYXkoIGRhdGUgKSB7XHJcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCkgfHwgNzsgIFxyXG4gIGlmKCBkYXkgIT09IDEgKSBcclxuICAgICAgZGF0ZS5zZXRIb3VycygtMjQgKiAoZGF5IC0gNykpOyBcclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxubGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuY29uc29sZS5sb2coY2hhbmdlRGF0ZUZvcm1hdCh0b2RheSkpO1xyXG5sZXQgbW9uID0gbmV3IERhdGUoKTtcclxubGV0IHN1biA9IG5ldyBEYXRlKCk7XHJcbnRvZGF5ID0gRGF0ZS5wYXJzZShjaGFuZ2VEYXRlRm9ybWF0KHRvZGF5KSk7XHJcbm1vbiA9IERhdGUucGFyc2UoY2hhbmdlRGF0ZUZvcm1hdChzZXRUb01vbmRheShtb24pKSk7XHJcbnN1biA9IERhdGUucGFyc2UoY2hhbmdlRGF0ZUZvcm1hdChzZXRUb1N1bmRheShzdW4pKSk7XHJcblxyXG5cclxuXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5cclxuZnVuY3Rpb24gdG9kYXlUYWIodG9kYXlEYXRlKXtcclxuICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktYnRuXCIpO1xyXG4gIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coY2hhbmdlRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKSk7XHJcbiAgICBsZXQgZGF0YUZpbHRlciA9IFtdO1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgIGlmKHN0clRvRGF0ZShlbGVtZW50W1wiZGF0ZVwiXSk9PXRvZGF5RGF0ZSl7XHJcbiAgICAgICAgZGF0YUZpbHRlci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRmlsdGVyKTtcclxuICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIlwiKTtcclxuICAgIC8vb3BlblBvcFVwQm94KGRhdGFGaWx0ZXIpO1xyXG4gICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiVG9kYXlcIik7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gd2Vla1RhYihtb25kYXlEYXRlLCBzdW5kYXlEYXRlKXtcclxuICBjb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLWJ0blwiKTtcclxuICB3ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZyh0b2RheURhdGUpO1xyXG4gICAgbGV0IGRhdGFGaWx0ZXIgPSBbXTtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICBsZXQgZWxlbWVudERhdGUgPSBzdHJUb0RhdGUoZWxlbWVudFtcImRhdGVcIl0pO1xyXG4gICAgICBpZigoZWxlbWVudERhdGU+PW1vbmRheURhdGUpICYmIChlbGVtZW50RGF0ZTw9c3VuZGF5RGF0ZSkpe1xyXG4gICAgICAgIGRhdGFGaWx0ZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG4gICAgLy9vcGVuUG9wVXBCb3goZGF0YUZpbHRlcik7XHJcbiAgICBzdWJQcm9qZWN0VGl0bGVDaGFuZ2UoXCJXZWVrXCIpO1xyXG5cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjVGFibGVBbGxCdXR0b25zKGRhdGEsIHR5cGUpe1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlTWFpbicpO1xyXG4gICAgaWYoY29udGFpbmVyUmVtKXtcclxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXJSZW0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgLy9sZXQgZGF0YUhlYWQgPSBPYmplY3Qua2V5cyhtb3VudGFpbnNbMF0pO1xyXG4gICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgLy9nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YUhlYWQpOyAvLyB0aGVuIHRoZSBoZWFkXHJcbiAgICBmb3JtUmVzZXQodHlwZSk7XHJcbiAgICBjbG9zZUZvcm0odHlwZSk7XHJcbiAgICBjb25zdCBjaGVja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG4gICAgY2hlY2tFbC5mb3JFYWNoKGJveCA9PntcclxuICAgICAgY2hlY2tDb25kaXRpb24oYm94KTtcclxuXHJcbiAgICB9KTtcclxuICAgIGVkaXRMaXN0bmVyKCk7XHJcbiAgICBvcGVuUG9wVXBCb3goZGF0YSk7XHJcbiAgICBleGVjRGVsZXRlVGFzayhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3ViUHJvamVjdFRpdGxlQ2hhbmdlKHRleHQpe1xyXG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gIHN1YlRpdGxlLnRleHRDb250ZW50PXRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBbmNob3Ioc3ViUHJvamVjdEVsZW1lbnQsIHRleHQpe1xyXG4gIGNvbnN0IG5ld1Byb2pBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBuZXdQcm9qQW5jaG9yLmNsYXNzTGlzdC5hZGQodGV4dCk7XHJcbiAgbmV3UHJvakFuY2hvci50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgbmV3UHJvakFuY2hvci5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gIG5ld1Byb2pBbmNob3Iuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjQwcHhcIjtcclxuICBuZXdQcm9qQW5jaG9yLnN0eWxlLmNvbG9yID0gXCJyZ2IoNDcsODUsMTUxKVwiO1xyXG5cclxuICBzdWJQcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdQcm9qQW5jaG9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyRGF0YSh0aXRsZSl7XHJcbiAgLy9jb25zdCBjaGVja1N1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gIGxldCBkYXRhRmlsdGVyID0gW107XHJcbiAgaWYodGl0bGUudGV4dENvbnRlbnQhPVwiSG9tZVwiKXtcclxuICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICBpZihlbGVtZW50W1wicHJvamVjdHNcIl09PXRpdGxlLnRleHRDb250ZW50KXtcclxuICAgICAgICBkYXRhRmlsdGVyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhRmlsdGVyO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuIG1vdW50YWlucztcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmxldCBwcm9qZWN0THN0PVtcIlRvRG9MaXN0XCJdXHJcbmlmKG1vdW50YWlucy5sZW5ndGg+MCl7XHJcbiAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICBpZighcHJvamVjdExzdC5pbmNsdWRlcyhlbGVtZW50W1wicHJvamVjdHNcIl0pKXtcclxuICAgICAgcHJvamVjdExzdC5wdXNoKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tY29udGFpbmVyXCIpO1xyXG5iYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIGNvbnN0IGFkZE5ld0NvbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0RGl2XCIpXHJcbiAgICBpZigoY29udGVudHMpICYmIChhZGROZXdDb250cykpe1xyXG4gICAgICAgIC8vcmVtb3ZlQ29udGVudHMoKTtcclxuICAgICAgICBjb250ZW50cy5yZW1vdmUoKTtcclxuICAgICAgICBhZGROZXdDb250cy5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBtaWRkbGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKTtcclxuICAgICAgICBtaWRkbGVEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjogMi8xMFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWNvbnRlbnRzKXtcclxuICAgICAgICBjb250ZW50TG9hZCgpO1xyXG4gICAgICAgIC8qaWYobW91bnRhaW5zLmxlbmd0aD4wKXtcclxuICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBtb3VudGFpbnMpe1xyXG4gICAgICAgICAgICBpZighcHJvamVjdExzdC5pbmNsdWRlcyhlbGVtZW50W1wicHJvamVjdHNcIl0pKXtcclxuICAgICAgICAgICAgICBwcm9qZWN0THN0LnB1c2goZWxlbWVudFtcInByb2plY3RzXCJdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgaWYocHJvamVjdExzdC5sZW5ndGg+MCl7XHJcbiAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgcHJvamVjdExzdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlByb2pEaXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RBbmNob3Ioc3ViUHJvakRpdiwgaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YlByam9jRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YlByb2plY3RzXCIpO1xyXG4gICAgICAgIGxldCBzdWJJdGVtcyA9IHN1YlByam9jRWwucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgbGV0IGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIsXCJcIik7XHJcbiAgICAgICAgICAgIHN1YlByb2plY3RUaXRsZUNoYW5nZShpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdG9kYXlUYWIodG9kYXkpO1xyXG4gICAgICAgIHdlZWtUYWIobW9uLCBzdW4pO1xyXG4gICAgICAgIGNvbnN0IGhvbWVCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ0blwiKTtcclxuICAgICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhtb3VudGFpbnMsXCJcIik7XHJcbiAgICAgICAgICAvL29wZW5Qb3BVcEJveChtb3VudGFpbnMpO1xyXG4gICAgICAgICAgc3ViUHJvamVjdFRpdGxlQ2hhbmdlKFwiSG9tZVwiKTtcclxuICAgICAgICB9KVxyXG4gIFxyXG4gXHJcbiAgICB9XHJcbiAgICAvKnNpZGUgYmFyIGV2ZW50IGxpc3RuZXJzICovXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEFkZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkXCIpO1xyXG4gICAgaWYocHJvamVjdEFkZEVsKXtcclxuICAgICAgcHJvamVjdEFkZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHN1YlByb2pEaXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViUHJvamVjdHNcIik7XHJcbiAgICAgICAgY29uc3QgcHJvalByb21wdCA9IHByb21wdChcIk5ldyBQcm9qZWN0IE5hbWVcIik7XHJcbiAgICAgICAgaWYocHJvalByb21wdCAmJiBzdWJQcm9qRGl2KXtcclxuICAgICAgICAgIGNyZWF0ZVByb2plY3RBbmNob3Ioc3ViUHJvakRpdiwgcHJvalByb21wdCk7XHJcbiAgICAgICAgICBwcm9qZWN0THN0LnB1c2gocHJvalByb21wdCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHN1YlByam9jRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YlByb2plY3RzXCIpO1xyXG4gICAgICAgIGxldCBzdWJJdGVtcyA9IHN1YlByam9jRWwucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgc3ViSXRlbXMuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgbGV0IGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGl0ZW0pO1xyXG4gICAgICAgICAgICBleGVjVGFibGVBbGxCdXR0b25zKGRhdGFGaWx0ZXIpO1xyXG4gICAgICAgICAgICAvKmNoYW5nZSBzdWJ0aXRsZSovXHJcbiAgICAgICAgICAgIHN1YlByb2plY3RUaXRsZUNoYW5nZShpdGVtLnRleHRDb250ZW50KTtcclxuICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKkNyZWF0ZSBteSBib29rIGNvbnN0cnVjdG9yIGhlcmUqL1xyXG5mdW5jdGlvbiBUYXNrKGlkLCBwcm9qZWN0cywgdGl0bGUsIGRldGFpbHMsIGRhdGUpe1xyXG4gICAgdGhpcy5pZD1pZFxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHNcclxuICAgIHRoaXMuZGF0ZT1kYXRlXHJcbiAgfVxyXG5cclxuXHJcbiAgLy9sZXQgbW91bnRhaW5zID0gW107XHJcblxyXG4gIFxyXG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcclxuICBpZiAobW91bnRhaW5zLmxlbmd0aCA+MCkge1xyXG4gICAgLy9sZXQgZGF0YSA9IE9iamVjdC5rZXlzKG1vdW50YWluc1swXSk7XHJcbiAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBtb3VudGFpbnMpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcclxuICAgIC8vZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IGFkZEl0bUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hZGQtdGFza1wiKTtcclxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1teS1mb3JtXCIpO1xyXG5hZGRJdG1FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgY3JlYXRlRHJvcERvd25MaXN0KFwiLnByb2plY3RzXCIpO1xyXG4gIGZvcm1FbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICBcclxufSlcclxuY2xvc2VGb3JtKFwiXCIpO1xyXG5cclxuLyogY2xvc2UgZnVuY3Rpb24qL1xyXG5mdW5jdGlvbiBjbG9zZUZvcm0odHlwZSkge1xyXG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1teS1mb3JtJHt0eXBlfWApO1xyXG5cclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jbG9zZSR7dHlwZX1gKTtcclxuICBpZihjbG9zZUJ0bil7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgICAgIGZvcm1FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGxldCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtdGhlLWZvcm0ke3R5cGV9YCkucmVzZXQoKTtcclxuICB9KSAgXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLyogcmVzZXQgYW5kIGNsb3NlIGZvcm0gYWZ0ZXIgZGlzcGxheSBmdW5jdGlvbiAqL1xyXG5mdW5jdGlvbiBmb3JtUmVzZXQodHlwZSl7XHJcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLW15LWZvcm0ke3R5cGV9YCk7XHJcbiAgaWYoZm9ybUVsKXtcclxuICAgIGxldCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtdGhlLWZvcm0ke3R5cGV9YCkucmVzZXQoKTtcclxuICAgIGZvcm1FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiByZW1vdmUgYWxsIGNoaWxkIG5vZGVzIGZvciB0YWJsZSBib2R5IC0gZnJlc2ggZm9yIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcclxuICBpZihwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogY3JlYXRlIHN1Ym1pdCBidXR0b24gKi9cclxubGV0IG1heElkPW1vdW50YWlucy5sZW5ndGg7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LWJ0blwiKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aXRsZS1mb3JtXCIpLnZhbHVlO1xyXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLnZhbHVlXHJcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc1wiKS52YWx1ZTtcclxuICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kdWUtZGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gbmV3IFRhc2sobWF4SWQrMSwgcHJvamVjdCwgdGl0bGUsIGRldGFpbHMsIGR1ZWRhdGUpO1xyXG4gICAgbW91bnRhaW5zLnB1c2goaXRlbSk7XHJcbiAgICBjb25zb2xlLmxvZyhtb3VudGFpbnMpO1xyXG4gICAgbWF4SWQrKztcclxuICAgIGNvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgICBsZXQgZGF0YUZpbHRlciA9ICBmaWx0ZXJEYXRhKGNoZWNrU3ViVGl0bGUpO1xyXG4gICAgZXhlY1RhYmxlQWxsQnV0dG9ucyhkYXRhRmlsdGVyLFwiXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGx0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShtb3VudGFpbnMpKTtcclxuICAgIFxyXG5cclxufSlcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNoZWNrRmxhZyhmbGFnLCBpZHgpe1xyXG5cclxuICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXtcclxuICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgaWYoZmxhZz09MSl7XHJcbiAgICAgICAgZWxlbWVudFtcImNoZWNrXCJdID0gMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGZsYWc9PWZsYWcpe1xyXG4gICAgICAgIGVsZW1lbnRbXCJjaGVja1wiXSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG4vKmNoZWNrIGJ1dHRvbiBzdHJpa2UgdGhyb3VnaCovXHJcbmZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uKGJveCl7XHJcbiAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoYm94LmNoZWNrZWQpe1xyXG4gICAgICBsZXQgcmFkaW9QYXJlbnQgPSBib3gucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IHJvd1BhcmVudCA9IHJhZGlvUGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgIHJvd1BhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgbGV0IGlkeCA9IGdldENsYXNzSURPUGFyZW50KHJhZGlvUGFyZW50KTtcclxuICAgICAgY2hhbmdlQ2hlY2tGbGFnKDEsIGlkeCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW91bnRhaW5zKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFib3guY2hlY2tlZCl7XHJcbiAgICAgIGxldCByYWRpb1BhcmVudCA9IGJveC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgcm93UGFyZW50ID0gcmFkaW9QYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgcm93UGFyZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGxldCBpZHggPSBnZXRDbGFzc0lET1BhcmVudChyYWRpb1BhcmVudCk7XHJcbiAgICAgIGNoYW5nZUNoZWNrRmxhZygwLCBpZHgpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG5cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjaGVja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG5jaGVja0VsLmZvckVhY2goYm94ID0+e1xyXG4gIGNoZWNrQ29uZGl0aW9uKGJveCk7XHJcblxyXG59KVxyXG5cclxuXHJcbi8qaGVscGVyICovXHJcbmZ1bmN0aW9uIGdldENsYXNzSURPUGFyZW50KGVsZW1lbnQpe1xyXG4gIGxldCBlZGl0UGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIGxldCBpZHggPSBOdW1iZXIoZWRpdFBhcmVudC5jbGFzc05hbWUucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xyXG4gIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgcmV0dXJuIGlkeDtcclxufVxyXG5mdW5jdGlvbiBmaW5kVGFza09iamVjdChkYXRhLCBpZHgpIHtcclxuICBsZXQgdGFza1NlbGVjdGVkO1xyXG4gIGZvcihsZXQgZWxlbWVudCBvZiBkYXRhKXtcclxuICAgICAgZm9yKGxldCBrZXkgaW4gZWxlbWVudCl7XHJcbiAgICAgICAgICBpZiAoa2V5PT1cImlkXCIgJiYgZWxlbWVudFtrZXldPT1pZHgpe1xyXG4gICAgICAgICAgICAgIHRhc2tTZWxlY3RlZCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhc2tTZWxlY3RlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVFZGl0Rm9ybSh0YXNrKXtcclxuICBsZXQgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGl0bGUtZm9ybS1lZGl0XCIpO1xyXG4gIHRpdGxlRWwudmFsdWUgPSB0YXNrW1widGl0bGVcIl07XHJcblxyXG4gIGxldCBkZXRhaWxzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRldGFpbHMtZWRpdFwiKTtcclxuICBkZXRhaWxzRWwudmFsdWUgPSB0YXNrW1wiZGV0YWlsc1wiXTtcclxuXHJcbiAgbGV0IHByb2plY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWVkaXRcIik7XHJcbiAgcHJvamVjdHNFbC52YWx1ZSA9IHRhc2tbXCJwcm9qZWN0c1wiXTtcclxuXHJcbiAgbGV0IGRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHVlLWRhdGUtZWRpdFwiKTtcclxuICBkYXRlRWwudmFsdWUgPSB0YXNrW1wiZGF0ZVwiXTtcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlVGFza09iamVjdChkYXRhLCBpZHgsIG5ld1Byb2plY3QsIG5ld1RpdGxlLCBuZXdEZXRhaWxzLCBuZXdEYXRlKXtcclxuICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgIGVsZW1lbnRbXCJwcm9qZWN0c1wiXT1uZXdQcm9qZWN0O1xyXG4gICAgICBlbGVtZW50W1widGl0bGVcIl09bmV3VGl0bGU7XHJcbiAgICAgIGVsZW1lbnRbXCJkZXRhaWxzXCJdPW5ld0RldGFpbHM7XHJcbiAgICAgIGVsZW1lbnRbXCJkYXRlXCJdPW5ld0RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG4vKmVkaXQgZm9ybSAqL1xyXG5sZXQgaW5kZXhTZWwgO1xyXG5mdW5jdGlvbiBlZGl0TGlzdG5lcigpe1xyXG4gIGNvbnN0IGVkaXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1idG5cIik7XHJcbiAgZWRpdEVsLmZvckVhY2goZWRpdEl0ZW0gPT57XHJcbiAgICBlZGl0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+eyBcclxuICAgICAgICBsZXQgaWR4ID0gZ2V0Q2xhc3NJRE9QYXJlbnQoZWRpdEl0ZW0pO1xyXG4gICAgICAgIGNyZWF0ZURyb3BEb3duTGlzdChcIi5wcm9qZWN0cy1lZGl0XCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbXktZm9ybS1lZGl0XCIpO1xyXG4gICAgICAgIGZvcm1FbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjsgICAgIFxyXG4gICAgICAgIGxldCB0YXNrU2VsZWN0ZWQgPSBmaW5kVGFza09iamVjdChtb3VudGFpbnMsIGlkeCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza1NlbGVjdGVkKTtcclxuICAgICAgICBwb3B1bGF0ZUVkaXRGb3JtKHRhc2tTZWxlY3RlZCk7XHJcbiAgICAgICAgY2xvc2VGb3JtKFwiLWVkaXRcIik7XHJcbiAgICAgICAgaW5kZXhTZWw9aWR4O1xyXG4gICAgICBcclxuICB9KVxyXG59KSAgXHJcbn1cclxuXHJcbmVkaXRMaXN0bmVyKCk7XHJcblxyXG5cclxuXHJcbi8qZG8gc3VibWl0IGJ1dHRvbiBvbiBlZGl0IGZvcm0gKi9cclxuXHJcbmNvbnN0IHN1Ym1pdEJ0bkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN1Ym1pdC1idG4tZWRpdFwiKTtcclxuc3VibWl0QnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpdGxlLWZvcm0tZWRpdFwiKS52YWx1ZTtcclxuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZWRpdFwiKS52YWx1ZTtcclxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1lZGl0XCIpLnZhbHVlO1xyXG4gIGxldCBkdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kdWUtZGF0ZS1lZGl0XCIpLnZhbHVlO1xyXG4gIHJlcGxhY2VUYXNrT2JqZWN0KG1vdW50YWlucywgaW5kZXhTZWwsIHByb2plY3QsIHRpdGxlLCBkZXRhaWxzLCBkdWVkYXRlKTtcclxuICBjb25zb2xlLmxvZyhtb3VudGFpbnMpO1xyXG4gIGNvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgbGV0IGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGNoZWNrU3ViVGl0bGUpO1xyXG4gIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIi1lZGl0XCIpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW91bnRhaW5zKSk7XHJcblxyXG59KVxyXG5cclxuXHJcbi8qIG5vdyBkbyBkZWxldGUgdGFzayAqL1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZXhlY0RlbGV0ZVRhc2soKXtcclxuICBjb25zdCBkZWxldGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ0blwiKTtcclxuICBkZWxldGVFbC5mb3JFYWNoKGRlbGV0ZUl0ZW0gPT57XHJcbiAgICBkZWxldGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgbGV0IGRlbGV0ZVBhcmVudCA9IGRlbGV0ZUl0ZW0ucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IGlkeCA9IE51bWJlcihkZWxldGVQYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcRCsvZywgJycpKTtcclxuICAgICAgY29uc29sZS5sb2coaWR4KTtcclxuICAgICAgbGV0IGlLZWVwO1xyXG4gICAgICBmb3IobGV0IGVsZW1lbnQgb2YgbW91bnRhaW5zKXs7XHJcbiAgICAgICAgaWYoZWxlbWVudFtcImlkXCJdPT1pZHgpe1xyXG4gICAgICAgICAgaUtlZXA9bW91bnRhaW5zLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdW50YWlucy5zcGxpY2UoaUtlZXAsIDEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhtb3VudGFpbnMpO1xyXG4gICAgICBjb25zdCBjb250YWluZXJSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVNYWluJyk7XHJcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyUmVtKTtcclxuICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICBjb25zdCBjaGVja1N1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gICAgICBsZXQgIGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGNoZWNrU3ViVGl0bGUpO1xyXG4gICAgICAvL2xldCBkYXRhID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFGaWx0ZXIpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbHRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vdW50YWlucykpO1xyXG4gICAgICAvL29wZW5Qb3BVcEJveChkYXRhKTtcclxuICAgICAgZXhlY0RlbGV0ZVRhc2soKTtcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhlY0RlbGV0ZVRhc2soKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBzb3J0IGJ1dHRvbiAqL1xyXG5cclxubGV0IGFzYz0xO1xyXG5jb25zdCBzb3J0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0XCIpO1xyXG4gIHNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGNvbnN0IGNoZWNrU3ViVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XHJcbiAgICBsZXQgIGRhdGFGaWx0ZXIgPSBmaWx0ZXJEYXRhKGNoZWNrU3ViVGl0bGUpO1xyXG4gICAgZGF0YUZpbHRlci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgaWYoYXNjPT0xKXtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJUb0RhdGUoYS5kYXRlKSkgLSBwYXJzZUZsb2F0KHN0clRvRGF0ZShiLmRhdGUpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGFzYz09KC0xKSl7XHJcbiAgICAgICAgcmV0dXJuICAgcGFyc2VGbG9hdChzdHJUb0RhdGUoYi5kYXRlKSkgLSBwYXJzZUZsb2F0KHN0clRvRGF0ZShhLmRhdGUpKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuICAgIGFzYyo9KC0xKTtcclxuICAgIGV4ZWNUYWJsZUFsbEJ1dHRvbnMoZGF0YUZpbHRlcixcIlwiKTtcclxuXHJcbiAgfSlcclxuXHJcblxyXG4gIC8qZ2V0IGRldGFpbHMgYnkgY2xpY2sgZnVuY3Rpb24qL1xyXG4gIGZ1bmN0aW9uIGNsb3NlQm94KGRhdGEpIHtcclxuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICBcclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVBvcFwiKTtcclxuICAgIGlmKGNsb3NlQnRuKXtcclxuICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4gICAgICAgIGZvcm1FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KSAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcFVwQm94KGRhdGEpe1xyXG4gIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGl0bGVDZWxsXCIpO1xyXG4gIGNlbGxFbC5mb3JFYWNoKGNlbGwgPT57XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICBcclxuICAgICAgbGV0IGlkeD1nZXRDbGFzc0lET1BhcmVudChjZWxsKTtcclxuICAgICAgY29uc3QgcG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgcG9wdXBFbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgY29uc3QgYWxsSDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpdkg0XCIpXHJcbiAgICAgIGFsbEg0LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgIGlmKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lPT1cInRhc2tINFwiKXtcclxuICAgICAgICAgIGxldCBwQ2hpbGQgPSBpdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICBwQ2hpbGQudGV4dENvbnRlbnQgPSBjZWxsLnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lPT1cInByb2plY3RINFwiKXtcclxuICAgICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgICAgICAgICAgdGV4dD1lbGVtZW50W1wicHJvamVjdHNcIl1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHBDaGlsZCA9IGl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIHBDaGlsZC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWU9PVwiZGV0YWlsc0g0XCIpe1xyXG4gICAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRbXCJpZFwiXT09aWR4KXtcclxuICAgICAgICAgICAgICB0ZXh0PWVsZW1lbnRbXCJkZXRhaWxzXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBwQ2hpbGQgPSBpdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICBwQ2hpbGQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lPT1cImRhdGVINFwiKXtcclxuICAgICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGRhdGEpe1xyXG4gICAgICAgICAgICBpZihlbGVtZW50W1wiaWRcIl09PWlkeCl7XHJcbiAgICAgICAgICAgICAgdGV4dD1lbGVtZW50W1wiZGF0ZVwiXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgcENoaWxkID0gaXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgcENoaWxkLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY2xvc2VCb3goZGF0YSk7XHJcbiAgICB9KVxyXG5cclxuICB9KVxyXG4gIFxyXG59XHJcblxyXG4gIFxyXG5cclxuXHJcbm9wZW5Qb3BVcEJveChtb3VudGFpbnMpO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJEcm9wRG93bigpe1xyXG4gIGNvbnN0IHNlbGVjdEVsPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RFbC5mb3JFYWNoKHNlbGVjdEl0ZW0gPT57XHJcbiAgICB3aGlsZSAoc2VsZWN0SXRlbS5maXJzdENoaWxkKSB7XHJcbiAgICAgIHNlbGVjdEl0ZW0ucmVtb3ZlQ2hpbGQoc2VsZWN0SXRlbS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcbiAgZnVuY3Rpb24gY3JlYXRlRHJvcERvd25MaXN0KGNsYXNzbmFtZSl7XHJcbiAgICAvL2xldCBEcm9wRG93blByb2plY3RMc3Q9W11cclxuICAgIGxldCBEcm9wRG93blByb2plY3RMc3Q9cHJvamVjdExzdDtcclxuICAgIC8qaWYobW91bnRhaW5zLmxlbmd0aD4wKXtcclxuICAgICAgZm9yKGxldCBlbGVtZW50IG9mIG1vdW50YWlucyl7XHJcbiAgICAgICAgaWYoIURyb3BEb3duUHJvamVjdExzdC5pbmNsdWRlcyhlbGVtZW50W1wicHJvamVjdHNcIl0pKXtcclxuICAgICAgICAgIERyb3BEb3duUHJvamVjdExzdC5wdXNoKGVsZW1lbnRbXCJwcm9qZWN0c1wiXSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIH1cclxuICAgICAgfSovXHJcbiAgICBjbGVhckRyb3BEb3duKCk7XHJcbiAgICBmb3IobGV0IGl0ZW0gb2YgRHJvcERvd25Qcm9qZWN0THN0KXtcclxuICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc25hbWUpXHJcbiAgICAgIGNvbnN0IG9wdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uRWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIixpdGVtKTtcclxuICAgICAgb3B0aW9uRWwudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHRpb25FbCk7XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=