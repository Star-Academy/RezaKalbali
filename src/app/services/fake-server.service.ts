import {Injectable} from '@angular/core';
import {gameList} from '../demo-data/game-list';
import {shuffle} from '../utils/array';
import {slideList} from '../demo-data/slide-list';
import {GameSearchParams} from '../models/game-search-params';
import {GamePay} from '../enums/game-pay';

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
        if (games.length > 50) games.length = 50;
        if (request) resolve(games);
        else reject();
    }

    private getGames(request: RequestInit, resolve: Function, reject: Function): void {
        const games = [...gameList];
        shuffle(games);
        games.length = 50;
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
