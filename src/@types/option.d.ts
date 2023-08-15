type Selector = string;
type ClassName = string;

interface Navigation {
  openEl?: Selector | HTMLElement | HTMLElement[];
  closeEl?: Selector | HTMLElement | HTMLElement[];
}

interface Hooks {
  beforeOpen?: ClassName;
  open?: ClassName;
  close?: ClassName;
}

interface ModalOption {
  target?: Selector | HTMLElement;
  navigation?: Navigation;
  hookClass?: Hooks;
  autoHide?: boolean;
  autoFixed?: boolean;
  dataName?: string
}

interface RequiredModalOption {
  target: Selector | HTMLElement;
  navigation: Required<Navigation>;
  hookClass: Required<Hooks>;
  autoHide: boolean;
  autoFixed: boolean;
  dataName: string
}
