class Negotiations {
    private _negotiations: Array<Negotiation> = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    getArray(): Array<Negotiation> {
        return [].concat(this._negotiations);
    }
}