import { Negotiations, Negotiation } from "../models/index";
import { NegotiationView, MessageView } from "../views/index";

export class NegotiationController {
    
    private date: JQuery;
    private amount: JQuery;
    private value: JQuery;

    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView("#negociacoesView", true);
    private _messageView = new MessageView("#mensagemView");

    constructor() {
        this.date = $("#data");
        this.amount = $("#quantidade");
        this.value = $("#valor")

        this._negotiationView.update(this._negotiations)
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this.date.val()!.toString().replace(/-/g, ",")),
            parseInt(this.amount.val()!.toString()),
            parseFloat(this.value.val()!.toString())
        );

        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso!")
    }
}