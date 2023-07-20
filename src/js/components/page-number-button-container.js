import { createElement } from "../utils.js"

export const createSitePageNumberBtnContainerTemplate = () => {
    return (
        `<div class="page-number-container">
        </div>`
    )
}

export default class SitePageNumberBtnContainerTemplate {
    constructor() {
      this._element = null;
    }
  
    getTemplate() {
      return createSitePageNumberBtnContainerTemplate();
    }
  
    getElement() {
      if (!this._element) {
        this._element = createElement(this.getTemplate());
      }
  
      return this._element;
    }
  
    removeElement() {
      this._element = null;
    }
  };