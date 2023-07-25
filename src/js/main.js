import { render, RenderPosition, SortStatus } from "./utils.js"
import SiteHeaderTemplate from "./components/header.js"
import SiteFooterTemplate from "./components/footer.js";
import SiteSortTemplate from "./components/sort.js";
import SitePageNumberBtnTemplate from "./components/page-number-button.js";
import SitePageNumberBtnContainerTemplate from "./components/page-number-button-container.js";
import SiteProductCartrTemplate from "./components/product-cart.js";
import { AquariumsGoodsBaseClone } from "./data/product-data.js";
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

const priceSort = document.querySelector(".price-sort")
const volumeSort = document.querySelector(".volume-sort")
const radioButtonPrice = document.querySelectorAll('input[name="price"]');
const radioButtonVolume = document.querySelectorAll('input[name="volume"]');

productContainerElement.innerHTML = ""
AquariumsGoodsBaseClone.forEach((element, index) => {
    render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBaseClone[index].price, AquariumsGoodsBaseClone[index].volume, AquariumsGoodsBaseClone[index].articleNumber), RenderPosition.AFTERBEGIN)
})

let priceDirection

const checkPriceRadioButtonValue = function checkPriceRadioButtonValue(radioButton) {
    radioButton.forEach((radioButton, index) => {
        if (radioButton.checked) {
            priceDirection = radioButton.value;
        }
        return priceDirection;
    });
}

priceSort.addEventListener("click", () => {
    checkPriceRadioButtonValue(radioButtonPrice)
    if (priceDirection === SortStatus.EXPENSIVE) {
        productContainerElement.innerHTML = ""
        AquariumsGoodsBaseClone.sort((a, b) => a.price - b.price);
        AquariumsGoodsBaseClone.forEach((element, index) => {
            render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBaseClone[index].price, AquariumsGoodsBaseClone[index].volume, AquariumsGoodsBaseClone[index].articleNumber), RenderPosition.AFTERBEGIN)
        })
    } else if (priceDirection === SortStatus.CHEAPER) {
        productContainerElement.innerHTML = ""
        AquariumsGoodsBaseClone.sort((a, b) => b.price - a.price)
        AquariumsGoodsBaseClone.forEach((element, index) => {
            render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBaseClone[index].price, AquariumsGoodsBaseClone[index].volume, AquariumsGoodsBaseClone[index].articleNumber), RenderPosition.AFTERBEGIN)
        })
    }
})

let volumeDirection;

const checkVolumeRadioButtonValue = function checkVolumeRadioButtonValue(radioButton) {
    radioButton.forEach((radioButton, index) => {
        if (radioButton.checked) {
            volumeDirection = radioButton.value;
        }
        return volumeDirection;
    });
}

volumeSort.addEventListener("click", () => {
    checkVolumeRadioButtonValue(radioButtonVolume)
    if (volumeDirection === SortStatus.LARGE) {
        productContainerElement.innerHTML = ""
        AquariumsGoodsBaseClone.sort((a, b) => a.volume - b.volume);
        AquariumsGoodsBaseClone.forEach((element, index) => {
            render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBaseClone[index].price, AquariumsGoodsBaseClone[index].volume, AquariumsGoodsBaseClone[index].articleNumber), RenderPosition.AFTERBEGIN)
        })
    } else if (volumeDirection === SortStatus.SMALL) {
        productContainerElement.innerHTML = ""
        AquariumsGoodsBaseClone.sort((a, b) => b.volume - a.volume)
        AquariumsGoodsBaseClone.forEach((element, index) => {
            render(productContainerElement, new SiteProductCartrTemplate().getElement(AquariumsGoodsBaseClone[index].price, AquariumsGoodsBaseClone[index].volume, AquariumsGoodsBaseClone[index].articleNumber), RenderPosition.AFTERBEGIN)
        })
    }
})



