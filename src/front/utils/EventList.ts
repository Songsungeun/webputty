import { IDisposable, Terminal } from "xterm";
import { TypingType, DataManagement } from "../data/DataManagement";

let data: DataManagement;

// SECTION - EventList
export default class EventList {

    constructor(dataState: DataManagement) {
        data = dataState;
    }
    termEvent = new TerminalEvent();
    sockEvent = new SockEvent();

}

// ANCHOR - Terminal Event
class TerminalEvent {
    termOnKey: IDisposable | null = null;
    private _account: string = ''
    private _pw: string = ''

    get auth_account(): string {
        return this._account;
    }

    get auth_pw(): string {
        return this._pw;
    }

    setOnKey(term: Terminal, sock: SocketIOClient.Socket) {
        this.termOnKey = term.onKey(({ key, domEvent }) => {

            if (key === '\u007F') {
                if (term.buffer.active.cursorX > data.backLimit) {
                    term.write('\b \b');
                }
            }
            if (domEvent.key === 'Enter') {
                console.log(data.typingState);
                if (data.typingState === TypingType.ACCOUNT) {
                    data.typingState = TypingType.PASSWORD;
                    term.writeln('');
                    term.write('Password: ')
                    return;
                }

                if (data.typingState === TypingType.PASSWORD) {
                    console.log(data.ip, this._account, this._pw);
                    sock.emit('req_auth', { id: this._account, ip: data.ip, pw: this._pw });
                }
            }

            switch (data.typingState) {
                case TypingType.ACCOUNT:
                    this._account += key;
                    term.write(key);
                    break;
                case TypingType.PASSWORD:
                    this._pw += key;
                    break;
                default:
                    term.write(key);
            }

        })
    }
}

// ANCHOR - Socket Event
class SockEvent {
    private _socket: SocketIOClient.Socket | null = null;

    get socket(): SocketIOClient.Socket {
        if (!this._socket) throw new Error('socket is not opened');
        return this._socket;
    }
    set socket(sock: SocketIOClient.Socket) {
        this._socket = sock;
    }

    openSocket() {
        this.socket = io();
    }

    addEvent(evName: string, action: (data: any) => {}) {
        if (!this._socket) throw new Error('socket is not opened');
        this._socket.on(evName, action);
    }
}

// !SECTION