import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('SearchBoxComponent', () => {
    let component: SearchBoxComponent;
    let fixture: ComponentFixture<SearchBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
