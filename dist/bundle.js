/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteHeaderTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createHeaderTemplate = () => {
  return (
    `<header class="header">
        <article class="header-top">
          <h2 class="header-top__title">Магазин аквариумов</h2>
          <ul class="header-top__list">
            <li class="header-top__item">
              <a href="#" class="header-top__link" href="#">Закладки</a>
            </li>
            <li class="header-top__item">
              <a href="#" id="product-cart" class="header-top__link" href="#">Корзина</a>
            </li>
            <li class="header-top__item">
              <a href="#" class="header-top__link" href="#">Оформить заказ</a>
            </li>
          </ul>
        </article>
        <article class="header-middle">
          <p class="header-middle__desc">Интернет-магазин аквариумов и смежного оборудования</p>
          <div class="header-middle__contacts">
            <a href="#" class="header-middle__phone">+7 (943) 321-12-12</a>
            <address class="header-middle__address">г. Нижний Новгород, ул. Бекетова, д 21</address>
          </div>
          <div class="my-cabinet">
            <input class="my-cabinet__input" placeholder="Александр Тюрин">
            <div class="my-cabinet__data">
              <a href="#" class="my-cabinet__orders">Мои заказы</a>
              <a href="#" class="my-cabinet__cabinet">Личный кабинет</a>
            </div>
          </div>
        </article>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link" href="#">Главная</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link" href="#">Каталог</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link" href="#">Доставка</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link" href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>`
  );
};

class SiteHeaderTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createHeaderTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderPosition: () => (/* binding */ RenderPosition),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
const RenderPosition = {
    AFTERBEGIN: "afterbegin",
    BEFOREEND: "beforeend"
};

const createElement = (template) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = template;

    return newElement.firstChild;
};

const render = (container, element, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.prepend(element);
            break;
    }
};

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ "./src/js/components/header.js");



const bodyContainer = document.querySelector(".body-container");

(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(bodyContainer, new _components_header_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map