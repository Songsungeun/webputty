import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

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
    }
}