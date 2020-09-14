import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../css/term.css';
import { Socket } from 'socket.io-client';
import EventList from '../utils/EventList';
import { DataManagement } from '../data/DataManagement';

// SECTION - Terminal
export default class Term {
    section = document.createElement('section');
    private _term: Terminal | null = null;
    eventList: EventList;
    dState: DataManagement;

    constructor({ target, dataState }: { target: HTMLElement, dataState: DataManagement }) {
        this.dState = dataState;
        this.eventList = new EventList(dataState);

        this.section.className = 'term_area';
        target.appendChild(this.section);
        this.render();
    }

    render() {
        this.eventList.sockEvent.openSocket();
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
        this.dState.termSize = fitAddon.proposeDimensions(); // server에 terminal Size 알려주기 위해 별도 저장
        fitAddon.fit();
        terminal.focus();
    }

    initTerminal() {
        let term = this.getTerm();
        term.writeln('Welcome to Web Putty! - by.Songsungeun');
        term.writeln('');
    }

    addEvent() {
        let term = this.getTerm();
        let sock = this.eventList.sockEvent.socket;

        this.eventList.termEvent.setOnKey(term, sock, this.dState.termSize);

        this.eventList.sockEvent.addOnEvent('res_buff', (data: string) => {
            term.write(data);
            return 0;
        });



    }

    readyToConnect(ip: string) {
        let term = this.getTerm();
        let AccountTermString: string = 'Login as: ';
        this.dState.backLimit = AccountTermString.length;

        term.writeln(`connect to ${ip}`);
        term.write(AccountTermString);
        this.addEvent();
    }


}
// !SECTION