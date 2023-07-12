export const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template)
};

const bodyContainer = document.querySelector(".body-container");

import { createHeaderTemplate } from "./header.js"
render(bodyContainer, createHeaderTemplate())



import { createMainTemplate } from "./main-block.js"
render(bodyContainer, createMainTemplate())
const mainBlock = document.querySelector(".main");

import { createSortTemplate } from "./sort.js"
render(mainBlock, createSortTemplate(), "afterbegin")

import { createProductCartTemplate } from "./product-cart.js"
import { AquariumsGoodsBase } from "./data/product-data.js"
const productContainer = document.querySelector(".product-container");
const AquariumsGoodsBaseLength = AquariumsGoodsBase.price.length

const createProductCartList = function createProductCartList() {
    for (let i = 0; i < AquariumsGoodsBaseLength; i++) {
        render(productContainer, createProductCartTemplate(AquariumsGoodsBase.price[i], AquariumsGoodsBase.volume[i], AquariumsGoodsBase.articleNumber[i]))
    }
}

createProductCartList()


import { createSitePageNumberBtnContainerTemplate } from "./page-number-button-container.js"
render(mainBlock, createSitePageNumberBtnContainerTemplate())

import { createSitePageNumberBtnTemplate } from "./page-number-button.js"
const sitePageNumberBtnContainer = document.querySelector(".page-number-container")

const renderPageNumberCutton = function renderPageNumberCutton() {
    const sitePageCount = Math.ceil(AquariumsGoodsBaseLength / 9)

    for (let i = 0; i < sitePageCount; i++) {
        render(sitePageNumberBtnContainer, createSitePageNumberBtnTemplate(i))
    }
}

renderPageNumberCutton()

import { createFooterTemplate } from "./footer.js"
render(bodyContainer, createFooterTemplate())