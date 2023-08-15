// src/utils/fixPage.ts
var enableFixedPage = () => {
  const scrollVal = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollVal}px`;
};
var disableFixedPage = () => {
  const scrollVal = Number(document.body.style.top.replace("px", ""));
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scrollVal);
};

// src/core.ts
var getElements = (name, id, selector) => {
  if (typeof selector === "string") {
    return Array.from(document.querySelectorAll(`[${name}=${id}].${selector}`));
  } else if (selector instanceof HTMLElement) {
    return [selector];
  } else if (selector instanceof Array && selector.every((e) => e instanceof HTMLElement)) {
    return selector;
  }
};

// src/utils/option.ts
import DeepMerge from "deepmerge";
import { isPlainObject } from "is-plain-object";
var defaultOption = {
  target: "js-modal-target",
  navigation: {
    openEl: "js-modal-open",
    closeEl: "js-modal-close"
  },
  hookClass: {
    beforeOpen: "is-before-open",
    open: "is-open",
    close: "is-close"
  },
  autoHide: true,
  autoFixed: true,
  dataName: "data-modal"
};
var mergeOption = (option) => {
  return DeepMerge(defaultOption, option, {
    isMergeableObject: isPlainObject
  });
};

// src/index.ts
var ModalModule = (targetID, option) => {
  const fixOption = mergeOption(option || {});
  const openButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.openEl);
  const closeButtons = getElements(targetID, fixOption.dataName, fixOption.navigation.closeEl);
  const targetNodes = getElements(targetID, fixOption.dataName, fixOption.target);
  const hideTransition = (target) => {
    target.classList.remove(fixOption.hookClass.close);
    target.style.display = "none";
  };
  const hideEvent = (e) => {
    const target = e.currentTarget;
    hideTransition(target);
  };
  const showModal = () => {
    if (targetNodes) {
      for (const target of targetNodes) {
        target.classList.remove(fixOption.hookClass.close);
        if (fixOption.autoHide) {
          target.removeEventListener("transitionend", hideEvent);
          target.removeEventListener("animationend", hideEvent);
        }
        target.style.display = "";
        target.classList.add(fixOption.hookClass.beforeOpen);
        setTimeout(() => {
          target.classList.remove(fixOption.hookClass.beforeOpen);
          target.classList.add(fixOption.hookClass.open);
        }, 100);
      }
      if (fixOption.autoFixed) {
        enableFixedPage();
      }
    }
  };
  const hideModal = () => {
    if (targetNodes) {
      for (const target of targetNodes) {
        target.classList.remove(fixOption.hookClass.open);
        target.classList.add(fixOption.hookClass.close);
        if (fixOption.autoHide) {
          target.addEventListener("transitionend", hideEvent);
          target.addEventListener("animationend", hideEvent);
        } else {
          hideTransition(target);
        }
      }
      if (fixOption.autoFixed) {
        disableFixedPage();
      }
    }
  };
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
          node.removeEventListener("transitionend", hideEvent);
          node.removeEventListener("animationend", hideEvent);
        }
      }
    }
  };
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
  return { showModal, destroy, openButtons, closeButtons, targetNodes };
};
export {
  ModalModule as default,
  disableFixedPage,
  enableFixedPage
};
