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
/******/ 		39: 0
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
/******/ 	deferredModules.push([103,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_s_programs_list_s_programs_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _sections_s_hits_s_hits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _sections_s_diploma_s_diploma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _sections_s_diploma_s_diploma__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sections_s_diploma_s_diploma__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sections_s_video_block_s_video_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _sections_s_video_block_s_video_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sections_s_video_block_s_video_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sections_s_university_s_university__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _sections_s_university_s_university__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sections_s_university_s_university__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sections_s_partners_s_partners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _sections_s_partners_s_partners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sections_s_partners_s_partners__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_9__);











/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sections_s_programs_list_popup_s_programs_list_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);




function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var programService = {
  data: null,
  filteredData: null,
  template: document.getElementById("programs__tmp"),
  tagTpl: document.getElementById("programTagTpl"),
  moreBtn: document.querySelector(".s-programs-list__more .s-programs-list__btn"),
  totopBtn: document.querySelector(".s-programs-list__more .s-programs-list__totop"),
  filterSelects: document.querySelectorAll(".s-programs-list__select"),
  container: document.getElementById("program_container"),
  filters: {},
  tag: null,
  tags: {},
  limit: 12,
  lexicon: {
    showMore: "Показать еще"
  },
  tagsList: document.querySelector(".s-programs-list__tags"),
  btnTagsReset: document.querySelector(".m-programs-tags__item.--reset"),
  btnSelectsReset: document.querySelector(".s-programs-list__reset"),
  levelPrograms: {},
  isFacultyPage: false,
  isLevelPage: false,
  isPlacesPage: false,
  getOptions: function getOptions(select) {
    var _select$parentNode;
    return (_select$parentNode = select.parentNode) === null || _select$parentNode === void 0 ? void 0 : _select$parentNode.querySelectorAll(".a-uikit-select__list-option > input");
  },
  setDefaultPlaceholder: function setDefaultPlaceholder(select) {
    var _select$parentNode2;
    var input = (_select$parentNode2 = select.parentNode) === null || _select$parentNode2 === void 0 ? void 0 : _select$parentNode2.querySelector(".a-uikit-select__input");
    var label = input.querySelector(".a-uikit-select__placeholder");
    label.textContent = input.dataset.placeholder;
  },
  resetFilters: function resetFilters(selects) {
    var _this = this;
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    selects.forEach(function (el, idx) {
      var _el$parentNode$queryS2;
      var filterName = el.name.substring(8);
      if (filterName === "level" && !_this.isFacultyPage && !all) {
        return;
      }
      if (_this.filters[filterName]) {
        _this.filters[filterName] = null;
      }
      el.value = 0;
      if (el.name === "program_faculty") {
        var _el$parentNode$queryS;
        (_el$parentNode$queryS = el.parentNode.querySelector(".a-uikit-select__list_select")) === null || _el$parentNode$queryS === void 0 || _el$parentNode$queryS.scrollTo(0, 0);
      }
      (_el$parentNode$queryS2 = el.parentNode.querySelector("._checked")) === null || _el$parentNode$queryS2 === void 0 || _el$parentNode$queryS2.classList.remove("_checked");
      _this.setDefaultPlaceholder(el);
      var options = _this.getOptions(el);
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
    this.refreshMoreBtnText();
    this.disableResetBtnFilters(true);
    this.setFiltersStorage(this.tag, this.filters, 1, location.pathname);
    //console.log('resetAllFilters', localStorage.getItem("filtersSpecData"));
  },
  setFiltersStorage: function setFiltersStorage(tag, filters, page) {
    var obj = {
      tag: tag,
      filters: filters,
      page: page,
      location: location.pathname
    };
    //localStorage.setItem("filtersSpecData", JSON.stringify(obj));
  },
  init: function init() {
    var _this2 = this;
    this.filters.level = this.container.dataset.level;
    this.filters.faculty = this.container.dataset.faculty;
    this.filters.form = this.container.dataset.format;
    this.isLevelPage = this.container.dataset.level !== undefined;
    this.isFacultyPage = this.container.dataset.faculty !== undefined;
    this.isPlacesPage = this.container.dataset.places !== undefined;
    // Сохраняем теги для главной
    this.tags.main = [];
    if (!this.isLevelPage && !this.isFacultyPage && !this.isPlacesPage) {
      this.tagsList.querySelectorAll("input[name=\"program_tag\"]").forEach(function (el) {
        return _this2.tags.main.push(el.value);
      });
    }

    // Сохраняем теги для зарубежных
    this.tags.places = [];
    if (this.isPlacesPage) {
      this.tagsList.querySelectorAll("input[name=\"program_tag\"]").forEach(function (el) {
        return _this2.tags.places.push(el.value);
      });
    }
    this.filterSelects.forEach(function (select, idx) {
      select.onchange = function () {
        var filterName = select.name.substring(8);
        var filters = [];
        _this2.filters[filterName] = select.value;
        var filterData = null;
        _this2.tag = null;
        if (idx != _this2.filterSelects.length - 1) {
          _this2.filterSelects[idx + 1].disabled = false;
          filters = Array.prototype.slice.call(_this2.filterSelects).slice(idx + 1);
          _this2.resetFilters(filters);
        }
        filterData = _this2.filterPrograms();
        _this2.refreshFilters(filters, filterData);
        _this2.refreshMoreBtnText();
        _this2.disableResetBtnFilters(false);
        if (_this2.tagsList && _this2.tagsList.querySelector("input:checked")) {
          _this2.tagsList.querySelector("input:checked").checked = false;
        }
        if (!_this2.isLevelPage && filterName === "level" && _this2.tagsList && _this2.tagsList.querySelectorAll("input").length === 0) {
          // Если на странице нет тегов, то cкрываем блок с тегами
          _this2.hideElement(_this2.tagsList);
        } else if (_this2.tagsList && !_this2.isElementVisible(_this2.tagsList)) {
          _this2.showElement(_this2.tagsList);
        }
        //this.setFiltersStorage(this.tag, this.filters, 1, location.pathname);
        //console.log('change select', localStorage.getItem("filtersSpecData"));
      };
    });
    this.getData("getPrograms").then(function () {
      try {
        _this2.getlimit();
        _this2.filteredData = [];
        _this2.data.specialities_levels.forEach(function (id) {
          var _this2$filteredData;
          (_this2$filteredData = _this2.filteredData).push.apply(_this2$filteredData, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_this2.data.levels[id]));
        });
        _this2.filteredData.sort(function (a, b) {
          return _this2.data.sort_programs.indexOf(a) - _this2.data.sort_programs.indexOf(b);
        });
        var filterData = _this2.filterPrograms();
        _this2.refreshFilters(_this2.filterSelects, filterData);

        //console.log('init',localStorage.getItem("filtersSpecData"));
        var filtersSpecData = JSON.parse(localStorage.getItem("filtersSpecData"));
        if (filtersSpecData && filtersSpecData.location == location.pathname) {
          if (Object.keys(filtersSpecData.filters).length) {
            //console.log('YES filters', filtersSpecData.filters);
            for (var key in filtersSpecData.filters) {
              if (document.querySelector("[data-name=\"program_".concat(key, "\"]"))) {
                //console.log(document.querySelector(`[data-name="program_${key}"] input[value="${filtersSpecData.filters[key]}"]`));
                document.querySelector("[data-name=\"program_".concat(key, "\"] input[value=\"").concat(filtersSpecData.filters[key], "\"]")).checked = false;
                document.querySelector("[data-name=\"program_".concat(key, "\"] input[value=\"").concat(filtersSpecData.filters[key], "\"]")).click();
              }
            }
          }
          if (_this2.tagsList && filtersSpecData.tag) {
            //console.log('YES tag', filtersSpecData.tag);
            _this2.tagsList.querySelectorAll("input").forEach(function (el) {
              el.checked = false;
            });
            if (_this2.tagsList.querySelector("input[value=\"".concat(filtersSpecData.tag, "\"]"))) {
              _this2.tagsList.querySelector("input[value=\"".concat(filtersSpecData.tag, "\"]")).click();
              _this2.disableResetBtnFilters(false);
            }
          }
          if (_this2.moreBtn && filtersSpecData.page > 1) {
            //console.log('YES page', filtersSpecData.page);
            var limit = (filtersSpecData.page - 1) * _this2.moreBtn.dataset.limit;
            _this2.clickOnMoreBtn(limit);
          }
        } else {
          //this.setFiltersStorage(null, {}, 1, location.pathname);
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.filterSelects[0].disabled = false;
    if (this.moreBtn) {
      this.refreshMoreBtnText();
      this.moreBtn.addEventListener("click", function () {
        var limit = +_this2.limit;
        _this2.clickOnMoreBtn(limit);
        var filtersSpecData = JSON.parse(localStorage.getItem("filtersSpecData"));
        //this.setFiltersStorage(this.tag, this.filters, ++filtersSpecData.page, location.pathname);
        //console.log('click moreBtn', localStorage.getItem("filtersSpecData"));
      });
    }
    if (this.totopBtn) {
      this.totopBtn.addEventListener("click", function () {
        window.scrollTo({
          top: window.scrollY + _this2.container.getBoundingClientRect().top - header.clientHeight - 42,
          behavior: "smooth"
        });
      });
    }
    if (this.tagsList && this.btnTagsReset) {
      this.initTags();
      this.resetBtnFilters();
    }
    if (this.btnSelectsReset) {
      this.resetBtnSelects();
    }
  },
  clickOnMoreBtn: function clickOnMoreBtn(limit) {
    var programCards = document.querySelectorAll(".specialty-card.hidden");
    for (var i = 0; i < Math.min(limit, programCards.length); i++) {
      programCards[i].classList.remove("hidden");
    }
    if (document.querySelectorAll(".specialty-card.hidden").length == 0) {
      programService.hideElement(this.moreBtn);
      programService.showElement(this.totopBtn);
    }
    this.refreshMoreBtnText();
  },
  refreshMoreBtnText: function refreshMoreBtnText() {
    var hiddenList = document.querySelectorAll(".specialty-card.hidden");
    if (this.moreBtn) {
      this.moreBtn.innerHTML = hiddenList.length ? "".concat(this.lexicon.showMore, " (").concat(hiddenList.length, ")") : this.lexicon.showMore;
    }
  },
  getFilterEntity: function getFilterEntity(name) {
    var entities = {
      "program_level": "levels",
      "program_faculty": "faculties",
      "program_form": "forms"
    };
    return entities[name];
  },
  refreshFilters: function refreshFilters(filters, data) {
    var _this3 = this;
    filters.forEach(function (select) {
      if (select.name === "program_level" && !_this3.isFacultyPage && !_this3.isPlacesPage) {
        return;
      }
      var enabledOptions = [],
        disabledOptions = [],
        enabledRus = [];
      var filterEntity = _this3.getFilterEntity(select.name);
      try {
        var _select$parentNode$qu;
        var options = _this3.getOptions(select);
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
        (_select$parentNode$qu = select.parentNode.querySelector(".a-uikit-select__list_select")) === null || _select$parentNode$qu === void 0 || _select$parentNode$qu.append.apply(_select$parentNode$qu, enabledOptions.concat(disabledOptions));
      } catch (e) {
        console.log(e);
      }
    });
    if (this.isPlacesPage) {
      try {
        //- скрываю теги, у которых нечего выводить
        var newTags = [];
        var _loop = function _loop() {
          var tag = _this3.tags.places[i];
          var hasTags = _this3.filteredData.filter(function (id) {
            return _this3.data.programs[id]["place_tags"].includes(tag);
          });
          if (hasTags.length) {
            newTags.push(tag);
          }
          _this3.renderTags(newTags);
        };
        for (var i = 0; i < this.tags.places.length; i++) {
          _loop();
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  getData: function getData(action) {
    var _this4 = this;
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            //this.data = dataPrograms;
            /**/
            action = action || "getPrograms";
            _context.prev = 1;
            _context.next = 4;
            return fetch("/api.php?action=".concat(action, "&version=2"), {
              headers: {
                "Accept": "application/json"
              }
            });
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            _this4.data = _context.sent;
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            // this.data = require("./data.js");
            // this.data = this.data.dataPrograms;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10]]);
    }))();
  },
  numWord: function numWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  },
  getLevelPrograms: function getLevelPrograms(level) {
    var _this5 = this;
    // Получает и кэширует программы выбранного уровня
    if (!this.levelPrograms[level]) {
      this.levelPrograms[level] = this.filteredData.filter(function (id) {
        return _this5.data.levels[level].includes(Number(id));
      });
    }
    return this.levelPrograms[level];
  },
  getProgramsTags: function getProgramsTags(level) {
    var _this6 = this;
    // Получает и кэширует теги программ выбранных уровней
    if (!this.tags[level]) {
      var tags = this.filteredData.reduce(function (all, id) {
        return all.concat(_this6.data.programs[id]["level_tags"]);
      }, []);
      this.tags[level] = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(new Set(tags));
    }
    return this.tags[level];
  },
  renderTags: function renderTags(tags) {
    // Рендеринг новых тегов
    var tagsHtml = "";
    var tagTpl = this.tagTpl;
    if (tags) {
      tags.forEach(function (el) {
        tagsHtml += tagTpl.innerHTML.replaceAll("$tag", el);
      });
    }
    this.tagsList.querySelector("div.swiper-wrapper").innerHTML = tagsHtml;
    this.initTags();
  },
  filterPrograms: function filterPrograms() {
    var _this7 = this;
    var programsContainer = document.querySelector(".s-programs-list__inner"),
      level = this.filters.level,
      faculty = this.filters.faculty,
      form = this.filters.form,
      limit = this.limit,
      levels = this.filters.level ? [this.filters.level] : [],
      faculties = this.filters.faculty ? [this.filters.faculty] : [],
      forms = this.filters.form ? [this.filters.form] : [],
      tags = "main_tags";
    this.filteredData = [];
    this.data.specialities_levels.forEach(function (id) {
      var _this7$filteredData;
      (_this7$filteredData = _this7.filteredData).push.apply(_this7$filteredData, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_this7.data.levels[id]));
    });
    this.filteredData.sort(function (a, b) {
      return _this7.data.sort_programs.indexOf(a) - _this7.data.sort_programs.indexOf(b);
    });
    if (this.isPlacesPage) {
      tags = "place_tags";
      this.filteredData = this.filteredData.filter(function (id) {
        return _this7.data.programs[id][tags].length;
      });
    }
    if (level) {
      this.filteredData = this.getLevelPrograms(level);
      if (!this.isPlacesPage) {
        tags = "level_tags";
        // получаем теги программ уровня
        if (this.tagsList && (!this.tagsList.dataset.current_level || this.tagsList.dataset.current_level != level)) {
          this.renderTags(this.getProgramsTags(level));
          this.tagsList.dataset.current_level = level;
        }
      }
    }
    if (this.tag) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this7.data.programs[id][tags].includes(_this7.tag);
      });
    }
    if (faculty) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this7.data.faculties[faculty].includes(Number(id));
      });
    }
    if (form) {
      this.filteredData = this.filteredData.filter(function (id) {
        return _this7.data.forms[form].includes(Number(id));
      });
    }
    var cardList = document.createDocumentFragment();
    this.filteredData.forEach(function (id, i) {
      var p = _this7.data.programs[id],
        title = p["longtitle"] || p["pagetitle"];
      cardList.append(_this7.template.content.cloneNode(true));
      var card = cardList.lastElementChild;
      card.innerHTML = card.innerHTML.replace("$title", title).replace("$level", p["level"]).replace("$facultyName", p["facultyName"]).replace("$id", id).replaceAll("$rank", p["rank"]);
      if (p["place_tags"] && p["place_tags"].length) {
        card.innerHTML = card.innerHTML.replace("$place", p["place_tags"].join(", "));
        card.querySelector(".specialty-card__place").style.display = "inline-flex";
      } else {
        try {
          var _card$querySelector;
          (_card$querySelector = card.querySelector(".specialty-card__place")) === null || _card$querySelector === void 0 || _card$querySelector.remove();
        } catch (e) {
          console.log(e);
        }
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
      if (p["new"] || p["popup"]) {
        if (!p["new"]) {
          card.querySelector(".specialty-card__new").remove();
        }
        var triggers = [];
        if (p["level"]) triggers.push(["Уровень", p["level"]]);
        if (p["hours"]) triggers.push(["Длительность", p["hours"] + " " + _this7.numWord(p["hours"], ["час", "часа", "часов"])]);
        if (p["duration"]) triggers.push(["Срок обучения", p["duration"]]);
        if (p["forms"] && p["forms"][0] != "") {
          var _forms = [];
          for (var _i = 0; _i < p["forms"].length; _i++) {
            _forms.push("<span class=\"--btn\">".concat(_this7.data.names.forms[p["forms"][_i]], "</span>"));
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
          trigger.innerHTML = "<span class=\"s-programs-list-popup__triggers-block-name a-font_xs-m\">".concat(t[0], "</span><span class=\"s-programs-list-popup__triggers-block-text a-font_m-m\">").concat(t[1], "</span>");
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
      if (i >= limit) {
        card.classList.add("hidden");
      }
      card.querySelector(".specialty-card__more").href = p["uri"];
      // Добавляем данные для фильтрации опций фильтров (select).
      levels.push(String(p["level_id"]));
      faculties.push(String(p["facultyId"]));
      if (p["forms"]) {
        forms.push.apply(forms, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(p["forms"]));
      }
      Object(_sections_s_programs_list_popup_s_programs_list_popup__WEBPACK_IMPORTED_MODULE_4__[/* initProgramsListPopup */ "a"])(id, card, p["uri"], p["level_id"] != 34138 ? "program" : "profession");
    });
    programsContainer.innerHTML = "";
    if (cardList.childElementCount > 0) {
      programsContainer.append(cardList);
    } else {
      programsContainer.innerHTML = "<span></span><span>".concat(this.container.dataset.empty, "</span><span></span>");
    }
    programsContainer.dispatchEvent(new CustomEvent("programsLoad", {
      bubbles: true
    }));

    // Pagination
    this.hideElement(this.totopBtn);
    if (limit && this.filteredData.length <= limit) {
      this.hideElement(this.moreBtn);
    } else {
      this.showElement(this.moreBtn);
    }
    return {
      "levels": new Set(levels),
      "faculties": new Set(faculties),
      "forms": new Set(forms)
    };
  },
  getLevelId: function getLevelId(levelName) {
    for (var _i2 = 0, _Object$entries = Object.entries(this.data.names.levels); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i2], 2),
        id = _Object$entries$_i[0],
        name = _Object$entries$_i[1];
      if (name === levelName) return id;
    }
    return null;
  },
  showElement: function showElement(el) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
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
  initTags: function initTags() {
    var _this8 = this;
    // const slider = this.tagsList.querySelector(".swiper");
    // let tagSlider = new Swiper(slider, {
    //     slidesPerView: "auto",
    //     initialSlide: 0,
    //     grabCursor: true,
    // });
    this.tagsList.querySelectorAll("input").forEach(function (el) {
      el.checked = false;
      el.onchange = function () {
        if (el.checked) {
          _this8.resetAllFilters();
          _this8.disableResetBtnFilters(false);
          _this8.tag = el.value;
          _this8.filterPrograms();
          _this8.refreshMoreBtnText();
          _this8.setFiltersStorage(_this8.tag, _this8.filters, 1, location.pathname);
          //console.log('change tag', localStorage.getItem("filtersSpecData"));
        }
      };
    });
  },
  resetBtnFilters: function resetBtnFilters() {
    var _this9 = this;
    this.btnTagsReset.onclick = function () {
      _this9.tagsList.querySelectorAll("input").forEach(function (el) {
        el.checked = false;
      });
      _this9.resetAllFilters(true);
      var tags = _this9.tags.main;
      if (_this9.isLevelPage) tags = _this9.tags[_this9.filters.level];
      if (_this9.isPlacesPage) tags = _this9.tags.places;
      _this9.renderTags(tags);
      if (!_this9.isLevelPage) {
        _this9.tagsList.dataset.current_level = null;
      }
      _this9.disableResetBtnFilters(true);
    };
  },
  resetBtnSelects: function resetBtnSelects() {
    var _this10 = this;
    this.btnSelectsReset.onclick = function () {
      _this10.resetAllFilters(true);
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
  getlimit: function getlimit() {
    this.limit = 4;
    if (window.innerWidth >= 1200) {
      this.limit = 9;
    } else if (window.innerWidth >= 768) {
      this.limit = 8;
    }
  }
};
programService.init();

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

if (document.querySelector('.s-partners__btn')) {
  var partnersBtn = document.querySelector('.s-partners__btn'),
    partnersItem = document.querySelectorAll('.s-partners__item');
  count = 0;
  if (window.matchMedia('(max-width: 767px)').matches) {
    count = 10;
  } else if (window.matchMedia('(max-width: 1199px)').matches) {
    count = 16;
  } else {
    count = 15;
  }
  partnersItem.forEach(function (el) {
    return el.classList.remove('--partner-hidden');
  });
  var i = partnersItem.length - 1;
  while (i >= count) {
    partnersItem[i].classList.add('--partner-hidden');
    i--;
  }
  var getHiddenPartners = function getHiddenPartners() {
    return Array.from(partnersItem).filter(function (el) {
      return el.classList.contains('--partner-hidden');
    });
  };
  if (!getHiddenPartners().length) {
    partnersBtn.style.display = 'none';
  } else {
    partnersBtn.style.display = 'block';
  }
  partnersBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getHiddenPartners().forEach(function (el) {
      return el.classList.remove('--partner-hidden');
    });
    if (!getHiddenPartners().length) partnersBtn.style.display = 'none';
  });
}

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

