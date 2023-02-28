import {Component} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public constructor(public gameService: GameService) {}
}
