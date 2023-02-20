import {TestBed} from '@angular/core/testing';

import {SnackbarService} from './snackbar.service';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';

describe('SnackbarService', () => {
    let service: SnackbarService;
    let snackbarComponentSpy: jasmine.SpyObj<SnackbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SnackbarService);
        snackbarComponentSpy = jasmine.createSpyObj<SnackbarComponent>('SnackbarComponent', ['show']);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call show snackbar for once', function () {
        service.initComponent(snackbarComponentSpy);
        service.show('any message');
        expect(snackbarComponentSpy.show.calls.count()).toBe(1);
    });
});