if (document.querySelector(".s-university__slider-top")) {
  var aboutUniversitySliderTop = new Swiper(".s-university__slider-top", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
      992: {
        spaceBetween: 20
      }
    }
  });
}
if (document.querySelector(".s-university__video")) {
  var videoBlock = document.querySelector(".s-university__video"),
    videoBlockIframe = videoBlock.querySelector("iframe");
  videoBlock.addEventListener("click", function () {
    videoBlock.classList.add("--open");
    videoBlockIframe.src += "&amp;autoplay=1&amp;mute=1&amp;rel=0&amp;showinfo=0";
  });
}
if (document.querySelector(".s-university__slider-bottom")) {
  var aboutUniversitySliderBottom = new Swiper(".s-university__slider-bottom", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
      992: {
        spaceBetween: 20
      }
    }
  });
}
if (document.querySelector(".s-university__ratings-slider")) {
  var aboutUniversityRaitings = new Swiper(".s-university__ratings-slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
      1200: {
        spaceBetween: 20
      }
    }
  });
}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

if (document.querySelector('.s-success-history__swiper')) {
  var successHistorySlider = new Swiper('.s-success-history__swiper', {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.s-success-history__swiper .swiper-button-next',
      prevEl: '.s-success-history__swiper .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination-success-history'
    },
    breakpoints: {
      1440: {
        spaceBetween: 20
      }
    }
  });
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

