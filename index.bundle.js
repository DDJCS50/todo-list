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
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  width: 115px;
  height: 50px;
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
  min-width: 105px;
}
.dropdown #priorityInput {
  background-color: #f8fafc;
  width: 100px;
  border-radius: 0;
  border: 1px solid black;
  height: 1.5rem;
  min-width: 25px;
}

#dropdown {
  z-index: 2;
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
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: row;
}
#dropdownToDo button {
  background-color: #059669;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
}
#dropdownToDo h2 {
  display: flex;
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
  display: flex;
  flex-direction: column;
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
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nimg, picture, svg, video {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n  --system-ui: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nbutton {\n  display: flex;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  align-items: center;\n  background-color: #059669;\n  cursor: pointer;\n  text-align: center;\n}\n\nh1, h2, h3, h4, h5 {\n  font-weight: bolder;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background-color: #059669;\n  width: 100vw;\n  height: 7.5vh;\n  display: flex;\n  align-items: center;\n  box-shadow: inset -4px -4px 20px 0px gray;\n  padding: 12px;\n}\nheader > img {\n  height: 50px;\n  width: 50px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  margin-right: auto;\n}\nheader #plusTask {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\nheader #plusSub {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n#sidebar {\n  height: 92.5vh;\n  width: 20%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 16px;\n  gap: 12px;\n  background-color: #f3f4f6;\n}\n#sidebar > div {\n  display: flex;\n  gap: 4px;\n  margin-right: auto;\n  align-items: center;\n}\n#sidebar > div > button {\n  background-color: #f3f4f6;\n  padding: 0;\n  align-self: flex-start;\n}\n#sidebar .projectSection {\n  margin-top: 16px;\n}\n#sidebar #newList {\n  margin-top: auto;\n  align-items: center;\n  background-color: #f3f4f6;\n  margin-left: auto;\n}\n#sidebar #newList > div {\n  display: flex;\n  align-items: center;\n}\n#sidebar #newList > div #plusList {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  margin-right: 4px;\n}\n#sidebar img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#sidebar .project {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\nmain {\n  height: 92.5vh;\n  width: 80%;\n  background-color: #f8fafc;\n  margin: 0;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain #plusToDo {\n  height: 25px;\n  width: 25px;\n  aspect-ratio: 1/1;\n  border-radius: 16px;\n  background-color: gold;\n  margin-right: 4px;\n}\n\n.dropdown {\n  position: absolute;\n  right: 44px;\n  width: 120px;\n  box-shadow: var(--shadow);\n  border-radius: var(--radius);\n  margin-top: 0.3rem;\n  background: #f8fafc;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(0.5rem);\n  transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown button {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--gap);\n       column-gap: var(--gap);\n  padding: 0.8rem 1rem;\n  text-decoration: none;\n  color: black;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  width: 115px;\n  height: 50px;\n}\n.dropdown button:hover {\n  background-color: #f3f4f6;\n}\n.dropdown textarea {\n  outline: none;\n  resize: none;\n  overflow: auto;\n  width: 100%;\n  height: 100px;\n  box-shadow: inset -1px -1px 7px 0px gray;\n  border: 1px solid lightgray;\n  border-radius: 8px;\n}\n.dropdown #dueDateInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n  min-width: 105px;\n}\n.dropdown #priorityInput {\n  background-color: #f8fafc;\n  width: 100px;\n  border-radius: 0;\n  border: 1px solid black;\n  height: 1.5rem;\n  min-width: 25px;\n}\n\n#dropdown {\n  z-index: 2;\n}\n\n#dropdownBtn {\n  display: flex;\n  background: transparent;\n  height: 24px;\n  width: 24px;\n  padding: 0;\n}\n\n#dropdownToDo {\n  width: 100%;\n  position: relative;\n  right: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row;\n}\n#dropdownToDo button {\n  background-color: #059669;\n  padding: 8px 10px;\n  display: flex;\n  justify-content: center;\n}\n#dropdownToDo h2 {\n  display: flex;\n}\n\n.container {\n  height: 24px;\n  width: 24px;\n  background-image: url(\"../dots-horizontal.svg\");\n  background-repeat: no-repeat;\n}\n\n.containerToDoDropdown {\n  position: relative;\n  width: 100%;\n}\n\n.show {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0rem);\n  display: flex;\n  flex-direction: column;\n}\n\n#cardBox {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 24px;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n  align-self: flex-start;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 250px;\n  width: 300px;\n  background-color: #e2e8f0;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 6px 7px 10px -5px gray;\n}\n\n.subContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  background-color: #f8fafc;\n}\n.subContainer > .taskContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  background-color: #f8fafc;\n}\n.subContainer > .taskContainer label {\n  background-color: #f8fafc;\n  font-size: 1rem;\n}\n.subContainer > .taskContainer button {\n  background-color: #f8fafc;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n.titleContainer img {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh3 {\n  color: #0069ed;\n}\n\ninput {\n  width: 24px;\n  height: 24px;\n  border-radius: 8px;\n  transition: box-shadow 0.3s;\n  background: lightgrey;\n  cursor: pointer;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\ninput:checked {\n  box-shadow: inset 0 0 0 20px #0069ed;\n}\n\ninput:not(:checked)::before {\n  display: none;\n}\n\ninput:checked::before {\n  display: inline-block;\n  position: relative;\n  content: \"✓\";\n  top: -1px;\n  left: 3px;\n  font-size: 1.5rem;\n  color: #f3f4f6;\n}\n\ninput:hover {\n  background-color: #ccc;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.taskContainer {\n  display: flex;\n  align-items: center;\n  width: -moz-max-content;\n  width: max-content;\n  justify-content: flex-start;\n}\n\n#mainTitle {\n  display: flex;\n  align-self: flex-start;\n  flex-direction: column;\n  padding-left: 24px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"],"sourceRoot":""}]);
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
    myTasks,
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

    mainTitle.innerText = title;

    titleContainer.appendChild(mainTitle);
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
      console.log(_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myTasks);
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
    }
    
    displayTask.deleteToDo = deleteToDo;
    
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
      const description = document.createElement('textarea');
      const dueDateInput = document.createElement('textarea');
      dueDateInput.id = 'dueDateInput';
      const priorityInput = document.createElement('textarea');
      priorityInput.id = 'priorityInput';
      const priorityTitle = document.createElement('h2');
      priorityTitle.innerText = 'Priority:';
      const dateTitle = document.createElement('h2');
      dateTitle.innerText = 'Due:';
      const descriptionTitle = document.createElement('h2');
      descriptionTitle.innerText = 'Description:';

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
      
      dropdown.appendChild(priorityTitle);
      dropdown.appendChild(priorityInput);
      dropdown.appendChild(dateTitle);
      dropdown.appendChild(dueDateInput);
      dropdown.appendChild(descriptionTitle);
      dropdown.appendChild(description);
      dropdown.appendChild(saveDescriptionBtn);
      container.appendChild(dropdown);
      box.insertBefore(container, subContainer.nextSibling);

      saveDescriptionBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const tempDescription = description.value;
        tempDescription.toString();
        description.value = tempDescription;
        toDo.description = tempDescription;

        const tempPriority = priorityInput.value;
        tempPriority.toString();
        priorityInput.value = tempPriority;
        toDo.priority = tempPriority;

        const tempDueDate = dueDateInput.value;
        tempDueDate.toString();
        dueDateInput.value = tempDueDate;
        toDo.dueDate = tempDueDate;
      });
    });
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

    const deleteTaskBtn = document.createElement('button');

    deleteTaskBtn.id = 'delete-task-btn';
    deleteTaskBtn.innerText = 'Delete Section';

    toDoBtn.id = 'to-do-btn';
    toDoImg.src = './images/plus.svg';
    toDoImg.alt = 'Plus sign';
    toDoImg.id = 'plusToDo';
    toDoTxt.innerText = 'New Todo';

    toDoBtn.appendChild(toDoImg);
    toDoBtn.appendChild(toDoTxt);
    dropdown.appendChild(toDoBtn);
    dropdown.appendChild(deleteTaskBtn);
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

    function deleteSection(sectionTitle) {
      for (let i = 0; i < _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos.length; i++) {
        _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos.forEach((toDo) => {
          const index = toDo.toDoIndex;
          if (toDo.parentTitle == sectionTitle) {
            _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos.splice(index, 1);
            for (let j = 0; j < _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos.length; j++) {
              _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos[j].toDoIndex = j;
              _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myToDos[j].toDoId = j.toString();
            }
          }
          const mainBox = document.querySelector('#cardBox');
          mainBox.innerHTML = '';
        });
      }

      _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.renderTasks(sectionTitle);
      for (let k = 0; k < _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myTasks.length; k++) {

        if (_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myTasks[k].title == sectionTitle) {
          _log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myTasks.splice(k, 1);
        }
        console.log(_log__WEBPACK_IMPORTED_MODULE_5__.initialTasks.myTasks);
      }; 
    }

    deleteTaskBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      deleteSection(title);
    });
  }

  return {
    renderLogo,
    renderPlus,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFX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O0FBQ2xCLGtCQUFrQiw4Q0FBWTtBQUM5QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFZO0FBQ2xDLE1BQU0sOENBQVk7QUFDbEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxzQkFBc0IsSUFBSSw4Q0FBWSxpQkFBaUI7QUFDdkQsUUFBUSw4Q0FBWTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSw4Q0FBWTtBQUN4Qiw0QkFBNEIsSUFBSSw4Q0FBWSxpQkFBaUI7QUFDN0QsY0FBYyw4Q0FBWTtBQUMxQixjQUFjLDhDQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLE1BQU0sOENBQVk7QUFDbEIsc0JBQXNCLElBQUksOENBQVksaUJBQWlCOztBQUV2RCxZQUFZLDhDQUFZO0FBQ3hCLFVBQVUsOENBQVk7QUFDdEI7QUFDQSxvQkFBb0IsOENBQVk7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZG90cy1ob3Jpem9udGFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46cm9vdCB7XG4gIC0tc3lzdGVtLXVpOiBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NjY5O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNy41dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCAyMHB4IDBweCBncmF5O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuaGVhZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmhlYWRlciAjcGx1c1Rhc2sge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5oZWFkZXIgI3BsdXNTdWIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiNzaWRlYmFyIHtcbiAgaGVpZ2h0OiA5Mi41dmg7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG59XG4jc2lkZWJhciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2lkZWJhciA+IGRpdiA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4jc2lkZWJhciAucHJvamVjdFNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuI3NpZGViYXIgI25ld0xpc3Qge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2ICNwbHVzTGlzdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiNzaWRlYmFyIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuI3NpZGViYXIgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogOTIuNXZoO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5tYWluICNwbHVzVG9EbyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjUsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbn1cbi5kcm9wZG93biBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWNvbHVtbi1nYXA6IHZhcigtLWdhcCk7XG4gICAgICAgY29sdW1uLWdhcDogdmFyKC0tZ2FwKTtcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZHJvcGRvd24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbn1cbi5kcm9wZG93biB0ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggN3B4IDBweCBncmF5O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5kcm9wZG93biAjZHVlRGF0ZUlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIG1pbi13aWR0aDogMTA1cHg7XG59XG4uZHJvcGRvd24gI3ByaW9yaXR5SW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xufVxuXG4jZHJvcGRvd24ge1xuICB6LWluZGV4OiAyO1xufVxuXG4jZHJvcGRvd25CdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2Ryb3Bkb3duVG9EbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbiNkcm9wZG93blRvRG8gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2Ryb3Bkb3duVG9EbyBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWluZXJUb0RvRHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2NhcmRCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDZweCA3cHggMTBweCAtNXB4IGdyYXk7XG59XG5cbi5zdWJDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG59XG4uc3ViQ29udGFpbmVyID4gLnRhc2tDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG59XG4uc3ViQ29udGFpbmVyID4gLnRhc2tDb250YWluZXIgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc3ViQ29udGFpbmVyID4gLnRhc2tDb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbn1cblxuLnRpdGxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRpdGxlQ29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaDMge1xuICBjb2xvcjogIzAwNjllZDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwcHggIzAwNjllZDtcbn1cblxuaW5wdXQ6bm90KDpjaGVja2VkKTo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQ6Y2hlY2tlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogM3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmM2Y0ZjY7XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxubGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4jbWFpblRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4ucHJvamVjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFDaEI7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtJQUFrSTtBQUNwSTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixz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Q3ZCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tc3lzdGVtLXVpOiBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTk2Njk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDcuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggMjBweCAwcHggZ3JheTtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcbmhlYWRlciA+IGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuaGVhZGVyICNwbHVzVGFzayB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuaGVhZGVyICNwbHVzU3ViIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBoZWlnaHQ6IDkyLjV2aDtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuI3NpZGViYXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NpZGViYXIgPiBkaXYgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gIHBhZGRpbmc6IDA7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4jc2lkZWJhciAucHJvamVjdFNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuI3NpZGViYXIgI25ld0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbiNzaWRlYmFyICNuZXdMaXN0ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jc2lkZWJhciAjbmV3TGlzdCA+IGRpdiAjcGx1c0xpc3Qge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4jc2lkZWJhciBpbWcge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4jc2lkZWJhciAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogOTIuNXZoO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluICNwbHVzVG9EbyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0NHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVyZW0pO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuNSwgMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uZHJvcGRvd24gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1vei1jb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgICAgICBjb2x1bW4tZ2FwOiB2YXIoLS1nYXApO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB3aWR0aDogMTE1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5kcm9wZG93biBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuLmRyb3Bkb3duIHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCA3cHggMHB4IGdyYXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5kcm9wZG93biAjZHVlRGF0ZUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIG1pbi13aWR0aDogMTA1cHg7XFxufVxcbi5kcm9wZG93biAjcHJpb3JpdHlJbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBtaW4td2lkdGg6IDI1cHg7XFxufVxcblxcbiNkcm9wZG93biB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jZHJvcGRvd25CdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jZHJvcGRvd25Ub0RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuI2Ryb3Bkb3duVG9EbyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTY2OTtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jZHJvcGRvd25Ub0RvIGgyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2RvdHMtaG9yaXpvbnRhbC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5jb250YWluZXJUb0RvRHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjYXJkQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDZweCA3cHggMTBweCAtNXB4IGdyYXk7XFxufVxcblxcbi5zdWJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG59XFxuLnN1YkNvbnRhaW5lciA+IC50YXNrQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcbi5zdWJDb250YWluZXIgPiAudGFza0NvbnRhaW5lciBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc3ViQ29udGFpbmVyID4gLnRhc2tDb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuLnRpdGxlQ29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6ICMwMDY5ZWQ7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwcHggIzAwNjllZDtcXG59XFxuXFxuaW5wdXQ6bm90KDpjaGVja2VkKTo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIHRvcDogLTFweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNmM2Y0ZjY7XFxufVxcblxcbmlucHV0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuI21haW5UaXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbFJlbmRlciB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBpbml0aWFsVGFza3MgfSBmcm9tICcuL2xvZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuL3N0YXIuc3ZnJztcbmltcG9ydCBjYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLnN2Zyc7XG5pbXBvcnQgYXJjaGl2ZSBmcm9tICcuL2FyY2hpdmUuc3ZnJztcblxuaW5pdGlhbFJlbmRlci5yZW5kZXJMb2dvKCk7XG5pbml0aWFsUmVuZGVyLnJlbmRlclBsdXMoKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdWYWNhdGlvbnMnKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdGYW1pbHknKTtcbmluaXRpYWxUYXNrcy5hZGRMaXN0KCdXb3JrJyk7XG5pbml0aWFsVGFza3MuYWRkTGlzdCgnSG9iYmllcycpO1xuaW5pdGlhbFRhc2tzLnJlbmRlckxpc3RzKCk7XG5pbml0aWFsVGFza3MuYWRkUHJvamVjdCgnQW5vdGhlciBQcmVzZW50YXRpb24nLCAnV29yaycpO1xuaW5pdGlhbFRhc2tzLmFkZFByb2plY3QoJ1NlZSBNb20nLCAnRmFtaWx5Jyk7XG5pbml0aWFsVGFza3MuYWRkUHJvamVjdCgnR28gU2thdGVib2FyZGluZycsICdIb2JiaWVzJyk7XG5pbml0aWFsVGFza3MucmVuZGVyUHJvamVjdHMoKTtcbmluaXRpYWxSZW5kZXIucmVuZGVyQWRkTGlzdCgpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ1JlY2VpdmUgRnVuZHMnLCAnU2VlIE1vbScpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ09wZW4gQWNjb3VudCcsICdBbm90aGVyIFByZXNlbnRhdGlvbicpO1xuaW5pdGlhbFRhc2tzLmFkZFRhc2soJ1NwZW5kIE1vbmV5JywgJ0dvIFNrYXRlYm9hcmRpbmcnKTtcbmluaXRpYWxUYXNrcy5yZW5kZXJUYXNrcygpO1xuaW5pdGlhbFRhc2tzLmFkZFRvRG8oJ1NvbWV0aGluZycsICdPcGVuIEFjY291bnQnKTtcbmluaXRpYWxUYXNrcy5hZGRUb0RvKCdTb21ldGhpbmcgRWxzZScsICdTcGVuZCBNb25leScpO1xuaW5pdGlhbFRhc2tzLmFkZFRvRG8oJ1dlIHJlYWxseSBuZWVkIHRvIGdldCBmdW5kcycsICdSZWNlaXZlIEZ1bmRzJyk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnV2UgbmVlZCBmdW5kcycsICdSZWNlaXZlIEZ1bmRzJyk7XG5pbml0aWFsVGFza3MuYWRkVG9EbygnV2UgcmVhbGx5IG5lZWQgdG8gZ2V0IGRvc2gnLCAnUmVjZWl2ZSBGdW5kcycpOyIsImltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHRhc2tMb2cgPSAoKSA9PiB7XG4gIGxldCBteUxpc3RzID0gW107XG4gIGxldCBteVByb2plY3RzID0gW107XG4gIGxldCBteVRhc2tzID0gW107XG4gIGxldCBteVRvRG9zID0gW107XG5cbiAgY29uc3QgbGlzdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlfTtcbiAgfVxuXG4gIGNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IHRvRG9JbmRleCA9IDI7XG4gICAgbGV0IHRvRG9JZCA9ICcyJztcblxuICAgIHJldHVybiB7dGl0bGUsIHBhcmVudFRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdCh0aXRsZSkge1xuICAgIGxldCBsaXNJbkxvZyA9IGZhbHNlO1xuICAgIG15TGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBpZiAodGl0bGUgPT0gbGlzdC50aXRsZSkge1xuICAgICAgICAgIGxpc0luTG9nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsaXNJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGxpc3RGYWN0b3J5KHRpdGxlKTtcbiAgICAgICAgbXlMaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICByZXR1cm4gbmV3TGlzdDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBwYXJlbnRUaXRsZSkge1xuICAgIGxldCBwcm9qZWN0SW5Mb2cgPSBmYWxzZTtcbiAgICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHRpdGxlID09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICBwcm9qZWN0SW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHByb2plY3RJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSk7XG4gICAgICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBwYXJlbnRUaXRsZSkge1xuICAgIGxldCB0YXNrSW5Mb2cgPSBmYWxzZTtcbiAgICBteVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRpdGxlID09IHRhc2sudGl0bGUpIHtcbiAgICAgICAgICB0YXNrSW5Mb2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tJbkxvZyA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSk7XG4gICAgICAgIG15VGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RvKHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IHRvRG9JbkxvZyA9IGZhbHNlO1xuICAgIG15VG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgaWYgKHRvRG8udGl0bGUgPT0gdGl0bGUpIHtcbiAgICAgICAgdG9Eb0luTG9nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodG9Eb0luTG9nID09IGZhbHNlKSB7XG4gICAgICBsZXQgbmV3VG9EbyA9IHRvRG9GYWN0b3J5KHRpdGxlLCBwYXJlbnRUaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgIG15VG9Eb3MucHVzaChuZXdUb0RvKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcbiAgICBteUxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgIGxldCBpZCA9IGxpc3QudGl0bGUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpbml0aWFsUmVuZGVyLmRpc3BsYXlMaXN0cyhsaXN0LnRpdGxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IGlkID0gcHJvamVjdC5wYXJlbnRUaXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGluaXRpYWxSZW5kZXIuZGlzcGxheVByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkubmV4dFNpYmxpbmcsIHByb2plY3QudGl0bGUsIHByb2plY3QucGFyZW50VGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocGFyZW50VGl0bGUpIHtcbiAgICBteVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnBhcmVudFRpdGxlID09IHBhcmVudFRpdGxlKSB7XG4gICAgICAgIGluaXRpYWxSZW5kZXIucmVuZGVyTWFpblN1Yihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEJveCcpLCB0YXNrLnRpdGxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlbmRlclRvRG9zKHRhc2sudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVG9Eb3MocGFyZW50VGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VG9Eb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VG9Eb3NbaV0udG9Eb0luZGV4ID0gaTtcbiAgICAgIG15VG9Eb3NbaV0udG9Eb0lkID0gaS50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudFRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpfWApO1xuICAgIGlkQ29udGFpbmVyLm5leHRTaWJsaW5nLmlubmVySFRNTCA9ICcnO1xuICAgIG15VG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgaWYgKHRvRG8ucGFyZW50VGl0bGUgPT0gcGFyZW50VGl0bGUpIHtcbiAgICAgICAgbGV0IGlkID0gdG9Eby5wYXJlbnRUaXRsZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaW5pdGlhbFJlbmRlci5kaXNwbGF5VGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5uZXh0U2libGluZywgdG9Eby50aXRsZSwgdG9Eby5wYXJlbnRUaXRsZSwgdG9Ebyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobXlUb0Rvcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZExpc3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIGFkZFRvRG8sXG4gICAgcmVuZGVyTGlzdHMsXG4gICAgcmVuZGVyUHJvamVjdHMsXG4gICAgcmVuZGVyVGFza3MsIFxuICAgIHJlbmRlclRvRG9zLFxuICAgIG15VG9Eb3MsXG4gICAgbXlUYXNrcyxcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBpbml0aWFsVGFza3MgPSB0YXNrTG9nKCk7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9vcmItbG9nby5qcGcnO1xuaW1wb3J0IHBsdXMgZnJvbSAnLi9wbHVzLnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXMgZnJvbSAnLi9kb3RzLWhvcml6b250YWwuc3ZnJztcbmltcG9ydCBzZWN0aW9uU3ltYm9sIGZyb20gJy4vY2lyY2xlLWhhbGYtZnVsbC5zdmcnO1xuaW1wb3J0IHByb2plY3RTeW1ib2wgZnJvbSAnLi9wYWNrYWdlLXZhcmlhbnQtY2xvc2VkLnN2Zyc7XG5pbXBvcnQgeyBpbml0aWFsVGFza3MgfSBmcm9tICcuL2xvZyc7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyTG9nbygpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSAnLi9pbWFnZXMvb3JiLWxvZ28uanBnJztcbiAgICBsb2dvLmFsdCA9ICdDb21wYW55IGxvZ28nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsdXMoKSB7XG4gICAgY29uc3QgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHBsdXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbHVzVGV4dC5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIHBsdXMuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICBwbHVzLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHBsdXMuaWQgPSAncGx1c1Rhc2snO1xuICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgcGx1c0J0bi5hcHBlbmRDaGlsZChwbHVzVGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xuICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpbml0aWFsVGFza3MuYWRkUHJvamVjdChwcm9tcHQoJ1Byb2plY3QgVGl0bGU6JyksIHByb21wdCgnTGlzdCBTZWN0aW9uOicpKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgfSk7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckFkZExpc3QoKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0QnRuLmlkID0gJ25ld0xpc3QnO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBwbHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzVGV4dC5pbm5lclRleHQgPSAnTmV3IExpc3QnO1xuICAgIHBsdXMuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICBwbHVzLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHBsdXMuaWQgPSAncGx1c0xpc3QnO1xuICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQocGx1cyk7XG4gICAgbmV3TGlzdC5hcHBlbmRDaGlsZChwbHVzVGV4dCk7XG4gICAgbGlzdEJ0bi5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RCdG4pO1xuICAgIGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gaW5pdGlhbFRhc2tzLmFkZExpc3QocHJvbXB0KCdOZXcgTGlzdDonKSk7XG4gICAgICBkaXNwbGF5TGlzdHMobmV3TGlzdC50aXRsZSk7XG4gICAgICBzaWRlYmFyLmluc2VydEJlZm9yZShsaXN0QnRuLCBzaWRlYmFyLmxhc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNYWluQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQm94LmlkID0gJ2NhcmRCb3gnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm94KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1haW5UaXRsZSh0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAnbWFpblRpdGxlJztcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgbWFpblRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlMaXN0cyh0aXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3RDb250YWluZXInO1xuICAgIHByb2plY3RTZWN0aW9uLmlkID0gdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QgPSAncHJvamVjdFNlY3Rpb24nO1xuXG4gICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3ltYm9sLmFsdCA9ICcjJztcbiAgICBzeW1ib2wuc3JjID0gc2VjdGlvblN5bWJvbDtcblxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGlzdFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KGNvbnRhaW5lciwgdGl0bGUsIHBhcmVudFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzdWJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzdWJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgc3ViSW1nLnNyYyA9ICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG4gICAgc3ViSW1nLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHN1YkltZy5pZCA9ICdwbHVzU3ViJztcbiAgICBzdWJUeHQuaW5uZXJUZXh0ID0gJ05ldyBTdWItU2VjdGlvbic7XG4gICAgY29uc3Qgc3ViU2VjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1YlNlY3Rpb25CdG4uaWQgPSAnc3ViLXNlY3Rpb24tYnRuJztcbiAgICBwcm9qZWN0QnRuLmlkID0gdGl0bGUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QgPSAncHJvamVjdCc7XG4gICAgXG4gICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3ltYm9sLmFsdCA9ICcjJztcbiAgICBzeW1ib2wuc3JjID0gcHJvamVjdFN5bWJvbDtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIFxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ltYm9sKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gICAgc3ViU2VjdGlvbkJ0bi5hcHBlbmRDaGlsZChzdWJJbWcpO1xuICAgIHN1YlNlY3Rpb25CdG4uYXBwZW5kQ2hpbGQoc3ViVHh0KTtcbiAgICBcbiAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgcmVuZGVyTG9nbygpO1xuICAgICAgcmVuZGVyUGx1cygpO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YlNlY3Rpb25CdG4pO1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlbmRlck1haW5UaXRsZSh0aXRsZSk7XG4gICAgICByZW5kZXJNYWluQ29udGFpbmVyKCk7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVGFza3ModGl0bGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1YlNlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBuZXdTdWJTZWN0aW9uID0gaW5pdGlhbFRhc2tzLmFkZFRhc2socHJvbXB0KCdOZXcgU3ViLVNlY3Rpb246JyksIHRpdGxlKTtcbiAgICAgIGNhcmRCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVGFza3ModGl0bGUpO1xuICAgICAgY29uc29sZS5sb2coaW5pdGlhbFRhc2tzLm15VGFza3MpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJlbmRlck1haW5TdWIoYm94LCB0aXRsZSkge1xuICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnc3ViQ29udGFpbmVyJztcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0ID0gJ3RpdGxlQ29udGFpbmVyJztcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9IHRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza0NvbnRhaW5lcic7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIHJlbmRlclN1YkRyb3Bkb3duKHRpdGxlQ29udGFpbmVyLCB0aXRsZSk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgYm94LmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VGFzayhjb250YWluZXIsIHRpdGxlLCBwYXJlbnRUaXRsZSwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0YXNrQ29udGFpbmVyJztcbiAgICBjb25zdCB0YXNrTGFiZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0xhYmVsLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHRhc2tMYWJlbEJ0bi5pZCA9IHRpdGxlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICAgIFxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG8odG9Eb0RlbGV0ZVRhcmdldCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJUb0RvRHJvcGRvd24nKTtcbiAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBpZiAoc2VsZWN0ZWREcm9wZG93biAhPSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpbml0aWFsVGFza3MubXlUb0Rvcy5zcGxpY2UodG9Eb0RlbGV0ZVRhcmdldC50b0RvSW5kZXgsIDEpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwbGF5VGFzay5kZWxldGVUb0RvID0gZGVsZXRlVG9EbztcbiAgICBcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrTGFiZWxCdG4uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMYWJlbEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIFxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNoZWNrYm94LnZhbHVlID0gJ29uJztcbiAgICB9KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2hlY2tib3gudmFsdWUgPT0gJ29uJykge1xuICAgICAgICBkZWxldGVUb0RvKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVuZGVyVG9Eb0Ryb3Bkb3duKGNvbnRhaW5lciwgdGFza0xhYmVsQnRuLCB0YXNrQ29udGFpbmVyLCB0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRvRG9Ecm9wZG93bihib3gsIHRvRG9CdG4sIHN1YkNvbnRhaW5lciwgdG9Ebykge1xuICAgIFxuICAgIHRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB2aXNpYmxlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyVG9Eb0Ryb3Bkb3duJyk7XG4gICAgICB2aXNpYmxlRHJvcGRvd24uZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRhaW5lclRvRG9Ecm9wZG93bic7XG4gICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHJvcGRvd24uaWQgPSAnZHJvcGRvd25Ub0RvJztcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJywgJ3Nob3cnKTtcbiAgICAgIFxuICAgICAgY29uc3Qgc2F2ZURlc2NyaXB0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzYXZlRGVzY3JpcHRpb25CdG4uaW5uZXJUZXh0ID0gJ1NhdmUnO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlSW5wdXQnO1xuICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5SW5wdXQnO1xuICAgICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBwcmlvcml0eVRpdGxlLmlubmVyVGV4dCA9ICdQcmlvcml0eTonO1xuICAgICAgY29uc3QgZGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGRhdGVUaXRsZS5pbm5lclRleHQgPSAnRHVlOic7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGRlc2NyaXB0aW9uVGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgIGlmICh0b0RvLnByaW9yaXR5ID09IHVuZGVmaW5lZCB8fCB0b0RvLnByaW9yaXR5ID09IG51bGwpIHtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5pbm5lclRleHQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuaW5uZXJUZXh0ID0gdG9Eby5wcmlvcml0eTtcbiAgICAgIH1cbiAgICAgIGlmICh0b0RvLmR1ZURhdGUgPT0gdW5kZWZpbmVkIHx8IHRvRG8uZHVlRGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5pbm5lclRleHQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5pbm5lclRleHQgPSB0b0RvLmR1ZURhdGU7XG4gICAgICB9XG4gICAgICBpZiAodG9Eby5kZXNjcmlwdGlvbiA9PSB1bmRlZmluZWQgfHwgdG9Eby5kZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRhdGVUaXRsZSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChzYXZlRGVzY3JpcHRpb25CdG4pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcbiAgICAgIGJveC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBzdWJDb250YWluZXIubmV4dFNpYmxpbmcpO1xuXG4gICAgICBzYXZlRGVzY3JpcHRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGVtcERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRlbXBEZXNjcmlwdGlvbi50b1N0cmluZygpO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRlbXBEZXNjcmlwdGlvbjtcbiAgICAgICAgdG9Eby5kZXNjcmlwdGlvbiA9IHRlbXBEZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCB0ZW1wUHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICB0ZW1wUHJpb3JpdHkudG9TdHJpbmcoKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRlbXBQcmlvcml0eTtcbiAgICAgICAgdG9Eby5wcmlvcml0eSA9IHRlbXBQcmlvcml0eTtcblxuICAgICAgICBjb25zdCB0ZW1wRHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdGVtcER1ZURhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGVtcER1ZURhdGU7XG4gICAgICAgIHRvRG8uZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTdWJEcm9wZG93bihib3gsIHRpdGxlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250YWluZXInO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHJvcGRvd25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcm9wZG93bkJ0bi5pZCA9ICdkcm9wZG93bkJ0bic7XG4gICAgZHJvcGRvd24uaWQgPSAnZHJvcGRvd24nO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdCA9ICdkcm9wZG93bic7XG5cbiAgICBjb25zdCB0b0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9Eb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHRvRG9UeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBkZWxldGVUYXNrQnRuLmlkID0gJ2RlbGV0ZS10YXNrLWJ0bic7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lclRleHQgPSAnRGVsZXRlIFNlY3Rpb24nO1xuXG4gICAgdG9Eb0J0bi5pZCA9ICd0by1kby1idG4nO1xuICAgIHRvRG9JbWcuc3JjID0gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbiAgICB0b0RvSW1nLmFsdCA9ICdQbHVzIHNpZ24nO1xuICAgIHRvRG9JbWcuaWQgPSAncGx1c1RvRG8nO1xuICAgIHRvRG9UeHQuaW5uZXJUZXh0ID0gJ05ldyBUb2RvJztcblxuICAgIHRvRG9CdG4uYXBwZW5kQ2hpbGQodG9Eb0ltZyk7XG4gICAgdG9Eb0J0bi5hcHBlbmRDaGlsZCh0b0RvVHh0KTtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZCh0b0RvQnRuKTtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25CdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bik7XG4gICAgYm94LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB0b0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgbmV3VG9EbyA9IGluaXRpYWxUYXNrcy5hZGRUb0RvKHByb21wdCgnTmV3IFRvZG86JyksIHRpdGxlKTtcbiAgICAgIGluaXRpYWxUYXNrcy5yZW5kZXJUb0Rvcyh0aXRsZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIH07XG5cbiAgICBkcm9wZG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xuICAgICAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlU2VjdGlvbihzZWN0aW9uVGl0bGUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbFRhc2tzLm15VG9Eb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5pdGlhbFRhc2tzLm15VG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdG9Eby50b0RvSW5kZXg7XG4gICAgICAgICAgaWYgKHRvRG8ucGFyZW50VGl0bGUgPT0gc2VjdGlvblRpdGxlKSB7XG4gICAgICAgICAgICBpbml0aWFsVGFza3MubXlUb0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbml0aWFsVGFza3MubXlUb0Rvcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpbml0aWFsVGFza3MubXlUb0Rvc1tqXS50b0RvSW5kZXggPSBqO1xuICAgICAgICAgICAgICBpbml0aWFsVGFza3MubXlUb0Rvc1tqXS50b0RvSWQgPSBqLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEJveCcpO1xuICAgICAgICAgIG1haW5Cb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpbml0aWFsVGFza3MucmVuZGVyVGFza3Moc2VjdGlvblRpdGxlKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW5pdGlhbFRhc2tzLm15VGFza3MubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICBpZiAoaW5pdGlhbFRhc2tzLm15VGFza3Nba10udGl0bGUgPT0gc2VjdGlvblRpdGxlKSB7XG4gICAgICAgICAgaW5pdGlhbFRhc2tzLm15VGFza3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGluaXRpYWxUYXNrcy5teVRhc2tzKTtcbiAgICAgIH07IFxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBkZWxldGVTZWN0aW9uKHRpdGxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyTG9nbyxcbiAgICByZW5kZXJQbHVzLFxuICAgIHJlbmRlckFkZExpc3QsXG4gICAgcmVuZGVyTWFpbkNvbnRhaW5lcixcbiAgICByZW5kZXJNYWluVGl0bGUsXG4gICAgZGlzcGxheUxpc3RzLFxuICAgIGRpc3BsYXlQcm9qZWN0LFxuICAgIHJlbmRlck1haW5TdWIsXG4gICAgZGlzcGxheVRhc2ssXG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdGlhbFJlbmRlciA9IGhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9