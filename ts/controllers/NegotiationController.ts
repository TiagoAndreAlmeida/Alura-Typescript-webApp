class NegotiationController {
    
    private date: HTMLInputElement;
    private amount: HTMLInputElement;
    private value: HTMLInputElement;

    constructor() {
        this.date = document.querySelector("#data");
        this.amount = document.querySelector("#quantidade");
        this.value = document.querySelector("#valor")
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this.date.value.replace(/-/g, ",")),
            parseInt(this.amount.value),
            parseFloat(this.value.value)
        );

        console.log(negotiation);
    }
}