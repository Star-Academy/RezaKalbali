import {Injectable} from '@angular/core';
import {FakeServerService} from './fake-server.service';

@Injectable({
    providedIn: 'root',
})
export class FakeFetchService {
    private delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    constructor(private fakeServerService: FakeServerService) {}

    public async get<T>(url: string, requestInit: RequestInit, delay?: number): Promise<T> {
        const req: RequestInit = {
            ...requestInit,
            method: 'GET',
        };

        await this.delay(delay ?? 0);
        return (await this.fakeServerService.handleRequest(url, req)) as Promise<T>;
    }
}
