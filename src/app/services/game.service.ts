import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {FakeFetchService} from './fake-fetch.service';
import {ActivatedRoute} from '@angular/router';
import {GameSearchParams} from '../models/game-search-params';
import {Slide} from '../models/slide';
import {SpinnerService} from './spinner.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public games: Game[] = [];
    public slideShows: Slide[] = [];
    public searchedGames: Game[] = [];
    public gameSearchParams: GameSearchParams = {
        only_free: 'false',
        search_term: '',
        order: 'popular',
    };

    public constructor(
        private fakeFetchService: FakeFetchService,
        private route: ActivatedRoute,
        private spinnerService: SpinnerService
    ) {
        this.subscribeSearchParams().then();
    }

    public async search(gameSearchParams: GameSearchParams): Promise<void> {
        const spinner = this.spinnerService.addSpinner();

        const searchedGames = await this.fakeFetchService.get<Game[]>('/search', {
            body: JSON.stringify(gameSearchParams),
        });

        this.searchedGames = [...searchedGames];

        this.spinnerService.clearSpinner(spinner);
    }

    public async getGames(): Promise<void> {
        const spinner = this.spinnerService.addSpinner();

        this.games = await this.fakeFetchService.get<Game[]>('/games', {});
        this.spinnerService.clearSpinner(spinner);
    }

    public async getSlides(): Promise<void> {
        const spinner = this.spinnerService.addSpinner();

        this.slideShows = await this.fakeFetchService.get<Slide[]>('/slides', {});
        this.spinnerService.clearSpinner(spinner);
    }

    private async subscribeSearchParams(): Promise<void> {
        this.route.queryParams.subscribe((gameSearchParams: GameSearchParams) => {
            this.search(gameSearchParams);
            this.gameSearchParams = gameSearchParams;
        });
    }
}
