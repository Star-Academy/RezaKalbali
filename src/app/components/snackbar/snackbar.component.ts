import {Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';
import {SnackbarColor} from '../../enums/snackbar-color';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    public readonly INTERVAL_DELAY = 4_000;

    public interval: null | number = null;
    public message: string | null = null;
    public color: SnackbarColor | null = null;

    public constructor(snackbarService: SnackbarService) {
        snackbarService.initComponent(this);
    }

    public show(message: string, color?: SnackbarColor): void {
        this.clearTimeoutIfExist();

        this.message = message;
        this.color = color || null;

        this.interval = setTimeout(() => {
            this.message = null;
        }, this.INTERVAL_DELAY);
    }

    public onClose(): void {
        this.clearTimeoutIfExist();
        this.message = null;
        this.color = null;
    }

    public clearTimeoutIfExist(): void {
        if (this.interval) {
            clearTimeout(this.interval);
            this.interval = null;
        }
    }
}
