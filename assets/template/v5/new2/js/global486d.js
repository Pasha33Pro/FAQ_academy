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
/******/ 	deferredModules.push([154,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/swiper/modules/index.mjs + 29 modules
var modules = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(28);

// CONCATENATED MODULE: ./src/js/vendor/checkWindowMaxWidth.js
/* harmony default export */ var checkWindowMaxWidth = (function () {
  return {
    isWindowMaxWidth: undefined,
    sm: function sm() {
      this.isWindowMaxWidth = window.innerWidth < 576;
    },
    md: function md() {
      this.isWindowMaxWidth = window.innerWidth < 768;
    },
    lg: function lg() {
      this.isWindowMaxWidth = window.innerWidth < 992;
    },
    xl: function xl() {
      this.isWindowMaxWidth = window.innerWidth < 1200;
    }
  };
});
// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/dist/fancybox.esm.js
var fancybox_esm = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/src/Fancybox/l10n/ru.js
var ru = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vanilla-lazyload/dist/lazyload.min.js
var lazyload_min = __webpack_require__(45);
var lazyload_min_default = /*#__PURE__*/__webpack_require__.n(lazyload_min);

// CONCATENATED MODULE: ./src/blocks/sections/s_header/s_header.js

var htmlClassDef = document.documentElement.classList,
  toggler = header.querySelector('.s-header__burger'),
  menu = header.querySelector('.s-header-menu'),
  activeClass = 'menu-opened',
  isOpen = false;
var topmenuSlider = new swiper["a" /* default */]('.s-header__topmenu-levels', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  observer: true
});
toggleSearch();
if (toggler) {
  toggler.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen = !isOpen;
    showMainMenu(isOpen);
    htmlClassDef.toggle(activeClass);
  });
}

