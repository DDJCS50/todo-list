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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dots-horizontal.svg */ "./src/dots-horizontal.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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
header #plusSub {
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
  align-items: center;
}
#sidebar > div > button {
  background-color: #f3f4f6;
  padding: 0;
  align-self: flex-start;
}
#sidebar .projectSection {
  margin-top: 16px;
}
#sidebar #newList {
  margin-top: auto;
  align-items: center;
  background-color: #f3f4f6;
  margin-left: auto;
}
#sidebar #newList > div {
  display: flex;
  align-items: center;
}
#sidebar #newList > div #plusList {
  height: 25px;
  width: 25px;
  aspect-ratio: 1/1;
  margin-right: 4px;
}
#sidebar img {
  width: 1.5rem;
  height: 1.5rem;
}
#sidebar .project {
  display: flex;
  gap: 4px;
  align-items: center;
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
main #plusToDo {
  height: 25px;
  width: 25px;
  aspect-ratio: 1/1;
  border-radius: 16px;
  background-color: gold;
  margin-right: 4px;
}

.dropdown {
  position: absolute;
  right: 44px;
  width: 120px;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  margin-top: 0.3rem;
  background: #f8fafc;
  visibility: hidden;
  opacity: 0;
  transform: translateY(0.5rem);
  transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);
}
.dropdown button {
  display: flex;
  align-items: center;
  -moz-column-gap: var(--gap);
       column-gap: var(--gap);
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: black;
  border-radius: 8px;
  font-size: 0.75rem;
}
.dropdown button:hover {
  background-color: #f3f4f6;
}
.dropdown textarea {
  outline: none;
  resize: none;
  overflow: auto;
  width: 100%;
  height: 100px;
  box-shadow: inset -1px -1px 7px 0px gray;
  border: 1px solid lightgray;
  border-radius: 8px;
}
.dropdown #dueDateInput {
  background-color: #f8fafc;
  width: 100px;
  border-radius: 0;
  border: 1px solid black;
  height: 1.5rem;
}
.dropdown #priorityInput {
  background-color: #f8fafc;
  width: 100px;
  border-radius: 0;
  border: 1px solid black;
  height: 1.5rem;
}

#dropdownBtn {
  display: flex;
  background: transparent;
  height: 24px;
  width: 24px;
  padding: 0;
}

#dropdownToDo {
  width: 100%;
  position: relative;
  right: 0;
}

.container {
  height: 24px;
  width: 24px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
}

.containerToDoDropdown {
  position: relative;
  width: 100%;
}

.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0rem);
  display: block;
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
.subContainer > .taskContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
.titleContainer img {
  height: 1.5rem;
  width: 1.5rem;
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
  justify-content: flex-start;
}

#mainTitle {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  padding-left: 24px;
}

.projectContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nimg, picture, svg, video {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n  --system-ui: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nbutton {\n  display: flex;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  align-items: center;\n  background-color: #059669;\n  cursor: pointer;\n  text-align: center;\n}\n\nh1, h2, h3, h4, h5 {\n  font-weight: bolder;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background-color: #059669;\n  width: 100vw;\n  height: 7.5vh;\n  display: flex;\n  align-items: center;\n  box-shadow: inset -4px -4px 20px 0px gray;\n  padding: 12px;\n}\nheader > img {\n  height: 50px;\n  width: 50px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  margin-right: auto;\n}\nheader #plusTask {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\nheader #plusSub {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n#sidebar {\n  height: 92.5vh;\n  width: 20%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 16px;\n  gap: 12px;\n  background-color: #f3f4f6;\n}\n#sidebar > div {\n  display: flex;\n  gap: 4px;\n  margin-right: auto;\n  align-items: center;\n}\n#sidebar > div > button {\n  background-color: #f3f4f6;\n  padding: 0;\n  align-self: flex-start;\n}\n#sidebar .projectSection {\n  margin-top: 16px;\n}\n#sidebar #newList {\n  margin-top: auto;\n  align-items: center;\n  background-color: #f3f4f6;\n  margin-left: auto;\n}\n#sidebar #newList > div {\n  display: flex;\n  align-items: center;\n}\n#sidebar #newList > div #plusList {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  margin-right: 4px;\n}\n#sidebar img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#sidebar .project {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\nmain {\n  height: 92.5vh;\n  width: 80%;\n  background-color: #f8fafc;\n  margin: 0;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain #plusToDo {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n.dropdown {\n  position: absolute;\n  right: 44px;\n  width: 120px;\n  box-shadow: var(--shadow);\n  border-radius: var(--radius);\n  margin-top: 0.3rem;\n  background: #f8fafc;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(0.5rem);\n  transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);\n}\n.dropdown button {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--gap);\n       column-gap: var(--gap);\n  padding: 0.8rem 1rem;\n  text-decoration: none;\n  color: black;\n  border-radius: 8px;\n  font-size: 0.75rem;\n}\n.dropdown button:hover {\n  background-color: #f3f4f6;\n}\n.dropdown textarea {\n  outline: none;\n  resize: none;\n  overflow: auto;\n  width: 100%;\n  height: 100px;\n  box-shadow: inset -1px -1px 7px 0px gray;\n  border: 1px solid lightgray;\n  border-radius: 8px;\n}\n.dropdown #dueDateInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n}\n.dropdown #priorityInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n}\n\n#dropdownBtn {\n  display: flex;\n  background: transparent;\n  height: 24px;\n  width: 24px;\n  padding: 0;\n}\n\n#dropdownToDo {\n  width: 100%;\n  position: relative;\n  right: 0;\n}\n\n.container {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"../dots-horizontal.svg\");\n  background-repeat: no-repeat;\n}\n\n.containerToDoDropdown {\n  position: relative;\n  width: 100%;\n}\n\n.show {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0rem);\n  display: block;\n}\n\n#cardBox {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 24px;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  align-self: flex-start;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 250px;\n  width: 300px;\n  background-color: #e2e8f0;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 6px 7px 10px -5px gray;\n}\n\n.subContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n}\n.subContainer > .taskContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n.titleContainer img {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh3 {\n  color: #0069ed;\n}\n\ninput {\n  width: 24px;\n  height: 24px;\n  border-radius: 8px;\n  transition: box-shadow 0.3s;\n  background: lightgrey;\n  cursor: pointer;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\ninput:checked {\n  box-shadow: inset 0 0 0 20px #0069ed;\n}\n\ninput:not(:checked)::before {\n  display: none;\n}\n\ninput:checked::before {\n  display: inline-block;\n  position: relative;\n  content: \"✓\";\n  top: -1px;\n  left: 3px;\n  font-size: 1.5rem;\n  color: #f3f4f6;\n}\n\ninput:hover {\n  background-color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.taskContainer {\n  display: flex;\n  align-items: center;\n  width: -moz-max-content;\n  width: max-content;\n  justify-content: flex-start;\n}\n\n#mainTitle {\n  display: flex;\n  align-self: flex-start;\n  flex-direction: column;\n  padding-left: 24px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.svg */ "./src/star.svg");
/* harmony import */ var _calendar_month_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-month.svg */ "./src/calendar-month.svg");
/* harmony import */ var _archive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archive.svg */ "./src/archive.svg");







