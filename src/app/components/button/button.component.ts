import { Component, EventEmitter, Input, Output } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text: string = '';
  @Input() public isSmall: boolean = false;
  @Input() public iconClass: string = '';
  @Output() public buttonClick: EventEmitter<void> = new EventEmitter();
}
