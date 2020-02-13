export abstract class View <T> {

    protected _element: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar=false) {
    
        this._element = $(selector);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._element.html(template);
    }

    abstract template(model: T): string;
}