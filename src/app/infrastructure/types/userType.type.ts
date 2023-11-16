export class NameObject {
    private text = "";
    static maxLength: number;
    static minLength: number;

    constructor() {};

    setName (name: string) {
        this.text = name;
    }

    static checkLength (name: string): boolean {
        return !(name.length > this.maxLength || name.length < this.minLength)
    }
}