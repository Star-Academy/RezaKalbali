import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public constructor(private router: Router, private route: ActivatedRoute, public gameService: GameService) {
        route.queryParams.subscribe((params) => console.log(params.only_free));
    }

    public async handleSwitchesOnChange(paramName: string, value: boolean): Promise<void> {
        await this.router.navigate(['/search'], {queryParams: {[paramName]: value}, queryParamsHandling: 'merge'});
    }
}
