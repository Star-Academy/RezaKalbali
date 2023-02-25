import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public constructor(private router: Router, public gameService: GameService) {}

    public async handleSearchChange(paramName: string, value: boolean | string): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {[paramName]: value}, queryParamsHandling: 'merge'});
    }
}
