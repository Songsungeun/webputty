import HeaderArea from './components/Header';
import TerminalSection from './components/Term';
import SideNav from './components/SideNav';

import './css/main.css';
import { DataManagement } from './data/DataManagement';

export default class App {
    constructor(target: HTMLElement) {
        const dataState = new DataManagement();

        const Header = new HeaderArea({
            target,
            dataState,
            onClick: (ip: string, isSave: boolean, nick: string) => {
                TermSection.readyToConnect(ip);

                // History 값 기억을 위해 LocalStorage에 저장
                let title: string = isSave ? nick : `noname_${dataState.getLength()}`;
                dataState.ip = ip;
                dataState.setItem(title, ip);
            }
        });

        const Sidebar = new SideNav({ target, dataState });
        const TermSection = new TerminalSection({ target, dataState });

    }
}