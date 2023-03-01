import {Component} from '@angular/core';
import {GameService} from '../../../services/game.service';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
    public activeSlide: number = 0;
    public interval!: number;

    public constructor(public gameService: GameService) {
        this.interval = setInterval(() => {
            if (this.activeSlide === this.gameService.slideShows.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
    public activeSlideshowHandler(index: number): void {
        clearInterval(this.interval);

        if (index > this.gameService.slideShows.length - 1) {
            this.activeSlide = 0;
        } else if (index < 0) {
            this.activeSlide = this.gameService.slideShows.length - 1;
        } else {
            this.activeSlide = index;
        }

        this.interval = setInterval(() => {
            if (this.activeSlide === this.gameService.slideShows.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
    public onMouseEnter(): void {
        clearInterval(this.interval);
    }
    public onMouseLeave(): void {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.activeSlide === this.gameService.slideShows.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
}
