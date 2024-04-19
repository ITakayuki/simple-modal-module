import { enableFixedPage, disableFixedPage } from "./utils/fixPage";
import { ModalOption } from "./types/option";
interface CustomDetail extends ReturnType<typeof createModal> {
    target: HTMLElement;
}
declare global {
    interface HTMLModalTargetElement extends Omit<HTMLElement, "addEventListener" | "removeEventListener"> {
        addEventListener<K extends keyof HTMLModalTargetElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLModalTargetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLModalTargetElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLModalTargetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    interface HTMLModalTargetElementEventMap extends HTMLElementEventMap {
        "m-init": CustomEvent<CustomDetail>;
        "m-destroy": CustomEvent<CustomDetail>;
        "m-before-open": CustomEvent<CustomDetail>;
        "m-open": CustomEvent<CustomDetail>;
        "m-close": CustomEvent<CustomDetail>;
    }
}
declare const createModal: (targetID: string, option?: ModalOption) => {
    showModal: () => void;
    hideModal: () => void;
    destroy: () => void;
    openButtons: HTMLElement[] | undefined;
    closeButtons: HTMLElement[] | undefined;
    targetNodes: HTMLModalTargetElement[] | undefined;
};
export { createModal as default, enableFixedPage, disableFixedPage };
