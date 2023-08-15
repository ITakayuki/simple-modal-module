import { enableFixedPage, disableFixedPage } from "./utils/fixPage";
import { ModalOption } from "./types/option";
declare const createModal: (targetID: string, option?: ModalOption) => {
    showModal: () => void;
    hideModal: () => void;
    destroy: () => void;
    openButtons: HTMLElement[] | undefined;
    closeButtons: HTMLElement[] | undefined;
    targetNodes: HTMLElement[] | undefined;
};
export { createModal as default, enableFixedPage, disableFixedPage };
