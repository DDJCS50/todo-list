"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
}

:root {
  --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

button {
  display: flex;
  border: none;
  margin: 0;
  text-decoration: none;
  align-items: center;
  background-color: #059669;
  cursor: pointer;
  text-align: center;
}

h1, h2, h3, h4, h5 {
  font-weight: bolder;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-wrap: wrap;
}

header {
  background-color: #059669;
  width: 100vw;
  height: 7.5vh;
  display: flex;
  align-items: center;
  box-shadow: inset -4px -4px 20px 0px gray;
  padding: 12px;
}
header > img {
  height: 50px;
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 16px;
  margin-right: auto;
}
header #plusTask {
  height: 25px;
  width: 25px;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: gold;
  margin-right: 4px;
}

#sidebar {
  height: 92.5vh;
  width: 20%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  gap: 12px;
  background-color: #f3f4f6;
}
#sidebar > div {
  display: flex;
  gap: 4px;
  margin-right: auto;
}
#sidebar .projectSection {
  margin-top: 16px;
}
#sidebar #newList {
  margin-top: auto;
  align-items: center;
}
#sidebar #newList > #plusList {
  height: 25px;
  width: 25px;
  aspect-ratio: 1/1;
  margin-right: 4px;
}

main {
  height: 92.5vh;
  width: 80%;
  background-color: #f8fafc;
  margin: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cardBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  padding: 24px;
  overflow: auto;
  height: 100%;
  width: 100%;
  align-self: flex-start;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  width: 300px;
  background-color: #e2e8f0;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 6px 7px 10px -5px gray;
}

.subContainer {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}

h1 {
  font-size: 2rem;
}

h3 {
  color: #0069ed;
}

input {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  background: lightgrey;
  cursor: pointer;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

input:checked {
  box-shadow: inset 0 0 0 20px #0069ed;
}

input:not(:checked)::before {
  display: none;
}

input:checked::before {
  display: inline-block;
  position: relative;
  content: "✓";
  top: -1px;
  left: 3px;
  font-size: 1.5rem;
  color: #f3f4f6;
}

input:hover {
  background-color: #ccc;
}

label {
  cursor: pointer;
}

.taskContainer {
  display: flex;
  align-items: center;
  width: -moz-max-content;
  width: max-content;
}

#mainTitle {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  padding-left: 24px;
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;;;;;;;;;;;;;EAaE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kIAAkI;AACpI;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,cAAc;EACd,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,qBAAqB;EACrB,eAAe;EACf,SAAS;EACT,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB","sourcesContent":["@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nimg, picture, svg, video {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n  --system-ui: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nbutton {\n  display: flex;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  align-items: center;\n  background-color: #059669;\n  cursor: pointer;\n  text-align: center;\n}\n\nh1, h2, h3, h4, h5 {\n  font-weight: bolder;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background-color: #059669;\n  width: 100vw;\n  height: 7.5vh;\n  display: flex;\n  align-items: center;\n  box-shadow: inset -4px -4px 20px 0px gray;\n  padding: 12px;\n}\nheader > img {\n  height: 50px;\n  width: 50px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  margin-right: auto;\n}\nheader #plusTask {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n#sidebar {\n  height: 92.5vh;\n  width: 20%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 16px;\n  gap: 12px;\n  background-color: #f3f4f6;\n}\n#sidebar > div {\n  display: flex;\n  gap: 4px;\n  margin-right: auto;\n}\n#sidebar .projectSection {\n  margin-top: 16px;\n}\n#sidebar #newList {\n  margin-top: auto;\n  align-items: center;\n}\n#sidebar #newList > #plusList {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  margin-right: 4px;\n}\n\nmain {\n  height: 92.5vh;\n  width: 80%;\n  background-color: #f8fafc;\n  margin: 0;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#cardBox {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 24px;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  align-self: flex-start;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 250px;\n  width: 300px;\n  background-color: #e2e8f0;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 6px 7px 10px -5px gray;\n}\n\n.subContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh3 {\n  color: #0069ed;\n}\n\ninput {\n  width: 24px;\n  height: 24px;\n  border-radius: 8px;\n  transition: box-shadow 0.3s;\n  background: lightgrey;\n  cursor: pointer;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\ninput:checked {\n  box-shadow: inset 0 0 0 20px #0069ed;\n}\n\ninput:not(:checked)::before {\n  display: none;\n}\n\ninput:checked::before {\n  display: inline-block;\n  position: relative;\n  content: \"✓\";\n  top: -1px;\n  left: 3px;\n  font-size: 1.5rem;\n  color: #f3f4f6;\n}\n\ninput:hover {\n  background-color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.taskContainer {\n  display: flex;\n  align-items: center;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n#mainTitle {\n  display: flex;\n  align-self: flex-start;\n  flex-direction: column;\n  padding-left: 24px;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./src/log.js");




_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderLogo();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderPlus();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Today');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Upcoming');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Someday');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProjectSections('Family');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProject('Vacation in Rome');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProjectSections('Work');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProject('Prepare Presentation');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProjectSections('Hobbies');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderProject('Learn Basic Italian');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderAddList();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderMainTitle();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderMainContainer();
// initialRender.renderMainSub(document.querySelector('#cardBox'));
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Receive Funds', 'Need Money', 'August', 1);
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Open Account', 'Need Money', 'August', 1);
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Spend Money', 'Need Money', 'August', 1);
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.renderTasks();

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialTasks: () => (/* binding */ initialTasks)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


const taskLog = () => {
  let myTasks = [];

  const taskFactory = (title, description, dueDate, priority, notes) => {
    let taskInLog = false;

    const getTitle = () => {
      title = prompt('What is the title of the task?');
    }

    return {title, description, dueDate, priority, notes};
  }

  function addTask(title, description, dueDate, priority, notes) {
    let taskInLog = false;
    myTasks.forEach((task) => {
        if (title == task.title) {
            taskInLog = true;
        }
    });
    if (taskInLog == false) {
        let newTask = taskFactory(title, description, dueDate, priority, notes);
        myTasks.push(newTask);
    }
    console.log(myTasks);
  }

  function renderTasks() {
    myTasks.forEach((task) => {
      _page__WEBPACK_IMPORTED_MODULE_0__.initialRender.renderMainSub(document.querySelector('#cardBox'), task.title);
    });
  }

  return {
    taskFactory,
    addTask,
    renderTasks
  }
};
const initialTasks = taskLog();

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialRender: () => (/* binding */ initialRender)
/* harmony export */ });
/* harmony import */ var _orb_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orb-logo.jpg */ "./src/orb-logo.jpg");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");



