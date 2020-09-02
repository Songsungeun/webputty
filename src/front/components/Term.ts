import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../css/term.css';

export default class Term {
    section = document.createElement('section');

    constructor(target: HTMLElement) {
        this.section.className = 'term_area';
        target.appendChild(this.section);
        this.render();
    }

    render() {
        const terminal = new Terminal();
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(this.section);
        fitAddon.fit();
        this.setSocket();
    }

    setSocket() {
        const socket: SocketIOClient.Socket = io();
    }
}