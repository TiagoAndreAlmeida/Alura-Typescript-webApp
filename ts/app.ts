const negotiationInstace = new NegotiationController();

document.querySelector(".form")
    .addEventListener("submit", negotiationInstace.add.bind(negotiationInstace))