const homePage = () => {
  const header = document.querySelector('header');
  const sidebar = document.querySelector('#sidebar');
  const main = document.querySelector('main');

  function renderLogo() {
    const logo = document.createElement('img');
    logo.src = './images/orb-logo.jpg';
    logo.alt = 'Company logo';
    header.appendChild(logo);
  }

  function renderPlus() {
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    const plusBtn = document.createElement('button');
    plusText.innerText = 'New Project';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusTask';
    plusBtn.appendChild(plus);
    plusBtn.appendChild(plusText);
    header.appendChild(plusBtn);
  }

  function renderDueDates(section) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.id = section.toLowerCase();

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('p');
    title.innerText = section;

    dueDateDiv.appendChild(symbol);
    dueDateDiv.appendChild(title);
    sidebar.appendChild(dueDateDiv);
  }

  function renderProjectSections(section) {
    const projectSection = document.createElement('div');
    projectSection.id = section;
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('h2');
    title.innerText = section;

    projectSection.appendChild(symbol);
    projectSection.appendChild(title);
    sidebar.appendChild(projectSection);
  }

  function renderProject(section) {
    const project = document.createElement('div');
    project.id = section;
    project.classList = 'project';

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('p');
    title.innerText = section;

    project.appendChild(symbol);
    project.appendChild(title);
    sidebar.appendChild(project);
  }

  function renderAddList() {
    const newList = document.createElement('div');
    newList.id = 'newList';
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    plusText.innerText = 'New List';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusList';
    newList.appendChild(plus);
    newList.appendChild(plusText);
    sidebar.appendChild(newList);
  }

  function renderMainContainer() {
    const mainBox = document.createElement('div');
    mainBox.id = 'cardBox';

    main.appendChild(mainBox);
  }

  function renderMainTitle() {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'mainTitle';
    const mainTitle = document.createElement('h1');
    const mainBlurb = document.createElement('p');

    mainTitle.innerText = 'Prepare Presentation';
    mainBlurb.innerText = 'Keep the talk and slides simple: what are three things everyone should remember?';

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(mainBlurb);
    main.appendChild(titleContainer);
  }

  function renderMainSub(box, title, description, dueDate, priority, notes) {
    const subContainer = document.createElement('div');
    subContainer.classList = 'subContainer';

    const titleContainer = document.createElement('div');
    titleContainer.classList = 'titleContainer';
    const subTitle = document.createElement('h3');
    subTitle.innerText = title;
    const edit = document.createElement('img');
    edit.alt = 'ellipsis';

    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';

    const taskLabel = document.createElement('label');
    taskLabel.innerText = 'Revise Introduction';
    taskLabel.for = 'first';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'first';

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskLabel);
    titleContainer.appendChild(subTitle);
    titleContainer.appendChild(edit);
    subContainer.appendChild(titleContainer);
    subContainer.appendChild(taskContainer);
    box.appendChild(subContainer);
  }

  return {
    renderLogo,
    renderPlus,
    renderDueDates,
    renderProjectSections,
    renderProject,
    renderAddList,
    renderMainContainer,
    renderMainTitle,
    renderMainSub
  }
};
const initialRender = homePage();

