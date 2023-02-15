import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SnackbarComponent} from './snackbar.component';
import {SnackbarColor} from '../../enums/snackbar-color';
import {Component} from '@angular/core';

describe('SnackbarComponent', () => {
    let component: SnackbarComponent;
    let fixture: ComponentFixture<SnackbarComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SnackbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render snackbar (by default values)', function () {
        testDom();
    });

    it('should show success message style', function () {
        component.show('something', SnackbarColor.SUCCESS);

        testDom(true, SnackbarColor.SUCCESS, 'something');
    });

    it('should show error message style', function () {
        component.show('something', SnackbarColor.ERROR);

        testDom(true, SnackbarColor.ERROR, 'something');
    });

    it('should show info message style', function () {
        component.show('something', SnackbarColor.INFO);

        testDom(true, SnackbarColor.INFO, 'something');
    });

    it('should close snackbar by click', function () {
        component.show('something', SnackbarColor.INFO);
        component.onClose();

        testDom(true);
    });

    it('should close snackbar after delay', fakeAsync(function () {
        component.show('something');
        fixture.detectChanges();

        tick(component.INTERVAL_DELAY);
        testDom(true);
    }));

    function testDom(detectChanges: boolean = false, snackbarColor?: SnackbarColor, message?: string): void {
        if (detectChanges) fixture.detectChanges();

        const snackbar = host.querySelector('.snackbar');
        expect(snackbar).toBeTruthy();

        if (snackbarColor) expect(snackbar?.classList).toContain(snackbarColor);

        if (message) {
            expect(snackbar?.classList).toContain('active');
            testSnackbarMessage(message);
            testSnackbarCloseIcon();
        } else {
            expect(snackbar?.classList).not.toContain('active');
        }
    }

    function testSnackbarMessage(snackbarMessage: string): void {
        const message = host.querySelector('.snackbar .message');

        expect(message).toBeTruthy();
        if (snackbarMessage) expect(message?.textContent).toContain(snackbarMessage);
    }

    function testSnackbarCloseIcon(): void {
        const icon = host.querySelector('.snackbar i');
        expect(icon).toBeTruthy();
        expect(icon?.className).toEqual('fa-regular fa-times');
    }
});