try {
  var newsSlider = new Swiper('.s-diploma__slider', {
    slidesPerView: 'auto',
    pagination: {
      el: '.s-diploma__slider-pagination',
      paginationDisabledClass: 'disabled'
    }
  });
} catch (e) {}

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

if (document.querySelector('.s-video-block')) {
  var videoBlock = document.querySelector('.s-video-block'),
    videoBlockBox = document.querySelector('.s-video-block__box'),
    videoBlockIframe = document.querySelector('.s-video-block__box iframe');
  videoBlockBox.addEventListener('click', function () {
    videoBlock.classList.add("open");
    videoBlockIframe.src += "&amp;autoplay=1&amp;mute=1&amp;rel=0&amp;showinfo=0";
  });
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var tabs = document.querySelectorAll(".s-faq__themes-item"),
  tabContents = document.querySelectorAll(".s-faq__themes-content"),
  accordionBtns = document.querySelectorAll(".s-faq-accordion__item");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    var target = document.querySelector("#" + tab.dataset.tabTarget);
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("is-active");
    });
    tabs.forEach(function (tab) {
      tab.classList.remove("is-active");
    });
    tab.classList.add("is-active");
    target.classList.add("is-active");
  });
});
accordionBtns.forEach(function (accordion) {
  accordion.onclick = function () {
    this.classList.toggle("is-active");
  };
});
var init = false,
  facultiesSlider = undefined;
