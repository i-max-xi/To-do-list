/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  } // For old IE

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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 30px;\r\n  background-color: rgb(228, 224, 224);\r\n  display: flex;\r\n  align-content: center;\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  margin: 5%;\r\n  background-color: white;\r\n  box-shadow: 1px 2px 2px 1px rgb(99, 92, 92);\r\n}\r\n\r\n.container > div {\r\n  border-bottom: 1px solid rgb(156, 156, 156);\r\n  padding: 5px;\r\n}\r\n\r\n.holder {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.symbols {\r\n  align-self: center;\r\n  float: right;\r\n  opacity: 0.5;\r\n  font-size: 16px;\r\n  margin-right: 6px;\r\n}\r\n\r\n#delSymbol {\r\n  opacity: 1;\r\n  color: black;\r\n  font-size: 18px;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n}\r\n\r\n#clear {\r\n  background-color: rgb(228, 224, 224);\r\n  text-align: center;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskObj": () => (/* binding */ TaskObj),
/* harmony export */   "rearrange": () => (/* binding */ rearrange),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _interact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


let taskArr = [];

if (JSON.parse(localStorage.getItem('Tasks')) === null) {
  const testArr = {
    description: 'Buy me a coffee',
    completed: false,
    index: 1,
  };
  taskArr.push(testArr);
  localStorage.setItem('Tasks', JSON.stringify(taskArr));
}

class TaskObj {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static taskSection = document.querySelector('#taskSection');

  static i = 0; // delete ID

  static x = 0; // edit ID

  static z = 0; //  checkbox ID

  static old = JSON.parse(localStorage.getItem('Tasks'));
}

taskArr = [...TaskObj.old];

// remove and rearrange

const rearrange = (item, pos) => {
  item.index = pos + 1;
};

const removeTask = (e) => {
  const clickedRemove = e.target;
  const parent = clickedRemove.parentNode;
  parent.remove();
  taskArr.splice(clickedRemove.id, 1);
  taskArr.forEach(rearrange);
  localStorage.setItem('Tasks', JSON.stringify(taskArr));
};

const editTask = (e) => {
  const clickedEdit = e.target;
  const parent = clickedEdit.parentNode;
  const content = parent.querySelector('.taskElement');
  const newContent = document.createElement('input');
  newContent.placeholder = 'Enter replacement here...';
  const newHead = document.querySelector('#head');
  newHead.appendChild(newContent);

  const OK = document.createElement('button');
  OK.innerHTML = 'OK';
  OK.id = 'ok';
  newHead.appendChild(OK);
  const OKbtn = document.querySelector('#ok');

  OKbtn.addEventListener('click', () => {
    content.innerText = newContent.value;
    taskArr[clickedEdit.id].description = newContent.value;
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
    newContent.remove();
    OK.remove();
  });
};

const addItem = () => {
  //  Variables

  const inputted = document.querySelector('input').value;
  const newdiv = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checks');
  checkbox.id = TaskObj.z;
  TaskObj.z += 1;

  const edit = document.createElement('span');
  edit.innerHTML = '&#9998;';
  edit.classList.add('symbols', 'editSymbol');
  edit.id = TaskObj.x;
  TaskObj.x += 1;

  const del = document.createElement('span');
  del.innerHTML = '&#x1f5d1;';
  del.classList.add('symbols', 'delSymbol');
  del.id = TaskObj.i;
  TaskObj.i += 1;

  const move = document.createElement('span');
  move.innerHTML = '&#8942;';
  move.classList.add('symbols');

  const taskText = document.createElement('span');

  //  implementation

  if (inputted !== '') {
    const taskItem = new TaskObj(inputted, false, taskArr.length + 1);
    taskArr.splice(taskArr.length, 0, taskItem);
    taskText.innerHTML = taskArr[taskArr.length - 1].description;
    taskText.classList.add('taskElement');
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    TaskObj.taskSection.appendChild(newdiv);
    document.querySelector('input').value = '';
    localStorage.setItem('Tasks', JSON.stringify(taskArr));

    //  implement edit btn

    const editBtn = document.querySelectorAll('.editSymbol');
    editBtn.forEach((e) => {
      e.addEventListener('click', editTask);
    });

    //  implement removeBtn

    const delBtn = document.querySelectorAll('.delSymbol');
    delBtn.forEach((e) => {
      e.addEventListener('click', removeTask);
    });

    //  implement check function

    const checkBtn = document.querySelectorAll('.checks');
    checkBtn.forEach((btn) => {
      btn.addEventListener('change', _interact_js__WEBPACK_IMPORTED_MODULE_0__.CheckFunct);
    });
  }
};




/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckFunct": () => (/* binding */ CheckFunct),
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
const CheckFunct = (e) => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  const clickedCheck = e.target;
  if (clickedCheck.checked) {
    taskArr[clickedCheck.id].completed = true;
    clickedCheck.classList.add('completed');
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  } else {
    taskArr[clickedCheck.id].completed = false;
    clickedCheck.classList.remove('completed');
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  }
};

