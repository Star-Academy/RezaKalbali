import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../../services/game.service';
import {GameSearchParams} from '../../../models/game-search-params';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public searchTerm: string = '';

    public constructor(private router: Router, public gameService: GameService) {
        this.searchTerm = gameService.gameSearchParams.search_term || '';
    }

    public async searchSubmitHandler(): Promise<void> {
        const queryParams: GameSearchParams = {search_term: this.searchTerm, page: 1};

        if (!this.gameService.gameSearchParams.order) {
            queryParams.order = 'popular';
        }

        await this.router.navigate(['/search'], {
            queryParams,
            queryParamsHandling: 'merge',
        });
    }
}
