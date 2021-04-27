/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* global */\r\n:root {\r\n    --nav-top: 0px;\r\n}\r\n\r\n/* general style */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\np {\r\n    color : black;\r\n}\r\n\r\n.container {\r\n    max-width : 960px;\r\n    margin : 0 auto;\r\n}\r\n\r\n.vertical-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n/* Tags */\r\n.tag {\r\n    /* style */\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 1px 5px;\r\n    margin-right: 10px;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    border-radius: 5px;\r\n    /* text */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.distributed-systems {\r\n    background-color: rgb(248, 115, 91);\r\n    color: white;\r\n}\r\n\r\n.machine-learning {\r\n    background-color:rgb(147, 94, 233);\r\n    color: white;\r\n}\r\n\r\n/* Responsive Grid System */\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n[class*=\"col-\"] {\r\n    flex-basis: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .col-1 {flex-basis: 8.33%;} \r\n    .col-2 {flex-basis: 16.66%;}\r\n    .col-3 {flex-basis: 25%;}\r\n    .col-4 {flex-basis: 33.33%;}\r\n    .col-5 {flex-basis: 41.66%;}\r\n    .col-6 {flex-basis: 50%;}\r\n    .col-7 {flex-basis: 58.33%;}\r\n    .col-8 {flex-basis: 66.66%;}\r\n    .col-9 {flex-basis: 75%;}\r\n    .col-10 {flex-basis: 83.33%;}\r\n    .col-11 {flex-basis: 91.66%;}\r\n    .col-12 {flex-basis: 100%;}\r\n}\r\n\r\n/* navigation bar */\r\nnav {\r\n    /* sticky position */\r\n    position: sticky;\r\n    top: var(--nav-top);\r\n\r\n    /* style */\r\n    background-color: white;\r\n}\r\n\r\nnav > ul {\r\n    /* list style */\r\n    list-style-type: none;\r\n\r\n    /* flex box */\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n\r\n    padding: 0;\r\n    min-height: 40px;\r\n}\r\n\r\nnav > ul > li {\r\n    max-width: 80px;\r\n    min-width: 100px;\r\n\r\n    text-align: center;\r\n\r\n    border-right: 1.5px solid gray;\r\n}\r\n\r\n/* nav > ul > li:first-child {\r\n    border-left: 1.5px solid gray;\r\n} */\r\n\r\nnav > ul >li:last-child {\r\n    border-right: none;\r\n}\r\n\r\n/* navigation links */\r\nnav a:link, nav a:visited {\r\n    text-decoration: none;\r\n    color: rgb(14, 137, 238);\r\n}\r\n\r\nnav a:hover {\r\n    text-decoration: underline;\r\n    color: tomato;\r\n}\r\n\r\n/* nav a:active {\r\n    text-decoration: underline;\r\n    color: tomato;\r\n    font-weight: bold;\r\n} */\r\n\r\n/* normal links */\r\n.normal-link {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.normal-link:link, .normal-link:visited {\r\n    text-decoration: none;\r\n    color: rgb(14, 137, 238);\r\n}\r\n\r\n.normal-link:hover {\r\n    text-decoration: underline;\r\n    /* color: tomato; */\r\n}\r\n\r\n.icon-link {\r\n    color: rgb(14, 137, 238);\r\n    margin: 3px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.icon-link:hover {\r\n    color: tomato;\r\n}", "",{"version":3,"sources":["webpack://./src/static/index.css"],"names":[],"mappings":"AAAA,WAAW;AACX;IACI,cAAc;AAClB;;AAEA,kBAAkB;AAClB;IACI,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,SAAS;AACT;IACI,UAAU;IACV,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,yCAAyC;AAC7C;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA,2BAA2B;AAC3B;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,QAAQ,iBAAiB,CAAC;IAC1B,QAAQ,kBAAkB,CAAC;IAC3B,QAAQ,eAAe,CAAC;IACxB,QAAQ,kBAAkB,CAAC;IAC3B,QAAQ,kBAAkB,CAAC;IAC3B,QAAQ,eAAe,CAAC;IACxB,QAAQ,kBAAkB,CAAC;IAC3B,QAAQ,kBAAkB,CAAC;IAC3B,QAAQ,eAAe,CAAC;IACxB,SAAS,kBAAkB,CAAC;IAC5B,SAAS,kBAAkB,CAAC;IAC5B,SAAS,gBAAgB,CAAC;AAC9B;;AAEA,mBAAmB;AACnB;IACI,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;;IAEnB,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,qBAAqB;;IAErB,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,mBAAmB;;IAEnB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB,kBAAkB;;IAElB,8BAA8B;AAClC;;AAEA;;GAEG;;AAEH;IACI,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;;;;GAIG;;AAEH,iBAAiB;AACjB;IACI,yCAAyC;AAC7C;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["/* global */\r\n:root {\r\n    --nav-top: 0px;\r\n}\r\n\r\n/* general style */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\np {\r\n    color : black;\r\n}\r\n\r\n.container {\r\n    max-width : 960px;\r\n    margin : 0 auto;\r\n}\r\n\r\n.vertical-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n/* Tags */\r\n.tag {\r\n    /* style */\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 1px 5px;\r\n    margin-right: 10px;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    border-radius: 5px;\r\n    /* text */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.distributed-systems {\r\n    background-color: rgb(248, 115, 91);\r\n    color: white;\r\n}\r\n\r\n.machine-learning {\r\n    background-color:rgb(147, 94, 233);\r\n    color: white;\r\n}\r\n\r\n/* Responsive Grid System */\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n[class*=\"col-\"] {\r\n    flex-basis: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .col-1 {flex-basis: 8.33%;} \r\n    .col-2 {flex-basis: 16.66%;}\r\n    .col-3 {flex-basis: 25%;}\r\n    .col-4 {flex-basis: 33.33%;}\r\n    .col-5 {flex-basis: 41.66%;}\r\n    .col-6 {flex-basis: 50%;}\r\n    .col-7 {flex-basis: 58.33%;}\r\n    .col-8 {flex-basis: 66.66%;}\r\n    .col-9 {flex-basis: 75%;}\r\n    .col-10 {flex-basis: 83.33%;}\r\n    .col-11 {flex-basis: 91.66%;}\r\n    .col-12 {flex-basis: 100%;}\r\n}\r\n\r\n/* navigation bar */\r\nnav {\r\n    /* sticky position */\r\n    position: sticky;\r\n    top: var(--nav-top);\r\n\r\n    /* style */\r\n    background-color: white;\r\n}\r\n\r\nnav > ul {\r\n    /* list style */\r\n    list-style-type: none;\r\n\r\n    /* flex box */\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n\r\n    padding: 0;\r\n    min-height: 40px;\r\n}\r\n\r\nnav > ul > li {\r\n    max-width: 80px;\r\n    min-width: 100px;\r\n\r\n    text-align: center;\r\n\r\n    border-right: 1.5px solid gray;\r\n}\r\n\r\n/* nav > ul > li:first-child {\r\n    border-left: 1.5px solid gray;\r\n} */\r\n\r\nnav > ul >li:last-child {\r\n    border-right: none;\r\n}\r\n\r\n/* navigation links */\r\nnav a:link, nav a:visited {\r\n    text-decoration: none;\r\n    color: rgb(14, 137, 238);\r\n}\r\n\r\nnav a:hover {\r\n    text-decoration: underline;\r\n    color: tomato;\r\n}\r\n\r\n/* nav a:active {\r\n    text-decoration: underline;\r\n    color: tomato;\r\n    font-weight: bold;\r\n} */\r\n\r\n/* normal links */\r\n.normal-link {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.normal-link:link, .normal-link:visited {\r\n    text-decoration: none;\r\n    color: rgb(14, 137, 238);\r\n}\r\n\r\n.normal-link:hover {\r\n    text-decoration: underline;\r\n    /* color: tomato; */\r\n}\r\n\r\n.icon-link {\r\n    color: rgb(14, 137, 238);\r\n    margin: 3px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.icon-link:hover {\r\n    color: tomato;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/main_page.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/main_page.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* about */\r\n#portfolio {\r\n    border-radius: 10px;\r\n    max-width: 80%;\r\n    object-fit: cover;\r\n}\r\n\r\n/* news */\r\n#section-news ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#section-news ul:last-child {\r\n    text-align: right;\r\n}\r\n\r\n#news-list {\r\n    margin: 0.5em 0 1.33em 0;\r\n}\r\n\r\n.news-title, .news-date {\r\n    margin: 0 0 0px 0;\r\n}\r\n\r\n.news-date {\r\n    text-align: right;\r\n    margin-bottom: 0.15em;\r\n}\r\n\r\n/* news search bar */\r\n.search input {\r\n\twidth: 150px;\r\n    /* margin: 0.5em 0 0.5rem 0; */\r\n    margin: 0;\r\n    font-size: 0.9rem;\r\n    /* padding: 0.5rem; */\r\n    padding: 0.2rem 1rem;\r\n    border-radius: 1rem;\r\n    border: 1px solid #a7a7a7;\r\n    /* transition */\r\n    transition: width 1s, background-color 1s;\r\n    transition-timing-function: ease;\r\n}\r\n\r\n.search input:focus {\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: rgb(245, 245, 245);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .search input:focus {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n/* TO DO: appearance of this button */\r\n/* webkit cancel button */\r\n::-webkit-search-cancel-button {\r\n    -webkit-appearance: none;\r\n    cursor: pointer;\r\n\r\n    width: 12px;\r\n    height: 12px;\r\n    /* border-radius: 6px; */\r\n\r\n    background-color: rgb(189, 189, 189);\r\n}\r\n\r\n\r\n/* project */\r\n#project-container {\r\n    align-items: flex-start;\r\n}\r\n\r\n.project {\r\n    /* style */\r\n    background-color: rgba(185, 185, 185, 0.15);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    /* size */\r\n    max-width: 100%;\r\n    margin: 20px 0 0 0;\r\n    /* text */\r\n    text-align: left;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .project {\r\n        max-width: 95%;\r\n        margin-top: 20px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    #left-column > .project {\r\n        margin-left: 0;\r\n    }\r\n\r\n    #right-column > .project {\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n.project strong {\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.project-link {\r\n    font-weight: bold;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\na.project-link:link, .project-link:visited {\r\n    text-decoration: none;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\na.project-link:hover {\r\n    color: black;\r\n}\r\n\r\nhr.project-dividor {\r\n    margin: 0.3em;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.external-links a {\r\n    margin-right: 5px;\r\n    padding-right: 5px;\r\n    /* border-right: 1px solid black; */\r\n}", "",{"version":3,"sources":["webpack://./src/static/main_page.css"],"names":[],"mappings":"AAAA,UAAU;AACV;IACI,mBAAmB;IACnB,cAAc;IACd,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA,oBAAoB;AACpB;CACC,YAAY;IACT,8BAA8B;IAC9B,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,yCAAyC;IACzC,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA,qCAAqC;AACrC,yBAAyB;AACzB;IACI,wBAAwB;IACxB,eAAe;;IAEf,WAAW;IACX,YAAY;IACZ,wBAAwB;;IAExB,oCAAoC;AACxC;;;AAGA,YAAY;AACZ;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,2CAA2C;IAC3C,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI;QACI,cAAc;QACd,gBAAgB;QAChB,mBAAmB;IACvB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mCAAmC;AACvC","sourcesContent":["/* about */\r\n#portfolio {\r\n    border-radius: 10px;\r\n    max-width: 80%;\r\n    object-fit: cover;\r\n}\r\n\r\n/* news */\r\n#section-news ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#section-news ul:last-child {\r\n    text-align: right;\r\n}\r\n\r\n#news-list {\r\n    margin: 0.5em 0 1.33em 0;\r\n}\r\n\r\n.news-title, .news-date {\r\n    margin: 0 0 0px 0;\r\n}\r\n\r\n.news-date {\r\n    text-align: right;\r\n    margin-bottom: 0.15em;\r\n}\r\n\r\n/* news search bar */\r\n.search input {\r\n\twidth: 150px;\r\n    /* margin: 0.5em 0 0.5rem 0; */\r\n    margin: 0;\r\n    font-size: 0.9rem;\r\n    /* padding: 0.5rem; */\r\n    padding: 0.2rem 1rem;\r\n    border-radius: 1rem;\r\n    border: 1px solid #a7a7a7;\r\n    /* transition */\r\n    transition: width 1s, background-color 1s;\r\n    transition-timing-function: ease;\r\n}\r\n\r\n.search input:focus {\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: rgb(245, 245, 245);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .search input:focus {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n/* TO DO: appearance of this button */\r\n/* webkit cancel button */\r\n::-webkit-search-cancel-button {\r\n    -webkit-appearance: none;\r\n    cursor: pointer;\r\n\r\n    width: 12px;\r\n    height: 12px;\r\n    /* border-radius: 6px; */\r\n\r\n    background-color: rgb(189, 189, 189);\r\n}\r\n\r\n\r\n/* project */\r\n#project-container {\r\n    align-items: flex-start;\r\n}\r\n\r\n.project {\r\n    /* style */\r\n    background-color: rgba(185, 185, 185, 0.15);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    /* size */\r\n    max-width: 100%;\r\n    margin: 20px 0 0 0;\r\n    /* text */\r\n    text-align: left;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .project {\r\n        max-width: 95%;\r\n        margin-top: 20px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    #left-column > .project {\r\n        margin-left: 0;\r\n    }\r\n\r\n    #right-column > .project {\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n.project strong {\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.project-link {\r\n    font-weight: bold;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\na.project-link:link, .project-link:visited {\r\n    text-decoration: none;\r\n    color: rgb(100, 100, 100);\r\n}\r\n\r\na.project-link:hover {\r\n    color: black;\r\n}\r\n\r\nhr.project-dividor {\r\n    margin: 0.3em;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.external-links a {\r\n    margin-right: 5px;\r\n    padding-right: 5px;\r\n    /* border-right: 1px solid black; */\r\n}"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

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

/***/ "./src/static/index.css":
/*!******************************!*\
  !*** ./src/static/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/static/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/static/main_page.css":
/*!**********************************!*\
  !*** ./src/static/main_page.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main_page.css */ "./node_modules/css-loader/dist/cjs.js!./src/static/main_page.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_page_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "./src/assets/Qinzi_Peilin.jpg":
/*!*************************************!*\
  !*** ./src/assets/Qinzi_Peilin.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b234ddb7b44813b6a350.jpg";

/***/ }),

/***/ "./src/assets/Resume.pdf":
/*!*******************************!*\
  !*** ./src/assets/Resume.pdf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3911c8ad2ed316c1c72.pdf";

/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"meta":{"news":{"max-length":10,"max-duration":6},"projects":{}},"about":{"name":"Qinzi Zhang","portfolio":"./assets/Qinzi_Peilin.jpg","position":"Senior Student","institute":"Boston College","email":"qinzi dot zhang at bc dot edu","resume":"./assets/Resume.pdf","github":"https://github.com/ZQZCalin","description":"Qinzi Zhang is a current senior student at Boston College and will graduate soon on May 24. His research interest is machine learning, in particular machine learning theory and distributed machine learning..."},"news":[{"title":"Graduating soon from Boston College","date":"May 24, 2021"},{"title":"Admitted by Boston University CE PhD","date":"Mar, 2021"},{"title":"Started the last semester at Boston College","date":"Jan, 2021"}],"projects":[{"id":"echo-cgc","title":"Echo-CGC: A Communication-Efficient Byzantine-tolerant Distributed Machine Learning Algorithm in Single-Hop Radio Network","author":["Qinzi Zhang","Lewis Tseng"],"publication":"24th International Conference on Principles of Distributed Systems (OPODIS), 2020","tag":["distributed systems","machine learning"],"externalLink":[{"name":"paper","link":"https://arxiv.org/abs/2011.07447"},{"name":"video","link":"https://www.youtube.com/watch?v=m2arTczT54w"}]},{"title":"Undecided 1","author":"Qinzi Zhang","tag":["distributed systems"]},{"title":"Undecided 2","author":"Qinzi Zhang","tag":["machine learning"]},{"title":"Undecided 3","author":"Qinzi Zhang"}]}');

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAbout": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalLink.js */ "./src/components/ExternalLink.js");
/* harmony import */ var _assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Resume.pdf */ "./src/assets/Resume.pdf");
/* harmony import */ var _assets_Qinzi_Peilin_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Qinzi_Peilin.jpg */ "./src/assets/Qinzi_Peilin.jpg");






function renderAbout(about) {
    return`
    <section id="section-about">
        <h1>About</h1>
        <div class="row">
            <div class="col-6 vertical-flex">
                <img id="portfolio" src="${_assets_Qinzi_Peilin_jpg__WEBPACK_IMPORTED_MODULE_2__}" alt="Portfolio">
                <p>
                    <b>${about.position} @ ${about.institute}</b> <br>
                    e-mail: ${about.email} <br>
                    <a href="${_assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_1__}" class="normal-link">
                        ${(0,_ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__.materialIcon)("resume")}
                        Resume
                    </a> | 
                    <a href="${about.github}" target="_blank" class="normal-link">
                        ${(0,_ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__.materialIcon)("github")}
                        Github
                    </a>
                    ${
                        // hide icon links
                        ( false) ? 0 : ""
                    }
                </p>
            </div>
            <p class="col-6">
                ${about.description}
            </p>
        </div>
    </section>
    <hr class="solid">
    `;
}

/***/ }),

