import HeaderArea from './components/Header';
import TerminalSection from './components/Term';
import './css/main.css';

export default class App {
    constructor(target: HTMLElement) {
        const Header = new HeaderArea(target);
        const TermSection = new TerminalSection(target);

    }
}