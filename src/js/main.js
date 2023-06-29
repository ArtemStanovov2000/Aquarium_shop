export const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template)
};

const bodyContainer = document.querySelector(".body-container");

import {createHeaderTemplate} from "./header.js"
render(bodyContainer, createHeaderTemplate())

import {createFooterTemplate} from "./footer.js"
render(bodyContainer, createFooterTemplate())