_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderLogo();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderPlus();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Today', _star_svg__WEBPACK_IMPORTED_MODULE_3__, 'star');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Upcoming', _calendar_month_svg__WEBPACK_IMPORTED_MODULE_4__, 'calendar');
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderDueDates('Someday', _archive_svg__WEBPACK_IMPORTED_MODULE_5__, 'archive');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addList('Vacations');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addList('Family');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addList('Work');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addList('Hobbies');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.renderLists();
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addProject('Another Presentation', 'Work');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addProject('See Mom', 'Family');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addProject('Go Skateboarding', 'Hobbies');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.renderProjects();
_page__WEBPACK_IMPORTED_MODULE_1__.initialRender.renderAddList();
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Receive Funds', 'See Mom');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Open Account', 'Another Presentation');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addTask('Spend Money', 'Go Skateboarding');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.renderTasks();
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addToDo('Something', 'Open Account');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addToDo('Something Else', 'Spend Money');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addToDo('We really need to get funds', 'Receive Funds');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addToDo('We need funds', 'Receive Funds');
_log__WEBPACK_IMPORTED_MODULE_2__.initialTasks.addToDo('We really need to get dosh', 'Receive Funds');

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
  let myLists = [];
  let myProjects = [];
  let myTasks = [];
  let myToDos = [];

  const listFactory = (title) => {
    return {title};
  }

  const projectFactory = (title, parentTitle) => {
    return {title, parentTitle};
  }

  const taskFactory = (title, parentTitle) => {
    return {title, parentTitle};
  }

  const toDoFactory = (title, parentTitle, description, dueDate, priority) => {
    let toDoIndex = 2;
    let toDoId = '2';

    return {title, parentTitle, description, dueDate, priority};
  }

  function addList(title) {
    let lisInLog = false;
    myLists.forEach((list) => {
        if (title == list.title) {
          lisInLog = true;
        }
    });
    if (lisInLog == false) {
        let newList = listFactory(title);
        myLists.push(newList);
        return newList;
    }
  }

  function addProject(title, parentTitle) {
    let projectInLog = false;
    myProjects.forEach((project) => {
        if (title == project.title) {
          projectInLog = true;
        }
    });
    if (projectInLog == false) {
        let newProject = projectFactory(title, parentTitle);
        myProjects.push(newProject);
    }
  }

  function addTask(title, parentTitle) {
    let taskInLog = false;
    myTasks.forEach((task) => {
        if (title == task.title) {
          taskInLog = true;
        }
    });
    if (taskInLog == false) {
        let newTask = taskFactory(title, parentTitle);
        myTasks.push(newTask);
    }
  }

  function addToDo(title, parentTitle, description, dueDate, priority) {
    let toDoInLog = false;
    myToDos.forEach((toDo) => {
      if (toDo.title == title) {
        toDoInLog = true;
      }
    });
    if (toDoInLog == false) {
      let newToDo = toDoFactory(title, parentTitle, description, dueDate, priority);
      myToDos.push(newToDo);
    }
  }

  function renderLists() {
    myLists.forEach((list) => {
      let id = list.title.replace(/\s+/g, '-').toLowerCase();
      _page__WEBPACK_IMPORTED_MODULE_0__.initialRender.displayLists(list.title);
    });
  }

  function renderProjects() {
    myProjects.forEach((project) => {
      let id = project.parentTitle.replace(/\s+/g, '-').toLowerCase();
      _page__WEBPACK_IMPORTED_MODULE_0__.initialRender.displayProject(document.querySelector(`#${id}`).nextSibling, project.title, project.parentTitle);
    });
  }

  function renderTasks(parentTitle) {
    myTasks.forEach((task) => {
      if (task.parentTitle == parentTitle) {
        _page__WEBPACK_IMPORTED_MODULE_0__.initialRender.renderMainSub(document.querySelector('#cardBox'), task.title);
      } else {
        return;
      }
      renderToDos(task.title);
    });
  }

  function renderToDos(parentTitle) {
    for (let i = 0; i < myToDos.length; i++) {
      myToDos[i].toDoIndex = i;
      myToDos[i].toDoId = i.toString();
    }
    const idContainer = document.querySelector(`#${parentTitle.replace(/\s+/g, '-').toLowerCase()}`);
    idContainer.nextSibling.innerHTML = '';
    myToDos.forEach((toDo) => {
      if (toDo.parentTitle == parentTitle) {
        let id = toDo.parentTitle.replace(/\s+/g, '-').toLowerCase();
        _page__WEBPACK_IMPORTED_MODULE_0__.initialRender.displayTask(document.querySelector(`#${id}`).nextSibling, toDo.title, toDo.parentTitle, toDo);
      }
    });
    console.log(myToDos);
  }

  return {
    addList,
    addProject,
    addTask,
    addToDo,
    renderLists,
    renderProjects,
    renderTasks, 
    renderToDos,
    myToDos,
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
/* harmony import */ var _dots_horizontal_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dots-horizontal.svg */ "./src/dots-horizontal.svg");
/* harmony import */ var _circle_half_full_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-half-full.svg */ "./src/circle-half-full.svg");
/* harmony import */ var _package_variant_closed_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package-variant-closed.svg */ "./src/package-variant-closed.svg");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./src/log.js");







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
    plusBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.addProject(prompt('Project Title:'), prompt('List Section:'));
      const containers = document.querySelectorAll('.projectContainer');
      containers.forEach((container) => {
        container.innerHTML = '';
      });
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.renderProjects();
    });
  }

  function renderDueDates(section, svg, id) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.id = section.toLowerCase();

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = svg;
    symbol.id = id;

    const title = document.createElement('p');
    title.innerText = section;

    dueDateDiv.appendChild(symbol);
    dueDateDiv.appendChild(title);
    sidebar.appendChild(dueDateDiv);
  }

  function renderAddList() {
    const newList = document.createElement('div');
    const listBtn = document.createElement('button');
    listBtn.id = 'newList';
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    plusText.innerText = 'New List';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusList';
    newList.appendChild(plus);
    newList.appendChild(plusText);
    listBtn.appendChild(newList);
    sidebar.appendChild(listBtn);
    listBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newList = _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.addList(prompt('New List:'));
      displayLists(newList.title);
      sidebar.insertBefore(listBtn, sidebar.lastChild.nextSibling);
    });
  }

  function renderMainContainer() {
    const mainBox = document.createElement('div');
    mainBox.id = 'cardBox';

    main.appendChild(mainBox);
  }

  function renderMainTitle(title) {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'mainTitle';
    const mainTitle = document.createElement('h1');
    const mainBlurb = document.createElement('p');

    mainTitle.innerText = title;
    mainBlurb.innerText = 'Keep the talk and slides simple: what are three things everyone should remember?';

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(mainBlurb);
    main.appendChild(titleContainer);
  }

  function displayLists(title) {
    const projectSection = document.createElement('div');
    const projectContainer = document.createElement('div');
    projectContainer.classList = 'projectContainer';
    projectSection.id = title.toLowerCase();
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = _circle_half_full_svg__WEBPACK_IMPORTED_MODULE_3__;

    const listTitle = document.createElement('h2');
    listTitle.innerText = title;

    projectSection.appendChild(symbol);
    projectSection.appendChild(listTitle);
    sidebar.appendChild(projectSection);
    sidebar.appendChild(projectContainer);
  }
  
  function displayProject(container, title, parentTitle) {
    const project = document.createElement('div');
    const projectBtn = document.createElement('button');
    const subImg = document.createElement('img');
    const subTxt = document.createElement('p');
    
    subImg.src = './images/plus.svg';
    subImg.alt = 'Plus sign';
    subImg.id = 'plusSub';
    subTxt.innerText = 'New Sub-Section';
    const subSectionBtn = document.createElement('button');
    subSectionBtn.id = 'sub-section-btn';
    projectBtn.id = title.replace(/\s+/g, '-').toLowerCase();
    project.classList = 'project';
    
    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = _package_variant_closed_svg__WEBPACK_IMPORTED_MODULE_4__;
    
    const projectTitle = document.createElement('p');
    projectTitle.innerText = title;
    
    project.appendChild(symbol);
    project.appendChild(projectTitle);
    projectBtn.appendChild(project);
    container.appendChild(projectBtn);
    subSectionBtn.appendChild(subImg);
    subSectionBtn.appendChild(subTxt);
    
    projectBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      header.innerHTML = '';
      renderLogo();
      renderPlus();
      header.appendChild(subSectionBtn);
      main.innerHTML = '';
      renderMainTitle(title);
      renderMainContainer();
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.renderTasks(title);
    });
    
    subSectionBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newSubSection = _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.addTask(prompt('New Sub-Section:'), title);
      cardBox.innerHTML = '';
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.renderTasks(title);
    });

  }
  
  function renderMainSub(box, title) {
    const subContainer = document.createElement('div');
    subContainer.classList = 'subContainer';

    const titleContainer = document.createElement('div');
    titleContainer.classList = 'titleContainer';
    titleContainer.id = title.replace(/\s+/g, '-').toLowerCase();
    const subTitle = document.createElement('h3');
    subTitle.innerText = title;
    
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';
    
    titleContainer.appendChild(subTitle);
    renderSubDropdown(titleContainer, title);
    subContainer.appendChild(titleContainer);
    subContainer.appendChild(taskContainer);
    box.appendChild(subContainer);
  }

  function displayTask(container, title, parentTitle, task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';
    const taskLabelBtn = document.createElement('button');

    const taskLabel = document.createElement('label');
    taskLabel.innerText = title;
    taskLabelBtn.id = title.replace(/\s+/g, '-').toLowerCase();
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    
    function deleteToDo(toDoDeleteTarget) {
      const selectedDropdown = document.querySelector('.containerToDoDropdown');
      taskContainer.remove();
      if (selectedDropdown != null) {
        selectedDropdown.remove();
      }
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos.splice(toDoDeleteTarget.toDoIndex, 1);
      console.log(_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos)
    }
    
    
    taskContainer.appendChild(checkbox);
    taskLabelBtn.appendChild(taskLabel);
    taskContainer.appendChild(taskLabelBtn);
    container.appendChild(taskContainer);
    
    checkbox.addEventListener('click', function(event) {
      checkbox.value = 'on';
    });

    checkbox.addEventListener("click", function () {
      if (checkbox.value == 'on') {
        deleteToDo(task);
      }
    });

    renderToDoDropdown(container, taskLabelBtn, taskContainer, task);
  }

  function renderToDoDropdown(box, toDoBtn, subContainer, toDo) {
    
    toDoBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const visibleDropdown = document.querySelectorAll('.containerToDoDropdown');
      visibleDropdown.forEach((dropdown) => {
        dropdown.remove();
      });

      const container = document.createElement('div');
      container.classList = 'containerToDoDropdown';
      const dropdown = document.createElement('div');
      dropdown.id = 'dropdownToDo';
      dropdown.classList.add('dropdown', 'show');
      
      const saveDescriptionBtn = document.createElement('button');
      saveDescriptionBtn.innerText = 'Save';
      const saveDueDateBtn = document.createElement('button');
      saveDueDateBtn.innerText = 'Save';
      const savePriorityBtn = document.createElement('button');
      savePriorityBtn.innerText = 'Save';
      const description = document.createElement('textarea');
      const dueDateInput = document.createElement('textarea');
      dueDateInput.id = 'dueDateInput';
      const priorityInput = document.createElement('textarea');
      priorityInput.id = 'priorityInput';

      if (toDo.priority == undefined || toDo.priority == null) {
        priorityInput.innerText = '';
      } else {
        priorityInput.innerText = toDo.priority;
      }
      if (toDo.dueDate == undefined || toDo.dueDate == null) {
        dueDateInput.innerText = '';
      } else {
        dueDateInput.innerText = toDo.dueDate;
      }
      if (toDo.description == undefined || toDo.description == null) {
        description.innerText = '';
      } else {
        description.innerText = toDo.description;
      }
      
      dropdown.appendChild(savePriorityBtn);
      dropdown.appendChild(priorityInput);
      dropdown.appendChild(saveDueDateBtn);
      dropdown.appendChild(dueDateInput);
      dropdown.appendChild(saveDescriptionBtn);
      dropdown.appendChild(description);
      container.appendChild(dropdown);
      box.insertBefore(container, subContainer.nextSibling);

      saveDescriptionBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const tempDescription = description.value;
        tempDescription.toString();
        description.value = tempDescription;
        toDo.description = tempDescription;
      });

      saveDueDateBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const tempDueDate = dueDateInput.value;
        tempDueDate.toString();
        dueDateInput.value = tempDueDate;
        toDo.dueDate = tempDueDate;
      });

      savePriorityBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const tempPriority = priorityInput.value;
        tempPriority.toString();
        priorityInput.value = tempPriority;
        toDo.priority = tempPriority;
        console.log(_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos);
      });
    });
    console.log(_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos);
  }

  function renderSubDropdown(box, title) {
    const container = document.createElement('div');
    container.classList = 'container';
    const dropdown = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.id = 'dropdownBtn';
    dropdown.id = 'dropdown';
    dropdown.classList = 'dropdown';
    const toDoBtn = document.createElement('button');
    const toDoImg = document.createElement('img');
    const toDoTxt = document.createElement('p');

    toDoBtn.id = 'to-do-btn';
    toDoImg.src = './images/plus.svg';
    toDoImg.alt = 'Plus sign';
    toDoImg.id = 'plusToDo';
    toDoTxt.innerText = 'New Todo';

    toDoBtn.appendChild(toDoImg);
    toDoBtn.appendChild(toDoTxt);
    dropdown.appendChild(toDoBtn);
    container.appendChild(dropdownBtn);
    container.appendChild(dropdown);
    box.appendChild(container);

    toDoBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newToDo = _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.addToDo(prompt('New Todo:'), title);
      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.renderToDos(title);
    });

    const toggleDropdown = function () {
      dropdown.classList.toggle("show");
    };

    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
    });

    document.documentElement.addEventListener("click", function () {
      if (dropdown.classList.contains("show")) {
        toggleDropdown();
      }
    });
  }

  return {
    renderLogo,
    renderPlus,
    renderDueDates,
    renderAddList,
    renderMainContainer,
    renderMainTitle,
    displayLists,
    displayProject,
    renderMainSub,
    displayTask,
  }
};
const initialRender = homePage();

