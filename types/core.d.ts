import { ClassName } from "./types/option";
declare const getElements: <T extends HTMLElement>(name: string, id: string, selector: ClassName | HTMLElement | HTMLElement[]) => T[] | undefined;
export { getElements };
