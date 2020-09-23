import { DataManagement } from "../data/DataManagement";

export default class SideNav {
    store: DataManagement;

    constructor({ target, dataState }: { target: HTMLElement, dataState: DataManagement }) {
        this.store = dataState;
        const section = document.createElement('section');
        section.classList.add('side_nav');
        target.appendChild(section);
        this.render();
    }

    render() {
        let history = this.store.findAllArray();

        // TODO - NAV 바에 SideItems 추가
    }


}

class SideItems {

    constructor($target: HTMLElement, nick: string, ip: string) {
        let section = document.createElement('div');
        const nickName = nick;
        const ipAddr = ip;
        $target.appendChild(section);
    }
}