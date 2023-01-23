import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public text: string = '';
  @Input() public small: boolean = false;

  @Input() public iconClass: string = '';

  @Output() public buttonClick: EventEmitter<void> = new EventEmitter();

  public ngOnInit(): void {
    console.log(this.small);
  }
}
