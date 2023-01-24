import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  @Input() public img!: string;
  @Input() public name!: string;
  @Input() public pay!: 'pay' | 'free';
  @Input() public price?: number;
  @Input() public buttonIconClass!: string;
}
