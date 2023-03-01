import {TestBed} from '@angular/core/testing';

import {FakeFetchService} from './fake-fetch.service';

describe('FakeFetchService', () => {
    let service: FakeFetchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FakeFetchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
