import {Component} from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    public isActive: boolean = false;

    constructor(spinnerService: SpinnerService) {
        spinnerService.initializeComponent(this);
    }

    public show() {
        this.isActive = true;
    }

    public hide() {
        this.isActive = false;
    }
}
