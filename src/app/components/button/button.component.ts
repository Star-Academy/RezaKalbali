import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType} from '../../enums/button-type';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() public text: string = '';
    @Input() public isSmall: boolean = false;
    @Input() public iconClass: string = '';
    @Input() public isPrimary: boolean = false;
    @Input() public type: ButtonType = ButtonType.BUTTON;
    @Input() public loading: boolean = false;

    @Output() public buttonClick: EventEmitter<void> = new EventEmitter();
}
