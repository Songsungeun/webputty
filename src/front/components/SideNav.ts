import { DataManagement } from "../data/DataManagement";

export default class SideNav {
    section = document.createElement('section');

    constructor({ target, dataState }: { target: HTMLElement, dataState: DataManagement }) {
        this.section.classList.add('side_nav');
        target.appendChild(this.section);
        this.render();
    }

    render() {

    }
}