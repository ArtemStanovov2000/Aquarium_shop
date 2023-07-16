import { render, RenderPosition } from "./utils.js"
import SiteHeaderTemplate from "./components/header.js"

const bodyContainer = document.querySelector(".body-container");

render(bodyContainer, new SiteHeaderTemplate(), RenderPosition.BEFOREEND)