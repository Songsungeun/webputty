import LocalStorage from "../utils/LocalStorage";

export enum TypingType {
    ACCOUNT,
    PASSWORD,
    DATA
}

export class DataManagement extends LocalStorage {
    private _backSpaceLimit: number = 0;
    private _typingStatus: TypingType = TypingType.ACCOUNT;
    private _ip: string = '127.0.0.1';
    private _termSize: object | null = null;

    get backLimit(): number {
        return this._backSpaceLimit
    }
    set backLimit(limit: number) {
        this._backSpaceLimit = limit;
    }

    get typingState(): TypingType {
        return this._typingStatus;
    }
    set typingState(type: TypingType) {
        this._typingStatus = type;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(ip: string) {
        this._ip = ip;
    }

    get termSize(): object {
        return this._termSize as object;
    }

    set termSize(size: object) {
        this._termSize = size;
    }

}