/***/ "./src/components/ExternalLink.js":
/*!****************************************!*\
  !*** ./src/components/ExternalLink.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderExternalLinks": () => (/* binding */ renderExternalLinks),
/* harmony export */   "materialIcon": () => (/* binding */ materialIcon)
/* harmony export */ });


function renderExternalLinks(links) {
    // undefined link
    if (links == undefined) return "";

    return `
    <div class="external-links">
        ${
            links.map(item => `
            <a href="${item.link}" ${
                // link to external page
                (item.link.slice(0,5)==="https") ? "target=_blank":""
            } class="normal-link">
                ${materialIcon(item.name.toLowerCase())}
                <span>${item.name}</span>
            </a>
            `).join("")
        }
    </div>
    `;
}

function materialIcon(name) {
    switch (name.toLowerCase()) {
        case "paper":
            return `<i class="far fa-file-alt"></i>`;
        case "video":
            return `<i class="fas fa-video"></i>`;
        case "demo":
            return `<i class="fas fa-desktop"></i>`;
        case "link":
            return `<i class="fas fa-external-link-alt"></i>`;
        case "resume":
            return `<i class="far fa-file-alt"></i>`;
        case "github":
            return `<i class="fab fa-github"></i>`;
        case "facebook":
            return `<i class="fab fa-facebook-square"></i>`;
        case "twitter":
            return `<i class="fab fa-twitter-square"></i>`;
        case "linkedin":
            return `<i class="fab fa-linkedin"></i>`;
        default:
            return "";
    }
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });


