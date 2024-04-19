import {ClassName} from "./types/option";

const getElements = <T extends HTMLElement>(name: string, id: string,  selector: ClassName | HTMLElement | HTMLElement[]) => {
  if (typeof selector === "string") {
    return Array.from(document.querySelectorAll(`[${id}=${name}].${selector}`)) as T[];
  } else if (selector instanceof HTMLElement) {
    return [selector] as T[];
  } else if (selector instanceof Array && selector.every(e => e instanceof HTMLElement)) {
    return selector as T[];
  }
}

export {getElements}