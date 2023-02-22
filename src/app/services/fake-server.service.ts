import {Injectable} from '@angular/core';
import {gameList} from '../demo-data/game-list';

@Injectable({
    providedIn: 'root',
})
export class FakeServerService {
    public async handleRequest(url: string, requestInit: RequestInit): Promise<any> {
        return new Promise((resolve, reject) => {
            this.get('/search', url, requestInit, resolve, reject, this.search);
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
        if (request) resolve(gameList);
        else reject();
    }
}