//- hide menu
document.addEventListener('click', function (e) {
  e.stopPropagation();
  isOpen = false;
  if (e.target != menu && !menu.contains(e.target)) {
    htmlClassDef.remove(activeClass);
  }
});
function showMainMenu(isOpen) {
  document.documentElement.style.setProperty('--scroll-width', isOpen ? "".concat(window.innerWidth - document.documentElement.clientWidth, "px") : 0);
  if (!isOpen) return;
  var navFromTop = header.querySelector('.s-header__levels-menu').getBoundingClientRect().bottom || header.querySelector('.s-header__main').getBoundingClientRect().bottom;
  header.querySelector('.s-header-menu').style.setProperty("top", "".concat(navFromTop, "px"));
}
function toggleSearch() {
  var searchContainer = document.querySelector('.s-header__search');
  if (searchContainer) {
    var searchBtn = searchContainer.querySelector('.s-header__search-toggler');
    var searchForm = searchContainer.querySelector('form');
    searchBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      header.classList.remove('--visible-phones');
      header.classList.add('--visible-search');
      searchContainer.querySelector('input').focus();
    });
    document.addEventListener('click', function (e) {
      if (!searchContainer.contains(e.target)) {
        header.classList.remove('--visible-search');
        searchContainer.querySelector('input').blur();
      }
    });
    searchForm.addEventListener('submit', function (e) {
      if (window.matchMedia('(min-width: 768px)').matches) {
        var formData = new FormData(searchForm);
        if (!formData.get("query")) {
          e.preventDefault();
          header.classList.remove('--visible-search');
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
function fixedHeader() {
  if (window.scrollY > 80) {
    htmlClassDef.add('is-scrolled');
  } else {
    htmlClassDef.remove('is-scrolled');
  }
  if (window.innerWidth < 768) {
    if (window.scrollY > 100) {
      header.classList.add('--min-height');
      document.body.style.paddingTop = '2.25rem';
    } else {
      document.body.style.paddingTop = 0;
      header.classList.remove('--min-height');
    }
  }
}
var cachedWidth = window.innerWidth;
window.addEventListener('resize', debounce(function (e) {
  var newWidth = window.innerWidth;
  if (cachedWidth !== newWidth) {
    cachedWidth = newWidth;
    fixedHeader();
    showMainMenu(isOpen);
  }
}));
var lastScrollTop = 0;
function checkScroll() {
  if (window.innerWidth > 991) {
    if (window.scrollY < lastScrollTop) {
      header.classList.add('--visible-sveden');
    } else {
      header.classList.remove('--visible-sveden');
    }
    lastScrollTop = window.scrollY;
  }
}
window.addEventListener('load', function () {
  fixedHeader();
  initPhones();
});
window.addEventListener('scroll', function (e) {
  checkScroll();
  fixedHeader();
});
function initPhones() {
  var phonesShortcut = header.querySelector('.s-header__tools-phones .s-header__phones-shortcut');
  var phones = header.querySelector('.s-header__tools-phones .m-phones');
  phonesShortcut === null || phonesShortcut === void 0 || phonesShortcut.addEventListener('click', function (e) {
    e.stopPropagation();
    header.classList.toggle('--visible-phones');
    header.classList.remove('--visible-search');
  });
  document.addEventListener('click', function (e) {
    if (!(phones !== null && phones !== void 0 && phones.contains(e.target))) {
      header.classList.remove('--visible-phones');
    }
  });
}
// EXTERNAL MODULE: ./src/blocks/sections/s_header_menu/s_header_menu.js
var s_header_menu = __webpack_require__(47);

// CONCATENATED MODULE: ./src/blocks/sections/s_footer/s_footer.js

var footerLevelSlider = new swiper["a" /* default */]('.s-footer__levels', {
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  observer: true
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/blocks/sections/s_quiz/s_quiz.js



var slidersQuiz = document.querySelectorAll(".s-quiz__slider");
if (slidersQuiz) {
  slidersQuiz.forEach(function (el) {
    var quizSlider = new swiper["a" /* default */](el, {
      modules: [modules["a" /* Autoplay */], modules["h" /* Pagination */], modules["g" /* Navigation */], modules["b" /* EffectFade */]],
      loop: true,
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        waitForTransition: false,
        disableOnInteraction: true
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        enabled: false
      },
      pagination: {
        enabled: true,
        el: el.querySelector(".swiper-bottom .swiper-pagination"),
        clickable: true
      },
      breakpoints: {
        1200: {
          allowTouchMove: false,
          navigation: {
            enabled: true,
            nextEl: el.querySelector(".swiper-bottom .swiper-button-next"),
            prevEl: el.querySelector(".swiper-bottom .swiper-button-prev")
          },
          pagination: {
            clickable: false
          },
          observer: true,
          observeParents: true
        }
      }
    });
    toConsumableArray_default()(el.querySelectorAll(".s-quiz__btn--show-quiz")).forEach(function (e) {
      e.addEventListener("click", function () {
        quizSlider.autoplay.stop();
        // let allSlides = Array.from(Array(quizSlider.slides.length).keys());
        // let rmSlides = allSlides.filter(i => i != quizSlider.realIndex);
        // quizSlider.removeSlide(rmSlides);
        // quizSlider.slideTo(0);
      });
    });
  });
}
try {
  var quizBtns = document.querySelectorAll(".s-quiz__btn--show-quiz");
  quizBtns.forEach(function (el) {
    return el.addEventListener("click", function (e) {
      e.preventDefault();
      var quiz = el.closest(".s-quiz");
      quiz.classList.add("--show-quiz");
      quiz.className = quiz.className.replace(/s-quiz--bg(.*?)\s/g, "");
      if (quiz.id !== "quizBottom") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  });
} catch (e) {
  console.log(e);
}
// EXTERNAL MODULE: ./src/blocks/sections/s_bottom_buttons/s_bottom_buttons.js
var s_bottom_buttons = __webpack_require__(51);

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
// EXTERNAL MODULE: ./src/blocks/sections/s_events_sticker/s_events_sticker.js
var s_events_sticker = __webpack_require__(53);

// CONCATENATED MODULE: ./src/js/import/sections.js





//import "%sections%/s_bottom_buttons_catalog/s_bottom_buttons_catalog";


// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_accordion_item/m_accordion_item.js
var m_accordion_item = __webpack_require__(54);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_apply_btn/m_apply_btn.js
var m_apply_btn = __webpack_require__(55);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_breadcrumbs/m_breadcrumbs.js


if (document.querySelector('.m-breadcrumbs')) {
  var breadcrumbsSlider = new swiper["a" /* default */]('.m-breadcrumbs', {
    modules: [modules["c" /* FreeMode */]],
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 4
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_cookie/m_cookie.js
var m_cookie = __webpack_require__(56);

// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_license/m_license.js

var docsSlider = new swiper["a" /* default */]('.m-license', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_map/m_map.js

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var regionsNames = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var response, dataNames;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('/api.php?action=getRegionCities', {
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
          dataNames = _context.sent;
          return _context.abrupt("return", dataNames);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.log('Ошибка сортировки городов');
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function regionsNames() {
    return _ref.apply(this, arguments);
  };
}();
var m_map_dataRegions = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
    var response, data;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch('/api.php?action=getRegions', {
            // let response = await fetch('https://chs.synergy.ru/regions-list-for-synergy.json?v=2', {
            headers: {
              Accept: 'application/json'
            }
          });
        case 2:
          response = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          data.sort(function (city1, city2) {
            if (city1.value < city2.value) return -1;
            if (city1.value > city2.value) return 1;
            return 0;
          });
          return _context2.abrupt("return", data);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](3);
          console.log('Ошибка сортировки городов');
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return function dataRegions() {
    return _ref2.apply(this, arguments);
  };
}();
if (document.querySelector('.m-map')) {
  var mMap = document.querySelector('.m-map');
  var mapTabs = mMap.querySelectorAll('.m-tabs__btn');
  searchCity();
  m_map_dataRegions().then(function (regions) {
    try {
      if (regions) {
        init2GisMap(regions, mMap, mapTabs);
      }
    } catch (e) {
      console.log(e);
    }
  });
}

//- Инициализация карты, поиск, табы
function init2GisMap(regions, mMap, mapTabs) {
  var mapBlock = mMap.querySelector('#map');
  if (mapBlock && typeof DG != 'undefined') {
    mMap.classList.add('--visible');
    DG.then(function () {
      var map,
        markersRus = DG.featureGroup(),
        markersEn = DG.featureGroup(),
        ico = DG.icon({
          iconUrl: '/assets/dist/images/global/marker.png',
          iconSize: [38, 44]
        });
      map = DG.map(mapBlock, {
        center: [55.45, 37.36],
        zoom: 8,
        scrollWheelZoom: false
      });

      // при загрузке карты выводятся российские регионы
      regions.forEach(function (rgn_obj, i) {
        if (rgn_obj.latitude && rgn_obj.longitude) {
          var popup = initPopup(rgn_obj);
          var coordinates = DG.marker([rgn_obj.latitude, rgn_obj.longitude], {
            icon: ico
          });
          if (rgn_obj.country === 'Россия') {
            coordinates.addTo(markersRus).bindPopup(popup);
          } else {
            coordinates.addTo(markersEn).bindPopup(popup);
          }
        }
      });
      markersRus.addTo(map);

      //- по клику на табы меняем регионы
      mapTabs.forEach(function (tab, idx) {
        var markers = idx ? [markersEn, markersRus] : [markersRus, markersEn];
        tab.addEventListener('click', function () {
          markers[1].removeFrom(map);
          markers[0].addTo(map);
          map.fitBounds(markers[0].getBounds());
        });
      });
    });
  }
}
function initPopup(city) {
  return ['<address>', '<strong>' + city.value + '</strong>, ', city.city ? '<span>' + city.city + '</span>' : '', city.address ? '<br><b>Адрес: </b>' + city.address : '', city.phone ? '<br><b>Телефон: </b>' + city.phone + ';' : '', city.email ? '<br><b>e-mail: </b><a href="mailto:' + city.email + '">' + city.email + '</a>' : '', city.site_url ? '<br><b>Сайт: </b><a href="' + city.site_url + '" target="_blank">' + city.site_url + '</a>' : '', "<br><br><button class=\"a-button\" onclick=\"Fancybox.show([{src:'#map_form'}], {on: {done: () => map_form.querySelector('[name=comments]').value='".concat(city.value, "' }})\">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button>"), '</address>'].join('');
}
function searchCity() {
  var block = document.querySelector('#m-map__serach'),
    input = block.querySelector('input'),
    container = document.querySelector('#m-map__list');

  // search
  input.addEventListener('focus', function () {
    block.classList.add('--focused');
  });
  document.addEventListener('click', function (e) {
    if (input != e.target) {
      block.classList.remove('--focused');
      input.value = '';
      var _iterator = _createForOfIteratorHelper(container.querySelectorAll('a')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.style.display = 'block';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
  input.addEventListener('input', function (e) {
    var check = 0;
    var val = e.target.value.toLowerCase().trim();

    // сначала ищю по первой букве
    if (val.length === 1) {
      var _iterator2 = _createForOfIteratorHelper(container.childNodes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item.style.display = 'none';
          if (item.innerHTML.toLowerCase().charAt(0) === val) {
            check = 1;
            item.style.display = 'block';
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    // ищю по совпадению набора букв
    if (val.length > 1) {
      var _iterator3 = _createForOfIteratorHelper(container.childNodes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _item = _step3.value;
          _item.style.display = 'none';
          if (_item.innerHTML.toLowerCase().indexOf(val) >= 0) {
            check = 1;
            _item.style.display = 'block';
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    //- Если ничего не найдено, показываю все
    if (!check || !val.length) {
      var _iterator4 = _createForOfIteratorHelper(container.childNodes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _item2 = _step4.value;
          _item2.style.display = 'block';
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  });
}
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_menu_tabs/m_menu_tabs.js


var menutabs = document.querySelectorAll(".m-menu-menu");
if (menutabs) {
  var menuTabsSlider = new swiper["a" /* default */](".m-menu-tabs__btns", {
    modules: [modules["c" /* FreeMode */]],
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_menu_toggled/m_menu_toggled.js
var m_menu_toggled = __webpack_require__(57);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_phones/m_phones.js
var m_phones = __webpack_require__(58);

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
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_quiz/m_quiz.js


var quizez = document.querySelectorAll(".m-quiz");
if (quizez.length) {
  quizez.forEach(function (quiz) {
    try {
      // Параметры слайдера
      var quizSlider = new swiper["a" /* default */](quiz.querySelector(".m-quiz__slider"), {
        modules: [modules["h" /* Pagination */], modules["b" /* EffectFade */]],
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        noSwiping: false,
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        speed: 0,
        scale: false,
        longSwipes: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: quiz.querySelector(".m-quiz__slider-pagination"),
          clickable: false
        }
      });
      if (quizSlider.el) {
        // Класс для первого и последнего слайда
        var rmNavClass = "m-quiz__slider_nonav";
        quizSlider.on("activeIndexChange", function (swiper) {
          try {
            if (swiper.slides.length - 1 == swiper.activeIndex) {
              quiz.dataset.slide = "last";
            } else {
              quiz.dataset.slide = swiper.activeIndex;
            }
            animateImg(swiper, quiz);
          } catch (e) {
            console.log(e);
          }
          if (swiper.isEnd || swiper.isBeginning) {
            swiper.el.classList.add(rmNavClass);
          } else {
            swiper.el.classList.remove(rmNavClass);
          }
        });

        // Смена слайда после выбора ответа\ов
        var radios = quizSlider.el.querySelectorAll(".m-quiz__slide-answer > input[type=\"radio\"]"),
          answerBtns = quizSlider.el.querySelectorAll(".m-quiz__slide-answers-next"),
          comments = quizSlider.el.querySelectorAll("[name=\"comments\"]")[0];

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
                nextSlide(el.target.value, quizSlider, comments);
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
                nextSlide(answers.join(";"), quizSlider, comments);
              };
            });
          } catch (e) {
            console.log(e);
          }
        }
        quizSlider.el.querySelectorAll(".m-quiz__slide-back").forEach(function (el) {
          return el.addEventListener("click", function (e) {
            quizSlider.slidePrev();
          });
        });

        // Возврат к предыдущему слайду
        quizSlider.on("slidePrevTransitionStart", function () {
          comments.value = comments.value.split("||").slice(0, -2).join("||") + "|| ";
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
}
function animateImg(swiper, quiz) {
  var quizImg = quiz.querySelector(".m-quiz__img");
  quizImg.classList.add("--quiz-animated");
  var idx = swiper.activeIndex,
    img0 = quizImg.querySelectorAll("img")[0],
    img1 = quizImg.querySelectorAll("img")[1];
  // Подмена изображений по переходу к предыдущему слайду
  if (idx - 1 != swiper.previousIndex) {
    quizImg.classList.add("--quiz-animated-back");
    img1.src = swiper.slides[idx].dataset.image || "";
  }
  setTimeout(function () {
    img0.src = swiper.slides[idx].dataset.image || "";
    if (swiper.slides[idx + 1]) img1.src = swiper.slides[idx + 1].dataset.image || "";
    quizImg.classList.remove("--quiz-animated");
    quizImg.classList.remove("--quiz-animated-back");
  }, 300);
}
function nextSlide(answers, quizSlider, comments) {
  var activeSlide = quizSlider.slides[quizSlider.activeIndex];
  // Заполняю ответы
  comments.value = comments.value + activeSlide.querySelectorAll(".m-quiz__slide-question")[0].innerText + ": " + answers + "|| ";
  setTimeout(function () {
    // Зависимость слайдов от предыдущих ответов
    // let dep = quizSlider.slides[quizSlider.activeIndex].dataset.dependence;
    // if( dep && dep !== el.target.value ) {
    //   quizSlider.slideTo(quizSlider.activeIndex + 2);
    // }
    activeSlide.querySelectorAll("input").forEach(function (el) {
      return el.checked = false;
    });
    quizSlider.slideNext();
  }, 150);
}
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_tabs/m_tabs.js
function m_tabs_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = m_tabs_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function m_tabs_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return m_tabs_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? m_tabs_arrayLikeToArray(r, a) : void 0; } }
function m_tabs_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var tabs = document.querySelectorAll(".m-tabs");
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
  var tabsBtns = tabs.querySelectorAll(".m-tabs__btn");
  var _loop = function _loop() {
    var tabsBtn = tabsBtns[_i],
      tabsBlock = undefined;
    tabsBtn.addEventListener("click", function () {
      var _iterator = m_tabs_createForOfIteratorHelper(tabsBtns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _tabsBtn = _step.value;
          _tabsBtn.classList.remove("is-active");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      tabsBtn.classList.add("is-active");
      tabsBlock = document.querySelector("#".concat(tabsBtn.dataset.tabTarget));
      if (tabsBlock) {
        var tabsBlocks = tabsBlock.parentElement.children;
        var _iterator2 = m_tabs_createForOfIteratorHelper(tabsBlocks),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _tabsBlock = _step2.value;
            _tabsBlock.classList.remove("is-active");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        tabsBlock.classList.add("is-active");
      }
    });
    tabsBtns[0].click();
  };
  for (var _i = 0; _i < tabsBtns.length; _i++) {
    _loop();
  }
}
// CONCATENATED MODULE: ./src/blocks/_ui/molecules/m_teachers_slider/m_teachers_slider.js


if (document.querySelectorAll('.m-teachers')) {
  var mTeachers = document.querySelectorAll('.m-teachers');
  mTeachers.forEach(function (slider) {
    var mTeachersSlider = new swiper["a" /* default */](slider, {
      modules: [modules["h" /* Pagination */], modules["g" /* Navigation */]],
      grabCursor: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
        prevEl: slider.querySelector('.swiper-button-prev'),
        nextEl: slider.querySelector('.swiper-button-next')
      },
      pagination: {
        el: slider.querySelector('.swiper-pagination')
      },
      breakpoints: {
        1260: {
          watchOverflow: true
        }
      }
    });
  });
}
// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_up/m_up.js
var m_up = __webpack_require__(59);

// EXTERNAL MODULE: ./src/blocks/_ui/molecules/m_up_button/m_up_button.js
var m_up_button = __webpack_require__(60);

// CONCATENATED MODULE: ./src/js/import/molecules.js















// EXTERNAL MODULE: ./src/blocks/_ui/atoms/a_priemnaya_komissiya/a_priemnaya_komissiya.js
var a_priemnaya_komissiya = __webpack_require__(61);

// EXTERNAL MODULE: ./src/blocks/_ui/atoms/a_uikit_select/a_uikit_select.js
var a_uikit_select = __webpack_require__(62);

// CONCATENATED MODULE: ./src/js/import/atoms.js


// CONCATENATED MODULE: ./src/js/global.js


window.Swiper = swiper["a" /* default */];
swiper["a" /* default */].use([modules["h" /* Pagination */], modules["g" /* Navigation */], modules["Lazy"], modules["a" /* Autoplay */], modules["c" /* FreeMode */], modules["f" /* Manipulation */]]);
swiper["a" /* default */].extendDefaults({
  freeMode: {
    enabled: true
  },
  resistance: true,
  resistanceRatio: 0,
  watchOverflow: true
});


window.Alpine = module_esm["a" /* default */];
try {
  module_esm["a" /* default */].data("checkWindowMaxWidth", checkWindowMaxWidth);
  module_esm["a" /* default */].start();
} catch (e) {
  console.log(e);
}


window.Fancybox = fancybox_esm["a" /* Fancybox */];
var fancyboxOpts = {
  l10n: ru["a" /* default */],
  autoFocus: false,
  hideScrollbar: false
};
Object.assign(window.Fancybox.defaults, fancyboxOpts);

var lazyLoadInstance = new lazyload_min_default.a({});
var isvek = __webpack_require__(46);
new isvek.Bvi({
  target: ".s-header__top-eyes",
  speech: false,
  theme: "white"
});




/***/ }),

/***/ 47:
/***/ (function(module, exports) {

var headerMenu = document.querySelector(".s-header-menu");
var chapters = headerMenu.querySelectorAll(".s-header-menu__chapter-item");
var toggles = headerMenu.querySelectorAll(".m-menu-toggled");
var menu = headerMenu.querySelector(".s-header-menu__menu");
var menuContainer = headerMenu.querySelector(".s-header-menu__menu-container");
var activeChapterClass = "--active";
var activeMenuClass = "menu-item-active";
var activeLinkClass = "--active";
function getActiveMenu(chapter) {
  var href = chapter.getAttribute("href");
  var menu = headerMenu.querySelector(".m-menu-toggled__mainlink a[href=\"".concat(href, "\"]"));
  return menu === null || menu === void 0 ? void 0 : menu.closest(".m-menu-toggled");
}
function setActiveMenu(chapter, toggler) {
  chapters.forEach(function (t) {
    return t.classList.remove(activeChapterClass, activeMenuClass);
  });
  toggles.forEach(function (t) {
    return t.classList.remove(activeLinkClass);
  });
  chapter === null || chapter === void 0 || chapter.classList.add(activeChapterClass);
  if (toggler) {
    toggler.classList.add(activeLinkClass);
  } else {
    document.querySelector(".m-menu-toggled.--faculties").classList.add(activeLinkClass);
  }
  scrollMenu();
}
function scrollMenu() {
  if (menu.clientHeight >= menuContainer.scrollHeight - Math.ceil(menuContainer.scrollTop)) {
    menu.classList.remove("--visible-gradient");
  } else {
    menu.classList.add("--visible-gradient");
  }
}
var observer;
function init() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    chapters.forEach(function (chapter) {
      var toggler = getActiveMenu(chapter);
      chapter.addEventListener("mouseenter", function (event) {
        setActiveMenu(chapter, toggler);
      });
    });
    if (chapters.length) {
      var chapter = chapters[0];
      var _menu = getActiveMenu(chapter);
      chapter.classList.add(activeChapterClass);
      _menu === null || _menu === void 0 || _menu.classList.add(activeLinkClass);
      scrollMenu();
    }
    observer = new MutationObserver(function (event) {
      if (document.documentElement.classList.contains("menu-opened")) {
        var _chapter = headerMenu.querySelector(".s-header-menu__chapter-item.menu-item-active");
        if (_chapter) {
          var toggler = getActiveMenu(_chapter);
          setActiveMenu(_chapter, toggler);
        } else {
          var link = headerMenu.querySelector(".m-menu-toggled__link.menu-item-active");
          if (link) {
            var _toggler = link.closest(".m-menu-toggled");
            var _menu2 = _toggler === null || _toggler === void 0 ? void 0 : _toggler.querySelector(".m-menu-toggled__mainlink a");
            var _chapter2 = headerMenu.querySelector(".s-header-menu__chapter-item[href=\"".concat(_menu2.getAttribute("href"), "\"]"));
            setActiveMenu(_chapter2, _toggler);
          }
        }
      }
    });
  }
  update();
}
function update() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    var _observer;
    (_observer = observer) === null || _observer === void 0 || _observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false
    });
    menuContainer.addEventListener("scroll", scrollMenu);
  } else {
    var _observer2;
    (_observer2 = observer) === null || _observer2 === void 0 || _observer2.disconnect();
    menuContainer.removeEventListener("scroll", scrollMenu);
  }
}
init();
function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}
var cachedWidth = window.innerWidth;
window.addEventListener("resize", debounce(function () {
  var newWidth = window.innerWidth;
  if (cachedWidth !== newWidth) {
    cachedWidth = newWidth;
    update();
  }
}));

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

try {
  var bottomButtonsPopupToggle = function bottomButtonsPopupToggle() {
    if (window.outerWidth > 767 || document.documentElement.offsetHeight - window.scrollY < window.innerHeight + 100 || window.scrollY < 100) {
      bottomButtons.classList.remove("--visible");
    } else {
      bottomButtons.classList.add("--visible");
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
    bottomButtons.style.height = "auto";
    bottomButtonsWrap.style.paddingBottom = "16px";
  }
  bottomPopupButtons.addEventListener("click", function (e) {
    //document.documentElement.classList.remove("bottom-buttons_catalog");
    document.documentElement.classList.add("bottom-buttons_popup");
  });
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

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

var $event_sticker = document.querySelector('.s-events-sticker');
var up = document.querySelector('.m-up-button');
if ($event_sticker) {
  if (!localStorage.getItem('event_sticker')) {
    $event_sticker.classList.remove('--hidden');
  }
  $event_sticker.querySelector('.s-events-sticker__toggler').addEventListener('click', function () {
    $event_sticker.classList.toggle('--hidden');
    if ($event_sticker.classList.contains('--hidden')) {
      localStorage.setItem('event_sticker', true);
    } else {
      localStorage.removeItem('event_sticker');
    }
    upButtonPosition();
  });
  var timer;
  marginBottomTimer(timer);
  window.addEventListener('scroll', function () {
    marginBottomTimer(timer);
  });
  window.addEventListener('resize', function () {
    marginBottomTimer(timer);
  });
}
function checkBottomBtns($event_sticker) {
  if (document.querySelector('.bottom-buttons')) {
    if (window.outerWidth > 767 || document.documentElement.offsetHeight - window.scrollY < window.innerHeight + 100 || window.scrollY < 100) {
      $event_sticker.style.marginBottom = 0;
    } else {
      $event_sticker.style.marginBottom = "".concat(document.querySelector('.bottom-buttons').getBoundingClientRect().height, "px");
    }
    if (document.documentElement.offsetHeight - window.scrollY < window.innerHeight + 100) {
      $event_sticker.style.display = 'none';
    } else {
      $event_sticker.style.display = 'flex';
    }
  }
}
function marginBottomTimer(timer) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(checkBottomBtns($event_sticker), 200);
}
function upButtonPosition() {
  var upBottom = 16;
  if (window.matchMedia('(min-width: 768px)').matches) {
    upBottom = 40;
  } else if (window.matchMedia('(min-width: 1440px)').matches) {
    upBottom = 60;
  }
  up.style.bottom = upBottom + window.innerHeight - $event_sticker.getBoundingClientRect().top + 'px';
}

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

if (document.querySelector('.accordion-item')) {
  var accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach(function (accordion) {
    if (accordion.classList.contains('is-active')) {
      openAccordion(accordion);
    }
    var question = accordion.querySelector(".accordion-item__question");
    question.addEventListener('click', function () {
      if (accordion.classList.contains('is-active')) {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
        setTimeout(function () {
          updateParent(accordion);
        }, 250);
      }
    });
  });
}
function openAccordion(accordion) {
  var content = accordion.querySelector(".accordion-item__answer");
  if (content && content.textContent.trim() !== '') {
    closeOtherAccordionItems(accordion);
    accordion.classList.add("is-active");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
function closeAccordion(accordion) {
  var content = accordion.querySelector(".accordion-item__answer");
  if (content) {
    accordion.classList.remove("is-active");
    content.style.maxHeight = 0;
  }
  var children = accordion.querySelectorAll(".accordion-item");
  if (children) {
    children.forEach(function (child) {
      closeAccordion(child);
    });
  }
}
function updateParent(accordion) {
  var _accordion$parentElem;
  var parentAccordion = (_accordion$parentElem = accordion.parentElement) === null || _accordion$parentElem === void 0 ? void 0 : _accordion$parentElem.closest(".accordion-item");
  if (parentAccordion) {
    var content = parentAccordion.querySelector(".accordion-item__answer");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
function closeOtherAccordionItems(accordion) {
  var parentAccordion = accordion.parentElement;
  if (parentAccordion) {
    for (var i = 0; i < parentAccordion.children.length; i++) {
      var item = parentAccordion.children[i];
      if (item.classList.contains("accordion-item") && item !== accordion) {
        closeAccordion(item);
      }
    }
  }
}

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

var applyBtns = document.querySelectorAll('.m-apply-btn');
function applybtn(applyBtns) {
  if (document.querySelector("#quizBottom")) {
    var showQuizBtn = quizBottom.querySelector('.s-quiz__btn--show-quiz') || quizBottom.querySelector('.s-quiz__btn--show-quiz');
    try {
      document.documentElement.classList.remove('--no-quiz');
      applyBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          showQuizBtn.click();
          quizBottom.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    document.documentElement.classList.add('--no-quiz');
  }
}
applybtn(applyBtns);
var timer;
window.addEventListener('resize', function () {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(applybtn(applyBtns), 200);
});

/***/ }),

/***/ 56:
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

/***/ 57:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

/***/ 58:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

/***/ 59:
/***/ (function(module, exports) {

var up = document.querySelector('.m-up');
function checkScroll(timer) {
  if (up) {
    if (window.scrollY > window.innerHeight / 2) {
      up.classList.add('--visible');
    } else {
      up.classList.remove('--visible');
    }
    up.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
var timer;
window.addEventListener('scroll', function () {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(checkScroll(timer), 200);
});

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

var up = document.querySelector(".m-up-button");
var sticker = document.querySelector(".s-events-sticker");
var bottomButtons = document.querySelector(".bottom-buttons");
var lastScrollTop = 0;
function checkScroll(timer) {
  if (up) {
    if (window.scrollY > 2000 && window.scrollY < lastScrollTop) {
      up.classList.add("--visible");
    } else {
      up.classList.remove("--visible");
    }
    lastScrollTop = window.scrollY;
    //upButtonPosition();
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

// window.addEventListener("resize", () => {
//     upButtonPosition();
// });

function upButtonPosition() {
  var upBottom = 16;
  if (window.matchMedia("(min-width: 768px)").matches) {
    upBottom = 40;
  } else if (window.matchMedia("(min-width: 1440px)").matches) {
    upBottom = 60;
  }
  if (sticker) {
    up.style.bottom = upBottom + window.innerHeight - sticker.getBoundingClientRect().top + "px";
  } else {
    up.style.bottom = upBottom + bottomButtons.getBoundingClientRect().height + "px";
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {



/***/ }),

/***/ 62:
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
        hidden_input.dispatchEvent(new CustomEvent("change", el.target));
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