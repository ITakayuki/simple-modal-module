"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => createModal,
  disableFixedPage: () => disableFixedPage,
  enableFixedPage: () => enableFixedPage
});
module.exports = __toCommonJS(src_exports);

// src/utils/fixPage.ts
var enableFixedPage = () => {
  const scrollVal = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollVal}px`;
};
var disableFixedPage = () => {
  const scrollVal = Number(document.body.style.top.replace("px", "").replace("-", ""));
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scrollVal);
};

// src/core.ts
var getElements = (name, id, selector) => {
  if (typeof selector === "string") {
    return Array.from(document.querySelectorAll(`[${id}=${name}].${selector}`));
  } else if (selector instanceof HTMLElement) {
    return [selector];
  } else if (selector instanceof Array && selector.every((e) => e instanceof HTMLElement)) {
    return selector;
  }
};

// src/utils/option.ts
var import_deepmerge = __toESM(require("deepmerge"));
var import_is_plain_object = require("is-plain-object");
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
  return (0, import_deepmerge.default)(defaultOption, option, {
    isMergeableObject: import_is_plain_object.isPlainObject
  });
};

// src/index.ts
var createModal = (targetID, option) => {
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
  return { showModal, hideModal, destroy, openButtons, closeButtons, targetNodes };
};