/***/ }),

/***/ "./src/orb-logo.jpg":
/*!**************************!*\
  !*** ./src/orb-logo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/orb-logo.jpg";

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plus.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEZBQTBGLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFN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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sZ0RBQWE7QUFDbkIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDekMyQjtBQUNKOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmltZywgcGljdHVyZSwgc3ZnLCB2aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbjpyb290IHtcbiAgLS1zeXN0ZW0tdWk6IHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA3LjV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDIwcHggMHB4IGdyYXk7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5oZWFkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaGVhZGVyICNwbHVzVGFzayB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuI3NpZGViYXIge1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbn1cbiNzaWRlYmFyID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiNzaWRlYmFyIC5wcm9qZWN0U2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4jc2lkZWJhciAjbmV3TGlzdCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2lkZWJhciAjbmV3TGlzdCA+ICNwbHVzTGlzdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogOTIuNXZoO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjYXJkQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA2cHggN3B4IDEwcHggLTVweCBncmF5O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjMDA2OWVkO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dDpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjBweCAjMDA2OWVkO1xufVxuXG5pbnB1dDpub3QoOmNoZWNrZWQpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dDpjaGVja2VkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29udGVudDogXCLinJNcIjtcbiAgdG9wOiAtMXB4O1xuICBsZWZ0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2YzZjRmNjtcbn1cblxuaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4jbWFpblRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFDaEI7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtJQUFrSTtBQUNwSTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFNBQVM7RUFDVCx3QkFBd0I7S0FDckIscUJBQXFCO1VBQ2hCLGdCQUFnQjtBQUMxQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmltZywgcGljdHVyZSwgc3ZnLCB2aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1zeXN0ZW0tdWk6IHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNy41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCAyMHB4IDBweCBncmF5O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuaGVhZGVyID4gaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5oZWFkZXIgI3BsdXNUYXNrIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBoZWlnaHQ6IDkyLjV2aDtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuI3NpZGViYXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4jc2lkZWJhciAucHJvamVjdFNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuI3NpZGViYXIgI25ld0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzaWRlYmFyICNuZXdMaXN0ID4gI3BsdXNMaXN0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDkyLjV2aDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDdweCAxMHB4IC01cHggZ3JheTtcXG59XFxuXFxuLnN1YkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzAwNjllZDtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjBweCAjMDA2OWVkO1xcbn1cXG5cXG5pbnB1dDpub3QoOmNoZWNrZWQpOjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgdG9wOiAtMXB4O1xcbiAgbGVmdDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2YzZjRmNjtcXG59XFxuXFxuaW5wdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4jbWFpblRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctbGVmdDogMjRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgaW5pdGlhbFRhc2tzIH0gZnJvbSAnLi9sb2cnO1xuXG5pbml0aWFsUmVuZGVyLnJlbmRlckxvZ28oKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyUGx1cygpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJEdWVEYXRlcygnVG9kYXknKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyRHVlRGF0ZXMoJ1VwY29taW5nJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlckR1ZURhdGVzKCdTb21lZGF5Jyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlclByb2plY3RTZWN0aW9ucygnRmFtaWx5Jyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlclByb2plY3QoJ1ZhY2F0aW9uIGluIFJvbWUnKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyUHJvamVjdFNlY3Rpb25zKCdXb3JrJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlclByb2plY3QoJ1ByZXBhcmUgUHJlc2VudGF0aW9uJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlclByb2plY3RTZWN0aW9ucygnSG9iYmllcycpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJQcm9qZWN0KCdMZWFybiBCYXNpYyBJdGFsaWFuJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlckFkZExpc3QoKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyTWFpblRpdGxlKCk7XG5pbml0aWFsUmVuZGVyLnJlbmRlck1haW5Db250YWluZXIoKTtcbi8vIGluaXRpYWxSZW5kZXIucmVuZGVyTWFpblN1Yihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEJveCcpKTtcbmluaXRpYWxUYXNrcy5hZGRUYXNrKCdSZWNlaXZlIEZ1bmRzJywgJ05lZWQgTW9uZXknLCAnQXVndXN0JywgMSk7XG5pbml0aWFsVGFza3MuYWRkVGFzaygnT3BlbiBBY2NvdW50JywgJ05lZWQgTW9uZXknLCAnQXVndXN0JywgMSk7XG5pbml0aWFsVGFza3MuYWRkVGFzaygnU3BlbmQgTW9uZXknLCAnTmVlZCBNb25leScsICdBdWd1c3QnLCAxKTtcbmluaXRpYWxUYXNrcy5yZW5kZXJUYXNrcygpOyIsImltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHRhc2tMb2cgPSAoKSA9PiB7XG4gIGxldCBteVRhc2tzID0gW107XG5cbiAgY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgICBsZXQgdGFza0luTG9nID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgIHRpdGxlID0gcHJvbXB0KCdXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgdGFzaz8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICBsZXQgdGFza0luTG9nID0gZmFsc2U7XG4gICAgbXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0aXRsZSA9PSB0YXNrLnRpdGxlKSB7XG4gICAgICAgICAgICB0YXNrSW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICAgICAgbXlUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhteVRhc2tzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICAgIG15VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaW5pdGlhbFJlbmRlci5yZW5kZXJNYWluU3ViKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkQm94JyksIHRhc2sudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YXNrRmFjdG9yeSxcbiAgICBhZGRUYXNrLFxuICAgIHJlbmRlclRhc2tzXG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbFRhc2tzID0gdGFza0xvZygpOyIsImltcG9ydCBsb2dvIGZyb20gJy4vb3JiLWxvZ28uanBnJztcbmltcG9ydCBwbHVzIGZyb20gJy4vcGx1cy5zdmcnO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckxvZ28oKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gJy4vaW1hZ2VzL29yYi1sb2dvLmpwZyc7XG4gICAgbG9nby5hbHQgPSAnQ29tcGFueSBsb2dvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQbHVzKCkge1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwbHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGx1c1RleHQuaW5uZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICBwbHVzLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgcGx1cy5hbHQgPSAnUGx1cyBzaWduJztcbiAgICBwbHVzLmlkID0gJ3BsdXNUYXNrJztcbiAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXMpO1xuICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1c1RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwbHVzQnRuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckR1ZURhdGVzKHNlY3Rpb24pIHtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5pZCA9IHNlY3Rpb24udG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN5bWJvbC5hbHQgPSAnIyc7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBzZWN0aW9uO1xuXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0U2VjdGlvbnMoc2VjdGlvbikge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb24uaWQgPSBzZWN0aW9uO1xuICAgIHByb2plY3RTZWN0aW9uLmNsYXNzTGlzdCA9ICdwcm9qZWN0U2VjdGlvbic7XG5cbiAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzeW1ib2wuYWx0ID0gJyMnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHNlY3Rpb247XG5cbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3Qoc2VjdGlvbikge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0LmlkID0gc2VjdGlvbjtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdCA9ICdwcm9qZWN0JztcblxuICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN5bWJvbC5hbHQgPSAnIyc7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBzZWN0aW9uO1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJBZGRMaXN0KCkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdMaXN0LmlkID0gJ25ld0xpc3QnO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwbHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzVGV4dC5pbm5lclRleHQgPSAnTmV3IExpc3QnO1xuICAgIHBsdXMuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICBwbHVzLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHBsdXMuaWQgPSAncGx1c0xpc3QnO1xuICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgbmV3TGlzdC5hcHBlbmRDaGlsZChwbHVzVGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1haW5Db250YWluZXIoKSB7XG4gICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Cb3guaWQgPSAnY2FyZEJveCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Cb3gpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWFpblRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAnbWFpblRpdGxlJztcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG1haW5CbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1haW5UaXRsZS5pbm5lclRleHQgPSAnUHJlcGFyZSBQcmVzZW50YXRpb24nO1xuICAgIG1haW5CbHVyYi5pbm5lclRleHQgPSAnS2VlcCB0aGUgdGFsayBhbmQgc2xpZGVzIHNpbXBsZTogd2hhdCBhcmUgdGhyZWUgdGhpbmdzIGV2ZXJ5b25lIHNob3VsZCByZW1lbWJlcj8nO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQmx1cmIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWFpblN1Yihib3gsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgY29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdzdWJDb250YWluZXInO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QgPSAndGl0bGVDb250YWluZXInO1xuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdC5hbHQgPSAnZWxsaXBzaXMnO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Rhc2tDb250YWluZXInO1xuXG4gICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrTGFiZWwuaW5uZXJUZXh0ID0gJ1JldmlzZSBJbnRyb2R1Y3Rpb24nO1xuICAgIHRhc2tMYWJlbC5mb3IgPSAnZmlyc3QnO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5pZCA9ICdmaXJzdCc7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIGJveC5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJMb2dvLFxuICAgIHJlbmRlclBsdXMsXG4gICAgcmVuZGVyRHVlRGF0ZXMsXG4gICAgcmVuZGVyUHJvamVjdFNlY3Rpb25zLFxuICAgIHJlbmRlclByb2plY3QsXG4gICAgcmVuZGVyQWRkTGlzdCxcbiAgICByZW5kZXJNYWluQ29udGFpbmVyLFxuICAgIHJlbmRlck1haW5UaXRsZSxcbiAgICByZW5kZXJNYWluU3ViXG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbFJlbmRlciA9IGhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9