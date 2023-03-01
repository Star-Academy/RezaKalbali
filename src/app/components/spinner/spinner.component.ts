import {Component} from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    public isActive: boolean = false;

    public constructor(spinnerService: SpinnerService) {
        spinnerService.initializeComponent(this);
    }

    public show(): void {
        this.isActive = true;
    }

    public hide(): void {
        this.isActive = false;
    }
}
