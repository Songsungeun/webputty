import HeaderArea from './components/Header';
import TerminalSection from './components/Term';

import './css/main.css';
import { DataManagement } from './data/DataManagement';

export default class App {
    constructor(target: HTMLElement) {
        const dataState = new DataManagement();

        const Header = new HeaderArea({
            target,
            dataState,
            onClick: (ip: string) => {
                TermSection.readyToConnect(ip);
                dataState.ip = ip;
            }
        });
        const TermSection = new TerminalSection({ target, dataState });

    }
}