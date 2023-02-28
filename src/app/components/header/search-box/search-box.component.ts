import {Component} from '@angular/core';
import {GameService} from '../../../services/game.service';
import {GameSearchParams} from '../../../models/game-search-params';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public searchTerm: string = '';

    public constructor(public gameService: GameService) {
        this.searchTerm = gameService.gameSearchParams.search_term || '';
    }

    public async searchSubmitHandler(): Promise<void> {
        const queryParams: GameSearchParams = {search_term: this.searchTerm, page: 1};

        if (!this.gameService.gameSearchParams.order) {
            queryParams.order = 'popular';
        }

        await this.gameService.handleGameSearch(queryParams);
    }
}
