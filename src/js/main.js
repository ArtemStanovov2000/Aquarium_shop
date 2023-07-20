import { render, RenderPosition } from "./utils.js"
import SiteHeaderTemplate from "./components/header.js"
import SiteFooterTemplate from "./components/footer.js";
import SiteSortTemplate from "./components/sort.js";
import SitePageNumberBtnTemplate from "./components/page-number-button.js";
import SitePageNumberBtnContainerTemplate from "./components/page-number-button-container.js";
import SiteProductCartrTemplate from "./components/product-cart.js";
import { AquariumsGoodsBase } from "./data/product-data.js";
import SiteProductCartrContainerTemplate from "./components/product-cart-container.js";
import COUNT_CART_ON_PAGE from "./utils.js"

const headerElement = document.querySelector(".header");
const mainElement = document.querySelector(".main");
const footerElement = document.querySelector(".footer");

render(headerElement, new SiteHeaderTemplate().getElement(), RenderPosition.AFTERBEGIN)
render(footerElement, new SiteFooterTemplate().getElement(), RenderPosition.AFTERBEGIN)

render(mainElement, new SitePageNumberBtnContainerTemplate().getElement(), RenderPosition.AFTERBEGIN)
render(mainElement, new SiteProductCartrContainerTemplate().getElement(), RenderPosition.AFTERBEGIN)
render(mainElement, new SiteSortTemplate().getElement(), RenderPosition.AFTERBEGIN)
const productContainerElement = document.querySelector(".product-container");

const pageNumberContainerElement = document.querySelector(".page-number-container");
render(pageNumberContainerElement, new SitePageNumberBtnTemplate().getElement(), RenderPosition.AFTERBEGIN)

const productCartCount = AquariumsGoodsBase.length

const renderProductCart = function renderProductCart () {
    for (let i = 0; i < productCartCount; i++) {
        render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBase[i].price, AquariumsGoodsBase[i].volume, AquariumsGoodsBase[i].articleNumber), RenderPosition.AFTERBEGIN)
    }
}

renderProductCart ()


