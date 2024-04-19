export type ClassName = string;
interface Navigation {
    openEl?: ClassName | HTMLElement | HTMLElement[];
    closeEl?: ClassName | HTMLElement | HTMLElement[];
}
interface Hooks {
    beforeOpen?: ClassName;
    open?: ClassName;
    close?: ClassName;
}
export interface ModalOption {
    target?: ClassName | HTMLElement;
    navigation?: Navigation;
    hookClass?: Hooks;
    animation?: boolean;
    autoFixed?: boolean;
    dataName?: string;
}
export interface RequiredModalOption {
    target: ClassName | HTMLElement;
    navigation: Required<Navigation>;
    hookClass: Required<Hooks>;
    animation: boolean;
    autoFixed: boolean;
    dataName: string;
}
export {};
