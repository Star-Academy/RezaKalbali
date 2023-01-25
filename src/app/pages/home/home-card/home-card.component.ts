import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnChanges {
  @Input() public img!: string;
  @Input() public name!: string;
  @Input() public pay!: 'pay' | 'free';
  @Input() public price?: number;
  public customPrice?: string;
  @Input() public buttonIconClass!: string;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('price') && this.price) {
      this.customPrice =
        (this.price + '')
          .split('')
          .reverse()
          .join('')
          .match(/.{1,3}/g)
          ?.reverse()
          .join('.') + ' تومان';
    }
  }
}
