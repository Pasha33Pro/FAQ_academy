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
/******/ 		28: 0
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
/******/ 	deferredModules.push([150,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_s_programs_list_popup_s_programs_list_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



var hitsService = {
  blocks: {
    hits: document.querySelector(".s-hits.--hits"),
    special: document.querySelector(".s-hits.--special")
  },
  sliders: {
    hits: 0,
    special: 0
  },
  tplCard: ".s-hits-card",
  init: function init() {
    for (var key in this.blocks) {
      if (this.blocks[key]) {
        this.initPreviews(key);

        // this.getData(key).then((data) => {
        //     if (!data || !data[key] ) { return; }
        //     setTimeout(() => {
        //         this.sliders[key]?.removeAllSlides();

        //         let items = data[key];
        //         for (let i=0; i<items.length; i++) {
        //             let tpl = this.blocks[key].querySelector(this.tplCard).content.cloneNode(true);
        //             let newBlock = tpl.lastElementChild;

        //             newBlock.innerHTML = newBlock.innerHTML
        //                 .replace("$label", items[i]["label"])
        //                 .replace("$text", items[i]["text"]);
        //             newBlock.href = items[i]["href"];
        //             this.sliders[key].appendSlide(newBlock);
        //         }
        //     }, 10000);
        // });
      }
    }
  },
  getData: function getData(type) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/api.php?action=".concat(type, "&version=2"), {
              headers: {
                "Accept": "application/json"
              }
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            // let data = require("./data.js");
            // data = data.dataHits;
            // return data;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  initPreviews: function initPreviews(key) {
    var block = this.blocks[key].querySelector(".swiper");
    try {
      this.sliders[key] = new Swiper(block, {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: block.querySelector(".swiper-button-next"),
          prevEl: block.querySelector(".swiper-button-prev")
        },
        scrollbar: {
          el: block.querySelector(".swiper-scrollbar")
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
};
hitsService.init();

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var levelAbout = document.querySelectorAll(".s-about__slider");
if (levelAbout.length) {
  window.addEventListener("load", function () {
    levelAboutSliderInit();
  });
  window.addEventListener("resize", function () {
    levelAboutSliderInit();
  });
}
function levelAboutSliderInit() {
  _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(levelAbout).forEach(function (slider) {
    var init = false,
      levelAboutSlider = undefined;
    if (window.matchMedia("(max-width: 1199px)").matches) {
      if (!init) {
        init = true;
        levelAboutSlider = new Swiper(slider, {
          grabCursor: true,
          slidesPerView: "auto"
        });
      }
    } else {
      if (levelAboutSlider) levelAboutSlider.destroy();
      init = false;
    }
  });
}

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/blocks/sections/s_hits/s_hits.js
var s_hits = __webpack_require__(10);

// EXTERNAL MODULE: ./src/blocks/sections/s_about/s_about.js
var s_about = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./src/blocks/sections/s_programs_list_popup/s_programs_list_popup.js
var s_programs_list_popup = __webpack_require__(9);

// CONCATENATED MODULE: ./src/blocks/sections/programs/s_programs_list/s_programs_list.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var programService = {
  filteredData: null,
  container: document.getElementById("program_container"),
  inner: document.querySelector(".s-programs-list__inner"),
  programsBlockTmp: document.getElementById("programs__block"),
  programTmp: document.getElementById("program__tmp"),
  filterSelects: document.querySelectorAll(".s-programs-list__select"),
  filters: {},
  tag: null,
  tagTpl: document.getElementById("programTagTpl"),
  tags: {},
  tagsList: document.querySelector(".s-programs-list__tags"),
  btnTagsReset: document.querySelector(".m-programs-tags__item.--reset"),
  limit: null,
  lexicon: {
    showMore: "Показать еще"
  },
  levelPrograms: {},
  isFacultyPage: false,
  isLevelPage: false,
  isPlacesPage: false,
  initialized: false,
  init: function init() {
    var _this$container,
      _this = this;
    this.filters.level = this.container.dataset.level;
    this.filters.faculty = this.container.dataset.faculty;
    this.filters.form = this.container.dataset.format;
    this.isLevelPage = this.container.dataset.level !== undefined;
    this.isFacultyPage = this.container.dataset.faculty !== undefined;
    this.isPlacesPage = this.container.dataset.places !== undefined;
    this.limit = JSON.parse((_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.dataset.limit) || [5, 6, 6];

    // Сохраняем теги для главной
    this.tags.main = [];
    if (!this.isLevelPage && !this.isFacultyPage && !this.isPlacesPage) {
      this.tagsList.querySelectorAll("input[name=\"program_tag\"]").forEach(function (el) {
        return _this.tags.main.push(el.value);
      });
    }

    // Сохраняем теги для зарубежных
    this.tags.places = [];
    if (this.isPlacesPage) {
      this.tagsList.querySelectorAll("input[name=\"program_tag\"]").forEach(function (el) {
        return _this.tags.places.push(el.value);
      });
    }
    this.filterSelects.forEach(function (select, idx) {
      select.onchange = function () {
        var filterName = select.name.substring(8);
        var filters = [];
        _this.filters[filterName] = select.value;
        var filterData = null;
        _this.tag = null;
        //select.classList.add('selected');

        if (idx != _this.filterSelects.length - 1) {
          _this.filterSelects[idx + 1].disabled = false;
          filters = Array.prototype.slice.call(_this.filterSelects).slice(idx + 1);
          _this.resetFilters(filters);
        }
        filterData = _this.filterPrograms();
        _this.container.classList.add("--loaded");
        _this.refreshFilters(filters, filterData);
        _this.disableResetBtnFilters(false);
        if (_this.tagsList && _this.tagsList.querySelector("input:checked")) {
          _this.tagsList.querySelector("input:checked").checked = false;
        }
        if (!_this.isLevelPage && filterName === "level" && _this.tagsList && _this.tagsList.querySelectorAll("input").length === 0) {
          // Если на странице нет тегов, то cкрываем блок с тегами
          _this.hideElement(_this.tagsList);
        } else if (_this.tagsList && !_this.isElementVisible(_this.tagsList)) {
          _this.showElement(_this.tagsList);
        }
        //this.setFiltersStorage(this.tag, this.filters, 1, location.pathname);
        //console.log('change select', localStorage.getItem("filtersSpecData"));
      };
    });
    this.getData().then(function () {
      try {
        _this.filteredData = [];
        _this.data.specialities_levels.forEach(function (id) {
          var _this$filteredData;
          (_this$filteredData = _this.filteredData).push.apply(_this$filteredData, toConsumableArray_default()(_this.data.levels[id]));
        });
        _this.filteredData.sort(function (a, b) {
          return _this.data.sort_programs.indexOf(a) - _this.data.sort_programs.indexOf(b);
        });
        var filterData = _this.filterPrograms();
        _this.refreshFilters(_this.filterSelects, filterData);
      } catch (e) {
        console.log(e);
      }
    });
    this.filterSelects[0].disabled = false;
    if (this.tagsList && this.btnTagsReset) {
      this.initTags();
      this.resetBtnFilters();
    }
    this.initialized = true;
  },
  setDefaultPlaceholder: function setDefaultPlaceholder(select) {
    var _select$parentNode;
    var input = (_select$parentNode = select.parentNode) === null || _select$parentNode === void 0 ? void 0 : _select$parentNode.querySelector(".a-uikit-select__input");
    var label = input.querySelector(".a-uikit-select__placeholder");
    label.textContent = input.dataset.placeholder;
  },
  getLevelPrograms: function getLevelPrograms(level) {
    var _this2 = this;
    // Получает и кэширует программы выбранного уровня
    if (!this.levelPrograms[level]) {
      this.levelPrograms[level] = this.filteredData.filter(function (id) {
        return _this2.data.levels[level].includes(Number(id));
      });
    }
    return this.levelPrograms[level];
  },
  getProgramsTags: function getProgramsTags(level) {
    var _this3 = this;
    // Получает и кэширует теги программ выбранных уровней
    if (!this.tags[level]) {
      var tags = this.filteredData.reduce(function (all, id) {
        return all.concat(_this3.data.programs[id]["level_tags"]);
      }, []);
      tags = toConsumableArray_default()(new Set(tags));
      this.tags[level] = this.sortTags(tags, level);
    }
    return this.tags[level];
  },
  sortTags: function sortTags(tags, level) {
    var order = this.data['tags_order'][+level] || this.data['tags_order'][0];
    tags.sort(function (a, b) {
      var posA = order.indexOf(a);
      var posB = order.indexOf(b);
      posA = posA < 0 ? 50 : posA;
      posB = posB < 0 ? 50 : posB;
      return posA - posB;
    });
    return tags;
  },
  resetFilters: function resetFilters(selects) {
    var _this4 = this;
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    selects.forEach(function (el, idx) {
      var _el$parentNode$queryS2;
      var filterName = el.name.substring(8);
      if (filterName === "level" && !_this4.isFacultyPage && !all) {
        return;
      }
      if (_this4.filters[filterName]) {
        _this4.filters[filterName] = null;
      }
      el.value = 0;
      if (el.name === "program_faculty") {
        var _el$parentNode$queryS;
        (_el$parentNode$queryS = el.parentNode.querySelector(".a-uikit-select__list-inner")) === null || _el$parentNode$queryS === void 0 || _el$parentNode$queryS.scrollTo(0, 0);
      }
      (_el$parentNode$queryS2 = el.parentNode.querySelector("._checked")) === null || _el$parentNode$queryS2 === void 0 || _el$parentNode$queryS2.classList.remove("_checked");
      _this4.setDefaultPlaceholder(el);
      var options = _this4.getOptions(el);
      var _iterator = _createForOfIteratorHelper(options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          option.checked = false;
          option.disabled = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (idx) {
        el.disabled = true;
      }
    });
  },
  resetAllFilters: function resetAllFilters() {
    var resetAllSelects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (resetAllSelects) this.filters.level = this.container.dataset.level;
    this.filters.faculty = this.container.dataset.faculty;
    this.filters.form = this.container.dataset.format;
    this.tag = null;
    this.filterSelects.forEach(function (select, idx) {
      if (idx > 0) {
        select.disabled = true;
      }
    });
    this.filteredData = Object.values(this.data.sort_programs);
    this.resetFilters(this.filterSelects, resetAllSelects);
    if (resetAllSelects) {
      var filterData = this.filterPrograms();
      this.refreshFilters(this.filterSelects, filterData);
    }
    this.disableResetBtnFilters(true);
  },
  refreshFilters: function refreshFilters(filters, data) {
    var _this5 = this;
    filters.forEach(function (select) {
      if (select.name === "program_level" && !_this5.isFacultyPage && !_this5.isPlacesPage) {
        return;
      }
      var enabledOptions = [],
        disabledOptions = [],
        enabledRus = [];
      var filterEntity = _this5.getFilterEntity(select.name);
      try {
        var _select$parentNode$qu;
        var options = _this5.getOptions(select);
        var _iterator2 = _createForOfIteratorHelper(options),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var option = _step2.value;
            if (option.value != 0 && !data[filterEntity].has(option.value)) {
              option.setAttribute("disabled", "disabled");
              disabledOptions.push(option.parentNode);
            } else {
              enabledRus.push({
                name: option.placeholder,
                node: option.parentNode
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        enabledRus.sort(function (a, b) {
          return (!!b.node.classList.contains("--popular") < !!a.node.classList.contains("--popular") ? -1 : !!b.node.classList.contains("--popular") > !!a.node.classList.contains("--popular") ? 1 : 0) || a.name.localeCompare(b.name);
        });
        for (var i = 0; i < enabledRus.length; i++) {
          enabledOptions.push(enabledRus[i].node);
        }
        (_select$parentNode$qu = select.parentNode.querySelector(".a-uikit-select__list-inner")) === null || _select$parentNode$qu === void 0 || _select$parentNode$qu.append.apply(_select$parentNode$qu, enabledOptions.concat(disabledOptions));
      } catch (e) {
        console.log(e);
      }
    });
    if (this.isPlacesPage) {
      try {
        //- скрываю теги, у которых нечего выводить
        var newTags = [];
        var _loop = function _loop() {
          var tag = _this5.tags.places[i];
          var hasTags = _this5.filteredData.filter(function (id) {
            return _this5.data.programs[id]["place_tags"].includes(tag);
          });
          if (hasTags.length) {
            newTags.push(tag);
          }
          _this5.renderTags(newTags);
        };
        for (var i = 0; i < this.tags.places.length; i++) {
          _loop();
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  getData: function getData() {
    var _this6 = this;
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var response;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/api.php?action=getPrograms&version=2", {
              headers: {
                "Accept": "application/json"
              }
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _this6.data = _context.sent;
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            // this.data = require("./data.js");
            // this.data = this.data.dataPrograms;
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  initTags: function initTags() {
    var _this7 = this;
    this.tagsList.querySelectorAll("input").forEach(function (el) {
      el.checked = false;
      el.onchange = function () {
        if (el.checked) {
          _this7.resetAllFilters();
          _this7.disableResetBtnFilters(false);
          _this7.tag = el.value;
          _this7.filterPrograms();
        }
      };
    });
  },
  renderTags: function renderTags(tags) {
    // Рендеринг новых тегов
    var tagsHtml = "";
    var tagTpl = this.tagTpl;
    if (tags) {
      tags.forEach(function (el) {
        var name = "";
        if (el == "Популярные") {
          name = "<svg class=\"ico icon-sprite ico-mono-lightning\"><use xlink:href=\"/assets/template/v5/new3/images/sprite-mono.svg#ico-mono-lightning\"></use></svg>" + el;
        } else {
          name = el;
        }
        tagsHtml += tagTpl.innerHTML.replace("$tag_name", name).replace("$tag_val", el);
      });
    }
    this.tagsList.querySelector("div.swiper-wrapper").innerHTML = tagsHtml;
    this.initTags();
  },
  resetBtnFilters: function resetBtnFilters() {
    var _this8 = this;
    this.btnTagsReset.onclick = function () {
      _this8.tagsList.querySelectorAll("input").forEach(function (el) {
        el.checked = false;
      });
      _this8.resetAllFilters(true);
      var tags = _this8.tags.main;
      if (_this8.isLevelPage) tags = _this8.tags[_this8.filters.level];
      if (_this8.isPlacesPage) tags = _this8.tags.places;
      _this8.renderTags(tags);
      if (!_this8.isLevelPage) {
        _this8.tagsList.dataset.current_level = null;
      }
      _this8.disableResetBtnFilters(true);
    };
  },
  disableResetBtnFilters: function disableResetBtnFilters(bool) {
    if (this.btnTagsReset) {
      this.btnTagsReset.disabled = bool;
    }
    if (this.btnSelectsReset) {
      this.btnSelectsReset.disabled = bool;
    }
  },
  filterPrograms: function filterPrograms() {
    var _this9 = this;
    var level = this.filters.level,
      faculty = this.filters.faculty,
      form = this.filters.form,
      limit = this.getLimit(),
      levels = this.filters.level ? [this.filters.level] : [],
      faculties = this.filters.faculty ? [this.filters.faculty] : [],
      forms = this.filters.form ? [this.filters.form] : [],
      tags = "main_tags";
    this.filteredData = [];
    var blockList = {};
    this.data.specialities_levels.forEach(function (id) {
      var _this9$filteredData;
      (_this9$filteredData = _this9.filteredData).push.apply(_this9$filteredData, toConsumableArray_default()(_this9.data.levels[id]));
      blockList[id] = document.createDocumentFragment();
    });
    this.filteredData.sort(function (a, b) {
      return _this9.data.sort_programs.indexOf(a) - _this9.data.sort_programs.indexOf(b);
    });
    if (this.isPlacesPage) {
      tags = "place_tags";
      this.filteredData = this.filteredData.filter(function (id) {
        return _this9.data.programs[id][tags].length;
      });
    }
    if (level) {
      this.filteredData = this.getLevelPrograms(level);
      if (!this.isPlacesPage) {
        tags = "level_tags";
        // получаем теги программ уровня
        if (this.tagsList && (!this.tagsList.dataset.current_level || this.tagsList.dataset.current_level != level)) {
          if (this.initialized) {
            var levelTags = this.getProgramsTags(level);
            !this.isLevelPage && this.renderTags(levelTags);
          } else {
            this.getProgramsTags(level);
          }
          this.tagsList.dataset.current_level = level;
        }
      }
    }
    if (this.tag) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this9.data.programs[id][tags].includes(_this9.tag);
      });
    }
    if (faculty) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this9.data.faculties[faculty].includes(Number(id));
      });
    }
    if (form) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this9.data.forms[form].includes(Number(id));
      });
    }
    this.filteredData.forEach(function (id) {
      var p = _this9.data.programs[id],
        title = p["longtitle"] || p["pagetitle"];
      var blockListId = blockList[p["level_id"]];
      blockListId.append(_this9.programTmp.content.cloneNode(true));
      var card = blockListId.lastElementChild;
      card.innerHTML = card.innerHTML.replace("$title", title).replace("$level", p["level"]).replace("$id", id).replaceAll("$rank", p["rank"]);
      if (p["facultyId"]) {
        card.innerHTML = card.innerHTML.replace("$facultyName", p["facultyName"]);
      } else {
        if (p["directions"]) {
          card.innerHTML = card.innerHTML.replace("$facultyName", _this9.data.names.directions[p["directions"][0]]);
        } else {
          var _card$querySelector;
          (_card$querySelector = card.querySelector(".specialty-card__label")) === null || _card$querySelector === void 0 || _card$querySelector.remove();
        }
      }
      if (p["place_tags"] && p["place_tags"].length) {
        card.innerHTML = card.innerHTML.replace("$place", p["place_tags"].join(", "));
        card.querySelector(".specialty-card__place").style.display = "inline-flex";
      } else {
        try {
          var _card$querySelector2;
          (_card$querySelector2 = card.querySelector(".specialty-card__place")) === null || _card$querySelector2 === void 0 || _card$querySelector2.remove();
        } catch (e) {
          console.log(e);
        }
      }
      if (p[tags].includes("Популярные")) {
        card.querySelector(".specialty-card__icons-popular").style.display = "block";
      } else {
        var _card$querySelector3;
        (_card$querySelector3 = card.querySelector(".specialty-card__icons-popular")) === null || _card$querySelector3 === void 0 || _card$querySelector3.remove();
      }
      if (p["partner"]) {
        card.innerHTML = card.innerHTML.replace("$partner", p["partner"]);
        card.querySelector(".specialty-card__partner").style.display = "inline-flex";
      } else {
        try {
          card.querySelector(".specialty-card__partner").remove();
        } catch (e) {
          console.log(e);
        }
      }
      if (p["price"]) {
        card.innerHTML = card.innerHTML.replace("$price", p["price"]);
        card.querySelector(".specialty-card__price").style.display = "inline-flex";
      } else {
        try {
          card.querySelector(".specialty-card__price").remove();
        } catch (e) {
          console.log(e);
        }
      }
      if (p["new"] || p["popup"]) {
        if (!p["new"]) {
          card.querySelector(".specialty-card__new").remove();
        }
        var triggers = [];
        if (p["duration"]) triggers.push(["Срок обучения", p["duration"]]);
        if (p["level"]) triggers.push(["Уровень", p["level"]]);
        if (p["hours"]) triggers.push(["Длительность", p["hours"] + " " + _this9.numWord(p["hours"], ["час", "часа", "часов"])]);
        if (p["forms"] && p["forms"][0] != "") {
          var _forms = [];
          for (var i = 0; i < p["forms"].length; i++) {
            _forms.push("<span class=\"--btn\">".concat(_this9.data.names.forms[p["forms"][i]], "</span>"));
          }
          triggers.push(["Формат", _forms.join("")]);
        }
        //if( p['payment'] ) triggers.push(['Стоимость', p['payment']]);
        //triggers.push(["Стоимость", "Оплата после обучения"]);
        if (p["result"]) triggers.push(["Результат", p["result"]]);
        if (p["career"]) triggers.push(["Карьера", p["career"]]);
        triggers.forEach(function (t) {
          var trigger = document.createElement("div");
          trigger.classList.add("s-programs-list-popup__triggers-block");
          trigger.innerHTML = "<span class=\"s-programs-list-popup__triggers-block-name a-font_m-m\">".concat(t[0], "</span><span class=\"s-programs-list-popup__triggers-block-text a-font_m-m\">").concat(t[1], "</span>");
          try {
            card.querySelector(".s-programs-list-popup__triggers").appendChild(trigger);
          } catch (e) {
            console.log(e);
          }
        });
        card.dataset.alias = p["alias"];
      } else {
        card.querySelector(".specialty-card__new").remove();
        card.querySelector(".specialty-card__apply").remove();
        card.querySelector(".s-programs-list-popup__triggers").remove();
      }
      if (blockListId.childElementCount > limit) {
        card.classList.add("--hidden");
      }
      card.querySelector(".specialty-card__more").href = p["uri"];
      card.querySelector(".specialty-card__title").href = p["uri"];
      // Добавляем данные для фильтрации опций фильтров (select).
      levels.push(String(p["level_id"]));
      faculties.push(String(p["facultyId"]));
      if (p["forms"]) {
        forms.push.apply(forms, toConsumableArray_default()(p["forms"]));
      }
      card.querySelector("[data-src='#s-programs-list-popup']").addEventListener("click", function (e) {
        e.target.dispatchEvent(new CustomEvent("openProgramPopup", {
          bubbles: true,
          detail: {
            id: id,
            card: card,
            href: p["uri"],
            type: p["level_id"] != 34138 ? "program" : "profession"
          }
        }));
      });
    });

    // Refresh inner
    this.inner.innerHTML = "";
    for (var key in blockList) {
      if (blockList[key].childElementCount > 0) {
        var count = blockList[key].childElementCount;
        var programsBlock = this.programsBlockTmp.content.cloneNode(true).lastElementChild;
        programsBlock.innerHTML = programsBlock.innerHTML.replace("$title", this.data.names.levels[key]).replace("$count", blockList[key].childElementCount).replace("$level", this.data.names.levels[key]).replace("$block-info-src", "#block-info-".concat(key)).replace("$block-info-id", "block-info-".concat(key));
        programsBlock.querySelector("img").src = "https://sys3.ru/synergy-ru/content/levels/".concat(key, ".webp");
        if (this.data.levels_info) {
          programsBlock.innerHTML = programsBlock.innerHTML.replace("$description", this.data.levels_info[key]["description"]);
        } else {
          programsBlock.innerHTML = programsBlock.innerHTML.replace("$description", "");
        }
        programsBlock.querySelector(".s-programs-list__block-inner").append(blockList[key]);
        this.inner.append(programsBlock);

        // Pagination
        var moreBtn = programsBlock.querySelector(".s-programs-list__more");
        var totopBtn = programsBlock.querySelector(".s-programs-list__totop");
        if (limit && count <= limit) {
          this.hideElement(moreBtn);
        } else {
          this.showElement(moreBtn);
          this.refreshMoreBtnText(programsBlock, moreBtn);
          this.clickOnMoreBtn(programsBlock, moreBtn, totopBtn);
        }
        this.clickOnTopBtn(totopBtn);
      }
    }
    document.dispatchEvent(new CustomEvent("programsLoad", {
      cancelable: true,
      bubbles: true
    }));

    //console.log({"levels": new Set(levels), "faculties": new Set(faculties), "forms": new Set(forms)});
    return {
      "levels": new Set(levels),
      "faculties": new Set(faculties),
      "forms": new Set(forms)
    };
  },
  getFilterEntity: function getFilterEntity(name) {
    var entities = {
      "program_level": "levels",
      "program_faculty": "faculties",
      "program_form": "forms"
    };
    return entities[name];
  },
  getOptions: function getOptions(select) {
    var _select$parentNode2;
    return (_select$parentNode2 = select.parentNode) === null || _select$parentNode2 === void 0 ? void 0 : _select$parentNode2.querySelectorAll(".a-uikit-select__list-option > input");
  },
  numWord: function numWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  },
  getLimit: function getLimit() {
    var limit = this.limit[0];
    if (window.innerWidth >= 768) {
      limit = this.limit[1];
    }
    if (window.innerWidth >= 1200) {
      limit = this.limit[2];
    }
    return limit;
  },
  showElement: function showElement(el) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flex";
    if (el) {
      el.style.display = value;
    }
  },
  hideElement: function hideElement(el) {
    if (el) {
      el.style.display = "none";
    }
  },
  isElementVisible: function isElementVisible(el) {
    var style = window.getComputedStyle(el);
    return el.offsetParent !== null && style.display !== "none";
  },
  refreshMoreBtnText: function refreshMoreBtnText(block, moreBtn) {
    var hiddenList = block.querySelectorAll(".specialty-card.--hidden");
    if (moreBtn) {
      moreBtn.innerHTML = hiddenList.length ? "".concat(this.lexicon.showMore, " (").concat(hiddenList.length, ")") : this.lexicon.showMore;
    }
  },
  clickOnMoreBtn: function clickOnMoreBtn(block, moreBtn, totopBtn) {
    var _this10 = this;
    moreBtn.addEventListener("click", function () {
      var programCards = block.querySelectorAll(".specialty-card.--hidden");
      for (var i = 0; i < Math.min(_this10.getLimit(), programCards.length); i++) {
        programCards[i].classList.remove("--hidden");
      }
      if (block.querySelectorAll(".specialty-card.--hidden").length == 0) {
        programService.hideElement(moreBtn);
        programService.showElement(totopBtn);
      }
      _this10.refreshMoreBtnText(block, moreBtn);
    });
  },
  clickOnTopBtn: function clickOnTopBtn(totopBtn) {
    if (totopBtn) {
      totopBtn.addEventListener("click", function () {
        var _document$querySelect, _document$querySelect2;
        window.scrollTo({
          top: window.scrollY + ((_document$querySelect = document.querySelector(".s-programs-list")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getBoundingClientRect().top) - header.clientHeight - ((_document$querySelect2 = document.querySelector(".s-header__nav")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.clientHeight),
          behavior: "smooth"
        });
      });
    }
  }
};
programService.init();
// CONCATENATED MODULE: ./src/js/programs.js




/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var programPopupService = {
  data: null,
  popup: document.querySelector("#s-programs-list-popup"),
  init: function init() {
    var _this = this;
    document.addEventListener("programsLoad", function () {
      var btns = document.querySelectorAll('[data-src="#s-programs-list-popup"]');
      if (!btns || !_this.popup) {
        return;
      }
      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(btns).forEach(function (btn) {
        try {
          btn.removeEventListener("openProgramPopup", _this.openPopup, true);
          btn.addEventListener("openProgramPopup", _this.openPopup, true);
        } catch (e) {
          console.log(e);
        }
      });
    });
  },
  openPopup: function openPopup(e) {
    e.preventDefault();
    var edata = e.detail;
    programPopupService.popup.querySelector(".s-programs-list-popup__blocks").innerHTML = "";
    programPopupService.popup.querySelector("a.s-programs-list-popup__bottom-btn").href = edata.href;
    if (edata.type != "mba") {
      var popupTitle = edata.type == "program" ? "Специальность" : "Программа";
      programPopupService.popup.querySelector(".s-programs-list-popup__title").innerHTML = popupTitle;
      programPopupService.getData(edata.id).then(function () {
        programPopupService.getProgramInfo(edata.type, programPopupService.data);
        programPopupService.initfancybox(edata.card);
      });
    } else {
      programPopupService.getMbaData(edata.id).then(function () {
        programPopupService.getProgramInfo(edata.type, programPopupService.data);
        programPopupService.initfancybox(edata.card);
      });
    }
  },
  getData: function getData(id) {
    var _this2 = this;
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/api.php?action=getProgramPopupInfo&program_id=".concat(id), {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json"
              }
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _this2.data = _context.sent;
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            // if( location.hostname == "hostname" ) {
            // this.data = require("./data.js");
            // this.data = this.data.dataProgramInfo;
            // }
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  getMbaData: function getMbaData(id) {
    var _this3 = this;
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("/api.php?action=getProgramPopupMba&program_id=".concat(id), {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json"
              }
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            _this3.data = _context2.sent;
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }))();
  },
  getProgramInfo: function getProgramInfo(type, data) {
    //- Программа
    if (type == "program") {
      //- Что вы будете изучать?
      if (data[385]) {
        var obj = data[385].content;
        for (var _i = 0, _Object$values = Object.values(obj); _i < _Object$values.length; _i++) {
          var key = _Object$values[_i];
          if (key.type && key.type == "program_study") {
            if (key.items) {
              var title = key.header_title;
              var items = JSON.parse(key.items),
                itemTitleField = "title",
                itemTextField = "text";
              this.appendTVToPopup(title, items, itemTitleField, itemTextField);
            }
          }
        }
      }

      //- Программа
      //- Учебная программа
      if (data[151]) {
        var _items = data[151].content,
          _title = "Учебная программа",
          _itemTitleField = "how-learning__title",
          _itemTextField = "how-learning__description";
        this.appendTVToPopup(_title, _items, _itemTitleField, _itemTextField);
      }
    }

    //- Переподготовка
    if (type == "profession") {
      //- Чему вы научитесь
      if (data[483]) {
        var _items2 = data[483].content,
          _title2 = "Чему вы научитесь",
          _itemTitleField2 = "title";
        this.appendTVToPopup(_title2, _items2, _itemTitleField2);
      }

      //- Программа обучения
      if (data[484]) {
        var _items3 = data[484].content,
          _title3 = "Программа обучения",
          _itemTitleField3 = "caption",
          _itemTextField2 = "description";
        this.appendTVToPopup(_title3, _items3, _itemTitleField3, _itemTextField2);
      }
    }

    //- Курс
    if (type == "course") {
      //- Чему вы научитесь
      if (data[507]) {
        var _items4 = data[507].content,
          _title4 = "Чему вы научитесь",
          _itemTitleField4 = "title";
        this.appendTVToPopup(_title4, _items4, _itemTitleField4);
      }

      //- Программа обучения
      if (data[508]) {
        var _items5 = data[508].content,
          _title5 = "Программа обучения",
          _itemTitleField5 = "caption",
          _itemTextField3 = "description";
        this.appendTVToPopup(_title5, _items5, _itemTitleField5, _itemTextField3);
      }
    }

    //- MBA
    if (type == "mba") {
      //- Программа обучения
      if (data["advantages"]) {
        var block = document.createElement("div");
        block.classList.add("s-programs-list-popup__block");
        var blockSlider = document.createElement("div");
        blockSlider.classList.add("s-programs-list-popup__slider", "swiper");
        var swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");
        var _iterator = _createForOfIteratorHelper(data["advantages"]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var blockItem = document.createElement("div");
            blockItem.classList.add("s-programs-list-popup__slider-item", "swiper-slide");
            blockItem.innerHTML = item["value"] ? "<span class=\"a-font_h4\">".concat(item["value"], "</span>") : "";
            blockItem.innerHTML += item["text"] ? "<span class=\"a-font_m-m\">".concat(item["text"], "</span>") : "";
            swiperWrapper.appendChild(blockItem);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        blockSlider.appendChild(swiperWrapper);
        block.appendChild(blockSlider);
        try {
          this.popup.querySelector(".s-programs-list-popup__blocks").appendChild(block);
          var slider = new Swiper(blockSlider, {
            slidesPerView: "auto",
            spaceBetween: 0
          });
        } catch (e) {
          console.log(e);
        }
      }

      //- Триггеры
      if (data["program"]) {
        var _items6 = data["program"],
          _title6 = "Программа",
          _itemTitleField6 = "title",
          _itemTextField4 = "description";
        this.appendTVToPopup(_title6, _items6, _itemTitleField6, _itemTextField4);
      }
    }
  },
  appendTVToPopup: function appendTVToPopup(title, items, itemTitleField, itemTextField) {
    var block = document.createElement("div");
    block.classList.add("s-programs-list-popup__block");
    block.innerHTML = "<h4 class=\"s-programs-list-popup__block-title a-font_h5\">".concat(title, "</h4>");
    var blockList = document.createElement("div");
    blockList.classList.add("s-programs-list-popup__block-list");
    var _iterator2 = _createForOfIteratorHelper(items.entries()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step2.value, 2),
          index = _step2$value[0],
          obj = _step2$value[1];
        var blockItem = document.createElement("div");
        blockItem.classList.add("s-programs-list-popup__block-item");
        var num = index + 1;
        if (num < 10) {
          num = "0".concat(num);
        }
        var gridItemTop = "\n              <div class=\"s-programs-list-popup__block-grid-item-top\">\n                <div class=\"a-num a-num--md a-font_l-m\">".concat(num, "</div>\n              </div>\n            ");
        if (obj[itemTitleField]) {
          blockItem.innerHTML = "<div class=\"s-programs-list-popup__block-item-title a-font_l-m\">".concat(obj[itemTitleField], "</div>");
          if (itemTextField && obj[itemTextField] && obj[itemTextField][0]) {
            blockItem.innerHTML += "<div class=\"s-programs-list-popup__block-item-text a-font_xs-m\">".concat(obj[itemTextField], "</div>");
            blockItem.innerHTML += '<span class="s-programs-list-popup__block-item-toggle"></span>';
          } else {
            blockItem.classList.remove("s-programs-list-popup__block-item");
            blockItem.classList.add("s-programs-list-popup__block-grid-item");
            blockList.classList.remove("s-programs-list-popup__block-list");
            blockList.classList.add("s-programs-list-popup__block-grid");
            blockItem.innerHTML = gridItemTop;
            blockItem.innerHTML += "<div class=\"s-programs-list-popup__block-grid-text a-font_xs-m\">".concat(obj[itemTitleField], "</div>");
          }
        }
        this.toggleItem(blockItem);
        blockList.appendChild(blockItem);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    block.appendChild(blockList);
    try {
      this.popup.querySelector(".s-programs-list-popup__blocks").appendChild(block);
    } catch (e) {
      console.log(e);
    }
  },
  toggleItem: function toggleItem(item) {
    item.addEventListener("click", function () {
      item.classList.toggle("--opened");
    });
  },
  initfancybox: function initfancybox(card) {
    var _card$querySelector,
      _card$querySelector2,
      _this4 = this;
    var alias = card.dataset.alias,
      name = card.querySelector(".specialty-card__title").innerHTML,
      faculty = ((_card$querySelector = card.querySelector(".specialty-card__label")) === null || _card$querySelector === void 0 ? void 0 : _card$querySelector.textContent) || card.getAttribute("data-faculty-name"),
      triggers = (_card$querySelector2 = card.querySelector(".s-programs-list-popup__triggers")) === null || _card$querySelector2 === void 0 ? void 0 : _card$querySelector2.innerHTML;
    Fancybox.close();
    Fancybox.show([{
      src: "#s-programs-list-popup",
      hideScrollbar: true,
      touch: false,
      dragToClose: false
    }], {
      mainClass: "s-programs-list-fancy",
      on: {
        ready: function ready() {
          //this.popup.querySelector("form").action = this.popup.querySelector("form").action.replace(/&version=(.*?)&/, `&version=${alias}&`);
          _this4.popup.querySelector(".s-programs-list-popup__name").innerHTML = name;
          // this.popup.querySelector(".m-form__subtitle").innerHTML = name;
          if (triggers) {
            _this4.popup.querySelector(".s-programs-list-popup__triggers").style.display = "flex";
            _this4.popup.querySelector(".s-programs-list-popup__triggers").innerHTML = triggers;
          } else {
            _this4.popup.querySelector(".s-programs-list-popup__triggers").style.display = "none";
          }
          if (faculty && faculty != "Медицина") {
            _this4.popup.querySelector(".m-form__title").textContent = "Начните учиться бесплатно";
            _this4.popup.querySelector(".m-form .a-btn span").textContent = "Начните бесплатно";
            if (_this4.popup.querySelector(".m-form .a-input[name=email]")) {
              _this4.popup.querySelector(".m-form .a-input[name=email]").style.display = "";
            }
          } else {
            _this4.popup.querySelector(".m-form__title").textContent = "Поступите на программу";
            _this4.popup.querySelector(".m-form .a-btn span").textContent = "Подать заявку";
            if (_this4.popup.querySelector(".m-form .a-input[name=email]")) {
              _this4.popup.querySelector(".m-form .a-input[name=email]").style.display = "none";
            }
          }
        },
        done: function done() {
          _this4.popup.querySelector("span.s-programs-list-popup__bottom-btn").addEventListener("click", function () {
            _this4.popup.querySelector(".s-programs-list-popup__inner").scrollTo({
              top: 0,
              behavior: "smooth"
            });
          });
        }
      }
    });
  }
};
programPopupService.init();

/***/ })

/******/ });