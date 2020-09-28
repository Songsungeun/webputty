import { DataManagement } from "../data/DataManagement";

export default class SideNav {
    store: DataManagement;
    section: null | HTMLElement;

    constructor({ target, dataState }: { target: HTMLElement, dataState: DataManagement }) {
        this.store = dataState;
        this.section = document.createElement('section');
        this.section.classList.add('side_nav');
        target.appendChild(this.section);
        this.render();
    }

    render() {
        let history = this.store.findAll();

        // TODO - NAV 바에 SideItems 추가
        const historyWrap = document.createElement('ul');
        historyWrap.classList.add('iplist');

        for (let key in history) {
            new SideItem({
                $target: historyWrap,
                nick: key,
                ip: history[key]
            })
        }

        // TODO - add Event
        this.section?.appendChild(historyWrap);
    }


}

class SideItem {
    public nickName: string
    public ip: string
    public section: HTMLLIElement

    constructor({ $target, nick, ip }: { $target: HTMLUListElement, nick: string, ip: string }) {
        this.section = document.createElement('li');
        this.section.className = 'site_item';

        this.nickName = nick;
        this.ip = ip;

        this.render();
        $target.appendChild(this.section);
    }

    render() {
        const link = document.createElement('a');
        link.classList.add('ipitem');
        link.href = '#'
        link.dataset.addr = this.ip;
        link.innerText = this.nickName.includes('noname') ? this.ip : this.nickName;
        this.section.appendChild(link);
    }
}