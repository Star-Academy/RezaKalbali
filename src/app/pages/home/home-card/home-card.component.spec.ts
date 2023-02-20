import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeCardComponent} from './home-card.component';
import {gameList} from '../../../demo-data/game-list';

describe('HomeCardComponent', () => {
    let component: HomeCardComponent;
    let fixture: ComponentFixture<HomeCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeCardComponent);
        component = fixture.componentInstance;
        component.game = gameList[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
