import {enableFixedPage, disableFixedPage} from "./utils/fixPage";
import {getElements} from "./core";
import {mergeOption} from "./utils/option";
import {ModalOption} from "./types/option";


const createModal = (targetID: string, option?: ModalOption) => {
  const fixOption = mergeOption(option || {});
  ///////////////////////////////////
  //       INITIALIZE       //
  //////////////////////////////////
  const openButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.openEl);
  const closeButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.closeEl);
  const targetNodes = getElements(targetID, fixOption.dataName, fixOption.target);
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
        if (fixOption.autoHide) {
          target.removeEventListener('transitionend', hideEvent)
          target.removeEventListener('animationend', hideEvent)
        }
        target.style.display = ''
        target.classList.add(fixOption.hookClass.beforeOpen);
        setTimeout(() => {
          target.classList.remove(fixOption.hookClass.beforeOpen);
          target.classList.add(fixOption.hookClass.open);
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
        if (fixOption.autoHide) {
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
        for (const node of targetNodes) {
          node.removeEventListener('transitionend', hideEvent);
          node.removeEventListener('animationend', hideEvent);
        }
      }
    }
  }
  ///////////////////////////////////
  //          FLOW           //
  //////////////////////////////////
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
    for (const node of targetNodes) {
      node.style.display = "none";
    }
  }
  ///////////////////////////////////
  //        RETURN         //
  //////////////////////////////////
  return {showModal, hideModal, destroy, openButtons, closeButtons, targetNodes,}
}


export {createModal as default, enableFixedPage, disableFixedPage}