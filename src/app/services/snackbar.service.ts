import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {SnackbarColor} from '../enums/snackbar-color';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarComponent!: SnackbarComponent;

  public initComponent(snackbarComponent: SnackbarComponent): void {
    this.snackbarComponent = snackbarComponent;
  }

  public show(message: string, color?: SnackbarColor): void {
    this.snackbarComponent.show(message, color);
  }
}
