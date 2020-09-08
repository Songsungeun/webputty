import { IDisposable, Terminal } from "xterm";
import { TypingType, DataManagement } from "../data/DataManagement";

const data: DataManagement = new DataManagement();

// SECTION - EventList
export default class EventList {

    termEvent = new TerminalEvent();

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

    setOnKey(term: Terminal) {
        this.termOnKey = term.onKey(({ key, domEvent }) => {

            if (key === '\u007F') {
                if (term.buffer.active.cursorX > data.backLimit) {
                    term.write('\b \b');
                }
            }
            if (domEvent.key === 'Enter') {
                if (data.typingState === TypingType.ACCOUNT) {
                    data.typingState = TypingType.PASSWORD;
                }
                if (data.typingState === TypingType.PASSWORD) {

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
class sockEvent {
    private _socket: SocketIOClient.Socket = io();

    get socket(): SocketIOClient.Socket {
        return this._socket;
    }

    openSocket() {

    }
}

// !SECTION