import { enableFixedPage, disableFixedPage } from "./utils/fixPage";
declare const createModal: (targetID: string, option?: any) => {
    showModal: () => void;
    hideModal: () => void;
    destroy: () => void;
    openButtons: any[] | undefined;
    closeButtons: any[] | undefined;
    targetNodes: any[] | undefined;
};
export { createModal as default, enableFixedPage, disableFixedPage };
