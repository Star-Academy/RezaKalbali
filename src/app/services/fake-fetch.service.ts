import {Injectable} from '@angular/core';
import {FakeServerService} from './fake-server.service';

@Injectable({
    providedIn: 'root',
})
export class FakeFetchService {
    private delay(): Promise<void> {
        const randomDelay = Math.trunc(Math.random() * 500);

        return new Promise((resolve) => setTimeout(resolve, randomDelay));
    }

    constructor(private fakeServerService: FakeServerService) {}

    public async get<T>(url: string, requestInit: RequestInit): Promise<T> {
        const req: RequestInit = {
            ...requestInit,
            method: 'GET',
        };
        const start = performance.now();
        await this.delay();
        const response = (await this.fakeServerService.handleRequest(url, req)) as Promise<T>;
        const end = performance.now();
        console.info(`Execution time for '${url}': ${end - start} ms`);
        return response;
    }
}
