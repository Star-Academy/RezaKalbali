import {Component} from '@angular/core';
import {GameService} from '../../../services/game.service';
import {GameSearchParams} from '../../../models/game-search-params';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    private readonly POPULAR = 'popular';
    public searchTerm: string = '';

    public constructor(private gameService: GameService) {
        this.searchTerm = gameService.gameSearchParams.searchTerm || '';
    }

    public async searchSubmitHandler(): Promise<void> {
        const queryParams: GameSearchParams = {
            searchTerm: this.searchTerm,
            page: 1,
            order: this.gameService.gameSearchParams.order ?? this.POPULAR,
        };

        await this.gameService.handleGameSearch(queryParams);
    }
}
