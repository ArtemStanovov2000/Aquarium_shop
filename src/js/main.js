export const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template)
};

const bodyContainer = document.querySelector(".body-container");

import { createHeaderTemplate } from "./header.js"
render(bodyContainer, createHeaderTemplate())

import { createMainTemplate } from "./main-block.js"
render(bodyContainer, createMainTemplate())

import { createProductCartTemplate } from "./product-cart.js"
import { AquariumsGoodsList } from "./data/product-data.js"
const mainBlock = document.querySelector(".main");

const createProductCartList = function createProductCartList() {
    const AquariumsGoodsListLength = AquariumsGoodsList.price.length

    for (let i = 0; i < AquariumsGoodsListLength; i++) {
        render(mainBlock, createProductCartTemplate(AquariumsGoodsList.price[i], AquariumsGoodsList.volume[i], AquariumsGoodsList.articleNumber[i]))
    }
}

createProductCartList()

import { createFooterTemplate } from "./footer.js"
render(bodyContainer, createFooterTemplate())