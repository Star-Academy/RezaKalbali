import {Component} from '@angular/core';
import {GamePay} from '../../enums/game-pay';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public GamePayEnum = GamePay;

    public constructor(public gameService: GameService) {}
}
