import {Component} from '@angular/core';
import {GameService} from '../../services/game.service';
import {SpinnerService} from '../../services/spinner.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public constructor(public gameService: GameService, public spinnerService: SpinnerService) {}

    public async handlePageChange(pageNumber: number) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        await this.gameService.handleSearchGame('page', pageNumber);
    }
}
