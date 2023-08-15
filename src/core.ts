const getElements = (name: string, id: string,  selector: Selector | HTMLElement | HTMLElement[]) => {
  if (typeof selector === "string") {
    return Array.from(document.querySelectorAll(`[${name}=${id}].${selector}`)) as HTMLElement[];
  } else if (selector instanceof HTMLElement) {
    return [selector];
  } else if (selector instanceof Array && selector.every(e => e instanceof HTMLElement)) {
    return selector;
  }
}

export {getElements}