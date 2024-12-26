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
/******/ 		20: 0
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
/******/ 	deferredModules.push([141,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/vendor/getSwiper.js
var getSwiper = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/lozad/dist/lozad.min.js
var lozad_min = __webpack_require__(38);
var lozad_min_default = /*#__PURE__*/__webpack_require__.n(lozad_min);

// EXTERNAL MODULE: ./src/js/vendor/getFancybox.js
var getFancybox = __webpack_require__(35);

// EXTERNAL MODULE: ./src/js/vendor/getScale.js
var getScale = __webpack_require__(36);

// EXTERNAL MODULE: ./src/js/vendor/getLazyVideo.js
var getLazyVideo = __webpack_require__(40);

// EXTERNAL MODULE: ./src/js/vendor/getBvi.js
var getBvi = __webpack_require__(41);

// EXTERNAL MODULE: ./src/js/vendor/quizPopup.js
var quizPopup = __webpack_require__(37);

// EXTERNAL MODULE: ./src/blocks/sections/s_header/s_header.js
var s_header = __webpack_require__(72);

// EXTERNAL MODULE: ./src/blocks/sections/s_footer/s_footer.js
var s_footer = __webpack_require__(42);

// EXTERNAL MODULE: ./src/blocks/sections/s_quiz/s_quiz.js
var s_quiz = __webpack_require__(43);

// EXTERNAL MODULE: ./src/blocks/sections/s_bottom_buttons/s_bottom_buttons.js
var s_bottom_buttons = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./src/blocks/sections/s_form_feedback/s_form_feedback.js


if (document.querySelector('.form-feedback')) {
  var updateResult = function updateResult(e) {
    try {
      if (e.target.value) {
        try {
          formDataFeedback[e.target.name] = {
            q: e.target.placeholder || e.target.options[0].value,
            a: e.target.value
          };
        } catch (e) {
          console.log(e);
        }
        commentsFeedback.value = '';
        for (var _i = 0, _Object$values = Object.values(formDataFeedback); _i < _Object$values.length; _i++) {
          var value = _Object$values[_i];
          commentsFeedback.value += "".concat(value.q, ": ").concat(value.a, "; ");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  var formFeedback = document.getElementsByClassName('form-feedback')[0],
    commentsFeedback = formFeedback.querySelectorAll('[name="comments"]')[0],
    filialsFeedback = formFeedback.querySelector('[name="feedback-filial"]'),
    formDataFeedback = {};
  if (filialsFeedback) {
    var dataRegions = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var response, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api.php?action=getRegions', {
                headers: {
                  Accept: 'application/json'
                }
              });
            case 2:
              response = _context.sent;
              _context.prev = 3;
              _context.next = 6;
              return response.json();
            case 6:
              data = _context.sent;
              data.sort(function (city1, city2) {
                if (city1.value < city2.value) return -1;
                if (city1.value > city2.value) return 1;
                return 0;
              });
              return _context.abrupt("return", data);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              console.log('Ошибка сортировки городов');
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 11]]);
      }));
      return function dataRegions() {
        return _ref.apply(this, arguments);
      };
    }();
    dataRegions().then(function (regions) {
      try {
        var check = false;
        filialsFeedback.addEventListener('click', function () {
          if (!check) {
            check = true;
            var fb_regions = new Set();
            regions.forEach(function (rgn) {
              fb_regions.add(rgn.value);
            });
            Array.from(fb_regions).forEach(function (val) {
              var option = document.createElement("option");
              option.value = val;
              option.innerHTML = val;
              filialsFeedback.append(option);
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  }
  formFeedback.addEventListener('change', updateResult);
}
// CONCATENATED MODULE: ./src/js/import/sections.js




//import "%sections%/s_bottom_buttons_catalog/s_bottom_buttons_catalog";

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_accordion_item/m_accordion_item.js
var m_accordion_item = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 29 modules
var modules = __webpack_require__(5);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_articles_slider/m_articles_slider.js


if (document.querySelector(".m-articles-slider")) {
  document.querySelectorAll(".m-articles-slider").forEach(function (slider) {
    var articlesSlider = new swiper["a" /* default */](slider, {
      modules: [modules["h" /* Pagination */], modules["g" /* Navigation */], modules["i" /* Scrollbar */]],
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev")
      },
      scrollbar: {
        el: slider.querySelector(".swiper-scrollbar"),
        draggable: true,
        hide: false,
        dragSize: 80
      },
      breakpoints: {
        1200: {
          scrollbar: {
            dragSize: 300
          }
        }
      }
    });
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_breadcrumbs/m_breadcrumbs.js
var m_breadcrumbs = __webpack_require__(46);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_cookie/m_cookie.js
var m_cookie = __webpack_require__(74);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_documents_slider/m_documents_slider.js

if (document.querySelector(".s-license__slider")) {
  var licensesSlider = new swiper["a" /* default */](".s-license__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_menu_toggled/m_menu_toggled.js
var m_menu_toggled = __webpack_require__(75);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_phones/m_phones.js
var m_phones = __webpack_require__(76);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_programs_tags/m_programs_tags.js


var tags = document.querySelector(".m-programs-tags");
if (tags) {
  var m_programs_tags_reset = tags.querySelector(".m-programs-tags__item.--reset");
  var tagSlider = new swiper["a" /* default */](tags.querySelector(".swiper"), {
    modules: [modules["c" /* FreeMode */]],
    freeMode: true,
    slidesPerView: "auto",
    initialSlide: 0,
    grabCursor: true,
    observer: true
  });
  tags.querySelectorAll("input").forEach(function (el) {
    el.checked = false;
    el.onchange = function () {
      if (el.checked) {
        m_programs_tags_reset.disabled = false;
      }
    };
  });
  m_programs_tags_reset.onclick = function () {
    tags.querySelectorAll("input").forEach(function (el) {
      el.checked = false;
    });
    m_programs_tags_reset.disabled = true;
  };
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_quiz/m_quiz.js
var m_quiz = __webpack_require__(47);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_switcher/m_switcher.js
var m_switcher = __webpack_require__(77);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_tabs/m_tabs.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var tabs = document.querySelectorAll(".m-tabs-js");
if (tabs) {
  var tabsSlider = new swiper["a" /* default */](".m-tabs__btns", {
    modules: [modules["c" /* FreeMode */]],
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    grabCursor: true,
    observer: true,
    observeParents: true,
    watchOverflow: false
  });
  for (var i = 0; i < tabs.length; i++) {
    initTabs(tabs[i]);
  }
}
function initTabs(tabs) {
  var tabsBtns = tabs.querySelectorAll(".m-tabs__btn-js");
  var _loop = function _loop() {
    var tabsBtn = tabsBtns[_i],
      tabsBlock = undefined;
    function openTab() {
      var _iterator = _createForOfIteratorHelper(tabsBtns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _tabsBtn = _step.value;
          _tabsBtn.classList.remove("_is-active");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      tabsBtn.classList.add("_is-active");
      tabsBlock = document.querySelector("#".concat(tabsBtn.dataset.tabTarget));
      if (tabsBlock) {
        var tabsBlocks = tabsBlock.parentElement.children;
        var _iterator2 = _createForOfIteratorHelper(tabsBlocks),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _tabsBlock = _step2.value;
            _tabsBlock.classList.remove("_is-active");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        tabsBlock.classList.add("_is-active");
      }
    }
    if (tabsBtn.classList.contains('hover-js')) {
      tabsBtn.addEventListener("mouseover", openTab);
    } else {
      tabsBtn.addEventListener("click", openTab);
    }

    // tabsBtns[0].click();
  };
  for (var _i = 0; _i < tabsBtns.length; _i++) {
    _loop();
  }
}
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_teachers_slider/m_teachers_slider.js


if (document.querySelectorAll(".m-teachers__slider")) {
  var mTeachers = document.querySelectorAll(".m-teachers__slider");
  mTeachers.forEach(function (slider) {
    var mTeachersSlider = new swiper["a" /* default */](slider, {
      modules: [modules["h" /* Pagination */], modules["g" /* Navigation */], modules["i" /* Scrollbar */]],
      grabCursor: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: "auto",
      speed: 500,
      navigation: {
        prevEl: slider.querySelector(".swiper-button-prev"),
        nextEl: slider.querySelector(".swiper-button-next")
      },
      scrollbar: {
        el: slider.querySelector(".swiper-scrollbar"),
        draggable: true,
        hide: false,
        dragSize: 80
      },
      breakpoints: {
        1200: {
          scrollbar: {
            dragSize: 300
          }
        }
      }
    });
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_up_button/m_up_button.js
var m_up_button = __webpack_require__(78);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_university_target/m_university_target.js

if (document.querySelector(".s-university__priorities")) {
  var universityPriorities = new swiper["a" /* default */](".s-university__priorities", {
    slidesPerView: "auto",
    spaceBetween: 0
  });
}
if (document.querySelector(".s-university__achievs")) {
  var universityAchievs = new swiper["a" /* default */](".s-university__achievs", {
    slidesPerView: "auto",
    spaceBetween: 0
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_video_card/m_video_card.js

var mainClass = "--fancybox-vertical-video";
var videos = document.querySelectorAll("[data-fancybox-mainclass='".concat(mainClass, "']"));
if (videos.length) {
  toConsumableArray_default()(videos).forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      Fancybox.show([{
        src: el.href,
        type: "iframe",
        width: "auto",
        height: "auto"
      }], {
        mainClass: mainClass,
        groupAttr: false
      });
    });
  });
}
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_fillters_tabs_slider/m_fillters_tabs_slider.js


var filtersSlider = document.querySelectorAll(".m-filters-tabs-slider__filters");
if (filtersSlider) {
  filtersSlider.forEach(function (slider) {
    var mFiltersTabsSlider = new swiper["a" /* default */](slider, {
      modules: [modules["c" /* FreeMode */], modules["g" /* Navigation */]],
      slidesPerView: "auto",
      spaceBetween: 0,
      grabCursor: true,
      freeMode: true,
      resistance: true,
      resistanceRatio: 0,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev")
      }
    });
  });
}
// CONCATENATED MODULE: ./src/js/import/molecules.js


//import "%molecules%/m_banner_card/m_banner_card";














// EXTERNAL MODULE: ./src/blocks/_ui/atoms/a_apply_btn/a_apply_btn.js
var a_apply_btn = __webpack_require__(82);

// EXTERNAL MODULE: ./src/blocks/_ui/atoms/a_uikit_select/a_uikit_select.js
var a_uikit_select = __webpack_require__(83);

// CONCATENATED MODULE: ./src/js/import/atoms.js


// CONCATENATED MODULE: ./src/js/global.js

window.Swiper = getSwiper["a" /* Swiper */];

lozad_min_default()(".lazy").observe();

window.Fancybox = getFancybox["a" /* Fancybox */];

window.GetScale = getScale["a" /* scale */];



Object(quizPopup["a" /* quizPopup */])();




/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return swiper__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Pagination */ "h"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Scrollbar */ "i"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Navigation */ "g"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Autoplay */ "a"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* FreeMode */ "c"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Grid */ "d"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* EffectFade */ "b"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Manipulation */ "e"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* Mousewheel */ "f"]]);
swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extendDefaults({
  freeMode: {
    enabled: true
  },
  pagination: {
    type: "progressbar"
  },
  scrollbar: {
    draggable: true,
    hide: false,
    dragSize: 80
  },
  speed: 350,
  resistance: true,
  resistanceRatio: 0,
  watchOverflow: true,
  breakpoints: {
    1200: {
      scrollbar: {
        dragSize: 300
      }
    }
  }
});


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fancyapps_ui_dist_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _fancyapps_ui_dist_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _fancyapps_ui_src_Fancybox_l10n_ru___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


var fancyboxOpts = {
  l10n: _fancyapps_ui_src_Fancybox_l10n_ru___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  autoFocus: false,
  hideScrollbar: true,
  Html: {
    iframeAttr: {
      autoplay: true,
      allow: "encrypted-media *; autoplay; fullscreen"
    }
  },
  on: {
    reveal: function reveal(fancybox, slide) {
      var _slide$$trigger;
      if ((_slide$$trigger = slide.$trigger) !== null && _slide$$trigger !== void 0 && (_slide$$trigger = _slide$$trigger.dataset) !== null && _slide$$trigger !== void 0 && _slide$$trigger.fancyboxMainclass) {
        var _slide$$trigger2;
        fancybox.$container.className = fancybox.$container.className + " " + ((_slide$$trigger2 = slide.$trigger) === null || _slide$$trigger2 === void 0 || (_slide$$trigger2 = _slide$$trigger2.dataset) === null || _slide$$trigger2 === void 0 ? void 0 : _slide$$trigger2.fancyboxMainclass);
      }
      if (slide.src.includes("rutube.ru/play/embed")) {
        slide.$el.classList.add("has-rutube");
      }
    },
    done: function done(fancybox, slide) {
      if (slide.src.includes("rutube.ru/play/embed")) {
        slide.$iframe.contentWindow.postMessage(JSON.stringify({
          type: "player:play",
          data: {}
        }), "*");
      }
    }
  }
};
Object.assign(_fancyapps_ui_dist_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_0__[/* Fancybox */ "a"].defaults, fancyboxOpts);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scale; });
var scale = {
  lg: function lg() {
    return window.innerWidth / 1920;
  },
  md: function md() {
    return window.innerWidth / 768;
  },
  sm: function sm() {
    return window.innerWidth / 360;
  }
};


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return quizPopup; });
function quizPopup() {
  var quizPopupOpeners = document.querySelectorAll(".--quiz-popup-opener");
  var quizPopup = document.getElementById("quiz-popup");
  if (quizPopupOpeners.length && quizPopup) {
    quizPopupOpeners.forEach(function (el) {
      el.addEventListener("click", function (e) {
        var _window$Fancybox;
        console.log();
        e.preventDefault();
        //Fancybox.close();
        (_window$Fancybox = window.Fancybox) === null || _window$Fancybox === void 0 || _window$Fancybox.show([{
          src: "#quiz-popup",
          type: "inline",
          width: "auto",
          height: "auto"
        }], {
          mainClass: "--quiz-popup",
          dragToClose: false,
          groupAttr: false,
          hideScrollbar: true
        });
      });
    });
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
                video.target.setAttribute("autoplay", video.target.dataset.autoplay);
              }
            }
            video.target.load();
            video.target.classList.remove("lazy");
            video.target.removeAttribute("data-autoplay");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bviStyle */
var isvek = __webpack_require__(66);
new isvek.Bvi({
  target: ".s-header__top-eyes",
  speech: false,
  theme: "white"
});
var bviStyle = __webpack_require__(67);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var footerLevelSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]('.s-footer__levels', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  observer: true
});

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

try {
  var quizShowBtns = document.querySelectorAll(".--js-show-quiz");
  quizShowBtns.forEach(function (el) {
    return el.addEventListener("click", function (e) {
      e.preventDefault();
      document.documentElement.classList.add("--js-quiz-visible");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  });
} catch (e) {
  console.log(e);
}
try {
  var quizCloseBtns = document.querySelectorAll(".--js-hide-quiz");
  quizCloseBtns.forEach(function (el) {
    return el.addEventListener("click", function (e) {
      e.preventDefault();
      document.documentElement.classList.remove("--js-quiz-visible");
      // window.quizSlider.slideTo(0);
      Fancybox.close();
    });
  });
} catch (e) {
  console.log(e);
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

try {
  var bottomButtonsPopupToggle = function bottomButtonsPopupToggle() {
    if (window.outerWidth > 767 || document.documentElement.offsetHeight - window.scrollY < window.innerHeight + 100 || window.scrollY < 100) {
      document.documentElement.classList.remove("--visible-bottom-btns");
    } else {
      document.documentElement.classList.add("--visible-bottom-btns");
    }
  };
  var bottomButtonsPopupToggleTimer = function bottomButtonsPopupToggleTimer(timer) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(bottomButtonsPopupToggle(), 200);
  };
  var bottomButtons = document.querySelector(".bottom-buttons"),
    bottomButtonsWrap = document.querySelector(".bottom-buttons__inner"),
    bottomPopupButtons = bottomButtons.querySelector("[href='#bottom-buttons__popup']");
  if (navigator.userAgent.indexOf("iPhone") > -1) {
    bottomButtons.style.height = "56px";
  }
  if (bottomPopupButtons) {
    bottomPopupButtons.addEventListener("click", function (e) {
      //document.documentElement.classList.remove("bottom-buttons_catalog");
      document.documentElement.classList.add("bottom-buttons_popup");
    });
  }
  bottomButtons.querySelector(".bottom-buttons__popup-close").addEventListener("click", function (e) {
    document.documentElement.classList.remove("bottom-buttons_popup");
  });
  var timer;
  window.addEventListener("scroll", function () {
    bottomButtonsPopupToggleTimer(timer);
  });
  window.addEventListener("load", function () {
    bottomButtonsPopupToggleTimer(timer);
  });
  window.addEventListener("resize", function () {
    bottomButtonsPopupToggleTimer(timer);
  });
} catch (e) {
  console.log(e);
}
try {
  var bottomBtnModal = document.querySelector('.bottom-buttons__entity.--bottom-buttons-apply');
  var bottomFormModal = document.querySelector('.bottom-buttons__form');
  var closeFormModal = bottomFormModal.querySelector('.bottom-buttons__form-close');
  bottomBtnModal.addEventListener('click', function (e) {
    e.preventDefault();
    bottomFormModal.classList.add('--open');
    document.documentElement.style.overflow = "hidden";
  });
  closeFormModal.addEventListener('click', function (e) {
    e.preventDefault();
    bottomFormModal.classList.add('--close');
    bottomFormModal.classList.remove('--open');
    setTimeout(function () {
      bottomFormModal.classList.remove('--close');
    }, 300);
    document.documentElement.style.overflow = "";
  });
} catch (e) {
  console.log(e);
}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// if (document.querySelector('.accordion-item')) {

//   const accordions = document.querySelectorAll(".accordion-item");

//   accordions.forEach((accordion) => {

//     if (accordion.classList.contains('is-active')) {
//       openAccordion(accordion);
//     }

//     let question = accordion.querySelector(".accordion-item__question");
//     question.addEventListener('click', () => {
//       if (accordion.classList.contains('is-active')) {
//         closeAccordion(accordion);
//       } else {
//         openAccordion(accordion);
//         setTimeout(() => {
//           updateParent(accordion)
//         }, 250);
//       }
//     });
//   });
// }

// function openAccordion(accordion) {
//   const content = accordion.querySelector(".accordion-item__answer");

//   if( content && content.textContent.trim() !== '' ) {
//     closeOtherAccordionItems(accordion);

//     accordion.classList.add("is-active");
//     content.style.maxHeight = content.scrollHeight + "px";
//   }
// }

// function closeAccordion(accordion) {
//   const content = accordion.querySelector(".accordion-item__answer");
//   if (content) {
//     accordion.classList.remove("is-active");
//     content.style.maxHeight = 0;
//   }

//   const children = accordion.querySelectorAll(".accordion-item");
//   if (children) {
//     children.forEach((child) => {
//       closeAccordion(child);
//     });
//   }
// }

// function updateParent(accordion) {
//   const parentAccordion = accordion.parentElement?.closest(".accordion-item");
//   if (parentAccordion) {
//     const content = parentAccordion.querySelector(".accordion-item__answer");
//     content.style.maxHeight = content.scrollHeight + "px";
//   }
// }

// function closeOtherAccordionItems(accordion) {
//   const parentAccordion = accordion.parentElement;
//   if (parentAccordion) {
//     for (let i = 0; i < parentAccordion.children.length; i++) {
//       const item = parentAccordion.children[i]
//       if (item.classList.contains("accordion-item") && item !== accordion) {
//         closeAccordion(item)
//       }
//     }
//   }
// }

var accordions = document.querySelectorAll(".m-accordion:not(.--not-click)");
if (accordions.length) {
  accordions.forEach(function (item) {
    var parent = item.parentElement;
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('m-accordion') || e.target.closest('.m-accordion__header')) {
        var lastOpen = parent.querySelector('.--open');
        if (lastOpen && parent.classList.contains('--oneOpened')) {
          lastOpen.classList.remove('--open');
        }
        item.classList.toggle('--open');
      }
    });
  });
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


if (document.querySelector(".m-breadcrumbs")) {
  var breadcrumbsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](".m-breadcrumbs", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__[/* FreeMode */ "c"]],
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0
  });
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var quizez = document.querySelectorAll(".m-quiz");
if (quizez.length) {
  quizez.forEach(function (quiz) {
    try {
      // Параметры слайдера
      var quizSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](quiz.querySelector(".m-quiz__slider"), {
        slidesPerView: "auto",
        spaceBetween: 0,
        noSwiping: false,
        allowTouchMove: false,
        speed: 0,
        initialSlide: 0,
        //crossFade: true,
        scale: false,
        longSwipes: false,
        observer: true,
        observeParents: true,
        pagination: false
      });
      if (quizSlider.el) {
        // Смена слайда после выбора ответов
        var radios = quizSlider.el.querySelectorAll(".m-quiz__slide-answer > input[type=\"radio\"]"),
          answerBtns = quizSlider.el.querySelectorAll(".m-quiz__slide-answers-next"),
          comments = quizSlider.el.querySelector("[name=\"comments\"]");

        // input[type="number"]
        if (quizSlider.el.querySelector(".m-quiz__slide-answer > input[type=\"number\"]")) {
          quizSlider.el.querySelectorAll(".m-quiz__slide-answer > input[type=\"number\"]").forEach(function (el) {
            var parent = el.parentNode;
            var up = parent.querySelectorAll("button")[1];
            var down = parent.querySelectorAll("button")[0];
            var input = parent.querySelector("input");
            var max = Number(input.max),
              min = Number(input.min);
            input.addEventListener("input", function () {
              var val = Number(input.value);
              if (val > max) {
                input.value = max;
              }
              if (val < min) {
                input.value = min;
              }
            });
            up.addEventListener("click", function (e) {
              e.preventDefault();
              try {
                if (!input.value) {
                  input.value = 1;
                } else {
                  input.value++;
                }
                if (input.value >= 100) {
                  input.value = 100;
                }
              } catch (e) {
                console.log(e);
              }
            });
            down.addEventListener("click", function (e) {
              e.preventDefault();
              try {
                if (!input.value || input.value <= 0) {
                  input.value = 0;
                } else {
                  input.value--;
                }
              } catch (e) {
                console.log(e);
              }
            });
          });
        }

        // input[type="radio"]
        if (radios) {
          try {
            radios.forEach(function (el) {
              return el.addEventListener("change", function (el) {
                nextSlide(quizSlider, el.target.value, comments);
              });
            });
          } catch (e) {
            console.log(e);
          }
        }

        // button
        if (answerBtns) {
          try {
            answerBtns.forEach(function (btn) {
              btn.onclick = function () {
                var activeSlide = quizSlider.slides[quizSlider.activeIndex];
                var inputs = activeSlide.querySelectorAll("input");
                var answers = [];
                inputs.forEach(function (el) {
                  if (el.type === "checkbox" && el.checked || el.type === "number" && el.value) {
                    answers.push(el.value);
                  }
                });
                nextSlide(quizSlider, answers.join(";"), comments);
              };
            });
          } catch (e) {
            console.log(e);
          }
        }
        quizSlider.el.querySelectorAll(".m-quiz__slide-back").forEach(function (el) {
          el.addEventListener("click", function () {
            quizSlider.slidePrev();
          });
        });

        // Возврат к предыдущему слайду
        quizSlider.on("slidePrevTransitionStart", function () {
          comments.value = comments.value.split("||").slice(0, -2).join("||") + "|| ";
        });
      }

      // После отправки формыxw
      var quizForm = quiz.querySelector(".m-quiz__form");
      quizForm.querySelector("[type='submit']").addEventListener("click", function () {
        setTimeout(function () {
          if (!quizForm.querySelector(".error")) {
            quizSlider.slideNext();
          }
        }, 300);
      });
    } catch (e) {
      console.log(e);
    }
  });
}
function nextSlide(quizSlider, answers, comments) {
  var activeSlide = quizSlider.slides[quizSlider.activeIndex];
  // Заполняю ответы
  comments.value = comments.value + activeSlide.querySelectorAll(".m-quiz__slide-title")[0].innerText + ": " + answers + "|| ";
  setTimeout(function () {
    activeSlide.querySelectorAll("input").forEach(function (el) {
      return el.checked = false;
    });
    quizSlider.slideNext();
  }, 150);
}

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

var htmlClassDef = document.documentElement.classList,
  toggler = header.querySelector(".s-header__burger"),
  menu = header.querySelector(".s-header-menu"),
  activeClass = "menu-opened",
  isOpen = false;
var firstSectionHeight = document.querySelector('section').getBoundingClientRect().bottom;
var isQuiz = document.querySelector('.s-quiz') || document.querySelector('.s-main-banner');
var quizBtns = header.querySelectorAll('.a-apply-btn');
var feedbackBtnMenu = document.querySelector('.s-header-menu__info-feedback');
if (!isQuiz) {
  quizBtns.forEach(function (item) {
    item.style.display = "none";
  });
}
toggleSearch();
if (toggler) {
  toggler.addEventListener("click", function (e) {
    e.stopPropagation();
    isOpen = !isOpen;
    showMainMenu(isOpen);
    htmlClassDef.toggle(activeClass);
  });
}
feedbackBtnMenu.addEventListener("click", function (e) {
  isOpen = !isOpen;
  showMainMenu(isOpen);
  htmlClassDef.toggle(activeClass);
});
function hidenMenu() {
  isOpen = !isOpen;
  showMainMenu(isOpen);
  htmlClassDef.remove(activeClass);
}

//- hide menu
document.addEventListener("click", function (e) {
  isOpen = false;
  if (e.target != menu && !menu.contains(e.target) && !header.contains(e.target)) {
    htmlClassDef.remove(activeClass);
  }
});
function showMainMenu(isOpen) {
  document.documentElement.style.setProperty("--scroll-width", isOpen ? "".concat(window.innerWidth - document.documentElement.clientWidth, "px") : 0);
  if (!isOpen) return;
}
function toggleSearch() {
  var searchContainer = document.querySelector(".s-header__search");
  if (searchContainer) {
    var searchBtn = searchContainer.querySelector(".s-header__search-toggler");
    var searchForm = searchContainer.querySelector("form");
    searchBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      header.classList.add("--visible-search");
      searchContainer.querySelector("input").focus();
    });
    document.addEventListener("click", function (e) {
      if (!searchContainer.contains(e.target)) {
        header.classList.remove("--visible-search");
        searchContainer.querySelector("input").blur();
      }
    });
    searchForm.addEventListener("submit", function (e) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        var formData = new FormData(searchForm);
        if (!formData.get("query")) {
          e.preventDefault();
          header.classList.remove("--visible-search");
        }
      }
    });
  }
}
function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}
var cachedWidth = window.innerWidth;
window.addEventListener("resize", debounce(function (e) {
  var newWidth = window.innerWidth;
  if (cachedWidth !== newWidth) {
    cachedWidth = newWidth;
    showMainMenu(isOpen);
  }
}));
var lastScrollTop = 0;
function checkScroll() {
  if (window.innerWidth >= 1200) {
    if (window.scrollY < 30) {
      header.classList.add("--visible-sveden");
    } else {
      header.classList.remove("--visible-sveden");
    }

    // header.classList.add("--visible-nav");

    if (window.scrollY < firstSectionHeight / 2 || window.scrollY <= lastScrollTop) {
      header.classList.add("--visible-nav");
      htmlClassDef.add("--visible-nav");
    } else {
      header.classList.remove("--visible-nav");
      htmlClassDef.remove("--visible-nav");
    }
  } else {
    // if (window.scrollY > lastScrollTop) {
    //     htmlClassDef.add("--visible-nav");
    //     header.classList.add("--visible-nav");
    // } else {
    //     htmlClassDef.remove("--visible-nav");
    //     header.classList.remove("--visible-nav");
    // }

    if (window.scrollY < 30) {
      header.classList.add("--visible-sveden");
    } else {
      header.classList.remove("--visible-sveden");
    }
    if (window.scrollY < 120 || window.scrollY <= lastScrollTop) {
      document.documentElement.classList.remove("--scroll-header");
      header.classList.add("--visible-nav");
      htmlClassDef.add("--visible-nav");
    } else {
      htmlClassDef.remove("--visible-nav");
      document.documentElement.classList.add("--scroll-header");
      header.classList.remove("--visible-nav");
    }
  }
  lastScrollTop = window.scrollY;
}
window.addEventListener("load", function () {
  checkScroll();
});
window.addEventListener("scroll", function (e) {
  checkScroll();
});
window.addEventListener("resize", function (e) {
  checkScroll();
});

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

