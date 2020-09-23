import HeaderArea from './components/Header';
import TerminalSection from './components/Term';
import SideNav from './components/SideNav';

import './css/main.css';
import { DataManagement } from './data/DataManagement';
import LocalStorage from './utils/LocalStorage';

export default class App {
    constructor(target: HTMLElement) {
        const dataState = new DataManagement();
        const storage = new LocalStorage();

        const Header = new HeaderArea({
            target,
            dataState,
            onClick: (ip: string) => {
                TermSection.readyToConnect(ip);
                dataState.ip = ip;
            }
        });

        const Sidebar = new SideNav({ target, dataState });
        const TermSection = new TerminalSection({ target, dataState });

    }
}