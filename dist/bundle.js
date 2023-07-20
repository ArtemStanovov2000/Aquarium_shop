/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteFooterTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createFooterTemplate = () => {
  return (
    `<div>
    <div class="footer__top footer-top">
      <div class="footer-top__left">
        <a href="#" class="shop-logo"></a>
        <p class="shop-logo-desc">г. Нижний Новгород, ул. Бекетова, д 21</p>
      </div>
      <div class="footer-top__bar footer-bar">
        <ul class="footer-bar__list">
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Главная</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Каталог</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Доставка</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Контакты</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Аквариумы</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Дополнительное оборудование</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="copyright-memo">© Все права защищены</p>
      <div class="messengers">
        <ul class="messengers__list">
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--telegram-logo"></a>
          </li>
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--facebook-logo"></a>
          </li>
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--vk-logo"></a>
          </li>
        </ul>
      </div>
      <div class="developers-name">
        <p class="developers-name__desc">Разработано:</p>
        <p class="developers-name__desc">g7g7g8</p>
      </div>
    </div>
  </div>`
  )
}

class SiteFooterTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterTemplate();
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
    `<div>
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
  </div>`
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

/***/ "./src/js/components/page-number-button-container.js":
/*!***********************************************************!*\
  !*** ./src/js/components/page-number-button-container.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSitePageNumberBtnContainerTemplate: () => (/* binding */ createSitePageNumberBtnContainerTemplate),
