import {ClassName} from "./types/option";

const getElements = (name: string, id: string,  selector: ClassName | HTMLElement | HTMLElement[]) => {
  if (typeof selector === "string") {
    return Array.from(document.querySelectorAll(`[${id}=${name}].${selector}`)) as HTMLElement[];
  } else if (selector instanceof HTMLElement) {
    return [selector];
  } else if (selector instanceof Array && selector.every(e => e instanceof HTMLElement)) {
    return selector;
  }
}

export {getElements}