function renderHeader() {
    return`
    <header>
        <h1 class="animate__animated animate__bounce">
            Welcome to Qinzi's Personal Website!
        </h1>
    </header>
    `;
}

/***/ }),

/***/ "./src/components/MainPage.js":
/*!************************************!*\
  !*** ./src/components/MainPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.js */ "./src/components/Header.js");
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ "./src/components/About.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./News.js */ "./src/components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");






function renderMainPage(data) {
    document.getElementById("home-container").innerHTML = `
        ${(0,_Header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)()}
        ${(0,_NavBar_js__WEBPACK_IMPORTED_MODULE_1__.renderNavBar)(_NavBar_js__WEBPACK_IMPORTED_MODULE_1__.mainMenu)}
        ${(0,_About_js__WEBPACK_IMPORTED_MODULE_2__.renderAbout)(data.about)}
        ${(0,_News_js__WEBPACK_IMPORTED_MODULE_3__.renderNews)(data.news)}
        ${(0,_Projects_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(data.projects)}
    `;
    // fill in blanks (news, projects)
    (0,_News_js__WEBPACK_IMPORTED_MODULE_3__.renderNewsItems)(data.news);
    (0,_Projects_js__WEBPACK_IMPORTED_MODULE_4__.renderProjectItems)(data.projects);
}



/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainMenu": () => (/* binding */ mainMenu),
/* harmony export */   "projectMenu": () => (/* binding */ projectMenu),
/* harmony export */   "renderNavBar": () => (/* binding */ renderNavBar)
/* harmony export */ });


var mainMenu = [
    {
        name: "About",
        link: "#section-about"
    },
    {
        name: "News",
        link: "$section-news"
    },
    {
        name: "Projects",
        link: "#section-projects"
    }
];

var projectMenu = [
    {
        name: "go back",
        link: "."
    }
]

function renderNavBar(menu) {
    return`
    <nav>
        <ul>
            ${
                menu.map(section => `
                    <li><a href="${section.link}">
                        ${section.name}
                    </a></li>
                `).join("")
            }
        </ul>
    </nav>
    `;
}

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNews": () => (/* binding */ renderNews),
/* harmony export */   "renderNewsItems": () => (/* binding */ renderNewsItems),
/* harmony export */   "UISearchNews": () => (/* binding */ UISearchNews)
/* harmony export */ });


const newsMaxLength = 10;

function renderNews(news) {
    return`
    <section id="section-news">
        <h1>News</h1>
        <!-- Search Bar -->
        <div class="search">
            <input type="search" name="news" placeholder="Search News...">
        </div>
        <!-- News List -->
        <div id="news-list" class="row">
            <!-- renderNewsItems(news) -->
        </div>
        <p></p>
    </section>
    <hr class="solid">
    `;
}

function renderNewsItems(news) {
    document.getElementById("news-list").innerHTML = news.map(newsItem => `
        <p class="col-8 news-title">${newsItem.title}</p>
        <p class="col-4 news-date">${newsItem.date}</p>
    `).slice(0,newsMaxLength).join("");
}

function UISearchNews(news) {
    // filter news using title keyword
    let keyword = document.querySelector(".search input[name='news']").value;
    let filterNews = news.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    renderNewsItems(filterNews);
}

/***/ }),

/***/ "./src/components/ProjectPage.js":
/*!***************************************!*\
  !*** ./src/components/ProjectPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectPage": () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");





function renderProjectPage(project) {
    document.getElementById("home-container").innerHTML = `
        ${(0,_NavBar_js__WEBPACK_IMPORTED_MODULE_0__.renderNavBar)(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__.projectMenu)}
        ${(0,_Projects_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectSingleItem)(project)}
    `;
}

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderProjectItems": () => (/* binding */ renderProjectItems),
/* harmony export */   "UIFilterProjects": () => (/* binding */ UIFilterProjects),
/* harmony export */   "renderProjectSingleItem": () => (/* binding */ renderProjectSingleItem)
/* harmony export */ });
/* harmony import */ var _ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalLink.js */ "./src/components/ExternalLink.js");




function renderProjects(projects) {
    return`
    <section id="section-projects">
        <h1>Projects</h1>

        <!-- Filter Bar -->
        <div class="filter">
            ${
                ["all", "distributed systems", "machine learning"].map((tag, i) => `
                <label>
                    <input type="checkbox" name="projects" value="${tag}" ${(i==0)?"checked":""}>
                    ${
                        // String formatting: Uppercase Initials
                        tag.split(" ")
                        .map(word => word[0].toUpperCase()+word.slice(1).toLowerCase())
                        .reduce((prev, word) => prev+" "+word)
                    }
                </label>
                `).join("")
            }
        </div>

        <!-- Project List -->
        <div id="project-container" class="row">
            <!-- Left Column -->
            <div id="left-column" class="col-6">

            </div>
            <!-- Right Column -->
            <div id="right-column" class="col-6">

            </div>
        </div>
    </section>
    `;
}

// stack each item to either left of right
function renderProjectItems(projects) {
    // threshold function
    let threshold = i => i < projects.length / 2;
    // left column
    document.getElementById("left-column").innerHTML = 
    projects.map((project, i) => {
        if (threshold(i)) {
            return renderProjectSingleItem(project);
        }
    }).join("");
    // right column
    document.getElementById("right-column").innerHTML = 
    projects.map((project, i) => {
        if (! threshold(i)) {
            return renderProjectSingleItem(project);
        }
    }).join("");
}

function renderProjectSingleItem(project) {
    return`
    <section class="project">
        <!-- Mandatory: Title (Optional: ID) -->
        ${renderProjectTitle(project.title, project.id)}
        <hr class="solid project-dividor">
        <!-- Mandatory: Author -->
        ${renderProjectAuthor(project.author)} <br>
        <!-- Optional: Publication -->
        ${renderProjectPublication(project.publication)}
        <!-- Optional: Tag -->
        ${renderProjectTag(project.tag)}
        <!-- Optional: External Links -->
        ${(0,_ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__.renderExternalLinks)(project.externalLink)}
    </section>
    `
}