if (document.getElementsByClassName("s-faq__slider")) {
  var swiperMode = function swiperMode() {
    if (window.matchMedia("(max-width: 992px)").matches) {
      if (!init) {
        init = true;
        facultiesSlider = new Swiper(".s-faq__slider", {
          slidesPerView: "auto",
          spaceBetween: 12,
          grabCursor: true
        });
      }
    } else {
      if (facultiesSlider) facultiesSlider.destroy();
      init = false;
    }
  };
  window.addEventListener("load", function () {
    swiperMode();
  });
  window.addEventListener("resize", function () {
    swiperMode();
  });
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

try {
  var docsSlider = new Swiper(".s-open-day__slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
      992: {
        spaceBetween: 20
      }
    }
  });
} catch (e) {
  console.log(e);
}
if (document.querySelectorAll(".s-open-day__video").length) {
  var videoBlock = document.querySelector(".s-open-day__video"),
    videoBlockBox = document.querySelector(".s-open-day__video-box"),
    videoBlockIframe = document.querySelector(".s-open-day__video-box iframe");
  videoBlockBox.onclick = function () {
    videoBlock.classList.add("open");
    videoBlockIframe.src += "&amp;autoplay=1&amp;mute=1&amp;rel=0&amp;showinfo=0";
  };
}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