var coockieBlock = document.querySelector(".m-cookie");
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
if (coockieBlock) {
  try {
    var coockieBlockbtn = coockieBlock.querySelector(".m-cookie__btn");
    if (navigator.cookieEnabled && !getCookie("hideCoockieBlock")) {
      coockieBlock.classList.add("--visible");
      coockieBlockbtn.addEventListener("click", function () {
        document.cookie = "hideCoockieBlock=true; max-age=2592000; path=/";
        coockieBlock.classList.remove("--visible");
      });
    } else {
      coockieBlock.classList.remove("--visible");
    }
  } catch (e) {
    console.log(e);
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var nav_sections = document.querySelectorAll('.m-menu-toggled');
try {
  var _iterator = _createForOfIteratorHelper(nav_sections),
    _step;
  try {
    var _loop = function _loop() {
      var nav_section = _step.value;
      var toggle = nav_section.querySelector('.m-menu-toggled__mainlink-toggle'),
        close = nav_section.querySelector('.m-menu-toggled__close');
      if (toggle) {
        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          nav_section.classList.toggle('_opened');
        });
        close.addEventListener('click', function () {
          nav_section.classList.remove('_opened');
        });
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} catch (e) {
  console.log(e);
}

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var phones = document.querySelectorAll('.m-phones');
try {
  var _iterator = _createForOfIteratorHelper(phones),
    _step;
  try {
    var _loop = function _loop() {
        var phone = _step.value;
        function phoneLinkToBtn() {
          if (parseInt(phone.dataset.showbtn)) {
            var link = phone.querySelectorAll('a')[0];
            if (window.matchMedia('(max-width: 991px)').matches) {
              phone.classList.add('m-phones_mobile');
            } else {
              phone.classList.remove('m-phones_mobile');
            }
          }
        }
        phoneLinkToBtn();
        window.addEventListener('resize', function () {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(phoneLinkToBtn(), 200);
        });
      },
      timer;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} catch (err) {}

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var switchers = document.querySelectorAll(".m-switcher");
if (switchers) {
  for (var i = 0; i < switchers.length; i++) {
    initSwitcher(switchers[i]);
  }
}
function initSwitcher(item) {
  var itemBtns = item.querySelectorAll(".m-switcher__btn");
  var _loop = function _loop() {
    var itemBtn = itemBtns[_i],
      itemBlock = undefined;
    itemBtn.addEventListener("click", function () {
      var _iterator = _createForOfIteratorHelper(itemBtns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _itemBtn = _step.value;
          _itemBtn.classList.remove("_is-active");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      itemBtn.classList.add("_is-active");
      itemBlock = document.querySelector("#".concat(itemBtn.dataset.tabTarget));
      if (itemBlock) {
        var itemBlocks = itemBlock.parentElement.children;
        var _iterator2 = _createForOfIteratorHelper(itemBlocks),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _itemBlock = _step2.value;
            _itemBlock.classList.remove("_is-active");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        itemBlock.classList.add("_is-active");
      }
    });
  };
  for (var _i = 0; _i < itemBtns.length; _i++) {
    _loop();
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

var up = document.querySelector(".m-up-button");
var lastScrollTop = 0;
function checkScroll() {
  if (up) {
    if (window.scrollY > 2000 && window.scrollY < lastScrollTop) {
      up.classList.add("--visible");
    } else {
      up.classList.remove("--visible");
    }
    lastScrollTop = window.scrollY;
  }
}
if (up) {
  up.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  });
}
var timer;
window.addEventListener("scroll", function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(checkScroll(timer), 200);
});

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

var applyBtns = document.querySelectorAll(".--js-go-to-quiz");
function applybtn(applyBtns) {
  if (document.querySelector(".s-quiz") || document.querySelector(".s-main-banner")) {
    var quiz = document.querySelector(".s-quiz") || document.querySelector(".s-main-banner");
    var showQuizBtn = quiz.querySelector(".--js-show-quiz");
    try {
      document.documentElement.classList.remove("--no-quiz");
      applyBtns.forEach(function (el) {
        el.addEventListener("click", function (e) {
          if (window.mainBannerSlider) {
            window.mainBannerSlider.slideTo(0);
          }
          e.preventDefault();
          showQuizBtn.click();
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });

          //quiz.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    document.documentElement.classList.add("--no-quiz");
  }
}
window.addEventListener("load", function () {
  applybtn(applyBtns);
});
var timer;
window.addEventListener("resize", function () {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(applybtn(applyBtns), 200);
});

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

var select = document.querySelectorAll(".a-uikit-select");
[].forEach.call(select, function (select_el) {
  var select_input = select_el.querySelector(".a-uikit-select__input");
  var hidden_input = select_el.querySelector(".a-uikit-select > input");
  var select_placeholder = select_input.querySelector(".a-uikit-select__placeholder");
  select_el.querySelectorAll("[type=\"radio\"]").forEach(function (option, idx) {
    option.addEventListener("change", function (e) {
      if (e.target.value === select_input.dataset.placeholder) {
        select_input.classList.remove("_checked");
        select_input.classList.add("_other");
        hidden_input.value = "";
        select_input.querySelector("input").value = "";
        select_input.querySelector("input").focus();
        select_placeholder.innerHTML = select_input.dataset.placeholder;
        select_input.querySelector("input").oninput = function () {
          hidden_input.value = select_input.querySelector("input").value;
        };
      } else {
        select_input.classList.remove("_other");
        select_input.classList.add("_checked");
        select_placeholder.innerHTML = e.target.placeholder;
        hidden_input.value = e.target.value;
      }
      hidden_input.dispatchEvent(new CustomEvent("change", e.target));
    });
  });
  select_input.addEventListener("click", function () {
    select_input.classList.toggle("_open");
  });
  hidden_input.addEventListener("reset", function (el) {
    if (el.target.value) {
      try {
        select_input.classList.remove("_checked");
        hidden_input.value = "";
        select_el.querySelector("[type='radio']:checked").checked = false;
        select_placeholder.innerHTML = select_input.dataset.placeholder;
        hidden_input.dispatchEvent(new CustomEvent("reset", el.target));
      } catch (e) {
        console.log(e);
      }
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target != select_input) {
      select_input.classList.remove("_open");
      setTimeout(function () {
        if (select_el.querySelectorAll("[type=\"radio\"].error").length) {
          select_el.classList.add("error");
        } else {
          select_el.classList.remove("error");
        }
      }, 1000);
    }
  });
});

/***/ })

/******/ });