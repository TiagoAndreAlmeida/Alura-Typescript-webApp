import { Negotiation } from './Negotiation';

export class Negotiations {
    private _negotiations: Array<Negotiation> = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    getArray(): Array<Negotiation> {
        return ([] as Negotiation[]).concat(this._negotiations);
    }
}