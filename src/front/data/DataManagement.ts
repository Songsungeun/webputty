export enum TypingType {
    ACCOUNT,
    PASSWORD,
    DATA
}

export class DataManagement {
    private _backSpaceLimit: number = 0;
    private _typingStatus: TypingType = TypingType.ACCOUNT;

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

}

