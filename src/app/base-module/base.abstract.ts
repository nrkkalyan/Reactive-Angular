export abstract class OnBase {
    // public signature: string;
    // public title: string;
    public defination: string;
    private _signature: string;
    private _title: string;
    constructor() {

    }

    public get signature(): string {
        return this._signature;
    }
    public set signature(v: string) {
        this._signature = v;
    }

    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
    }

    public base(): string {
        return "Hello";
    }

}
