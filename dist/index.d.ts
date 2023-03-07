declare class Modal {
    private readonly dataName;
    private readonly autoHide;
    private readonly openClass;
    private readonly closeClass;
    private readonly modalClass;
    private openDom;
    private closeDom;
    private modalDom;
    private scrollValue;
    constructor(_dataName: string, _autoHide?: boolean);
    _init(): void;
    show: () => void;
    hide: () => void;
    destroy: () => void;
    private _hideTransition;
    private _addModalEvent;
    private _removeModalEvent;
    disableScroll: (event: MouseEvent) => void;
    private _addNoScrollEvent;
    private _removeNoScrollEvent;
    isMobile: () => boolean;
}
