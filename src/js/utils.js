export const RenderPosition = {
    AFTERBEGIN: "afterbegin",
    BEFOREEND: "beforeend"
};

export const createElement = (template) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = template;

    return newElement.firstChild;
};

export const render = (container, element, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.prepend(element);
            break;
    }
};

export const SortStatus = {
    CHEAPER: "cheap",
    EXPENSIVE: "expensive",
    SMALL: "small",
    LARGE: "large"
}

const COUNT_CART_ON_PAGE = 6;