import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../css/term.css';
import { Socket } from 'socket.io-client';

export default class Term {
    section = document.createElement('section');

    constructor(target: HTMLElement) {
        this.section.className = 'term_area';
        target.appendChild(this.section);
        this.render();
    }

    render() {
        const term = this.openTerminal();
        this.initTerminal(term);
        const socket = this.openSocket();
    }

    openTerminal() {
        const terminal = new Terminal();
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(this.section);
        fitAddon.fit();
        return terminal;
    }

    initTerminal(term: Terminal) {
        term.writeln('Welcome to Web Putty!');
        term.writeln('');
    }

    addEventtoTerminal(term: Terminal) {

    }

    openSocket() {
        const socket: SocketIOClient.Socket = io();
        return socket;
    }
}