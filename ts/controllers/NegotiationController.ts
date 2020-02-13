import { Negotiations, Negotiation } from "../models/index";
import { NegotiationView, MessageView } from "../views/index";

enum DayWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

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

    add(event: Event): void {
        event.preventDefault();

        let data = new Date(this.date.val()!.toString().replace(/-/g, ","));

        if(data.getDay() == DayWeek.Sunday || data.getDay() == DayWeek.Saturday) {
            this._messageView.update("Somente dias úteis!");
            return;
        }
        
        const negotiation = new Negotiation(
            data,
            parseInt(this.amount.val()!.toString()),
            parseFloat(this.value.val()!.toString())
        );

        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso!")
    }
}