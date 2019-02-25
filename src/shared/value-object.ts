export abstract class ValueObject {
    toJSON() {
        return JSON.stringify(this);
    }
}