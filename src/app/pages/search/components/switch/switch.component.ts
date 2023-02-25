import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Input() public title: string = '';

    @Output() public changeState: EventEmitter<boolean> = new EventEmitter<boolean>();

    public checkbox = new FormControl();

    constructor(public gameService: GameService) {}

    public handleChange(valueChangeEvent: Event): void {
        this.changeState.emit((valueChangeEvent.target as HTMLInputElement).checked);
    }
}
