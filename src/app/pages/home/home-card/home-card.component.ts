import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameModel } from '../../../models/game.model';
import { GamePayEnum } from '../../../enums/game-pay.enum';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnChanges {
  @Input() public game!: GameModel;
  @Input() public buttonIconClass!: string;

  public customPrice?: string;
  public GamePayEnum = GamePayEnum;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('game') && this.game?.price) {
      this.customPrice = changes.game.currentValue.price.toLocaleString();
    }
  }
}
