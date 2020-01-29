class NegotiationController {
    
    private date: HTMLInputElement;
    private amount: HTMLInputElement;
    private value: HTMLInputElement;

    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView("#negociacoesView");

    constructor() {
        this.date = document.querySelector("#data");
        this.amount = document.querySelector("#quantidade");
        this.value = document.querySelector("#valor")

        this._negotiationView.update(this._negotiations)
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this.date.value.replace(/-/g, ",")),
            parseInt(this.amount.value),
            parseFloat(this.value.value)
        );

        this._negotiations.add(negotiation);
        
        this._negotiationView.update(this._negotiations);
    }
}