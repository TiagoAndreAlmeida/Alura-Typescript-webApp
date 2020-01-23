class Negotiation {

   constructor(private date: Date, private amount: number, private value: number) {}

   get Date() {
       return this.date;
   }

   get Amount() {
       return this.amount;
   }

   get Value() {
       return this.value;
   }

   get volume() {
       return this.amount * this.value;
   }
}