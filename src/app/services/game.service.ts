import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {FakeFetchService} from './fake-fetch.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public games: Game[] = [];

    public constructor(private fakeFetchService: FakeFetchService) {
        this.fakeFetchService.get<Game[]>('/search', {}, 1000).then((response) => (this.games = response));
    }

    public async search(): Promise<void> {
        this.games = await this.fakeFetchService.get<Game[]>('/search', {}, 300);
    }
}
