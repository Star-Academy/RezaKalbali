import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public img!: string;
  @Input() public title!: string;
  @Input() public description?: string;
  @Input() public buttonIconClass: string = '';
  @Input() public buttonText: string = '';
  @Input() public isFree: boolean = false;
}
