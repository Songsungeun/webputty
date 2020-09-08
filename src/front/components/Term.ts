import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../css/term.css';
import { Socket } from 'socket.io-client';
import EventList from '../utils/EventList';

// SECTION - Terminal
export default class Term {
    section = document.createElement('section');
    private _term: Terminal | null = null;
    eventList = new EventList();

    constructor(target: HTMLElement) {
        this.section.className = 'term_area';

        target.appendChild(this.section);
        this.render();
    }

    render() {
        this.openTerminal();
        this.initTerminal();
    }

    // ANCHOR - get, set (Terminal, Socket)
    setTerm(term: Terminal) {
        this._term = term;
    }

    getTerm(): Terminal {
        return this._term as Terminal;
    }

    // NOTE - Func for Terminal
    openTerminal() {
        const terminal = new Terminal();
        this.setTerm(terminal);
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(this.section);
        fitAddon.fit();
    }

    initTerminal() {
        let term = this.getTerm();
        term.writeln('Welcome to Web Putty! - by.Songsungeun');
        term.writeln('');
    }

    addEvent() {
        let term = this.getTerm();
        this.eventList.termEvent.setOnKey(term);



    }

    readyToConnect(ip: String) {
        let term = this.getTerm();
        let AccountTermString: string = 'Login as: ';
        this.backSpaceLimit = AccountTermString.length;

        term.writeln(`connect to ${ip}`);
        term.write(AccountTermString);
        this.addEvent();
    }


}
// !SECTION