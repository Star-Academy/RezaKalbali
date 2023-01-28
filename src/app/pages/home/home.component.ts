import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { GamePay } from '../../enums/game-pay';
import { gameList } from '../../demo-data/game-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public GamePayEnum = GamePay;
  public games: Game[] = gameList;
}
