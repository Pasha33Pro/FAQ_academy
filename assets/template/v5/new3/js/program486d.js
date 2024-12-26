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
/******/ 		27: 0
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
/******/ 	deferredModules.push([125,0]);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_program_s_intro_s_intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _sections_program_s_intro_s_intro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_intro_s_intro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_program_s_what_study_s_what_study__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
/* harmony import */ var _sections_program_s_what_study_s_what_study__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_what_study_s_what_study__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_program_s_goals_s_goals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var _sections_program_s_goals_s_goals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_goals_s_goals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_program_s_training_program_s_training_program__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _sections_program_s_training_program_s_training_program__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_training_program_s_training_program__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sections_s_forms_training_s_forms_training__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _sections_s_forms_training_s_forms_training__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sections_s_forms_training_s_forms_training__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sections_program_s_result_s_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _sections_program_s_result_s_result__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_result_s_result__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sections_program_s_career_s_career__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(129);
/* harmony import */ var _sections_program_s_career_s_career__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_career_s_career__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sections_program_s_where_work_s_where_work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(130);
/* harmony import */ var _sections_program_s_where_work_s_where_work__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sections_program_s_where_work_s_where_work__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sections_s_possibilities_s_possibilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _sections_s_possibilities_s_possibilities__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sections_s_possibilities_s_possibilities__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sections_s_success_history_s_success_history__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sections_s_faq_s_faq__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sections_s_hits_s_hits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
// - Main


//- О специальности
//- Программа подойдёт
//- Ускоренное второе высшее

//- Что вы будете изучать


//- Цели и задачи программы


//- Учебная программа


//- Презентация о факультете
//- Ведущие преподаватели

//- Формы обучения


//- С мобильным приложением ещё удобнее!
//- Обучение в вашем мобильном телефоне

//- Что вы получите в результате обучения


//- Как поступить

//- Будущая карьерная траектория


//- Где могут работать выпускники


//- Пример вашего будущего резюме
//- С нами ваши возможности больше, чем вы думали


//- Отзывы о программе


//- Часто задаваемые вопросы


//- Мы также рекомендуем вам программы


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

if (document.querySelector(".s_what_study__slider")) {
  var sWhatStudySlider = new Swiper(".s_what_study__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      prevEl: ".s_what_study__slider .swiper-button-prev",
      nextEl: ".s_what_study__slider .swiper-button-next"
    },
    scrollbar: {
      el: ".s_what_study__slider .swiper-scrollbar"
    }
  });
}

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

if (document.querySelector(".s-goals__slider")) {
  var sGoalsSlider = new Swiper(".s-goals__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      prevEl: ".s-goals__slider .swiper-button-prev",
      nextEl: ".s-goals__slider .swiper-button-next"
    },
    scrollbar: {
      el: ".s-goals__slider .swiper-scrollbar"
    }
  });
}

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

var trainingProgramSliders = document.querySelectorAll('.s-training-program__slider');
if (trainingProgramSliders.length && !window.matchMedia('(min-width: 1200px)').matches) {
  trainingProgramSliders.forEach(function (slider) {
    var trainingProgramSlider = new Swiper(slider, {
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 0
    });
  });
}

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

if (document.querySelector(".s-career__slider")) {
  var sCareerSlider = new Swiper(".s-career__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    scrollbar: {
      el: ".s-career__slider .swiper-scrollbar"
    },
    navigation: {
      prevEl: ".s-career__slider .swiper-button-prev",
      nextEl: ".s-career__slider .swiper-button-next"
    }
  });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

if (document.querySelector(".s-where-work__slider")) {
  var sWhatStudySlider = new Swiper(".s-where-work__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      prevEl: ".s-where-work__slider .swiper-button-prev",
      nextEl: ".s-where-work__slider .swiper-button-next"
    },
    scrollbar: {
      el: ".s-where-work__slider .swiper-scrollbar"
    }
  });
}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

if (document.querySelector(".s-forms-training__slider")) {
  var reviewsSlider = new Swiper(".s-forms-training__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    scrollbar: {
      el: ".s-forms-training__slider .swiper-scrollbar"
    },
    navigation: {
      prevEl: ".s-forms-training__slider .swiper-button-prev",
      nextEl: ".s-forms-training__slider .swiper-button-next"
    }
  });
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

if (document.querySelector(".s-faq__nav")) {
  var faqNavSlider = new Swiper(".s-faq__nav", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0
  });
}

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

if (document.querySelector(".s-possibilities__slider")) {
  var possibilitieSlider = new Swiper(".s-possibilities__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0
  });
}

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

if (document.querySelector(".s-success-history__slider")) {
  var successHistorySlider = new Swiper(".s-success-history__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 500,
    navigation: {
      nextEl: ".s-success-history__slider .swiper-button-next",
      prevEl: ".s-success-history__slider .swiper-button-prev"
    },
    scrollbar: {
      el: ".s-success-history__slider .swiper-scrollbar"
    }
  });
}

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

var sIntroSlider = document.querySelector(".s-intro__slider");
if (sIntroSlider && window.innerWidth < 1200 && window.innerWidth >= 768) {
  var introSlider = new Swiper(".s-intro__slider", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0
  });
}

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

var resultSlider = document.querySelector('.s-result__slider');
var scale = window.innerWidth / 1920;
if (resultSlider) {
  var _resultSlider = new Swiper('.s-result__slider', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: window.innerWidth / 360 * 12,
    freeMode: false,
    navigation: {
      nextEl: '.s-result__slider .swiper-button-next',
      prevEl: '.s-result__slider .swiper-button-prev'
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    brakepoints: {
      768: {
        spaceBetween: window.innerWidth / 768 * 12
      },
      1200: {
        spaceBetween: window.innerWidth / 1920 * 24
      }
    }
  });
}
var docs = document.querySelectorAll(".s-result__item .a-btn");
if (docs) {
  docs.forEach(function (doc) {
    doc.addEventListener("click", function (e) {
      e.preventDefault();
      var url = doc.getAttribute("href");
      var type = "html";
      var src = "<img src=\"".concat(url, "\"/>");
      if (url.includes(".pdf")) {
        src = url;
        type = "iframe";
      }
      Fancybox.show([{
        src: src,
        type: type,
        width: "auto",
        height: "auto"
      }], {
        mainClass: "--docs-popup",
        dragToClose: false,
        groupAttr: false,
        hideScrollbar: true
      });
    });
  });
}

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