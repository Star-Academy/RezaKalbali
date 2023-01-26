import { Component } from '@angular/core';
import { GameModel } from '../../models/game.model';
import { GamePayEnum } from '../../enums/game-pay.enum';
import gameList from '../../demo-data/game-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public free = GamePayEnum.FREE;
  public pay = GamePayEnum.PAY;
  public games: GameModel[] = gameList;
}
