import { View } from './View';
import { Negotiations } from '../models/index';

export class NegotiationView extends View<Negotiations> {

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
                <td>${el.date.getDate()}/${el.date.getMonth()}/${el.date.getFullYear()}</td>
                <td>${el.amount}</td> 
                <td>${el.value}</td> 
                <td>${el.volume}</td> 
            </tr>
            `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        <script>alert('oi')</script>         
        `
    }
}