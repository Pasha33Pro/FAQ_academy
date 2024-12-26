/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sections_s_open_day_s_open_day__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sections_abiturientam_s_events_s_events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_foreign_applicants_s_documents_s_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _sections_foreign_applicants_s_documents_s_documents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sections_foreign_applicants_s_documents_s_documents__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ 105:
/***/ (function(module, exports) {

var advantagesListSlider = new Swiper('.s-documents__slider', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  grabCursor: true
});

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

/***/ })

/******/ });