function renderProjectTitle(title, id) {
    return `
    <div class="project-title">
        <Strong>${title}</Strong>
        ${(id != undefined) ? `
        <a href="?project=${id}" class="project-link">
            ${(0,_ExternalLink_js__WEBPACK_IMPORTED_MODULE_0__.materialIcon)("link")}
        </a>
        ` : ""}
    </div>
    `;
}

function renderProjectAuthor(author) {
    // single author (String)
    return (typeof author == "string") ? author : 
        // multiple authors (Array): e1, e2, ...
        author.reduce((str, element) => `${str}, ${element}`)
}

function renderProjectPublication(publication) {
    return (publication != undefined) ? `
        <i>${publication}</i> <br>
    ` : ""
}

function renderProjectTag(tag) {
    return (tag != undefined) ? `
    ${
        // print all tags, convert space into "-" as class name
        tag.map(tagName => `
            <span class="tag ${tagName.replace(" ", "-")}">${tagName}</span>
        `).join("")
    } <br>
    ` : ""
}

// User Interaction: filter checkbox
function UIFilterProjects(checkbox, projects){
    // convert Nodelist to Array
    let filter = Array.from(document.querySelectorAll(".filter input[name='projects']"));
    let checkBoxAll = document.querySelector(".filter input[value='all']");
    
    // Checkbox Logic
    if (checkbox.value === "all" && checkbox.checked) {
        // if "all" is selected, uncheck all other tags
        filter.forEach((item, i) => {
            if (i > 0) item.checked = false;
        });
    } else if (checkbox.checked) {
        // if checked other tag, uncheck "all"
        checkBoxAll.checked = false;
    } else if (filter.every(tag => tag.checked==false)) {
        // if no box is checked, check "all"
        checkBoxAll.checked = true;
    }
    
    // Render
    let selected = [];
    filter.forEach(item => {
        if (item.checked) selected.push(item.value);
    });
    if (selected.includes("all")) {
        // render all
        renderProjectItems(projects);
    } else {
        // render selected
        renderProjectItems(projects.filter(project => {
            // check if a projected is tagged and contains any selected tag
            if (project.tag != undefined && selected.length != 0) {
                return selected.reduce((prev, tag) => {
                    return prev || project.tag.includes(tag);
                }, false);
            } else {
                return false;
            }
        }));
    }
}

/***/ }),

/***/ "./src/components/UserInteraction.js":
/*!*******************************************!*\
  !*** ./src/components/UserInteraction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userInteraction": () => (/* binding */ userInteraction)
/* harmony export */ });
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.js */ "./src/components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");





function userInteraction(data) {
    // search news
    document.querySelector(".search input[name='news']")
    .addEventListener("input", () => {;(0,_News_js__WEBPACK_IMPORTED_MODULE_0__.UISearchNews)(data.news)});
    // filter projects
    document.querySelectorAll(".filter input[name='projects']")
    .forEach(box => {
        box.addEventListener("change", () => {(0,_Projects_js__WEBPACK_IMPORTED_MODULE_1__.UIFilterProjects)(box, data.projects)});
    });
}

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
/* harmony import */ var _components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainPage.js */ "./src/components/MainPage.js");
/* harmony import */ var _components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectPage.js */ "./src/components/ProjectPage.js");
/* harmony import */ var _components_UserInteraction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserInteraction.js */ "./src/components/UserInteraction.js");
/* harmony import */ var _static_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/index.css */ "./src/static/index.css");
/* harmony import */ var _static_main_page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/main_page.css */ "./src/static/main_page.css");
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.json */ "./src/assets/data.json");








/* No longer needs to fetch json
// fetch JSON
fetch(Data)
.then(response => {
    // fetch json data
    return response.json();
})
.then(data => {
    // received fetch data
    // // 1. Render Page
    // renderMainPage(data);

    // // 2. User Interaction
    // userInteraction(data);

    // check url parameter
})
*/

// create container
var container = document.createElement("div");
container.className = "container";
container.id = "home-container";
document.body.appendChild(container);

