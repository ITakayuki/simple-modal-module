import { enableFixedPage, disableFixedPage } from "./utils/fixPage";
declare const ModalModule: (targetID: string, option?: any) => {
    showModal: () => void;
    destroy: () => void;
    openButtons: any[] | undefined;
    closeButtons: any[] | undefined;
    targetNodes: any[] | undefined;
};
export { ModalModule as default, enableFixedPage, disableFixedPage };