/* harmony export */   "default": () => (/* binding */ SitePageNumberBtnContainerTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createSitePageNumberBtnContainerTemplate = () => {
    return (
        `<div class="page-number-container">
        </div>`
    )
}

class SitePageNumberBtnContainerTemplate {
    constructor() {
      this._element = null;
    }
  
    getTemplate() {
      return createSitePageNumberBtnContainerTemplate();
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

/***/ "./src/js/components/page-number-button.js":
/*!*************************************************!*\
  !*** ./src/js/components/page-number-button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SitePageNumberBtnTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createSitePageNumberBtnTemplate = (number) => {
    return (
        `<input type="radio" id="page-number-${number}" name="page-number" value="${number}" class="page-number-radio">
        <label for="page-number-${number}" class="page-number-label">${number}</label>`
    )
}

class SitePageNumberBtnTemplate {
    constructor() {
      this._element = null;
    }
  
    getTemplate() {
      return createSitePageNumberBtnTemplate();
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

/***/ "./src/js/components/product-cart-container.js":
/*!*****************************************************!*\
  !*** ./src/js/components/product-cart-container.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteProductCartrContainerTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createProductCartContainerTemplate = () => {
  return (
    `<div class="product-container"></div>`
  )
}

class SiteProductCartrContainerTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createProductCartContainerTemplate();
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

/***/ "./src/js/components/product-cart.js":
/*!*******************************************!*\
  !*** ./src/js/components/product-cart.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteProductCartrTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createProductCartTemplate = (price, volume, articleNumber) => {
  return (
    `<article class="product">
      <img class="product__img" src="./img/background.png">
      <div class="product__desc">
        <p class="product__price">${price} рублей</p>
        <p class="product__volume">Аквариум ${volume} литров</p>
      </div>
      <button class="cart-button product__buy-btn" id="buy-btn-article-number-${articleNumber}" type="button">Купить</button>
      <button class="cart-button product__in-cart-btn" id="cart-btn-article-number-${articleNumber}" type="button">В корзину</button>
    </article>`
  )
}

class SiteProductCartrTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate(price, volume, articleNumber) {
    return createProductCartTemplate(price, volume, articleNumber);
  }

  getElement(price, volume, articleNumber) {
    if (!this._element) {
      this._element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate(price, volume, articleNumber));
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/js/components/sort.js":
/*!***********************************!*\
  !*** ./src/js/components/sort.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSortTemplate: () => (/* binding */ createSortTemplate),
/* harmony export */   "default": () => (/* binding */ SiteSortTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");


const createSortTemplate = () => {
    return (
      `<article class="sort">
      <h2 class="sort__title">Сортировка товаров:</h2>
      <div class="price-sort sort-param">
        <input type="radio" id="more-expensive-first-btn" name="price" value="3" class="sort__radio" value="expensive">
        <label for="more-expensive-first-btn" class="sort__label">Сначала подороже</label>
        <input type="radio" id="cheaper-first-btn" name="price" value="3" class="sort__radio" value="cheap" checked>
        <label for="cheaper-first-btn" class="sort__label">Сначала подешевле</label>
      </div>
      <div class="volume-sort sort-param">
        <input type="radio" id="more-volume" name="volume" value="3" class="sort__radio" value="small">
        <label for="more-volume" class="sort__label">Поменьше объем</label>
        <input type="radio" id="less-volume" name="volume" value="3" class="sort__radio" value="large" checked>
        <label for="less-volume" class="sort__label">Побольше объем</label>
      </div>
    </article>`
    )
  }

  class SiteSortTemplate {
    constructor() {
      this._element = null;
    }
  
    getTemplate() {
      return createSortTemplate();
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

/***/ "./src/js/data/product-data.js":
/*!*************************************!*\
  !*** ./src/js/data/product-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AquariumsGoodsBase: () => (/* binding */ AquariumsGoodsBase)
/* harmony export */ });
const AquariumsGoodsBase = [
  {
    price: 3577,
    volume: 17,
    articleNumber: "K001001"
  },
  {
    price: 2288,
    volume: 6,
    articleNumber: "K001002"
  },
  {
    price: 4740,
    volume: 10,
    articleNumber: "K001003"
  },
  {
    price: 5475,
    volume: 24,
    articleNumber: "K001004"
  },
  {
    price: 4524,
    volume: 8,
    articleNumber: "K001005"
  },
  {
    price: 2264,
    volume: 18,
    articleNumber: "K001002"
  },
  {
    price: 3119,
    volume: 9,
    articleNumber: "K001007"
  },
  {
    price: 1979,
    volume: 17,
    articleNumber: "K001008"
  },
  {
    price: 1897,
    volume: 41,
    articleNumber: "K001009"
  },
  {
    price: 3733,
    volume: 25,
    articleNumber: "K001010"
  },
  {
    price: 1302,
    volume: 20,
    articleNumber: "K001011"
  },
  {
    price: 4399,
    volume: 17,
    articleNumber: "K001012"
  },
  {
    price: 5110,
    volume: 17,
    articleNumber: "K001013"
  },
  {
    price: 2623,
    volume: 39,
    articleNumber: "K001014"
  },
  {
    price: 2763,
    volume: 43,
    articleNumber: "K001015"
  },
  {
    price: 2761,
    volume: 42,
    articleNumber: "K001016"
  },
  {
    price: 2455,
    volume: 19,
    articleNumber: "K001017"
  },
  {
    price: 5176,
    volume: 19,
    articleNumber: "K001018"
  },
  {
    price: 3532,
    volume: 30,
    articleNumber: "K001019"
  },
  {
    price: 3554,
    volume: 45,
    articleNumber: "K001020"
  },
  {
    price: 3513,
    volume: 10,
    articleNumber: "K001021"
  },
]

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

const COUNT_CART_ON_PAGE = 6;

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
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer.js */ "./src/js/components/footer.js");
/* harmony import */ var _components_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sort.js */ "./src/js/components/sort.js");
/* harmony import */ var _components_page_number_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-number-button.js */ "./src/js/components/page-number-button.js");
/* harmony import */ var _components_page_number_button_container_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-number-button-container.js */ "./src/js/components/page-number-button-container.js");
/* harmony import */ var _components_product_cart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-cart.js */ "./src/js/components/product-cart.js");
/* harmony import */ var _data_product_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/product-data.js */ "./src/js/data/product-data.js");
/* harmony import */ var _components_product_cart_container_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-cart-container.js */ "./src/js/components/product-cart-container.js");











const headerElement = document.querySelector(".header");
const mainElement = document.querySelector(".main");
const footerElement = document.querySelector(".footer");

(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(headerElement, new _components_header_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)
;(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(footerElement, new _components_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)

;(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(mainElement, new _components_page_number_button_container_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)
;(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(mainElement, new _components_product_cart_container_js__WEBPACK_IMPORTED_MODULE_8__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)
;(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(mainElement, new _components_sort_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)
const productContainerElement = document.querySelector(".product-container");

const pageNumberContainerElement = document.querySelector(".page-number-container");
(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(pageNumberContainerElement, new _components_page_number_button_js__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)

const productCartCount = _data_product_data_js__WEBPACK_IMPORTED_MODULE_7__.AquariumsGoodsBase.length

const renderProductCart = function renderProductCart () {
    for (let i = 0; i < productCartCount; i++) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.render)(productContainerElement, new _components_product_cart_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(_data_product_data_js__WEBPACK_IMPORTED_MODULE_7__.AquariumsGoodsBase[i].price, _data_product_data_js__WEBPACK_IMPORTED_MODULE_7__.AquariumsGoodsBase[i].volume, _data_product_data_js__WEBPACK_IMPORTED_MODULE_7__.AquariumsGoodsBase[i].articleNumber), _utils_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN)
    }
}

renderProductCart ()



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map