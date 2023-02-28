import {Injectable} from '@angular/core';
import {gameList} from '../demo-data/game-list';
import {shuffle} from '../utils/array';
import {slideList} from '../demo-data/slide-list';
import {GameSearchParams} from '../models/game-search-params';
import {GamePay} from '../enums/game-pay';
import {Game} from '../models/game';

@Injectable({
    providedIn: 'root',
})
export class FakeServerService {
    public async handleRequest(url: string, requestInit: RequestInit): Promise<any> {
        return new Promise((resolve, reject) => {
            this.get('/search', url, requestInit, resolve, reject, this.search.bind(this));
            this.get('/games', url, requestInit, resolve, reject, this.getGames.bind(this));
            this.get('/slides', url, requestInit, resolve, reject, this.getSlides.bind(this));
        });
    }

    private get(
        route: string,
        url: string,
        requestInit: RequestInit,
        resolve: Function,
        reject: Function,
        controller: Function
    ): void {
        if (url === route && requestInit.method?.toLowerCase() === 'get') {
            controller(requestInit, resolve, reject);
        }
    }

    private search(request: RequestInit, resolve: Function, reject: Function): void {
        const searchParams = this.getBodyFromRequest<GameSearchParams>(request);
        let games = [...gameList];
        const gamePerPage = 10;

        if (searchParams.only_free === 'true') {
            games = games.filter((game) => {
                return game.pay === GamePay.FREE;
            });
        }

        if (searchParams.search_term) {
            games = games.filter((game) => {
                return game.title.toLowerCase().match(`.*${searchParams.search_term?.toLowerCase()}.*` || '.*.*');
            });
        }

        if (searchParams.order) {
            if (searchParams.order === 'cheapest')
                games = games.sort((gameA, gameB) => {
                    return (gameA?.price || 0) - (gameB.price || 0);
                });
            else if (searchParams.order === 'expensive')
                games = games.sort((gameA, gameB) => {
                    return (gameB.price || 0) - (gameA?.price || 0);
                });
            else if (searchParams.order === 'newest')
                games = games.sort((gameA, gameB) => {
                    return new Date(gameB.release_date).getTime() - new Date(gameA.release_date).getTime();
                });
        }

        if (searchParams.genre) {
            const genres = searchParams.genre.split(',');

            games = games.filter((game) => {
                return genres.includes(game.genre);
            });
        }

        if (searchParams.platform) {
            const platforms = searchParams.platform.split(',');

            games = games.filter((game) => {
                return platforms.includes(game.platform);
            });
        }

        if (searchParams.developer) {
            const developers = searchParams.developer.split(',');

            games = games.filter((game) => {
                return developers.includes(game.developer);
            });
        }

        const resultCount = games.length;
        const pageCount = Math.ceil(resultCount / gamePerPage);

        if (searchParams.page && pageCount > 1) {
            games = this.sliceGamesForPages(gamePerPage, searchParams.page, games);
        } else if (games.length > gamePerPage) {
            games.length = gamePerPage;
        }

        if (request) resolve({games, resultCount, pageCount});
        else reject();
    }

    private sliceGamesForPages(gamePerPage: number, searchParamsPage: number, games: Game[]): Game[] {
        const start = gamePerPage * searchParamsPage - gamePerPage;
        const end = gamePerPage * searchParamsPage;
        return games.slice(start, end);
    }

    private getGames(request: RequestInit, resolve: Function, reject: Function): void {
        const games = [...gameList];
        shuffle(games);
        games.length = 6;
        if (request) resolve(games);
        else reject();
    }

    private getSlides(request: RequestInit, resolve: Function, reject: Function): void {
        const slides = [...slideList];
        if (request) resolve(slides);
        else reject();
    }

    private getBodyFromRequest<T>(request: RequestInit): T {
        return JSON.parse(request.body as string) as T;
        // return {} as T;
    }
}
