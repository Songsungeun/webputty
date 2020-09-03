import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../css/term.css';
import { Socket } from 'socket.io-client';

// SECTION - Terminal
export default class Term {
    section = document.createElement('section');
    private _term: Terminal | null = null;
    private _sock: SocketIOClient.Socket | null = null;
    private pw: string = '';
    account: string = '';
    backSpackLimit: number = 0;
    status: TypingType = TypingType.ACCOUNT;

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

    setSocket(sock: SocketIOClient.Socket) {
        this._sock = sock;
    }

    getSocket() {
        return this._sock;
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

    addEventToTerminal() {
        let term = this.getTerm();

        let onKey = term.onKey(({ key }) => {
            if (key === '\u007F') {
                if (term.buffer.active.cursorX > this.backSpackLimit) {
                    term.write('\b \b');
                }
            }
            // TODO - key 별 동작 분기 처리
            switch (this.status) {
                case TypingType.ACCOUNT:
                    this.account += key;
                    term.write(key);
                    break;
                case TypingType.PASSWORD:
                    this.pw += key;
                    break;
                default:
                    term.write(key);
            }

        })
    }

    readyToConnect(ip: String) {
        let term = this.getTerm();
        let AccountTermString: string = 'Login as: ';
        this.backSpackLimit = AccountTermString.length;

        term.writeln(`connect to ${ip}`);
        term.write(AccountTermString);
        this.addEventToTerminal();
    }

    // NOTE - Func for SOCKET
    openSocket() {
        const socket: SocketIOClient.Socket = io();
        this.setSocket(socket);
    }
}
// !SECTION

enum TypingType {
    ACCOUNT,
    PASSWORD,
    DATA
}