const rearrange = (item, pos) => {
  item.index = pos + 1;
};

const clearArrItem = (el) => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  if (el.completed === true) {
    taskArr.splice(el.index, 1);
  }
  return el;
};

const clear = () => {
  const old = JSON.parse(localStorage.getItem('Tasks'));
  const taskArr = [...old];
  const completed = document.querySelectorAll('input:checked');

  if (completed) {
    completed.forEach((element) => {
      element.parentNode.remove();
      taskArr.splice(element.index, 1);
    });
    taskArr.filter(clearArrItem);
    taskArr.forEach(rearrange);
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
  }
};




/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _interact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
'useStrict';





const taskArr = [];

if (JSON.parse(localStorage.getItem('Tasks')) === null) {
  const testArr = {
    description: 'Buy me a coffee',
    completed: false,
    index: 1,
  };
  taskArr.push(testArr);
  localStorage.setItem('Tasks', JSON.stringify(taskArr));
}

const Enter = document.querySelector('#enter');

Enter.addEventListener('click', _add_js__WEBPACK_IMPORTED_MODULE_1__.addItem);

const display = () => {
  for (let p = 0; p < _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.old.length; p += 1) {
    //  Variables
    const taskSection = document.querySelector('#taskSection');
    const newdiv = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checks');
    checkbox.id = _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.z;
    _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.z += 1;

    const edit = document.createElement('span');
    edit.innerHTML = '&#9998;';
    edit.classList.add('symbols', 'editSymbol');
    edit.id = _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.x;
    _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.x += 1;

    const del = document.createElement('span');
    del.innerHTML = '&#x1f5d1;';
    del.classList.add('symbols', 'delSymbol');
    del.id = _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.i;
    _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.i += 1;

    const move = document.createElement('span');
    move.innerHTML = '&#8942;';
    move.classList.add('symbols');

    //  Implementation
    const taskText = document.createElement('span');

    taskText.innerHTML = _add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.old[p].description;
    taskArr.push(_add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.old[p]);
    taskText.classList.add('taskElement');
    newdiv.appendChild(checkbox);
    newdiv.appendChild(taskText);
    newdiv.appendChild(move);
    newdiv.appendChild(del);
    newdiv.appendChild(edit);
    taskSection.appendChild(newdiv);
    document.querySelector('input').value = '';

    //  implement edit btn

    const editBtn = document.querySelectorAll('.editSymbol');
    editBtn.forEach((e) => {
      e.addEventListener('click', _add_js__WEBPACK_IMPORTED_MODULE_1__.editTask);
    });

    //  implement removeBtn

    const delBtn = document.querySelectorAll('.delSymbol');
    delBtn.forEach((e) => {
      e.addEventListener('click', _add_js__WEBPACK_IMPORTED_MODULE_1__.removeTask);
    });

    // check those with true
    if (_add_js__WEBPACK_IMPORTED_MODULE_1__.TaskObj.old[p].completed === true) {
      checkbox.setAttribute('checked', 'true');
    }

    //  implement check function

    const checkBtn = document.querySelectorAll('.checks');
    checkBtn.forEach((btn) => {
      btn.addEventListener('change', _interact_js__WEBPACK_IMPORTED_MODULE_2__.CheckFunct);
    });
  }
};

display();

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', _interact_js__WEBPACK_IMPORTED_MODULE_2__.clear);

})();

/******/ })()
;