// render page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("project")) {
    // TO DO: render project detail (use a separate JSON)
    let project = _assets_data_json__WEBPACK_IMPORTED_MODULE_5__.projects.find(item => item.id===urlParams.get("project"));
    (0,_components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectPage)(project);
} else {
    (0,_components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)(_assets_data_json__WEBPACK_IMPORTED_MODULE_5__);
    (0,_components_UserInteraction_js__WEBPACK_IMPORTED_MODULE_2__.userInteraction)(_assets_data_json__WEBPACK_IMPORTED_MODULE_5__);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vc3JjL3N0YXRpYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9zdGF0aWMvbWFpbl9wYWdlLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9zdGF0aWMvaW5kZXguY3NzP2MwMjgiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9zdGF0aWMvbWFpbl9wYWdlLmNzcz9lMmZkIiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9jb21wb25lbnRzL0Fib3V0LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2UvLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvTmV3cy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2UvLi9zcmMvY29tcG9uZW50cy9Vc2VySW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlcnNvbmFsLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaUVBQWlFLHVCQUF1QixLQUFLLGtDQUFrQywrQkFBK0IsS0FBSyxjQUFjLHFEQUFxRCxLQUFLLFdBQVcsc0JBQXNCLEtBQUssb0JBQW9CLDBCQUEwQix3QkFBd0IsS0FBSyx3QkFBd0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyw0QkFBNEIsaURBQWlELDJCQUEyQix5QkFBeUIsMkJBQTJCLDJCQUEyQix3QkFBd0IsMkJBQTJCLG9FQUFvRSxLQUFLLDhCQUE4Qiw0Q0FBNEMscUJBQXFCLEtBQUssMkJBQTJCLDJDQUEyQyxxQkFBcUIsS0FBSyw4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eC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGdsb2JhbCAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1uYXYtdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGdlbmVyYWwgc3R5bGUgKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgY29sb3IgOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aCA6IDk2MHB4O1xcclxcbiAgICBtYXJnaW4gOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi52ZXJ0aWNhbC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFncyAqL1xcclxcbi50YWcge1xcclxcbiAgICAvKiBzdHlsZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXB4IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAvKiB0ZXh0ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzdHJpYnV0ZWQtc3lzdGVtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDExNSwgOTEpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYWNoaW5lLWxlYXJuaW5nIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ3LCA5NCwgMjMzKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIEdyaWQgU3lzdGVtICovXFxyXFxuLnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuW2NsYXNzKj1cXFwiY29sLVxcXCJdIHtcXHJcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY29sLTEge2ZsZXgtYmFzaXM6IDguMzMlO30gXFxyXFxuICAgIC5jb2wtMiB7ZmxleC1iYXNpczogMTYuNjYlO31cXHJcXG4gICAgLmNvbC0zIHtmbGV4LWJhc2lzOiAyNSU7fVxcclxcbiAgICAuY29sLTQge2ZsZXgtYmFzaXM6IDMzLjMzJTt9XFxyXFxuICAgIC5jb2wtNSB7ZmxleC1iYXNpczogNDEuNjYlO31cXHJcXG4gICAgLmNvbC02IHtmbGV4LWJhc2lzOiA1MCU7fVxcclxcbiAgICAuY29sLTcge2ZsZXgtYmFzaXM6IDU4LjMzJTt9XFxyXFxuICAgIC5jb2wtOCB7ZmxleC1iYXNpczogNjYuNjYlO31cXHJcXG4gICAgLmNvbC05IHtmbGV4LWJhc2lzOiA3NSU7fVxcclxcbiAgICAuY29sLTEwIHtmbGV4LWJhc2lzOiA4My4zMyU7fVxcclxcbiAgICAuY29sLTExIHtmbGV4LWJhc2lzOiA5MS42NiU7fVxcclxcbiAgICAuY29sLTEyIHtmbGV4LWJhc2lzOiAxMDAlO31cXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2aWdhdGlvbiBiYXIgKi9cXHJcXG5uYXYge1xcclxcbiAgICAvKiBzdGlja3kgcG9zaXRpb24gKi9cXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiB2YXIoLS1uYXYtdG9wKTtcXHJcXG5cXHJcXG4gICAgLyogc3R5bGUgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IHVsIHtcXHJcXG4gICAgLyogbGlzdCBzdHlsZSAqL1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIC8qIGZsZXggYm94ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gdWwgPiBsaSB7XFxyXFxuICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdiA+IHVsID4gbGk6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgZ3JheTtcXHJcXG59ICovXFxyXFxuXFxyXFxubmF2ID4gdWwgPmxpOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdmlnYXRpb24gbGlua3MgKi9cXHJcXG5uYXYgYTpsaW5rLCBuYXYgYTp2aXNpdGVkIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDE0LCAxMzcsIDIzOCk7XFxyXFxufVxcclxcblxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGNvbG9yOiB0b21hdG87XFxyXFxufVxcclxcblxcclxcbi8qIG5hdiBhOmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjb2xvcjogdG9tYXRvO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogbm9ybWFsIGxpbmtzICovXFxyXFxuLm5vcm1hbC1saW5rIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwtbGluazpsaW5rLCAubm9ybWFsLWxpbms6dmlzaXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYigxNCwgMTM3LCAyMzgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLWxpbms6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogY29sb3I6IHRvbWF0bzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbGluayB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTQsIDEzNywgMjM4KTtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5pY29uLWxpbms6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdG9tYXRvO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3RhdGljL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFNBQVM7QUFDVDtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxRQUFRLGlCQUFpQixDQUFDO0lBQzFCLFFBQVEsa0JBQWtCLENBQUM7SUFDM0IsUUFBUSxlQUFlLENBQUM7SUFDeEIsUUFBUSxrQkFBa0IsQ0FBQztJQUMzQixRQUFRLGtCQUFrQixDQUFDO0lBQzNCLFFBQVEsZUFBZSxDQUFDO0lBQ3hCLFFBQVEsa0JBQWtCLENBQUM7SUFDM0IsUUFBUSxrQkFBa0IsQ0FBQztJQUMzQixRQUFRLGVBQWUsQ0FBQztJQUN4QixTQUFTLGtCQUFrQixDQUFDO0lBQzVCLFNBQVMsa0JBQWtCLENBQUM7SUFDNUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUM5Qjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7O0lBRXJCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixrQkFBa0I7O0lBRWxCLDhCQUE4QjtBQUNsQzs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7Ozs7R0FJRzs7QUFFSCxpQkFBaUI7QUFDakI7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBnbG9iYWwgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbmF2LXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBnZW5lcmFsIHN0eWxlICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGNvbG9yIDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGggOiA5NjBweDtcXHJcXG4gICAgbWFyZ2luIDogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwtZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRhZ3MgKi9cXHJcXG4udGFnIHtcXHJcXG4gICAgLyogc3R5bGUgKi9cXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLyogdGV4dCAqL1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3RyaWJ1dGVkLXN5c3RlbXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxMTUsIDkxKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFjaGluZS1sZWFybmluZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0NywgOTQsIDIzMyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzcG9uc2l2ZSBHcmlkIFN5c3RlbSAqL1xcclxcbi5yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbltjbGFzcyo9XFxcImNvbC1cXFwiXSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmNvbC0xIHtmbGV4LWJhc2lzOiA4LjMzJTt9IFxcclxcbiAgICAuY29sLTIge2ZsZXgtYmFzaXM6IDE2LjY2JTt9XFxyXFxuICAgIC5jb2wtMyB7ZmxleC1iYXNpczogMjUlO31cXHJcXG4gICAgLmNvbC00IHtmbGV4LWJhc2lzOiAzMy4zMyU7fVxcclxcbiAgICAuY29sLTUge2ZsZXgtYmFzaXM6IDQxLjY2JTt9XFxyXFxuICAgIC5jb2wtNiB7ZmxleC1iYXNpczogNTAlO31cXHJcXG4gICAgLmNvbC03IHtmbGV4LWJhc2lzOiA1OC4zMyU7fVxcclxcbiAgICAuY29sLTgge2ZsZXgtYmFzaXM6IDY2LjY2JTt9XFxyXFxuICAgIC5jb2wtOSB7ZmxleC1iYXNpczogNzUlO31cXHJcXG4gICAgLmNvbC0xMCB7ZmxleC1iYXNpczogODMuMzMlO31cXHJcXG4gICAgLmNvbC0xMSB7ZmxleC1iYXNpczogOTEuNjYlO31cXHJcXG4gICAgLmNvbC0xMiB7ZmxleC1iYXNpczogMTAwJTt9XFxyXFxufVxcclxcblxcclxcbi8qIG5hdmlnYXRpb24gYmFyICovXFxyXFxubmF2IHtcXHJcXG4gICAgLyogc3RpY2t5IHBvc2l0aW9uICovXFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogdmFyKC0tbmF2LXRvcCk7XFxyXFxuXFxyXFxuICAgIC8qIHN0eWxlICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiB1bCB7XFxyXFxuICAgIC8qIGxpc3Qgc3R5bGUgKi9cXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcclxcbiAgICAvKiBmbGV4IGJveCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IHVsID4gbGkge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXYgPiB1bCA+IGxpOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIGdyYXk7XFxyXFxufSAqL1xcclxcblxcclxcbm5hdiA+IHVsID5saTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXZpZ2F0aW9uIGxpbmtzICovXFxyXFxubmF2IGE6bGluaywgbmF2IGE6dmlzaXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYigxNCwgMTM3LCAyMzgpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjb2xvcjogdG9tYXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXYgYTphY3RpdmUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY29sb3I6IHRvbWF0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIG5vcm1hbCBsaW5rcyAqL1xcclxcbi5ub3JtYWwtbGluayB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLWxpbms6bGluaywgLm5vcm1hbC1saW5rOnZpc2l0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTQsIDEzNywgMjM4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbC1saW5rOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIGNvbG9yOiB0b21hdG87ICovXFxyXFxufVxcclxcblxcclxcbi5pY29uLWxpbmsge1xcclxcbiAgICBjb2xvcjogcmdiKDE0LCAxMzcsIDIzOCk7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHRvbWF0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYWJvdXQgKi9cXHJcXG4jcG9ydGZvbGlvIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuZXdzICovXFxyXFxuI3NlY3Rpb24tbmV3cyB1bHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uLW5ld3MgdWw6bGFzdC1jaGlsZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3cy1saXN0IHtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbSAwIDEuMzNlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy10aXRsZSwgLm5ld3MtZGF0ZSB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1kYXRlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmV3cyBzZWFyY2ggYmFyICovXFxyXFxuLnNlYXJjaCBpbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDE1MHB4O1xcclxcbiAgICAvKiBtYXJnaW46IDAuNWVtIDAgMC41cmVtIDA7ICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIC8qIHBhZGRpbmc6IDAuNXJlbTsgKi9cXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2E3YTc7XFxyXFxuICAgIC8qIHRyYW5zaXRpb24gKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMsIGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuc2VhcmNoIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVE8gRE86IGFwcGVhcmFuY2Ugb2YgdGhpcyBidXR0b24gKi9cXHJcXG4vKiB3ZWJraXQgY2FuY2VsIGJ1dHRvbiAqL1xcclxcbjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcHJvamVjdCAqL1xcclxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIC8qIHN0eWxlICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC4xNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIC8qIHNpemUgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxyXFxuICAgIC8qIHRleHQgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsZWZ0LWNvbHVtbiA+IC5wcm9qZWN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyaWdodC1jb2x1bW4gPiAucHJvamVjdCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qgc3Ryb25nIHtcXHJcXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcclxcbn1cXHJcXG5cXHJcXG5hLnByb2plY3QtbGluazpsaW5rLCAucHJvamVjdC1saW5rOnZpc2l0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxufVxcclxcblxcclxcbmEucHJvamVjdC1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oci5wcm9qZWN0LWRpdmlkb3Ige1xcclxcbiAgICBtYXJnaW46IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVybmFsLWxpbmtzIGEge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0YXRpYy9tYWluX3BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7QUFDVjtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBLFNBQVM7QUFDVDtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQSxvQkFBb0I7QUFDcEI7Q0FDQyxZQUFZO0lBQ1QsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBLHFDQUFxQztBQUNyQyx5QkFBeUI7QUFDekI7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3Qjs7SUFFeEIsb0NBQW9DO0FBQ3hDOzs7QUFHQSxZQUFZO0FBQ1o7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGFib3V0ICovXFxyXFxuI3BvcnRmb2xpbyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmV3cyAqL1xcclxcbiNzZWN0aW9uLW5ld3MgdWx7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VjdGlvbi1uZXdzIHVsOmxhc3QtY2hpbGQge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI25ld3MtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMC41ZW0gMCAxLjMzZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtdGl0bGUsIC5uZXdzLWRhdGUge1xcclxcbiAgICBtYXJnaW46IDAgMCAwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtZGF0ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjE1ZW07XFxyXFxufVxcclxcblxcclxcbi8qIG5ld3Mgc2VhcmNoIGJhciAqL1xcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG4gICAgLyogbWFyZ2luOiAwLjVlbSAwIDAuNXJlbSAwOyAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAvKiBwYWRkaW5nOiAwLjVyZW07ICovXFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xcclxcbiAgICAvKiB0cmFuc2l0aW9uICovXFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzLCBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIFRPIERPOiBhcHBlYXJhbmNlIG9mIHRoaXMgYnV0dG9uICovXFxyXFxuLyogd2Via2l0IGNhbmNlbCBidXR0b24gKi9cXHJcXG46Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHByb2plY3QgKi9cXHJcXG4jcHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICAvKiBzdHlsZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMTg1LCAxODUsIDAuMTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAvKiBzaXplICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcclxcbiAgICAvKiB0ZXh0ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbGVmdC1jb2x1bW4gPiAucHJvamVjdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcmlnaHQtY29sdW1uID4gLnByb2plY3Qge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHN0cm9uZyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmsge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuYS5wcm9qZWN0LWxpbms6bGluaywgLnByb2plY3QtbGluazp2aXNpdGVkIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcclxcbn1cXHJcXG5cXHJcXG5hLnByb2plY3QtbGluazpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaHIucHJvamVjdC1kaXZpZG9yIHtcXHJcXG4gICAgbWFyZ2luOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5leHRlcm5hbC1saW5rcyBhIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbl9wYWdlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHttYXRlcmlhbEljb259IGZyb20gXCIuL0V4dGVybmFsTGluay5qc1wiXHJcbmltcG9ydCBSZXN1bWUgZnJvbSBcIi4uL2Fzc2V0cy9SZXN1bWUucGRmXCJcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vYXNzZXRzL1FpbnppX1BlaWxpbi5qcGdcIlxyXG5cclxuZXhwb3J0IHtyZW5kZXJBYm91dH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24tYWJvdXRcIj5cclxuICAgICAgICA8aDE+QWJvdXQ8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHZlcnRpY2FsLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJwb3J0Zm9saW9cIiBzcmM9XCIke1BvcnRmb2xpb31cIiBhbHQ9XCJQb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPiR7YWJvdXQucG9zaXRpb259IEAgJHthYm91dC5pbnN0aXR1dGV9PC9iPiA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgZS1tYWlsOiAke2Fib3V0LmVtYWlsfSA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7UmVzdW1lfVwiIGNsYXNzPVwibm9ybWFsLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHttYXRlcmlhbEljb24oXCJyZXN1bWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gfCBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJub3JtYWwtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke21hdGVyaWFsSWNvbihcImdpdGh1YlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgaWNvbiBsaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmFsc2UpID8gW1wiZmFjZWJvb2tcIiwgXCJ0d2l0dGVyXCIsIFwibGlua2VkaW5cIiwgXCJnaXRodWJcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpY29uID0+IGA8YSBocmVmPVwiXCIgY2xhc3M9XCJpY29uLWxpbmtcIj4ke21hdGVyaWFsSWNvbihpY29uKX08L2E+YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIikgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgJHthYm91dC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPGhyIGNsYXNzPVwic29saWRcIj5cclxuICAgIGA7XHJcbn0iLCJleHBvcnQge3JlbmRlckV4dGVybmFsTGlua3MsIG1hdGVyaWFsSWNvbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dGVybmFsTGlua3MobGlua3MpIHtcclxuICAgIC8vIHVuZGVmaW5lZCBsaW5rXHJcbiAgICBpZiAobGlua3MgPT0gdW5kZWZpbmVkKSByZXR1cm4gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImV4dGVybmFsLWxpbmtzXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgICAgbGlua3MubWFwKGl0ZW0gPT4gYFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLmxpbmt9XCIgJHtcclxuICAgICAgICAgICAgICAgIC8vIGxpbmsgdG8gZXh0ZXJuYWwgcGFnZVxyXG4gICAgICAgICAgICAgICAgKGl0ZW0ubGluay5zbGljZSgwLDUpPT09XCJodHRwc1wiKSA/IFwidGFyZ2V0PV9ibGFua1wiOlwiXCJcclxuICAgICAgICAgICAgfSBjbGFzcz1cIm5vcm1hbC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAke21hdGVyaWFsSWNvbihpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgYCkuam9pbihcIlwiKVxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWF0ZXJpYWxJY29uKG5hbWUpIHtcclxuICAgIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcInBhcGVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYXIgZmEtZmlsZS1hbHRcIj48L2k+YDtcclxuICAgICAgICBjYXNlIFwidmlkZW9cIjpcclxuICAgICAgICAgICAgcmV0dXJuIGA8aSBjbGFzcz1cImZhcyBmYS12aWRlb1wiPjwvaT5gO1xyXG4gICAgICAgIGNhc2UgXCJkZW1vXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYXMgZmEtZGVza3RvcFwiPjwvaT5gO1xyXG4gICAgICAgIGNhc2UgXCJsaW5rXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYXMgZmEtZXh0ZXJuYWwtbGluay1hbHRcIj48L2k+YDtcclxuICAgICAgICBjYXNlIFwicmVzdW1lXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYXIgZmEtZmlsZS1hbHRcIj48L2k+YDtcclxuICAgICAgICBjYXNlIFwiZ2l0aHViXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPmA7XHJcbiAgICAgICAgY2FzZSBcImZhY2Vib29rXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCI+PC9pPmA7XHJcbiAgICAgICAgY2FzZSBcInR3aXR0ZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGA8aSBjbGFzcz1cImZhYiBmYS10d2l0dGVyLXNxdWFyZVwiPjwvaT5gO1xyXG4gICAgICAgIGNhc2UgXCJsaW5rZWRpblwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYDxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPmA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQge3JlbmRlckhlYWRlcn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcclxuICAgIHJldHVybmBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlXCI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gUWluemkncyBQZXJzb25hbCBXZWJzaXRlIVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIGA7XHJcbn0iLCJpbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSBcIi4vSGVhZGVyLmpzXCJcclxuaW1wb3J0IHttYWluTWVudSwgcmVuZGVyTmF2QmFyfSBmcm9tIFwiLi9OYXZCYXIuanNcIlxyXG5pbXBvcnQge3JlbmRlckFib3V0fSBmcm9tIFwiLi9BYm91dC5qc1wiXHJcbmltcG9ydCB7cmVuZGVyTmV3cywgcmVuZGVyTmV3c0l0ZW1zfSBmcm9tIFwiLi9OZXdzLmpzXCJcclxuaW1wb3J0IHtyZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdEl0ZW1zfSBmcm9tIFwiLi9Qcm9qZWN0cy5qc1wiXHJcblxyXG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZShkYXRhKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgICAgICAke3JlbmRlckhlYWRlcigpfVxyXG4gICAgICAgICR7cmVuZGVyTmF2QmFyKG1haW5NZW51KX1cclxuICAgICAgICAke3JlbmRlckFib3V0KGRhdGEuYWJvdXQpfVxyXG4gICAgICAgICR7cmVuZGVyTmV3cyhkYXRhLm5ld3MpfVxyXG4gICAgICAgICR7cmVuZGVyUHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XHJcbiAgICBgO1xyXG4gICAgLy8gZmlsbCBpbiBibGFua3MgKG5ld3MsIHByb2plY3RzKVxyXG4gICAgcmVuZGVyTmV3c0l0ZW1zKGRhdGEubmV3cyk7XHJcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMoZGF0YS5wcm9qZWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyTWFpblBhZ2V9IiwiZXhwb3J0IHttYWluTWVudSwgcHJvamVjdE1lbnUsIHJlbmRlck5hdkJhcn1cclxuXHJcbnZhciBtYWluTWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICAgICAgbGluazogXCIjc2VjdGlvbi1hYm91dFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTmV3c1wiLFxyXG4gICAgICAgIGxpbms6IFwiJHNlY3Rpb24tbmV3c1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUHJvamVjdHNcIixcclxuICAgICAgICBsaW5rOiBcIiNzZWN0aW9uLXByb2plY3RzXCJcclxuICAgIH1cclxuXTtcclxuXHJcbnZhciBwcm9qZWN0TWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImdvIGJhY2tcIixcclxuICAgICAgICBsaW5rOiBcIi5cIlxyXG4gICAgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOYXZCYXIobWVudSkge1xyXG4gICAgcmV0dXJuYFxyXG4gICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICBtZW51Lm1hcChzZWN0aW9uID0+IGBcclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiR7c2VjdGlvbi5saW5rfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlY3Rpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIGApLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICAgIGA7XHJcbn0iLCJleHBvcnQge3JlbmRlck5ld3MsIHJlbmRlck5ld3NJdGVtcywgVUlTZWFyY2hOZXdzfVxyXG5cclxuY29uc3QgbmV3c01heExlbmd0aCA9IDEwO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmV3cyhuZXdzKSB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24tbmV3c1wiPlxyXG4gICAgICAgIDxoMT5OZXdzPC9oMT5cclxuICAgICAgICA8IS0tIFNlYXJjaCBCYXIgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJuZXdzXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggTmV3cy4uLlwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gTmV3cyBMaXN0IC0tPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8IS0tIHJlbmRlck5ld3NJdGVtcyhuZXdzKSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8aHIgY2xhc3M9XCJzb2xpZFwiPlxyXG4gICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmV3c0l0ZW1zKG5ld3MpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cy1saXN0XCIpLmlubmVySFRNTCA9IG5ld3MubWFwKG5ld3NJdGVtID0+IGBcclxuICAgICAgICA8cCBjbGFzcz1cImNvbC04IG5ld3MtdGl0bGVcIj4ke25ld3NJdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNvbC00IG5ld3MtZGF0ZVwiPiR7bmV3c0l0ZW0uZGF0ZX08L3A+XHJcbiAgICBgKS5zbGljZSgwLG5ld3NNYXhMZW5ndGgpLmpvaW4oXCJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVJU2VhcmNoTmV3cyhuZXdzKSB7XHJcbiAgICAvLyBmaWx0ZXIgbmV3cyB1c2luZyB0aXRsZSBrZXl3b3JkXHJcbiAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGlucHV0W25hbWU9J25ld3MnXVwiKS52YWx1ZTtcclxuICAgIGxldCBmaWx0ZXJOZXdzID0gbmV3cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICByZW5kZXJOZXdzSXRlbXMoZmlsdGVyTmV3cyk7XHJcbn0iLCJpbXBvcnQge3Byb2plY3RNZW51LCByZW5kZXJOYXZCYXJ9IGZyb20gXCIuL05hdkJhci5qc1wiXHJcbmltcG9ydCB7cmVuZGVyUHJvamVjdFNpbmdsZUl0ZW19IGZyb20gXCIuL1Byb2plY3RzLmpzXCJcclxuXHJcbmV4cG9ydCB7cmVuZGVyUHJvamVjdFBhZ2V9XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgICAgICAke3JlbmRlck5hdkJhcihwcm9qZWN0TWVudSl9XHJcbiAgICAgICAgJHtyZW5kZXJQcm9qZWN0U2luZ2xlSXRlbShwcm9qZWN0KX1cclxuICAgIGA7XHJcbn0iLCJpbXBvcnQge3JlbmRlckV4dGVybmFsTGlua3MsIG1hdGVyaWFsSWNvbn0gZnJvbSBcIi4vRXh0ZXJuYWxMaW5rLmpzXCJcclxuXHJcbmV4cG9ydCB7cmVuZGVyUHJvamVjdHMsIHJlbmRlclByb2plY3RJdGVtcywgVUlGaWx0ZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFNpbmdsZUl0ZW19XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgcmV0dXJuYFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uLXByb2plY3RzXCI+XHJcbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cclxuXHJcbiAgICAgICAgPCEtLSBGaWx0ZXIgQmFyIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgIFtcImFsbFwiLCBcImRpc3RyaWJ1dGVkIHN5c3RlbXNcIiwgXCJtYWNoaW5lIGxlYXJuaW5nXCJdLm1hcCgodGFnLCBpKSA9PiBgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm9qZWN0c1wiIHZhbHVlPVwiJHt0YWd9XCIgJHsoaT09MCk/XCJjaGVja2VkXCI6XCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaW5nIGZvcm1hdHRpbmc6IFVwcGVyY2FzZSBJbml0aWFsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCB3b3JkKSA9PiBwcmV2K1wiIFwiK3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIGApLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIFByb2plY3QgTGlzdCAtLT5cclxuICAgICAgICA8ZGl2IGlkPVwicHJvamVjdC1jb250YWluZXJcIiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8IS0tIExlZnQgQ29sdW1uIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGVmdC1jb2x1bW5cIiBjbGFzcz1cImNvbC02XCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBSaWdodCBDb2x1bW4gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyaWdodC1jb2x1bW5cIiBjbGFzcz1cImNvbC02XCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGA7XHJcbn1cclxuXHJcbi8vIHN0YWNrIGVhY2ggaXRlbSB0byBlaXRoZXIgbGVmdCBvZiByaWdodFxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbXMocHJvamVjdHMpIHtcclxuICAgIC8vIHRocmVzaG9sZCBmdW5jdGlvblxyXG4gICAgbGV0IHRocmVzaG9sZCA9IGkgPT4gaSA8IHByb2plY3RzLmxlbmd0aCAvIDI7XHJcbiAgICAvLyBsZWZ0IGNvbHVtblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWNvbHVtblwiKS5pbm5lckhUTUwgPSBcclxuICAgIHByb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aHJlc2hvbGQoaSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclByb2plY3RTaW5nbGVJdGVtKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgICAvLyByaWdodCBjb2x1bW5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtY29sdW1uXCIpLmlubmVySFRNTCA9IFxyXG4gICAgcHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKCEgdGhyZXNob2xkKGkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJQcm9qZWN0U2luZ2xlSXRlbShwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0U2luZ2xlSXRlbShwcm9qZWN0KSB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInByb2plY3RcIj5cclxuICAgICAgICA8IS0tIE1hbmRhdG9yeTogVGl0bGUgKE9wdGlvbmFsOiBJRCkgLS0+XHJcbiAgICAgICAgJHtyZW5kZXJQcm9qZWN0VGl0bGUocHJvamVjdC50aXRsZSwgcHJvamVjdC5pZCl9XHJcbiAgICAgICAgPGhyIGNsYXNzPVwic29saWQgcHJvamVjdC1kaXZpZG9yXCI+XHJcbiAgICAgICAgPCEtLSBNYW5kYXRvcnk6IEF1dGhvciAtLT5cclxuICAgICAgICAke3JlbmRlclByb2plY3RBdXRob3IocHJvamVjdC5hdXRob3IpfSA8YnI+XHJcbiAgICAgICAgPCEtLSBPcHRpb25hbDogUHVibGljYXRpb24gLS0+XHJcbiAgICAgICAgJHtyZW5kZXJQcm9qZWN0UHVibGljYXRpb24ocHJvamVjdC5wdWJsaWNhdGlvbil9XHJcbiAgICAgICAgPCEtLSBPcHRpb25hbDogVGFnIC0tPlxyXG4gICAgICAgICR7cmVuZGVyUHJvamVjdFRhZyhwcm9qZWN0LnRhZyl9XHJcbiAgICAgICAgPCEtLSBPcHRpb25hbDogRXh0ZXJuYWwgTGlua3MgLS0+XHJcbiAgICAgICAgJHtyZW5kZXJFeHRlcm5hbExpbmtzKHByb2plY3QuZXh0ZXJuYWxMaW5rKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRpdGxlKHRpdGxlLCBpZCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+XHJcbiAgICAgICAgPFN0cm9uZz4ke3RpdGxlfTwvU3Ryb25nPlxyXG4gICAgICAgICR7KGlkICE9IHVuZGVmaW5lZCkgPyBgXHJcbiAgICAgICAgPGEgaHJlZj1cIj9wcm9qZWN0PSR7aWR9XCIgY2xhc3M9XCJwcm9qZWN0LWxpbmtcIj5cclxuICAgICAgICAgICAgJHttYXRlcmlhbEljb24oXCJsaW5rXCIpfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICBgIDogXCJcIn1cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEF1dGhvcihhdXRob3IpIHtcclxuICAgIC8vIHNpbmdsZSBhdXRob3IgKFN0cmluZylcclxuICAgIHJldHVybiAodHlwZW9mIGF1dGhvciA9PSBcInN0cmluZ1wiKSA/IGF1dGhvciA6IFxyXG4gICAgICAgIC8vIG11bHRpcGxlIGF1dGhvcnMgKEFycmF5KTogZTEsIGUyLCAuLi5cclxuICAgICAgICBhdXRob3IucmVkdWNlKChzdHIsIGVsZW1lbnQpID0+IGAke3N0cn0sICR7ZWxlbWVudH1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0UHVibGljYXRpb24ocHVibGljYXRpb24pIHtcclxuICAgIHJldHVybiAocHVibGljYXRpb24gIT0gdW5kZWZpbmVkKSA/IGBcclxuICAgICAgICA8aT4ke3B1YmxpY2F0aW9ufTwvaT4gPGJyPlxyXG4gICAgYCA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhZyh0YWcpIHtcclxuICAgIHJldHVybiAodGFnICE9IHVuZGVmaW5lZCkgPyBgXHJcbiAgICAke1xyXG4gICAgICAgIC8vIHByaW50IGFsbCB0YWdzLCBjb252ZXJ0IHNwYWNlIGludG8gXCItXCIgYXMgY2xhc3MgbmFtZVxyXG4gICAgICAgIHRhZy5tYXAodGFnTmFtZSA9PiBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnICR7dGFnTmFtZS5yZXBsYWNlKFwiIFwiLCBcIi1cIil9XCI+JHt0YWdOYW1lfTwvc3Bhbj5cclxuICAgICAgICBgKS5qb2luKFwiXCIpXHJcbiAgICB9IDxicj5cclxuICAgIGAgOiBcIlwiXHJcbn1cclxuXHJcbi8vIFVzZXIgSW50ZXJhY3Rpb246IGZpbHRlciBjaGVja2JveFxyXG5mdW5jdGlvbiBVSUZpbHRlclByb2plY3RzKGNoZWNrYm94LCBwcm9qZWN0cyl7XHJcbiAgICAvLyBjb252ZXJ0IE5vZGVsaXN0IHRvIEFycmF5XHJcbiAgICBsZXQgZmlsdGVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlciBpbnB1dFtuYW1lPSdwcm9qZWN0cyddXCIpKTtcclxuICAgIGxldCBjaGVja0JveEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyIGlucHV0W3ZhbHVlPSdhbGwnXVwiKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2tib3ggTG9naWNcclxuICAgIGlmIChjaGVja2JveC52YWx1ZSA9PT0gXCJhbGxcIiAmJiBjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgLy8gaWYgXCJhbGxcIiBpcyBzZWxlY3RlZCwgdW5jaGVjayBhbGwgb3RoZXIgdGFnc1xyXG4gICAgICAgIGZpbHRlci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAvLyBpZiBjaGVja2VkIG90aGVyIHRhZywgdW5jaGVjayBcImFsbFwiXHJcbiAgICAgICAgY2hlY2tCb3hBbGwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChmaWx0ZXIuZXZlcnkodGFnID0+IHRhZy5jaGVja2VkPT1mYWxzZSkpIHtcclxuICAgICAgICAvLyBpZiBubyBib3ggaXMgY2hlY2tlZCwgY2hlY2sgXCJhbGxcIlxyXG4gICAgICAgIGNoZWNrQm94QWxsLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBSZW5kZXJcclxuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xyXG4gICAgZmlsdGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkgc2VsZWN0ZWQucHVzaChpdGVtLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKFwiYWxsXCIpKSB7XHJcbiAgICAgICAgLy8gcmVuZGVyIGFsbFxyXG4gICAgICAgIHJlbmRlclByb2plY3RJdGVtcyhwcm9qZWN0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbmRlciBzZWxlY3RlZFxyXG4gICAgICAgIHJlbmRlclByb2plY3RJdGVtcyhwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgcHJvamVjdGVkIGlzIHRhZ2dlZCBhbmQgY29udGFpbnMgYW55IHNlbGVjdGVkIHRhZ1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50YWcgIT0gdW5kZWZpbmVkICYmIHNlbGVjdGVkLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQucmVkdWNlKChwcmV2LCB0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiB8fCBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtVSVNlYXJjaE5ld3N9IGZyb20gXCIuL05ld3MuanNcIlxyXG5pbXBvcnQge1VJRmlsdGVyUHJvamVjdHN9IGZyb20gXCIuL1Byb2plY3RzLmpzXCJcclxuXHJcbmV4cG9ydCB7dXNlckludGVyYWN0aW9ufVxyXG5cclxuZnVuY3Rpb24gdXNlckludGVyYWN0aW9uKGRhdGEpIHtcclxuICAgIC8vIHNlYXJjaCBuZXdzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaCBpbnB1dFtuYW1lPSduZXdzJ11cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1VJU2VhcmNoTmV3cyhkYXRhLm5ld3MpfSk7XHJcbiAgICAvLyBmaWx0ZXIgcHJvamVjdHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyIGlucHV0W25hbWU9J3Byb2plY3RzJ11cIilcclxuICAgIC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1VJRmlsdGVyUHJvamVjdHMoYm94LCBkYXRhLnByb2plY3RzKX0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7cmVuZGVyTWFpblBhZ2V9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblBhZ2UuanNcIlxyXG5pbXBvcnQge3JlbmRlclByb2plY3RQYWdlfSBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLmpzXCJcclxuaW1wb3J0IHt1c2VySW50ZXJhY3Rpb259IGZyb20gXCIuL2NvbXBvbmVudHMvVXNlckludGVyYWN0aW9uLmpzXCJcclxuXHJcbmltcG9ydCBcIi4vc3RhdGljL2luZGV4LmNzc1wiXHJcbmltcG9ydCBcIi4vc3RhdGljL21haW5fcGFnZS5jc3NcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9hc3NldHMvZGF0YS5qc29uXCJcclxuXHJcbi8qIE5vIGxvbmdlciBuZWVkcyB0byBmZXRjaCBqc29uXHJcbi8vIGZldGNoIEpTT05cclxuZmV0Y2goRGF0YSlcclxuLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gZmV0Y2gganNvbiBkYXRhXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59KVxyXG4udGhlbihkYXRhID0+IHtcclxuICAgIC8vIHJlY2VpdmVkIGZldGNoIGRhdGFcclxuICAgIC8vIC8vIDEuIFJlbmRlciBQYWdlXHJcbiAgICAvLyByZW5kZXJNYWluUGFnZShkYXRhKTtcclxuXHJcbiAgICAvLyAvLyAyLiBVc2VyIEludGVyYWN0aW9uXHJcbiAgICAvLyB1c2VySW50ZXJhY3Rpb24oZGF0YSk7XHJcblxyXG4gICAgLy8gY2hlY2sgdXJsIHBhcmFtZXRlclxyXG59KVxyXG4qL1xyXG5cclxuLy8gY3JlYXRlIGNvbnRhaW5lclxyXG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XHJcbmNvbnRhaW5lci5pZCA9IFwiaG9tZS1jb250YWluZXJcIjtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuLy8gcmVuZGVyIHBhZ2VcclxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuaWYgKHVybFBhcmFtcy5oYXMoXCJwcm9qZWN0XCIpKSB7XHJcbiAgICAvLyBUTyBETzogcmVuZGVyIHByb2plY3QgZGV0YWlsICh1c2UgYSBzZXBhcmF0ZSBKU09OKVxyXG4gICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkPT09dXJsUGFyYW1zLmdldChcInByb2plY3RcIikpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCk7XHJcbn0gZWxzZSB7XHJcbiAgICByZW5kZXJNYWluUGFnZShkYXRhKTtcclxuICAgIHVzZXJJbnRlcmFjdGlvbihkYXRhKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=