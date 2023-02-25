import {Injectable} from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerComponent!: SpinnerComponent;
    private spinners: Symbol[] = [];

    public initializeComponent(spinnerComponent: SpinnerComponent) {
        this.spinnerComponent = spinnerComponent;

        setInterval(() => {
            console.log(this.spinners);
        }, 1000);
    }

    public addSpinner(): Symbol {
        const symbol = Symbol('spinner');
        this.spinners.push(symbol);

        if (!this.spinnerComponent.isActive) {
            this.spinnerComponent.show();
        }

        return symbol;
    }

    public clearSpinner(symbol: Symbol): void {
        this.spinners = this.spinners.filter((symbolItem) => symbol !== symbolItem);

        if (this.spinners.length === 0) {
            this.spinnerComponent.hide();
        }
    }
}
