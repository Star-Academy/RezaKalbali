import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public img!: string;
  @Input() public pay!: 'free' | 'pay';
  @Input() public name!: string;
}
