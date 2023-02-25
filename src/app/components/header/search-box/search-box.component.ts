import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../../services/game.service';

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
        await this.router.navigate(['/search'], {
            queryParams: {search_term: this.searchTerm, order: 'popular'},
            queryParamsHandling: 'merge',
        });
    }
}
