import {enableFixedPage, disableFixedPage} from "./utils/fixPage";
import {getElements} from "./core";
import {mergeOption} from "./utils/option";
import {ModalOption} from "./types/option";

interface CustomDetail extends ReturnType<typeof createModal>{
  target: HTMLElement;
}


declare global {
  interface HTMLModalTargetElement extends Omit<HTMLElement, "addEventListener" | "removeEventListener">{
    addEventListener<K extends keyof HTMLModalTargetElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLModalTargetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLModalTargetElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLModalTargetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  interface HTMLModalTargetElementEventMap extends HTMLElementEventMap{
    "m-init": CustomEvent<CustomDetail>;
    "m-destroy": CustomEvent<CustomDetail>;
    "m-before-open": CustomEvent<CustomDetail>;
    "m-open": CustomEvent<CustomDetail>;
    "m-close": CustomEvent<CustomDetail>;
  }
}


const createModal = (targetID: string, option?: ModalOption) => {
  const fixOption = mergeOption(option || {});
  ///////////////////////////////////
  //       INITIALIZE       //
  //////////////////////////////////
  const openButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.openEl);
  const closeButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.closeEl);
  const targetNodes = getElements<HTMLModalTargetElement>(targetID, fixOption.dataName, fixOption.target);
  ///////////////////////////////////
  //        Modules         //
  //////////////////////////////////
  const hideTransition = (target: HTMLElement) => {
    target.classList.remove(fixOption.hookClass.close);
    target.style.display = 'none'
  }
  const hideEvent = (e: TransitionEvent | AnimationEvent) => {
    const target = e.currentTarget as HTMLElement;
    hideTransition(target);
  }
  const showModal = () => {
    if (targetNodes) {
      for (const target of targetNodes) {
        target.classList.remove(fixOption.hookClass.close);
        if (fixOption.animation) {
          target.removeEventListener('transitionend', hideEvent)
          target.removeEventListener('animationend', hideEvent)
        }
        target.style.display = ''
        target.classList.add(fixOption.hookClass.beforeOpen);
        target.dispatchEvent(new CustomEvent("m-before-open", {
          detail: {
            target,
            ...resultData
          },
        }))
        setTimeout(() => {
          target.classList.remove(fixOption.hookClass.beforeOpen);
          target.classList.add(fixOption.hookClass.open);
          target.dispatchEvent(new CustomEvent("m-open", {
            detail: {
              target,
              ...resultData
            },
          }))
        }, 100)
      }
      if (fixOption.autoFixed) {
        enableFixedPage();
      }
    }
  }
  const hideModal = () => {
    if (targetNodes) {
      for (const target of targetNodes) {
        target.classList.remove(fixOption.hookClass.open);
        target.classList.add(fixOption.hookClass.close);
        target.dispatchEvent(new CustomEvent("m-close", {
          detail: {
            target,
            ...resultData
          }
        }))
        if (fixOption.animation) {
          target.addEventListener('transitionend', hideEvent);
          target.addEventListener('animationend', hideEvent);
        } else {
          hideTransition(target);
        }
      }
      if (fixOption.autoFixed) {
        disableFixedPage();
      }
    }
  }

  const destroy = () => {
    if (openButtons) {
      for (const node of openButtons) {
        node.removeEventListener("click", showModal);
      }
    }
    if (closeButtons) {
      for (const node of closeButtons) {
        node.removeEventListener("click", hideModal);
      }
      if (targetNodes) {
        for (const target of targetNodes) {
          target.removeEventListener('transitionend', hideEvent);
          target.removeEventListener('animationend', hideEvent);
          target.dispatchEvent(new CustomEvent("m-destroy", {
            detail: {
              target,
              ...resultData
            }
          }))
        }
      }
    }
  }
  ///////////////////////////////////
  //          FLOW           //
  //////////////////////////////////
  // set result
  const resultData = {showModal, hideModal, destroy, openButtons, closeButtons, targetNodes};
  // Add Events
  if (openButtons) {
    for (const node of openButtons) {
      node.addEventListener("click", showModal);
    }
  }
  if (closeButtons) {
    for (const node of closeButtons) {
      node.addEventListener("click", hideModal);
    }
  }
  if (targetNodes) {
    for (const target of targetNodes) {
      target.style.display = "none";
      target.dispatchEvent(new CustomEvent("m-init", {
        detail: {
          target,
          ...resultData
        }
      }))
    }
  }
  ///////////////////////////////////
  //        RETURN         //
  //////////////////////////////////
  return resultData;
}


export {createModal as default, enableFixedPage, disableFixedPage}