import { NegotiationController } from "./controllers/NegotiationController";

const negotiationInstace = new NegotiationController();
$(".form").submit(negotiationInstace.add.bind(negotiationInstace));