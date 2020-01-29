class NegotiationView {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(model: Negotiations): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: Negotiations): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.getArray().map(el => `
            <tr>
               <td>${el.Date.getDate()}/${el.Date.getMonth()}/${el.Date.getFullYear()}</td>
               <td>${el.Amount}</td> 
               <td>${el.Value}</td> 
               <td>${el.volume}</td> 
            </tr>
            `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}