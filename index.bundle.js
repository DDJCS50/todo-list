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
#dropdownToDo button {
  background-color: #059669;
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
  background-color: #f8fafc;
}
.subContainer > .taskContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #f8fafc;
}
.subContainer > .taskContainer label {
  background-color: #f8fafc;
  font-size: 1rem;
}
.subContainer > .taskContainer button {
  background-color: #f8fafc;
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
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nimg, picture, svg, video {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n  --system-ui: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nbutton {\n  display: flex;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  align-items: center;\n  background-color: #059669;\n  cursor: pointer;\n  text-align: center;\n}\n\nh1, h2, h3, h4, h5 {\n  font-weight: bolder;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background-color: #059669;\n  width: 100vw;\n  height: 7.5vh;\n  display: flex;\n  align-items: center;\n  box-shadow: inset -4px -4px 20px 0px gray;\n  padding: 12px;\n}\nheader > img {\n  height: 50px;\n  width: 50px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  margin-right: auto;\n}\nheader #plusTask {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\nheader #plusSub {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n#sidebar {\n  height: 92.5vh;\n  width: 20%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 16px;\n  gap: 12px;\n  background-color: #f3f4f6;\n}\n#sidebar > div {\n  display: flex;\n  gap: 4px;\n  margin-right: auto;\n  align-items: center;\n}\n#sidebar > div > button {\n  background-color: #f3f4f6;\n  padding: 0;\n  align-self: flex-start;\n}\n#sidebar .projectSection {\n  margin-top: 16px;\n}\n#sidebar #newList {\n  margin-top: auto;\n  align-items: center;\n  background-color: #f3f4f6;\n  margin-left: auto;\n}\n#sidebar #newList > div {\n  display: flex;\n  align-items: center;\n}\n#sidebar #newList > div #plusList {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  margin-right: 4px;\n}\n#sidebar img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#sidebar .project {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\nmain {\n  height: 92.5vh;\n  width: 80%;\n  background-color: #f8fafc;\n  margin: 0;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain #plusToDo {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n.dropdown {\n  position: absolute;\n  right: 44px;\n  width: 120px;\n  box-shadow: var(--shadow);\n  border-radius: var(--radius);\n  margin-top: 0.3rem;\n  background: #f8fafc;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(0.5rem);\n  transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);\n}\n.dropdown button {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--gap);\n       column-gap: var(--gap);\n  padding: 0.8rem 1rem;\n  text-decoration: none;\n  color: black;\n  border-radius: 8px;\n  font-size: 0.75rem;\n}\n.dropdown button:hover {\n  background-color: #f3f4f6;\n}\n.dropdown textarea {\n  outline: none;\n  resize: none;\n  overflow: auto;\n  width: 100%;\n  height: 100px;\n  box-shadow: inset -1px -1px 7px 0px gray;\n  border: 1px solid lightgray;\n  border-radius: 8px;\n}\n.dropdown #dueDateInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n}\n.dropdown #priorityInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n}\n\n#dropdownBtn {\n  display: flex;\n  background: transparent;\n  height: 24px;\n  width: 24px;\n  padding: 0;\n}\n\n#dropdownToDo {\n  width: 100%;\n  position: relative;\n  right: 0;\n}\n#dropdownToDo button {\n  background-color: #059669;\n}\n\n.container {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"../dots-horizontal.svg\");\n  background-repeat: no-repeat;\n}\n\n.containerToDoDropdown {\n  position: relative;\n  width: 100%;\n}\n\n.show {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0rem);\n  display: block;\n}\n\n#cardBox {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 24px;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  align-self: flex-start;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 250px;\n  width: 300px;\n  background-color: #e2e8f0;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 6px 7px 10px -5px gray;\n}\n\n.subContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  background-color: #f8fafc;\n}\n.subContainer > .taskContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  background-color: #f8fafc;\n}\n.subContainer > .taskContainer label {\n  background-color: #f8fafc;\n  font-size: 1rem;\n}\n.subContainer > .taskContainer button {\n  background-color: #f8fafc;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n.titleContainer img {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh3 {\n  color: #0069ed;\n}\n\ninput {\n  width: 24px;\n  height: 24px;\n  border-radius: 8px;\n  transition: box-shadow 0.3s;\n  background: lightgrey;\n  cursor: pointer;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\ninput:checked {\n  box-shadow: inset 0 0 0 20px #0069ed;\n}\n\ninput:not(:checked)::before {\n  display: none;\n}\n\ninput:checked::before {\n  display: inline-block;\n  position: relative;\n  content: \"✓\";\n  top: -1px;\n  left: 3px;\n  font-size: 1.5rem;\n  color: #f3f4f6;\n}\n\ninput:hover {\n  background-color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.taskContainer {\n  display: flex;\n  align-items: center;\n  width: -moz-max-content;\n  width: max-content;\n  justify-content: flex-start;\n}\n\n#mainTitle {\n  display: flex;\n  align-self: flex-start;\n  flex-direction: column;\n  padding-left: 24px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEZBQTBGLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8s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O0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZG90cy1ob3Jpem9udGFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46cm9vdCB7XG4gIC0tc3lzdGVtLXVpOiBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNy41dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCAyMHB4IDBweCBncmF5O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuaGVhZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmhlYWRlciAjcGx1c1Rhc2sge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5oZWFkZXIgI3BsdXNTdWIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiNzaWRlYmFyIHtcbiAgaGVpZ2h0OiA5Mi41dmg7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG59XG4jc2lkZWJhciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2lkZWJhciA+IGRpdiA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4jc2lkZWJhciAucHJvamVjdFNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuI3NpZGViYXIgI25ld0xpc3Qge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2ICNwbHVzTGlzdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiNzaWRlYmFyIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuI3NpZGViYXIgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogOTIuNXZoO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYWluICNwbHVzVG9EbyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjUsIDEpO1xufVxuLmRyb3Bkb3duIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otY29sdW1uLWdhcDogdmFyKC0tZ2FwKTtcbiAgICAgICBjb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLmRyb3Bkb3duIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG59XG4uZHJvcGRvd24gdGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDdweCAwcHggZ3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZHJvcGRvd24gI2R1ZURhdGVJbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMS41cmVtO1xufVxuLmRyb3Bkb3duICNwcmlvcml0eUlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbiNkcm9wZG93bkJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZHJvcGRvd25Ub0RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG59XG4jZHJvcGRvd25Ub0RvIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWluZXJUb0RvRHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjYXJkQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA2cHggN3B4IDEwcHggLTVweCBncmF5O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xufVxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xufVxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG59XG5cbi50aXRsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi50aXRsZUNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDY5ZWQ7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0OmNoZWNrZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMHB4ICMwMDY5ZWQ7XG59XG5cbmlucHV0Om5vdCg6Y2hlY2tlZCk6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0OmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb250ZW50OiBcIuKck1wiO1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZjNmNGY2O1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbmxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuI21haW5UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLnByb2plY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQ2hCOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUEsZ0RBQWdEO0FBQ2hEOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZ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ZXQgXFxcIlVURi04XFxcIjtcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW1nLCBwaWN0dXJlLCBzdmcsIHZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXN5c3RlbS11aTogc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA3LjV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDIwcHggMHB4IGdyYXk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5oZWFkZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmhlYWRlciAjcGx1c1Rhc2sge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbmhlYWRlciAjcGx1c1N1YiB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgaGVpZ2h0OiA5Mi41dmg7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxufVxcbiNzaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzaWRlYmFyID4gZGl2ID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxuICBwYWRkaW5nOiAwO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuI3NpZGViYXIgLnByb2plY3RTZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbiNzaWRlYmFyICNuZXdMaXN0IHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4jc2lkZWJhciAjbmV3TGlzdCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NpZGViYXIgI25ld0xpc3QgPiBkaXYgI3BsdXNMaXN0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuI3NpZGViYXIgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuI3NpZGViYXIgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDkyLjV2aDtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAjcGx1c1RvRG8ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDRweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjUsIDEpO1xcbn1cXG4uZHJvcGRvd24gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgICAgICBjb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5kcm9wZG93biBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuLmRyb3Bkb3duIHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCA3cHggMHB4IGdyYXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5kcm9wZG93biAjZHVlRGF0ZUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmRyb3Bkb3duICNwcmlvcml0eUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2Ryb3Bkb3duVG9EbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4jZHJvcGRvd25Ub0RvIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kb3RzLWhvcml6b250YWwuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFpbmVyVG9Eb0Ryb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jY2FyZEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiA2cHggN3B4IDEwcHggLTVweCBncmF5O1xcbn1cXG5cXG4uc3ViQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcbi5zdWJDb250YWluZXIgPiAudGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG4uc3ViQ29udGFpbmVyID4gLnRhc2tDb250YWluZXIgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG4udGl0bGVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcbi50aXRsZUNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjMDA2OWVkO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMHB4ICMwMDY5ZWQ7XFxufVxcblxcbmlucHV0Om5vdCg6Y2hlY2tlZCk6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICB0b3A6IC0xcHg7XFxuICBsZWZ0OiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZjNmNGY2O1xcbn1cXG5cXG5pbnB1dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNtYWluVGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgaW5pdGlhbFRhc2tzIH0gZnJvbSAnLi9sb2cnO1xuaW1wb3J0IHN0YXIgZnJvbSAnLi9zdGFyLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci1tb250aC5zdmcnO1xuaW1wb3J0IGFyY2hpdmUgZnJvbSAnLi9hcmNoaXZlLnN2Zyc7XG5cbmluaXRpYWxSZW5kZXIucmVuZGVyTG9nbygpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJQbHVzKCk7XG5pbml0aWFsUmVuZGVyLnJlbmRlckR1ZURhdGVzKCdUb2RheScsIHN0YXIsICdzdGFyJyk7XG5pbml0aWFsUmVuZGVyLnJlbmRlckR1ZURhdGVzKCdVcGNvbWluZycsIGNhbGVuZGFyLCAnY2FsZW5kYXInKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyRHVlRGF0ZXMoJ1NvbWVkYXknLCBhcmNoaXZlLCAnYXJjaGl2ZScpO1xuaW5pdGlhbFRhc2tzLmFkZExpc3QoJ1ZhY2F0aW9ucycpO1xuaW5pdGlhbFRhc2tzLmFkZExpc3QoJ0ZhbWlseScpO1xuaW5pdGlhbFRhc2tzLmFkZExpc3QoJ1dvcmsnKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdIb2JiaWVzJyk7XG5pbml0aWFsVGFza3MucmVuZGVyTGlzdHMoKTtcbmluaXRpYWxUYXNrcy5hZGRQcm9qZWN0KCdBbm90aGVyIFByZXNlbnRhdGlvbicsICdXb3JrJyk7XG5pbml0aWFsVGFza3MuYWRkUHJvamVjdCgnU2VlIE1vbScsICdGYW1pbHknKTtcbmluaXRpYWxUYXNrcy5hZGRQcm9qZWN0KCdHbyBTa2F0ZWJvYXJkaW5nJywgJ0hvYmJpZXMnKTtcbmluaXRpYWxUYXNrcy5yZW5kZXJQcm9qZWN0cygpO1xuaW5pdGlhbFJlbmRlci5yZW5kZXJBZGRMaXN0KCk7XG5pbml0aWFsVGFza3MuYWRkVGFzaygnUmVjZWl2ZSBGdW5kcycsICdTZWUgTW9tJyk7XG5pbml0aWFsVGFza3MuYWRkVGFzaygnT3BlbiBBY2NvdW50JywgJ0Fub3RoZXIgUHJlc2VudGF0aW9uJyk7XG5pbml0aWFsVGFza3MuYWRkVGFzaygnU3BlbmQgTW9uZXknLCAnR28gU2thdGVib2FyZGluZycpO1xuaW5pdGlhbFRhc2tzLnJlbmRlclRhc2tzKCk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnU29tZXRoaW5nJywgJ09wZW4gQWNjb3VudCcpO1xuaW5pdGlhbFRhc2tzLmFkZFRvRG8oJ1NvbWV0aGluZyBFbHNlJywgJ1NwZW5kIE1vbmV5Jyk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnV2UgcmVhbGx5IG5lZWQgdG8gZ2V0IGZ1bmRzJywgJ1JlY2VpdmUgRnVuZHMnKTtcbmluaXRpYWxUYXNrcy5hZGRUb0RvKCdXZSBuZWVkIGZ1bmRzJywgJ1JlY2VpdmUgRnVuZHMnKTtcbmluaXRpYWxUYXNrcy5hZGRUb0RvKCdXZSByZWFsbHkgbmVlZCB0byBnZXQgZG9zaCcsICdSZWNlaXZlIEZ1bmRzJyk7IiwiaW1wb3J0IHsgaW5pdGlhbFJlbmRlciB9IGZyb20gXCIuL3BhZ2VcIjtcblxuY29uc3QgdGFza0xvZyA9ICgpID0+IHtcbiAgbGV0IG15TGlzdHMgPSBbXTtcbiAgbGV0IG15UHJvamVjdHMgPSBbXTtcbiAgbGV0IG15VGFza3MgPSBbXTtcbiAgbGV0IG15VG9Eb3MgPSBbXTtcblxuICBjb25zdCBsaXN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGV9O1xuICB9XG5cbiAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIHBhcmVudFRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcGFyZW50VGl0bGV9O1xuICB9XG5cbiAgY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIHBhcmVudFRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcGFyZW50VGl0bGV9O1xuICB9XG5cbiAgY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIHBhcmVudFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgdG9Eb0luZGV4ID0gMjtcbiAgICBsZXQgdG9Eb0lkID0gJzInO1xuXG4gICAgcmV0dXJuIHt0aXRsZSwgcGFyZW50VGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0KHRpdGxlKSB7XG4gICAgbGV0IGxpc0luTG9nID0gZmFsc2U7XG4gICAgbXlMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGlmICh0aXRsZSA9PSBsaXN0LnRpdGxlKSB7XG4gICAgICAgICAgbGlzSW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGxpc0luTG9nID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gbGlzdEZhY3RvcnkodGl0bGUpO1xuICAgICAgICBteUxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIHJldHVybiBuZXdMaXN0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIHBhcmVudFRpdGxlKSB7XG4gICAgbGV0IHByb2plY3RJbkxvZyA9IGZhbHNlO1xuICAgIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAodGl0bGUgPT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgIHByb2plY3RJbkxvZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvamVjdEluTG9nID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGUsIHBhcmVudFRpdGxlKTtcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIHBhcmVudFRpdGxlKSB7XG4gICAgbGV0IHRhc2tJbkxvZyA9IGZhbHNlO1xuICAgIG15VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGl0bGUgPT0gdGFzay50aXRsZSkge1xuICAgICAgICAgIHRhc2tJbkxvZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza0luTG9nID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIHBhcmVudFRpdGxlKTtcbiAgICAgICAgbXlUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRG8odGl0bGUsIHBhcmVudFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgdG9Eb0luTG9nID0gZmFsc2U7XG4gICAgbXlUb0Rvcy5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICBpZiAodG9Eby50aXRsZSA9PSB0aXRsZSkge1xuICAgICAgICB0b0RvSW5Mb2cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0b0RvSW5Mb2cgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBuZXdUb0RvID0gdG9Eb0ZhY3RvcnkodGl0bGUsIHBhcmVudFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgbXlUb0Rvcy5wdXNoKG5ld1RvRG8pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3RzKCkge1xuICAgIG15TGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGV0IGlkID0gbGlzdC50aXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGluaXRpYWxSZW5kZXIuZGlzcGxheUxpc3RzKGxpc3QudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgbXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgaWQgPSBwcm9qZWN0LnBhcmVudFRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaW5pdGlhbFJlbmRlci5kaXNwbGF5UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5uZXh0U2libGluZywgcHJvamVjdC50aXRsZSwgcHJvamVjdC5wYXJlbnRUaXRsZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUYXNrcyhwYXJlbnRUaXRsZSkge1xuICAgIG15VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sucGFyZW50VGl0bGUgPT0gcGFyZW50VGl0bGUpIHtcbiAgICAgICAgaW5pdGlhbFJlbmRlci5yZW5kZXJNYWluU3ViKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkQm94JyksIHRhc2sudGl0bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVuZGVyVG9Eb3ModGFzay50aXRsZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUb0RvcyhwYXJlbnRUaXRsZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUb0Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUb0Rvc1tpXS50b0RvSW5kZXggPSBpO1xuICAgICAgbXlUb0Rvc1tpXS50b0RvSWQgPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnN0IGlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50VGl0bGUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgaWRDb250YWluZXIubmV4dFNpYmxpbmcuaW5uZXJIVE1MID0gJyc7XG4gICAgbXlUb0Rvcy5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICBpZiAodG9Eby5wYXJlbnRUaXRsZSA9PSBwYXJlbnRUaXRsZSkge1xuICAgICAgICBsZXQgaWQgPSB0b0RvLnBhcmVudFRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpbml0aWFsUmVuZGVyLmRpc3BsYXlUYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLm5leHRTaWJsaW5nLCB0b0RvLnRpdGxlLCB0b0RvLnBhcmVudFRpdGxlLCB0b0RvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhteVRvRG9zKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkTGlzdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgYWRkVG9EbyxcbiAgICByZW5kZXJMaXN0cyxcbiAgICByZW5kZXJQcm9qZWN0cyxcbiAgICByZW5kZXJUYXNrcywgXG4gICAgcmVuZGVyVG9Eb3MsXG4gICAgbXlUb0RvcyxcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsVGFza3MgPSB0YXNrTG9nKCk7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9vcmItbG9nby5qcGcnO1xuaW1wb3J0IHBsdXMgZnJvbSAnLi9wbHVzLnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXMgZnJvbSAnLi9kb3RzLWhvcml6b250YWwuc3ZnJztcbmltcG9ydCBzZWN0aW9uU3ltYm9sIGZyb20gJy4vY2lyY2xlLWhhbGYtZnVsbC5zdmcnO1xuaW1wb3J0IHByb2plY3RTeW1ib2wgZnJvbSAnLi9wYWNrYWdlLXZhcmlhbnQtY2xvc2VkLnN2Zyc7XG5pbXBvcnQgeyBpbml0aWFsVGFza3MgfSBmcm9tICcuL2xvZyc7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyTG9nbygpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSAnLi9pbWFnZXMvb3JiLWxvZ28uanBnJztcbiAgICBsb2dvLmFsdCA9ICdDb21wYW55IGxvZ28nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsdXMoKSB7XG4gICAgY29uc3QgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHBsdXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbHVzVGV4dC5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIHBsdXMuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICBwbHVzLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHBsdXMuaWQgPSAncGx1c1Rhc2snO1xuICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgcGx1c0J0bi5hcHBlbmRDaGlsZChwbHVzVGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpbml0aWFsVGFza3MuYWRkUHJvamVjdChwcm9tcHQoJ1Byb2plY3QgVGl0bGU6JyksIHByb21wdCgnTGlzdCBTZWN0aW9uOicpKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfSk7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckR1ZURhdGVzKHNlY3Rpb24sIHN2ZywgaWQpIHtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5pZCA9IHNlY3Rpb24udG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN5bWJvbC5hbHQgPSAnIyc7XG4gICAgc3ltYm9sLnNyYyA9IHN2ZztcbiAgICBzeW1ib2wuaWQgPSBpZDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHNlY3Rpb247XG5cbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckFkZExpc3QoKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0QnRuLmlkID0gJ25ld0xpc3QnO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwbHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzVGV4dC5pbm5lclRleHQgPSAnTmV3IExpc3QnO1xuICAgIHBsdXMuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICBwbHVzLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHBsdXMuaWQgPSAncGx1c0xpc3QnO1xuICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgbmV3TGlzdC5hcHBlbmRDaGlsZChwbHVzVGV4dCk7XG4gICAgbGlzdEJ0bi5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RCdG4pO1xuICAgIGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gaW5pdGlhbFRhc2tzLmFkZExpc3QocHJvbXB0KCdOZXcgTGlzdDonKSk7XG4gICAgICBkaXNwbGF5TGlzdHMobmV3TGlzdC50aXRsZSk7XG4gICAgICBzaWRlYmFyLmluc2VydEJlZm9yZShsaXN0QnRuLCBzaWRlYmFyLmxhc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNYWluQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQm94LmlkID0gJ2NhcmRCb3gnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm94KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1haW5UaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAnbWFpblRpdGxlJztcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG1haW5CbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1haW5UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBtYWluQmx1cmIuaW5uZXJUZXh0ID0gJ0tlZXAgdGhlIHRhbGsgYW5kIHNsaWRlcyBzaW1wbGU6IHdoYXQgYXJlIHRocmVlIHRoaW5ncyBldmVyeW9uZSBzaG91bGQgcmVtZW1iZXI/JztcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkJsdXJiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlMaXN0cyh0aXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3RDb250YWluZXInO1xuICAgIHByb2plY3RTZWN0aW9uLmlkID0gdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QgPSAncHJvamVjdFNlY3Rpb24nO1xuXG4gICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3ltYm9sLmFsdCA9ICcjJztcbiAgICBzeW1ib2wuc3JjID0gc2VjdGlvblN5bWJvbDtcblxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGlzdFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KGNvbnRhaW5lciwgdGl0bGUsIHBhcmVudFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzdWJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzdWJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgc3ViSW1nLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgc3ViSW1nLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHN1YkltZy5pZCA9ICdwbHVzU3ViJztcbiAgICBzdWJUeHQuaW5uZXJUZXh0ID0gJ05ldyBTdWItU2VjdGlvbic7XG4gICAgY29uc3Qgc3ViU2VjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1YlNlY3Rpb25CdG4uaWQgPSAnc3ViLXNlY3Rpb24tYnRuJztcbiAgICBwcm9qZWN0QnRuLmlkID0gdGl0bGUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QgPSAncHJvamVjdCc7XG4gICAgXG4gICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3ltYm9sLmFsdCA9ICcjJztcbiAgICBzeW1ib2wuc3JjID0gcHJvamVjdFN5bWJvbDtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gICAgc3ViU2VjdGlvbkJ0bi5hcHBlbmRDaGlsZChzdWJJbWcpO1xuICAgIHN1YlNlY3Rpb25CdG4uYXBwZW5kQ2hpbGQoc3ViVHh0KTtcbiAgICBcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgcmVuZGVyTG9nbygpO1xuICAgICAgcmVuZGVyUGx1cygpO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YlNlY3Rpb25CdG4pO1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlbmRlck1haW5UaXRsZSh0aXRsZSk7XG4gICAgICByZW5kZXJNYWluQ29udGFpbmVyKCk7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVGFza3ModGl0bGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1YlNlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBuZXdTdWJTZWN0aW9uID0gaW5pdGlhbFRhc2tzLmFkZFRhc2socHJvbXB0KCdOZXcgU3ViLVNlY3Rpb246JyksIHRpdGxlKTtcbiAgICAgIGNhcmRCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVGFza3ModGl0bGUpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJlbmRlck1haW5TdWIoYm94LCB0aXRsZSkge1xuICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnc3ViQ29udGFpbmVyJztcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0ID0gJ3RpdGxlQ29udGFpbmVyJztcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9IHRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza0NvbnRhaW5lcic7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIHJlbmRlclN1YkRyb3Bkb3duKHRpdGxlQ29udGFpbmVyLCB0aXRsZSk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VGFzayhjb250YWluZXIsIHRpdGxlLCBwYXJlbnRUaXRsZSwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0YXNrQ29udGFpbmVyJztcbiAgICBjb25zdCB0YXNrTGFiZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0xhYmVsLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHRhc2tMYWJlbEJ0bi5pZCA9IHRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIFxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG8odG9Eb0RlbGV0ZVRhcmdldCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJUb0RvRHJvcGRvd24nKTtcbiAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBpZiAoc2VsZWN0ZWREcm9wZG93biAhPSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpbml0aWFsVGFza3MubXlUb0Rvcy5zcGxpY2UodG9Eb0RlbGV0ZVRhcmdldC50b0RvSW5kZXgsIDEpO1xuICAgICAgY29uc29sZS5sb2coaW5pdGlhbFRhc2tzLm15VG9Eb3MpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tMYWJlbEJ0bi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xhYmVsQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgY2hlY2tib3gudmFsdWUgPSAnb24nO1xuICAgIH0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjaGVja2JveC52YWx1ZSA9PSAnb24nKSB7XG4gICAgICAgIGRlbGV0ZVRvRG8odGFzayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW5kZXJUb0RvRHJvcGRvd24oY29udGFpbmVyLCB0YXNrTGFiZWxCdG4sIHRhc2tDb250YWluZXIsIHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVG9Eb0Ryb3Bkb3duKGJveCwgdG9Eb0J0biwgc3ViQ29udGFpbmVyLCB0b0RvKSB7XG4gICAgXG4gICAgdG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHZpc2libGVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXJUb0RvRHJvcGRvd24nKTtcbiAgICAgIHZpc2libGVEcm9wZG93bi5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICBkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGFpbmVyVG9Eb0Ryb3Bkb3duJztcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkcm9wZG93bi5pZCA9ICdkcm9wZG93blRvRG8nO1xuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nLCAnc2hvdycpO1xuICAgICAgXG4gICAgICBjb25zdCBzYXZlRGVzY3JpcHRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNhdmVEZXNjcmlwdGlvbkJ0bi5pbm5lclRleHQgPSAnU2F2ZSc7XG4gICAgICBjb25zdCBzYXZlRHVlRGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc2F2ZUR1ZURhdGVCdG4uaW5uZXJUZXh0ID0gJ1NhdmUnO1xuICAgICAgY29uc3Qgc2F2ZVByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzYXZlUHJpb3JpdHlCdG4uaW5uZXJUZXh0ID0gJ1NhdmUnO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlSW5wdXQnO1xuICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5SW5wdXQnO1xuXG4gICAgICBpZiAodG9Eby5wcmlvcml0eSA9PSB1bmRlZmluZWQgfHwgdG9Eby5wcmlvcml0eSA9PSBudWxsKSB7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eUlucHV0LmlubmVyVGV4dCA9IHRvRG8ucHJpb3JpdHk7XG4gICAgICB9XG4gICAgICBpZiAodG9Eby5kdWVEYXRlID09IHVuZGVmaW5lZCB8fCB0b0RvLmR1ZURhdGUgPT0gbnVsbCkge1xuICAgICAgICBkdWVEYXRlSW5wdXQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlSW5wdXQuaW5uZXJUZXh0ID0gdG9Eby5kdWVEYXRlO1xuICAgICAgfVxuICAgICAgaWYgKHRvRG8uZGVzY3JpcHRpb24gPT0gdW5kZWZpbmVkIHx8IHRvRG8uZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRvRG8uZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKHNhdmVQcmlvcml0eUJ0bik7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKHNhdmVEdWVEYXRlQnRuKTtcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChzYXZlRGVzY3JpcHRpb25CdG4pO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcbiAgICAgIGJveC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBzdWJDb250YWluZXIubmV4dFNpYmxpbmcpO1xuXG4gICAgICBzYXZlRGVzY3JpcHRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGVtcERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRlbXBEZXNjcmlwdGlvbi50b1N0cmluZygpO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRlbXBEZXNjcmlwdGlvbjtcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbiA9IHRlbXBEZXNjcmlwdGlvbjtcbiAgICAgIH0pO1xuXG4gICAgICBzYXZlRHVlRGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZW1wRHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdGVtcER1ZURhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGVtcER1ZURhdGU7XG4gICAgICAgIHRvRG8uZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgICAgfSk7XG5cbiAgICAgIHNhdmVQcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZW1wUHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICB0ZW1wUHJpb3JpdHkudG9TdHJpbmcoKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRlbXBQcmlvcml0eTtcbiAgICAgICAgdG9Eby5wcmlvcml0eSA9IHRlbXBQcmlvcml0eTtcbiAgICAgICAgY29uc29sZS5sb2coaW5pdGlhbFRhc2tzLm15VG9Eb3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coaW5pdGlhbFRhc2tzLm15VG9Eb3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU3ViRHJvcGRvd24oYm94LCB0aXRsZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGFpbmVyJztcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRyb3Bkb3duQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJvcGRvd25CdG4uaWQgPSAnZHJvcGRvd25CdG4nO1xuICAgIGRyb3Bkb3duLmlkID0gJ2Ryb3Bkb3duJztcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QgPSAnZHJvcGRvd24nO1xuICAgIGNvbnN0IHRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0b0RvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgdG9Eb1R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHRvRG9CdG4uaWQgPSAndG8tZG8tYnRuJztcbiAgICB0b0RvSW1nLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgdG9Eb0ltZy5hbHQgPSAnUGx1cyBzaWduJztcbiAgICB0b0RvSW1nLmlkID0gJ3BsdXNUb0RvJztcbiAgICB0b0RvVHh0LmlubmVyVGV4dCA9ICdOZXcgVG9kbyc7XG5cbiAgICB0b0RvQnRuLmFwcGVuZENoaWxkKHRvRG9JbWcpO1xuICAgIHRvRG9CdG4uYXBwZW5kQ2hpbGQodG9Eb1R4dCk7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQodG9Eb0J0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuICAgIGJveC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgdG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IG5ld1RvRG8gPSBpbml0aWFsVGFza3MuYWRkVG9Ebyhwcm9tcHQoJ05ldyBUb2RvOicpLCB0aXRsZSk7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVG9Eb3ModGl0bGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICB9O1xuXG4gICAgZHJvcGRvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpIHtcbiAgICAgICAgdG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyTG9nbyxcbiAgICByZW5kZXJQbHVzLFxuICAgIHJlbmRlckR1ZURhdGVzLFxuICAgIHJlbmRlckFkZExpc3QsXG4gICAgcmVuZGVyTWFpbkNvbnRhaW5lcixcbiAgICByZW5kZXJNYWluVGl0bGUsXG4gICAgZGlzcGxheUxpc3RzLFxuICAgIGRpc3BsYXlQcm9qZWN0LFxuICAgIHJlbmRlck1haW5TdWIsXG4gICAgZGlzcGxheVRhc2ssXG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbFJlbmRlciA9IGhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9