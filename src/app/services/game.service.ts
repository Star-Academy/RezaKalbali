import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {FakeFetchService} from './fake-fetch.service';
import {ActivatedRoute} from '@angular/router';
import {GameSearchParams} from '../models/game-search-params';
import {Slide} from '../models/slide';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public games: Game[] = [];
    public slideShows: Slide[] = [];
    public searchedGames: Game[] = [];

    public constructor(private fakeFetchService: FakeFetchService, private route: ActivatedRoute) {
        this.getGames().then();
        this.getSlides().then();
        this.subscribeSearchParams().then();
    }

    public async search(searchParams: GameSearchParams): Promise<void> {
        const searchedGames = await this.fakeFetchService.get<Game[]>('/search', {
            body: JSON.stringify(searchParams),
        });

        this.searchedGames = [...searchedGames];
    }

    private async getGames(): Promise<void> {
        this.games = await this.fakeFetchService.get<Game[]>('/games', {});
    }

    private async getSlides(): Promise<void> {
        this.slideShows = await this.fakeFetchService.get<Slide[]>('/slides', {});
    }

    private async subscribeSearchParams(): Promise<void> {
        this.route.queryParams.subscribe(({search_term, order, only_free}: GameSearchParams) => {
            this.search({
                only_free,
                order,
                search_term,
            });
        });
    }
}