if (document.querySelector(".s-events__slider")) {
  var eventsSlider = new Swiper(".s-events__slider", {
    freeMode: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
      992: {
        spaceBetween: 20
      }
    },
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }
  });
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initProgramsListPopup; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


//- type - тип программы (курс, переподготовка или программа)
function initProgramsListPopup(id, card, href, type) {
  var programService = {
    data: null,
    btn: card.querySelector("[data-src=\"#s-programs-list-popup\"]"),
    popup: document.querySelector("#s-programs-list-popup"),
    init: function init() {
      var _this = this;
      if (!this.btn || !this.popup) {
        return;
      }
      try {
        this.btn.addEventListener("click", function (e) {
          e.preventDefault();
          _this.popup.querySelector(".s-programs-list-popup__blocks").innerHTML = "";
          _this.popup.querySelector("a.s-programs-list-popup__bottom-btn").href = href;
          var popupTitle = type == "program" ? "Специальность" : "Программа";
          _this.popup.querySelector(".s-programs-list-popup__title").innerHTML = popupTitle;
          _this.getData(id).then(function () {
            _this.getProgramInfo(type, _this.data);
          });
          _this.initfancybox(card);
        });
      } catch (e) {
        console.log(e);
      }
    },
    getData: function getData(id) {
      var _this2 = this;
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("/api.php?action=getProgramPopupInfo&program_id=".concat(id), {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Accept": "application/json"
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
              //     this.data = require("./data.js");
              //     this.data = this.data.dataPrograms;
              // }
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    getProgramInfo: function getProgramInfo(type, data) {
      //- Программа
      if (type == "program") {
        //- Что вы будете изучать?
        if (data[385]) {
          var obj = data[385].content;
          for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            if (obj[key].type == "program_study") {
              if (obj[key].items) {
                var title = obj[key].header_title;
                var items = JSON.parse(obj[key].items),
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
    },
    appendTVToPopup: function appendTVToPopup(title, items, itemTitleField, itemTextField) {
      var block = document.createElement("div");
      block.classList.add("s-programs-list-popup__block");
      block.innerHTML = "<h4 class=\"s-programs-list-popup__block-title a-font_h4\">".concat(title, "</h4>");
      var blockList = document.createElement("div");
      blockList.classList.add("s-programs-list-popup__block-list");
      for (var _i2 = 0, _Object$keys2 = Object.keys(items); _i2 < _Object$keys2.length; _i2++) {
        var j = _Object$keys2[_i2];
        var blockItem = document.createElement("div");
        blockItem.classList.add("s-programs-list-popup__block-item");
        if (items[j][itemTitleField]) {
          blockItem.innerHTML = "<div class=\"s-programs-list-popup__block-item-title a-font_m-m\">".concat(items[j][itemTitleField], "</div>");
          if (itemTextField && items[j][itemTextField]) {
            blockItem.innerHTML += "<div class=\"s-programs-list-popup__block-item-text a-font_s\">".concat(items[j][itemTextField], "</div>");
            blockItem.innerHTML += "<span class=\"s-programs-list-popup__block-item-toggle\"></span>";
          }
        } else {
          blockItem.innerHTML += "<div class=\"s-programs-list-popup__block-item-title a-font_m-m\">".concat(items[j][itemTextField], "</div>");
        }
        this.toggleItem(blockItem);
        blockList.appendChild(blockItem);
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
      var _this3 = this;
      var alias = card.dataset.alias,
        name = card.querySelector(".specialty-card__title").innerHTML,
        triggers = card.querySelector(".s-programs-list-popup__triggers").innerHTML;
      Fancybox.show([{
        src: "#s-programs-list-popup",
        hideScrollbar: true,
        touch: false,
        dragToClose: false
      }], {
        on: {
          ready: function ready() {
            _this3.popup.querySelector("form").action = _this3.popup.querySelector("form").action.replace(/&version=(.*?)&/, "&version=".concat(alias, "&"));
            _this3.popup.querySelector(".s-programs-list-popup__name").innerHTML = name;
            _this3.popup.querySelector(".m-form__subtitle").innerHTML = name;
            _this3.popup.querySelector(".s-programs-list-popup__triggers").innerHTML = triggers;
          },
          done: function done() {
            _this3.popup.querySelector("span.s-programs-list-popup__bottom-btn").addEventListener("click", function () {
              _this3.popup.querySelector(".s-programs-list-popup__inner").scrollTo({
                top: _this3.popup.querySelector(".s-programs-list-popup__inner").scrollHeight,
                behavior: "smooth"
              });
            });
          }
        }
      });
    }
  };
  programService.init();
}


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var hitsService = {
  blocks: {
    hits: document.querySelector(".s-hits__slider.--hits"),
    special: document.querySelector(".s-hits__slider.--special")
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
    var block = this.blocks[key];
    try {
      this.sliders[key] = new Swiper(block, {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: block.querySelector(".swiper-button-next"),
          prevEl: block.querySelector(".swiper-button-prev")
        },
        pagination: {
          el: block.querySelector(".swiper-pagination")
        },
        virtual: {
          enabled: true
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
};
hitsService.init();

/***/ })

/******/ });