/***/ }),

/***/ "./src/archive.svg":
/*!*************************!*\
  !*** ./src/archive.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/archive.svg";

/***/ }),

/***/ "./src/calendar-month.svg":
/*!********************************!*\
  !*** ./src/calendar-month.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calendar-month.svg";

/***/ }),

/***/ "./src/circle-half-full.svg":
/*!**********************************!*\
  !*** ./src/circle-half-full.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/circle-half-full.svg";

/***/ }),

/***/ "./src/dots-horizontal.svg":
/*!*********************************!*\
  !*** ./src/dots-horizontal.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dots-horizontal.svg";

/***/ }),

/***/ "./src/orb-logo.jpg":
/*!**************************!*\
  !*** ./src/orb-logo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/orb-logo.jpg";

/***/ }),

/***/ "./src/package-variant-closed.svg":
/*!****************************************!*\
  !*** ./src/package-variant-closed.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/package-variant-closed.svg";

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plus.svg";

/***/ }),

/***/ "./src/star.svg":
/*!**********************!*\
  !*** ./src/star.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/star.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEZBQTBGLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLDZDQUE2QywwZkFBMGYsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxpSkFBaUosbUJBQW1CLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxZQUFZLHFCQUFxQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyw2REFBNkQsa0JBQWtCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLHNCQUFzQixHQUFHLDRCQUE0QiwyQkFBMkIsR0FBRyxVQUFVLHNCQUFzQixHQUFHLDhCQUE4QixtQkFBbUIsb0JBQW9CLEdBQUcsV0FBVywrSUFBK0ksR0FBRyxZQUFZLGtCQUFrQixpQkFBaUIsY0FBYywwQkFBMEIsd0JBQXdCLDhCQUE4QixvQkFBb0IsdUJBQXVCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLFVBQVUsOENBQThDLGtCQUFrQixvQkFBb0IsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsa0JBQWtCLGtCQUFrQix3QkFBd0IsOENBQThDLGtCQUFrQixHQUFHLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcsbUJBQW1CLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcsY0FBYyxtQkFBbUIsZUFBZSxjQUFjLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixrQkFBa0IsY0FBYyw4QkFBOEIsR0FBRyxrQkFBa0Isa0JBQWtCLGFBQWEsdUJBQXVCLHdCQUF3QixHQUFHLDJCQUEyQiw4QkFBOEIsZUFBZSwyQkFBMkIsR0FBRyw0QkFBNEIscUJBQXFCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0IsOEJBQThCLHNCQUFzQixHQUFHLDJCQUEyQixrQkFBa0Isd0JBQXdCLEdBQUcscUNBQXFDLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLEdBQUcscUJBQXFCLGtCQUFrQixhQUFhLHdCQUF3QixHQUFHLFVBQVUsbUJBQW1CLGVBQWUsOEJBQThCLGNBQWMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsa0JBQWtCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcsZUFBZSx1QkFBdUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsaUNBQWlDLHVCQUF1Qix3QkFBd0IsdUJBQXVCLGVBQWUsa0NBQWtDLHVEQUF1RCxHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLDBCQUEwQixpQkFBaUIsdUJBQXVCLHVCQUF1QixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyxzQkFBc0Isa0JBQWtCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLGtCQUFrQiw2Q0FBNkMsZ0NBQWdDLHVCQUF1QixHQUFHLDJCQUEyQiw4QkFBOEIsaUJBQWlCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLEdBQUcsNEJBQTRCLDhCQUE4QixpQkFBaUIscUJBQXFCLDRCQUE0QixtQkFBbUIsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0QixpQkFBaUIsZ0JBQWdCLGVBQWUsR0FBRyxtQkFBbUIsZ0JBQWdCLHVCQUF1QixhQUFhLEdBQUcsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0RBQXNELGlDQUFpQyxHQUFHLDRCQUE0Qix1QkFBdUIsZ0JBQWdCLEdBQUcsV0FBVyx3QkFBd0IsZUFBZSxnQ0FBZ0MsbUJBQW1CLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLGdDQUFnQyw0QkFBNEIsY0FBYyxrQkFBa0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsMkJBQTJCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLGlCQUFpQiw4QkFBOEIsa0JBQWtCLHVCQUF1Qix1Q0FBdUMsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixhQUFhLGdCQUFnQixHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLDRCQUE0QixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyx1Q0FBdUMsR0FBRyx1QkFBdUIsbUJBQW1CLGtCQUFrQixHQUFHLFFBQVEsb0JBQW9CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsdUJBQXVCLGdDQUFnQywwQkFBMEIsb0JBQW9CLGNBQWMsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsR0FBRyxtQkFBbUIseUNBQXlDLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLDJCQUEyQiwwQkFBMEIsdUJBQXVCLG1CQUFtQixjQUFjLGNBQWMsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQiwyQkFBMkIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLHVCQUF1QixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLG1CQUFtQjtBQUM1elU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNuWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYndCO0FBQ2U7QUFDRjtBQUNQO0FBQ2M7QUFDUjs7QUFFcEMsZ0RBQWE7QUFDYixnREFBYTtBQUNiLGdEQUFhLHlCQUF5QixzQ0FBSTtBQUMxQyxnREFBYSw0QkFBNEIsZ0RBQVE7QUFDakQsZ0RBQWEsMkJBQTJCLHlDQUFPO0FBQy9DLDhDQUFZO0FBQ1osOENBQVk7QUFDWiw4Q0FBWTtBQUNaLDhDQUFZO0FBQ1osOENBQVk7QUFDWiw4Q0FBWTtBQUNaLDhDQUFZO0FBQ1osOENBQVk7QUFDWiw4Q0FBWTtBQUNaLGdEQUFhO0FBQ2IsOENBQVk7QUFDWiw4Q0FBWTtBQUNaLDhDQUFZO0FBQ1osOENBQVk7QUFDWiw4Q0FBWTtBQUNaLDhDQUFZO0FBQ1osOENBQVk7QUFDWiw4Q0FBWTtBQUNaLDhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUM5QjJCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFhO0FBQ25CLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFhLDJDQUEyQyxHQUFHO0FBQ2pFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFhO0FBQ3JCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQ0FBK0M7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFhLHdDQUF3QyxHQUFHO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckkyQjtBQUNKO0FBQ2U7QUFDTTtBQUNNO0FBQ3BCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLDhDQUFZO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBWTtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrREFBYTs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQVk7QUFDeEM7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQVk7QUFDbEIsa0JBQWtCLDhDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBWTtBQUNoQyxPQUFPO0FBQ1AsS0FBSztBQUNMLGdCQUFnQiw4Q0FBWTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQVk7QUFDbEMsTUFBTSw4Q0FBWTtBQUNsQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZG90cy1ob3Jpem9udGFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46cm9vdCB7XG4gIC0tc3lzdGVtLXVpOiBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNy41dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCAyMHB4IDBweCBncmF5O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuaGVhZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmhlYWRlciAjcGx1c1Rhc2sge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5oZWFkZXIgI3BsdXNTdWIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiNzaWRlYmFyIHtcbiAgaGVpZ2h0OiA5Mi41dmg7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG59XG4jc2lkZWJhciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2lkZWJhciA+IGRpdiA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4jc2lkZWJhciAucHJvamVjdFNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuI3NpZGViYXIgI25ld0xpc3Qge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2ICNwbHVzTGlzdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiNzaWRlYmFyIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuI3NpZGViYXIgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogOTIuNXZoO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYWluICNwbHVzVG9EbyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjUsIDEpO1xufVxuLmRyb3Bkb3duIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otY29sdW1uLWdhcDogdmFyKC0tZ2FwKTtcbiAgICAgICBjb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLmRyb3Bkb3duIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG59XG4uZHJvcGRvd24gdGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDdweCAwcHggZ3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZHJvcGRvd24gI2R1ZURhdGVJbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMS41cmVtO1xufVxuLmRyb3Bkb3duICNwcmlvcml0eUlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbiNkcm9wZG93bkJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZHJvcGRvd25Ub0RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWluZXJUb0RvRHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjYXJkQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA2cHggN3B4IDEwcHggLTVweCBncmF5O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udGl0bGVDb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjMDA2OWVkO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dDpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjBweCAjMDA2OWVkO1xufVxuXG5pbnB1dDpub3QoOmNoZWNrZWQpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dDpjaGVja2VkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29udGVudDogXCLinJNcIjtcbiAgdG9wOiAtMXB4O1xuICBsZWZ0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2YzZjRmNjtcbn1cblxuaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiNtYWluVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5wcm9qZWN0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUNoQjs7Ozs7Ozs7Ozs7OztFQWFFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDtBQUNoRDs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtF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QixZQUFZO0VBQ1osU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW1nLCBwaWN0dXJlLCBzdmcsIHZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXN5c3RlbS11aTogc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA3LjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDIwcHggMHB4IGdyYXk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5oZWFkZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmhlYWRlciAjcGx1c1Rhc2sge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbmhlYWRlciAjcGx1c1N1YiB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgaGVpZ2h0OiA5Mi41dmg7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxufVxcbiNzaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzaWRlYmFyID4gZGl2ID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxuICBwYWRkaW5nOiAwO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuI3NpZGViYXIgLnByb2plY3RTZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbiNzaWRlYmFyICNuZXdMaXN0IHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4jc2lkZWJhciAjbmV3TGlzdCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NpZGViYXIgI25ld0xpc3QgPiBkaXYgI3BsdXNMaXN0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuI3NpZGViYXIgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuI3NpZGViYXIgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDkyLjV2aDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAjcGx1c1RvRG8ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDRweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjUsIDEpO1xcbn1cXG4uZHJvcGRvd24gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgICAgICBjb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5kcm9wZG93biBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuLmRyb3Bkb3duIHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCA3cHggMHB4IGdyYXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5kcm9wZG93biAjZHVlRGF0ZUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmRyb3Bkb3duICNwcmlvcml0eUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2Ryb3Bkb3duVG9EbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kb3RzLWhvcml6b250YWwuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFpbmVyVG9Eb0Ryb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jY2FyZEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiA2cHggN3B4IDEwcHggLTVweCBncmF5O1xcbn1cXG5cXG4uc3ViQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbn1cXG4udGl0bGVDb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzAwNjllZDtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjBweCAjMDA2OWVkO1xcbn1cXG5cXG5pbnB1dDpub3QoOmNoZWNrZWQpOjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgdG9wOiAtMXB4O1xcbiAgbGVmdDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2YzZjRmNjtcXG59XFxuXFxuaW5wdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jbWFpblRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctbGVmdDogMjRweDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsUmVuZGVyIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IGluaXRpYWxUYXNrcyB9IGZyb20gJy4vbG9nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vc3Rhci5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXItbW9udGguc3ZnJztcbmltcG9ydCBhcmNoaXZlIGZyb20gJy4vYXJjaGl2ZS5zdmcnO1xuXG5pbml0aWFsUmVuZGVyLnJlbmRlckxvZ28oKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyUGx1cygpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJEdWVEYXRlcygnVG9kYXknLCBzdGFyLCAnc3RhcicpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJEdWVEYXRlcygnVXBjb21pbmcnLCBjYWxlbmRhciwgJ2NhbGVuZGFyJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlckR1ZURhdGVzKCdTb21lZGF5JywgYXJjaGl2ZSwgJ2FyY2hpdmUnKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdWYWNhdGlvbnMnKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdGYW1pbHknKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdXb3JrJyk7XG5pbml0aWFsVGFza3MuYWRkTGlzdCgnSG9iYmllcycpO1xuaW5pdGlhbFRhc2tzLnJlbmRlckxpc3RzKCk7XG5pbml0aWFsVGFza3MuYWRkUHJvamVjdCgnQW5vdGhlciBQcmVzZW50YXRpb24nLCAnV29yaycpO1xuaW5pdGlhbFRhc2tzLmFkZFByb2plY3QoJ1NlZSBNb20nLCAnRmFtaWx5Jyk7XG5pbml0aWFsVGFza3MuYWRkUHJvamVjdCgnR28gU2thdGVib2FyZGluZycsICdIb2JiaWVzJyk7XG5pbml0aWFsVGFza3MucmVuZGVyUHJvamVjdHMoKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyQWRkTGlzdCgpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ1JlY2VpdmUgRnVuZHMnLCAnU2VlIE1vbScpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ09wZW4gQWNjb3VudCcsICdBbm90aGVyIFByZXNlbnRhdGlvbicpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ1NwZW5kIE1vbmV5JywgJ0dvIFNrYXRlYm9hcmRpbmcnKTtcbmluaXRpYWxUYXNrcy5yZW5kZXJUYXNrcygpO1xuaW5pdGlhbFRhc2tzLmFkZFRvRG8oJ1NvbWV0aGluZycsICdPcGVuIEFjY291bnQnKTtcbmluaXRpYWxUYXNrcy5hZGRUb0RvKCdTb21ldGhpbmcgRWxzZScsICdTcGVuZCBNb25leScpO1xuaW5pdGlhbFRhc2tzLmFkZFRvRG8oJ1dlIHJlYWxseSBuZWVkIHRvIGdldCBmdW5kcycsICdSZWNlaXZlIEZ1bmRzJyk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnV2UgbmVlZCBmdW5kcycsICdSZWNlaXZlIEZ1bmRzJyk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnV2UgcmVhbGx5IG5lZWQgdG8gZ2V0IGRvc2gnLCAnUmVjZWl2ZSBGdW5kcycpOyIsImltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHRhc2tMb2cgPSAoKSA9PiB7XG4gIGxldCBteUxpc3RzID0gW107XG4gIGxldCBteVByb2plY3RzID0gW107XG4gIGxldCBteVRhc2tzID0gW107XG4gIGxldCBteVRvRG9zID0gW107XG5cbiAgY29uc3QgbGlzdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IHRvRG9JbmRleCA9IDI7XG4gICAgbGV0IHRvRG9JZCA9ICcyJztcblxuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdCh0aXRsZSkge1xuICAgIGxldCBsaXNJbkxvZyA9IGZhbHNlO1xuICAgIG15TGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBpZiAodGl0bGUgPT0gbGlzdC50aXRsZSkge1xuICAgICAgICAgIGxpc0luTG9nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsaXNJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGxpc3RGYWN0b3J5KHRpdGxlKTtcbiAgICAgICAgbXlMaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICByZXR1cm4gbmV3TGlzdDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBwYXJlbnRUaXRsZSkge1xuICAgIGxldCBwcm9qZWN0SW5Mb2cgPSBmYWxzZTtcbiAgICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHRpdGxlID09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICBwcm9qZWN0SW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHByb2plY3RJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSk7XG4gICAgICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBwYXJlbnRUaXRsZSkge1xuICAgIGxldCB0YXNrSW5Mb2cgPSBmYWxzZTtcbiAgICBteVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRpdGxlID09IHRhc2sudGl0bGUpIHtcbiAgICAgICAgICB0YXNrSW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSk7XG4gICAgICAgIG15VGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RvKHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IHRvRG9JbkxvZyA9IGZhbHNlO1xuICAgIG15VG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgaWYgKHRvRG8udGl0bGUgPT0gdGl0bGUpIHtcbiAgICAgICAgdG9Eb0luTG9nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodG9Eb0luTG9nID09IGZhbHNlKSB7XG4gICAgICBsZXQgbmV3VG9EbyA9IHRvRG9GYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgIG15VG9Eb3MucHVzaChuZXdUb0RvKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcbiAgICBteUxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxldCBpZCA9IGxpc3QudGl0bGUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpbml0aWFsUmVuZGVyLmRpc3BsYXlMaXN0cyhsaXN0LnRpdGxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IGlkID0gcHJvamVjdC5wYXJlbnRUaXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGluaXRpYWxSZW5kZXIuZGlzcGxheVByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkubmV4dFNpYmxpbmcsIHByb2plY3QudGl0bGUsIHByb2plY3QucGFyZW50VGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocGFyZW50VGl0bGUpIHtcbiAgICBteVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnBhcmVudFRpdGxlID09IHBhcmVudFRpdGxlKSB7XG4gICAgICAgIGluaXRpYWxSZW5kZXIucmVuZGVyTWFpblN1Yihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEJveCcpLCB0YXNrLnRpdGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlbmRlclRvRG9zKHRhc2sudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVG9Eb3MocGFyZW50VGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VG9Eb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VG9Eb3NbaV0udG9Eb0luZGV4ID0gaTtcbiAgICAgIG15VG9Eb3NbaV0udG9Eb0lkID0gaS50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudFRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpfWApO1xuICAgIGlkQ29udGFpbmVyLm5leHRTaWJsaW5nLmlubmVySFRNTCA9ICcnO1xuICAgIG15VG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgaWYgKHRvRG8ucGFyZW50VGl0bGUgPT0gcGFyZW50VGl0bGUpIHtcbiAgICAgICAgbGV0IGlkID0gdG9Eby5wYXJlbnRUaXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaW5pdGlhbFJlbmRlci5kaXNwbGF5VGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5uZXh0U2libGluZywgdG9Eby50aXRsZSwgdG9Eby5wYXJlbnRUaXRsZSwgdG9Ebyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobXlUb0Rvcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZExpc3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIGFkZFRvRG8sXG4gICAgcmVuZGVyTGlzdHMsXG4gICAgcmVuZGVyUHJvamVjdHMsXG4gICAgcmVuZGVyVGFza3MsIFxuICAgIHJlbmRlclRvRG9zLFxuICAgIG15VG9Eb3MsXG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbFRhc2tzID0gdGFza0xvZygpOyIsImltcG9ydCBsb2dvIGZyb20gJy4vb3JiLWxvZ28uanBnJztcbmltcG9ydCBwbHVzIGZyb20gJy4vcGx1cy5zdmcnO1xuaW1wb3J0IGVsbGlwc2lzIGZyb20gJy4vZG90cy1ob3Jpem9udGFsLnN2Zyc7XG5pbXBvcnQgc2VjdGlvblN5bWJvbCBmcm9tICcuL2NpcmNsZS1oYWxmLWZ1bGwuc3ZnJztcbmltcG9ydCBwcm9qZWN0U3ltYm9sIGZyb20gJy4vcGFja2FnZS12YXJpYW50LWNsb3NlZC5zdmcnO1xuaW1wb3J0IHsgaW5pdGlhbFRhc2tzIH0gZnJvbSAnLi9sb2cnO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckxvZ28oKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gJy4vaW1hZ2VzL29yYi1sb2dvLmpwZyc7XG4gICAgbG9nby5hbHQgPSAnQ29tcGFueSBsb2dvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQbHVzKCkge1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwbHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGx1c1RleHQuaW5uZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICBwbHVzLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgcGx1cy5hbHQgPSAnUGx1cyBzaWduJztcbiAgICBwbHVzLmlkID0gJ3BsdXNUYXNrJztcbiAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXMpO1xuICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1c1RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwbHVzQnRuKTtcbiAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaW5pdGlhbFRhc2tzLmFkZFByb2plY3QocHJvbXB0KCdQcm9qZWN0IFRpdGxlOicpLCBwcm9tcHQoJ0xpc3QgU2VjdGlvbjonKSk7XG4gICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RDb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0pO1xuICAgICAgaW5pdGlhbFRhc2tzLnJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJEdWVEYXRlcyhzZWN0aW9uLCBzdmcsIGlkKSB7XG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYuaWQgPSBzZWN0aW9uLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzeW1ib2wuYWx0ID0gJyMnO1xuICAgIHN5bWJvbC5zcmMgPSBzdmc7XG4gICAgc3ltYm9sLmlkID0gaWQ7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBzZWN0aW9uO1xuXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJBZGRMaXN0KCkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdEJ0bi5pZCA9ICduZXdMaXN0JztcbiAgICBjb25zdCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgcGx1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1RleHQuaW5uZXJUZXh0ID0gJ05ldyBMaXN0JztcbiAgICBwbHVzLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgcGx1cy5hbHQgPSAnUGx1cyBzaWduJztcbiAgICBwbHVzLmlkID0gJ3BsdXNMaXN0JztcbiAgICBuZXdMaXN0LmFwcGVuZENoaWxkKHBsdXMpO1xuICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQocGx1c1RleHQpO1xuICAgIGxpc3RCdG4uYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0QnRuKTtcbiAgICBsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgbmV3TGlzdCA9IGluaXRpYWxUYXNrcy5hZGRMaXN0KHByb21wdCgnTmV3IExpc3Q6JykpO1xuICAgICAgZGlzcGxheUxpc3RzKG5ld0xpc3QudGl0bGUpO1xuICAgICAgc2lkZWJhci5pbnNlcnRCZWZvcmUobGlzdEJ0biwgc2lkZWJhci5sYXN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWFpbkNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtYWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkJveC5pZCA9ICdjYXJkQm94JztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkJveCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNYWluVGl0bGUodGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmlkID0gJ21haW5UaXRsZSc7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBtYWluQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBtYWluVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgbWFpbkJsdXJiLmlubmVyVGV4dCA9ICdLZWVwIHRoZSB0YWxrIGFuZCBzbGlkZXMgc2ltcGxlOiB3aGF0IGFyZSB0aHJlZSB0aGluZ3MgZXZlcnlvbmUgc2hvdWxkIHJlbWVtYmVyPyc7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5CbHVyYik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5TGlzdHModGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdwcm9qZWN0Q29udGFpbmVyJztcbiAgICBwcm9qZWN0U2VjdGlvbi5pZCA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0ID0gJ3Byb2plY3RTZWN0aW9uJztcblxuICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN5bWJvbC5hbHQgPSAnIyc7XG4gICAgc3ltYm9sLnNyYyA9IHNlY3Rpb25TeW1ib2w7XG5cbiAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxpc3RUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChjb250YWluZXIsIHRpdGxlLCBwYXJlbnRUaXRsZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc3ViSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgc3ViVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIHN1YkltZy5zcmMgPSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuICAgIHN1YkltZy5hbHQgPSAnUGx1cyBzaWduJztcbiAgICBzdWJJbWcuaWQgPSAncGx1c1N1Yic7XG4gICAgc3ViVHh0LmlubmVyVGV4dCA9ICdOZXcgU3ViLVNlY3Rpb24nO1xuICAgIGNvbnN0IHN1YlNlY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJTZWN0aW9uQnRuLmlkID0gJ3N1Yi1zZWN0aW9uLWJ0bic7XG4gICAgcHJvamVjdEJ0bi5pZCA9IHRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0ID0gJ3Byb2plY3QnO1xuICAgIFxuICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN5bWJvbC5hbHQgPSAnIyc7XG4gICAgc3ltYm9sLnNyYyA9IHByb2plY3RTeW1ib2w7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuICAgIHN1YlNlY3Rpb25CdG4uYXBwZW5kQ2hpbGQoc3ViSW1nKTtcbiAgICBzdWJTZWN0aW9uQnRuLmFwcGVuZENoaWxkKHN1YlR4dCk7XG4gICAgXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGhlYWRlci5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlbmRlckxvZ28oKTtcbiAgICAgIHJlbmRlclBsdXMoKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdWJTZWN0aW9uQnRuKTtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICByZW5kZXJNYWluVGl0bGUodGl0bGUpO1xuICAgICAgcmVuZGVyTWFpbkNvbnRhaW5lcigpO1xuICAgICAgaW5pdGlhbFRhc2tzLnJlbmRlclRhc2tzKHRpdGxlKTtcbiAgICB9KTtcbiAgICBcbiAgICBzdWJTZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgbmV3U3ViU2VjdGlvbiA9IGluaXRpYWxUYXNrcy5hZGRUYXNrKHByb21wdCgnTmV3IFN1Yi1TZWN0aW9uOicpLCB0aXRsZSk7XG4gICAgICBjYXJkQm94LmlubmVySFRNTCA9ICcnO1xuICAgICAgaW5pdGlhbFRhc2tzLnJlbmRlclRhc2tzKHRpdGxlKTtcbiAgICB9KTtcblxuICB9XG4gIFxuICBmdW5jdGlvbiByZW5kZXJNYWluU3ViKGJveCwgdGl0bGUpIHtcbiAgICBjb25zdCBzdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJDb250YWluZXIuY2xhc3NMaXN0ID0gJ3N1YkNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0aXRsZUNvbnRhaW5lcic7XG4gICAgdGl0bGVDb250YWluZXIuaWQgPSB0aXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc3ViVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Rhc2tDb250YWluZXInO1xuICAgIFxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcbiAgICByZW5kZXJTdWJEcm9wZG93bih0aXRsZUNvbnRhaW5lciwgdGl0bGUpO1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIGJveC5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVRhc2soY29udGFpbmVyLCB0aXRsZSwgcGFyZW50VGl0bGUsIHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza0NvbnRhaW5lcic7XG4gICAgY29uc3QgdGFza0xhYmVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tMYWJlbC5pbm5lclRleHQgPSB0aXRsZTtcbiAgICB0YXNrTGFiZWxCdG4uaWQgPSB0aXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgICBcbiAgICBmdW5jdGlvbiBkZWxldGVUb0RvKHRvRG9EZWxldGVUYXJnZXQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyVG9Eb0Ryb3Bkb3duJyk7XG4gICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgaWYgKHNlbGVjdGVkRHJvcGRvd24gIT0gbnVsbCkge1xuICAgICAgICBzZWxlY3RlZERyb3Bkb3duLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaW5pdGlhbFRhc2tzLm15VG9Eb3Muc3BsaWNlKHRvRG9EZWxldGVUYXJnZXQudG9Eb0luZGV4LCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKGluaXRpYWxUYXNrcy5teVRvRG9zKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrTGFiZWxCdG4uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMYWJlbEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIFxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNoZWNrYm94LnZhbHVlID0gJ29uJztcbiAgICB9KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2hlY2tib3gudmFsdWUgPT0gJ29uJykge1xuICAgICAgICBkZWxldGVUb0RvKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVuZGVyVG9Eb0Ryb3Bkb3duKGNvbnRhaW5lciwgdGFza0xhYmVsQnRuLCB0YXNrQ29udGFpbmVyLCB0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRvRG9Ecm9wZG93bihib3gsIHRvRG9CdG4sIHN1YkNvbnRhaW5lciwgdG9Ebykge1xuICAgIFxuICAgIHRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB2aXNpYmxlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyVG9Eb0Ryb3Bkb3duJyk7XG4gICAgICB2aXNpYmxlRHJvcGRvd24uZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lclRvRG9Ecm9wZG93bic7XG4gICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHJvcGRvd24uaWQgPSAnZHJvcGRvd25Ub0RvJztcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJywgJ3Nob3cnKTtcbiAgICAgIFxuICAgICAgY29uc3Qgc2F2ZURlc2NyaXB0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzYXZlRGVzY3JpcHRpb25CdG4uaW5uZXJUZXh0ID0gJ1NhdmUnO1xuICAgICAgY29uc3Qgc2F2ZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNhdmVEdWVEYXRlQnRuLmlubmVyVGV4dCA9ICdTYXZlJztcbiAgICAgIGNvbnN0IHNhdmVQcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc2F2ZVByaW9yaXR5QnRuLmlubmVyVGV4dCA9ICdTYXZlJztcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZUlucHV0JztcbiAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eUlucHV0JztcblxuICAgICAgaWYgKHRvRG8ucHJpb3JpdHkgPT0gdW5kZWZpbmVkIHx8IHRvRG8ucHJpb3JpdHkgPT0gbnVsbCkge1xuICAgICAgICBwcmlvcml0eUlucHV0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5pbm5lclRleHQgPSB0b0RvLnByaW9yaXR5O1xuICAgICAgfVxuICAgICAgaWYgKHRvRG8uZHVlRGF0ZSA9PSB1bmRlZmluZWQgfHwgdG9Eby5kdWVEYXRlID09IG51bGwpIHtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmlubmVyVGV4dCA9IHRvRG8uZHVlRGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0b0RvLmRlc2NyaXB0aW9uID09IHVuZGVmaW5lZCB8fCB0b0RvLmRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgXG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChzYXZlUHJpb3JpdHlCdG4pO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChzYXZlRHVlRGF0ZUJ0bik7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoc2F2ZURlc2NyaXB0aW9uQnRuKTtcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bik7XG4gICAgICBib3guaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgc3ViQ29udGFpbmVyLm5leHRTaWJsaW5nKTtcblxuICAgICAgc2F2ZURlc2NyaXB0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRlbXBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICB0ZW1wRGVzY3JpcHRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wRGVzY3JpcHRpb247XG4gICAgICAgIHRvRG8uZGVzY3JpcHRpb24gPSB0ZW1wRGVzY3JpcHRpb247XG4gICAgICB9KTtcblxuICAgICAgc2F2ZUR1ZURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGVtcER1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIHRlbXBEdWVEYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRlbXBEdWVEYXRlO1xuICAgICAgICB0b0RvLmR1ZURhdGUgPSB0ZW1wRHVlRGF0ZTtcbiAgICAgIH0pO1xuXG4gICAgICBzYXZlUHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGVtcFByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgdGVtcFByaW9yaXR5LnRvU3RyaW5nKCk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0ZW1wUHJpb3JpdHk7XG4gICAgICAgIHRvRG8ucHJpb3JpdHkgPSB0ZW1wUHJpb3JpdHk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluaXRpYWxUYXNrcy5teVRvRG9zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxUYXNrcy5teVRvRG9zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclN1YkRyb3Bkb3duKGJveCwgdGl0bGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lcic7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcm9wZG93bkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyb3Bkb3duQnRuLmlkID0gJ2Ryb3Bkb3duQnRuJztcbiAgICBkcm9wZG93bi5pZCA9ICdkcm9wZG93bic7XG4gICAgZHJvcGRvd24uY2xhc3NMaXN0ID0gJ2Ryb3Bkb3duJztcbiAgICBjb25zdCB0b0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9Eb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHRvRG9UeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0b0RvQnRuLmlkID0gJ3RvLWRvLWJ0bic7XG4gICAgdG9Eb0ltZy5zcmMgPSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuICAgIHRvRG9JbWcuYWx0ID0gJ1BsdXMgc2lnbic7XG4gICAgdG9Eb0ltZy5pZCA9ICdwbHVzVG9Ebyc7XG4gICAgdG9Eb1R4dC5pbm5lclRleHQgPSAnTmV3IFRvZG8nO1xuXG4gICAgdG9Eb0J0bi5hcHBlbmRDaGlsZCh0b0RvSW1nKTtcbiAgICB0b0RvQnRuLmFwcGVuZENoaWxkKHRvRG9UeHQpO1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKHRvRG9CdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bkJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcbiAgICBib3guYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBuZXdUb0RvID0gaW5pdGlhbFRhc2tzLmFkZFRvRG8ocHJvbXB0KCdOZXcgVG9kbzonKSwgdGl0bGUpO1xuICAgICAgaW5pdGlhbFRhc2tzLnJlbmRlclRvRG9zKHRpdGxlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgfTtcblxuICAgIGRyb3Bkb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XG4gICAgICAgIHRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlckxvZ28sXG4gICAgcmVuZGVyUGx1cyxcbiAgICByZW5kZXJEdWVEYXRlcyxcbiAgICByZW5kZXJBZGRMaXN0LFxuICAgIHJlbmRlck1haW5Db250YWluZXIsXG4gICAgcmVuZGVyTWFpblRpdGxlLFxuICAgIGRpc3BsYXlMaXN0cyxcbiAgICBkaXNwbGF5UHJvamVjdCxcbiAgICByZW5kZXJNYWluU3ViLFxuICAgIGRpc3BsYXlUYXNrLFxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGluaXRpYWxSZW5kZXIgPSBob21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==