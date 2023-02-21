import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../models/game';
import {gameList} from '../../demo-data/game-list';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public games: Game[] = gameList;

    public constructor(private router: Router, private route: ActivatedRoute) {
        route.queryParams.subscribe((params) => console.log(params.only_free));
    }

    public async handleSwitchesOnChange(paramName: string, value: boolean): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {[paramName]: value}, queryParamsHandling: 'merge'});
    }
}
