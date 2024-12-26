/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		17: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([163,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/blocks/sections/edu_organization_info/s_info_content/s_info_content.js

initIconFile();
initStripTable();
initMinifyTable();
window.toggleTableBtn = function (element, id) {
  toConsumableArray_default()(element.parentNode.children).forEach(function (btn) {
    btn.classList.remove("--active");
  });
  element.classList.add("--active");
  toConsumableArray_default()(document.querySelectorAll(".toggled_table")).forEach(function (table) {
    table.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
};

// - ext for links
function initIconFile() {
  var links = document.querySelectorAll('[class*="icon-file"]');
  if (links) {
    links.forEach(function (link) {
      // rm static --ext
      link.querySelectorAll('.--ext').forEach(function (el) {
        link.removeChild(el);
      });
      if (!!link.getAttribute('href') && link.getAttribute('href') != '#' && link.getAttribute('href').split('/').pop().indexOf('.') > -1) {
        var ext = link.href.substring(1 + link.href.lastIndexOf("/")).split('?')[0].split('#')[0].split('.').pop();
        if (ext) {
          var span = document.createElement("span");
          span.className = '--ext';
          span.innerHTML = ext;
          link.append(span);
        }
      }
    });
  }
}

// colored table
function initStripTable() {
  var tables = document.querySelectorAll('.s-info-content table');
  if (tables) {
    var colored = '--colored',
      no_colored = '--no_colored';
    tables.forEach(function (table) {
      var check_class = false,
        current_class = undefined,
        trs = table.querySelectorAll('tr');
      if (trs.length) {
        Array.prototype.slice.call(trs).forEach(function (tr, idx, trs) {
          if (!tr.classList.contains(colored) && !tr.classList.contains(no_colored)) {
            check_class = !check_class;
            current_class = check_class ? colored : no_colored;
            tr.classList.add(current_class);
          }

          // rowspan trs
          var tds = tr.querySelectorAll('td[rowspan]');
          if (tds.length) {
            tds.forEach(function (td) {
              trs.slice(idx, idx + td.rowSpan).forEach(function (tr) {
                tr.classList.add(current_class);
              });
            });
          }
        });
      }
    });
  }
}

// Minify table
function initMinifyTable() {
  if (window.matchMedia("(min-width: 1200px)")) {
    var container = document.querySelector('.s-info-content .l-section__inner');
    var container_styles = window.getComputedStyle(container),
      container_padding = parseFloat(container_styles.paddingLeft) + parseFloat(container_styles.paddingRight),
      container_width = container.clientWidth - container_padding;
    var tables = container.querySelectorAll('table');
    if (tables) {
      tables.forEach(function (table, idx) {
        table.classList.add('a-font_xs');
        if (table.clientWidth > container_width) {
          table.classList.add('a-font_xxs');
        }
        if (!table.clientWidth) {
          var d_table = table.cloneNode(true);
          d_table.style.display = 'table';
          container.append(d_table);
          if (d_table.clientWidth > container_width) {
            table.classList.add('a-font_xxs');
          }
          d_table.remove();
        }
      });
    }
  }
}

// accordion
window.toggle_show = function (id) {
  var block = document.getElementById(id),
    link = document.querySelector("[onclick=\"toggle_show('".concat(id, "')\"]"));
  if (block.style.display == 'none') {
    block.style.display = 'block';
    if (link) link.classList.add('--active');
  } else {
    block.style.display = 'none';
    if (link) link.classList.remove('--active');
  }
};
// CONCATENATED MODULE: ./src/js/edu_organization_info.js


/***/ })

/******/ });