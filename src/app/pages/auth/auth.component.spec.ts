import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [RouterTestingModule, ReactiveFormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should login mode default value true', function () {
        expect(component.isLoginMode).toBeTrue();
    });

    it('should have invalid status for form', function () {
        expect(component.isSubmitted).toBeFalse();
        component.formSubmitHandler();
        fixture.detectChanges();

        expect(component.isSubmitted).toBeTrue();
        expect(component.userForm.valid).toBeFalse();
    });

    it('should call loginHandler', function () {
        spyOn(component, 'loginHandler');
        spyOn(component, 'registerHandler');

        component.formSubmitHandler();
        expect(component.isSubmitted).toBeTrue();
        expect(component.loginHandler).toHaveBeenCalled();
        expect(component.registerHandler).not.toHaveBeenCalled();
    });

    it('should not call registerHandler', function () {
        component.isLoginMode = false;
        fixture.detectChanges();
        spyOn(component, 'loginHandler');
        spyOn(component, 'registerHandler');

        component.formSubmitHandler();
        expect(component.isSubmitted).toBeTrue();
        expect(component.registerHandler).not.toHaveBeenCalled();
        expect(component.loginHandler).not.toHaveBeenCalled();
    });

    it('should call registerHandler', function () {
        component.isLoginMode = false;
        component.userForm.setValue({
            username: 'rezakalbali',
            password: '12345678',
            email: 'rezaka1001@gmail.com',
            repeatPassword: '12345678',
        });
        fixture.detectChanges();

        spyOn(component, 'loginHandler');
        spyOn(component, 'registerHandler');

        component.formSubmitHandler();
        expect(component.isSubmitted).toBeTrue();
        expect(component.registerHandler).toHaveBeenCalled();
        expect(component.loginHandler).not.toHaveBeenCalled();
    });
});
