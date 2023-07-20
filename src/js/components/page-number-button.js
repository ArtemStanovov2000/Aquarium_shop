import { createElement } from "../utils.js"

const createSitePageNumberBtnTemplate = (number) => {
    return (
        `<input type="radio" id="page-number-${number}" name="page-number" value="${number}" class="page-number-radio">
        <label for="page-number-${number}" class="page-number-label">${number}</label>`
    )
}

export default class SitePageNumberBtnTemplate {
    constructor() {
      this._element = null;
    }
  
    getTemplate() {
      return createSitePageNumberBtnTemplate();
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