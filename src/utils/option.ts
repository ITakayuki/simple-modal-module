import DeepMerge from "deepmerge";
import {isPlainObject} from "is-plain-object";

const defaultOption: ModalOption = {
  target: "js-modal-target",
  navigation: {
    openEl: "js-modal-open",
    closeEl: "js-modal-close",
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

const mergeOption = (option: ModalOption) => {
  return DeepMerge(defaultOption, option, {
    isMergeableObject: isPlainObject
  }) as RequiredModalOption;
}

export {mergeOption};