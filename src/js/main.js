import { render, RenderPosition } from "./utils.js"
import SiteHeaderTemplate from "./components/header.js"
import SiteFooterTemplate from "./components/footer.js";

const bodyContainer = document.querySelector(".body-container");

render(bodyContainer, new SiteFooterTemplate().getElement(), RenderPosition.AFTERBEGIN)
render(bodyContainer, new SiteHeaderTemplate().getElement(), RenderPosition.AFTERBEGIN)
