import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {FakeFetchService} from './fake-fetch.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GameSearchParams} from '../models/game-search-params';
import {Slide} from '../models/slide';
import {SpinnerService} from './spinner.service';
import {GameSearchResponse} from '../models/game-search-response';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public games: Game[] = [];
    public slideShows: Slide[] = [];
    public searchedGames: Game[] = [];
    public gameSearchParams: GameSearchParams = {
        onlyFree: 'false',
        searchTerm: '',
        order: 'popular',
    };
    public pageCount: number = 1;
    public resultCount: number = 0;

    public constructor(
        private fakeFetchService: FakeFetchService,
        private route: ActivatedRoute,
        private spinnerService: SpinnerService,
        private router: Router
    ) {
        this.subscribeSearchParams().then();
    }

    public async search(gameSearchParams: GameSearchParams): Promise<void> {
        const spinner = this.spinnerService.addSpinner();

        const searchData = await this.fakeFetchService.get<GameSearchResponse>('/search', {
            body: JSON.stringify(gameSearchParams),
        });

        this.searchedGames = searchData.games;
        this.pageCount = searchData.pageCount;
        this.resultCount = searchData.resultCount;

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

    public async handleGameSearch(gameSearchParams: Partial<GameSearchParams>): Promise<void> {
        const queryParams: GameSearchParams = {...gameSearchParams};
        if (!queryParams.page) queryParams.page = 1;
        await this.router.navigate(['/search'], {queryParams, queryParamsHandling: 'merge'});
    }

    private async subscribeSearchParams(): Promise<void> {
        this.route.queryParams.subscribe((gameSearchParams: GameSearchParams) => {
            this.search(gameSearchParams);
            this.gameSearchParams = {...gameSearchParams, page: parseInt(gameSearchParams.page + '')};
        });
    }
}
