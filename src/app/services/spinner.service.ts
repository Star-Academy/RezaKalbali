import {Injectable} from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private spinnerComponent!: SpinnerComponent;
    private spinners: Symbol[] = [];
    public state: boolean = false;

    public initializeComponent(spinnerComponent: SpinnerComponent): void {
        this.spinnerComponent = spinnerComponent;
    }

    public addSpinner(): Symbol {
        const symbol = Symbol('spinner');
        this.spinners.push(symbol);

        if (!this.spinnerComponent.isActive) {
            this.spinnerComponent.show();
            this.state = true;
        }

        return symbol;
    }

    public clearSpinner(symbol: Symbol): void {
        this.spinners = this.spinners.filter((symbolItem) => symbol !== symbolItem);

        if (this.spinners.length === 0) {
            this.spinnerComponent.hide();
            this.state = false;
        }
    }
}
