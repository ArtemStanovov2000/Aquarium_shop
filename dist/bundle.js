/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/data/product-data.js":
/*!*************************************!*\
  !*** ./src/js/data/product-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AquariumsGoodsBase: () => (/* binding */ AquariumsGoodsBase)
/* harmony export */ });
const AquariumsGoodsBase = {
  price: [3577, 2288, 4740, 5475, 4524, 2264, 3119, 1979, 1897, 3733, 1302, 4399, 5110, 2623, 2763, 2761, 2455, 5176, 3532, 3554, 3513],
  volume: [17, 6, 10, 24, 8, 18, 9, 17, 41, 25, 20, 17, 17, 39, 43, 42, 19, 19, 30, 45, 10],
  articleNumber: ["K001001", "K001002", "K001003", "K001004, K001005", "K001006", "K001007", "K001008", "K001009", "K001010, K001011", "K001012", "K001013", "K001014", "K001015", "K001016", "K001017", "K001018", "K001019", "K001020, K001021", "K001022", "K001023", "K001024", "K001025"]
}

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooterTemplate: () => (/* binding */ createFooterTemplate)
/* harmony export */ });
const createFooterTemplate = () => {
  return (
    `<footer class="footer">
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
  </footer>`
  )
}

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeaderTemplate: () => (/* binding */ createHeaderTemplate)
/* harmony export */ });
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
    )
}

/***/ }),

/***/ "./src/js/main-block.js":
/*!******************************!*\
  !*** ./src/js/main-block.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainTemplate: () => (/* binding */ createMainTemplate)
/* harmony export */ });
const createMainTemplate = () => {
    return (
        `<maim class="main">
        <section class="product-container">
        </section>
      </main>`
    )
}

/***/ }),

/***/ "./src/js/page-number-button-container.js":
/*!************************************************!*\
  !*** ./src/js/page-number-button-container.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSitePageNumberBtnContainerTemplate: () => (/* binding */ createSitePageNumberBtnContainerTemplate)
/* harmony export */ });
const createSitePageNumberBtnContainerTemplate = () => {
    return (
        `<div class="page-number-container">
        </div>`
    )
}

/***/ }),

/***/ "./src/js/page-number-button.js":
/*!**************************************!*\
  !*** ./src/js/page-number-button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSitePageNumberBtnTemplate: () => (/* binding */ createSitePageNumberBtnTemplate)
/* harmony export */ });
const createSitePageNumberBtnTemplate = (number) => {
    return (
        `<input type="radio" id="page-number-${number}" name="page-number" value="${number}" class="page-number-radio">
        <label for="page-number-${number}" class="page-number-label">${number}</label>`
    )
}

/***/ }),

/***/ "./src/js/product-cart.js":
/*!********************************!*\
  !*** ./src/js/product-cart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProductCartTemplate: () => (/* binding */ createProductCartTemplate)
/* harmony export */ });
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

/***/ }),

/***/ "./src/js/sort.js":
/*!************************!*\
  !*** ./src/js/sort.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSortTemplate: () => (/* binding */ createSortTemplate)
/* harmony export */ });
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/js/header.js");
/* harmony import */ var _main_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-block.js */ "./src/js/main-block.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.js */ "./src/js/sort.js");
/* harmony import */ var _product_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-cart.js */ "./src/js/product-cart.js");
/* harmony import */ var _data_product_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/product-data.js */ "./src/js/data/product-data.js");
/* harmony import */ var _page_number_button_container_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-number-button-container.js */ "./src/js/page-number-button-container.js");
/* harmony import */ var _page_number_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-number-button.js */ "./src/js/page-number-button.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.js */ "./src/js/footer.js");
const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template)
};

const bodyContainer = document.querySelector(".body-container");


render(bodyContainer, (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeaderTemplate)())



;
render(bodyContainer, (0,_main_block_js__WEBPACK_IMPORTED_MODULE_1__.createMainTemplate)())
const mainBlock = document.querySelector(".main");


render(mainBlock, (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.createSortTemplate)(), "afterbegin")

;

const productContainer = document.querySelector(".product-container");
const AquariumsGoodsBaseLength = _data_product_data_js__WEBPACK_IMPORTED_MODULE_4__.AquariumsGoodsBase.price.length

const createProductCartList = function createProductCartList() {
    for (let i = 0; i < AquariumsGoodsBaseLength; i++) {
        render(productContainer, (0,_product_cart_js__WEBPACK_IMPORTED_MODULE_3__.createProductCartTemplate)(_data_product_data_js__WEBPACK_IMPORTED_MODULE_4__.AquariumsGoodsBase.price[i], _data_product_data_js__WEBPACK_IMPORTED_MODULE_4__.AquariumsGoodsBase.volume[i], _data_product_data_js__WEBPACK_IMPORTED_MODULE_4__.AquariumsGoodsBase.articleNumber[i]))
    }
}

createProductCartList()


;
render(mainBlock, (0,_page_number_button_container_js__WEBPACK_IMPORTED_MODULE_5__.createSitePageNumberBtnContainerTemplate)())

;
const sitePageNumberBtnContainer = document.querySelector(".page-number-container")

const renderPageNumberCutton = function renderPageNumberCutton () {
    const sitePageCount = Math.ceil(AquariumsGoodsBaseLength/9)

    for (let i = 0; i < sitePageCount; i++) {
        render(sitePageNumberBtnContainer, (0,_page_number_button_js__WEBPACK_IMPORTED_MODULE_6__.createSitePageNumberBtnTemplate)(i))
    }
}

renderPageNumberCutton()

;
render(bodyContainer, (0,_footer_js__WEBPACK_IMPORTED_MODULE_7__.createFooterTemplate)())
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map