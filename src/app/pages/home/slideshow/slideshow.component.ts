import {Component} from '@angular/core';
import {slideList} from '../../../demo-data/slide-list';
import {Slide} from '../../../models/slide';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
    public slides: Slide[] = slideList;
    public activeSlide: number = 0;
    public interval!: number;

    public constructor() {
        this.interval = setInterval(() => {
            if (this.activeSlide === this.slides.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
    public activeSlideshowHandler(index: number): void {
        clearInterval(this.interval);

        if (index > this.slides.length - 1) {
            this.activeSlide = 0;
        } else if (index < 0) {
            this.activeSlide = this.slides.length - 1;
        } else {
            this.activeSlide = index;
        }

        this.interval = setInterval(() => {
            if (this.activeSlide === this.slides.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
    public onMouseEnter(): void {
        clearInterval(this.interval);
    }
    public onMouseLeave(): void {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.activeSlide === this.slides.length - 1) this.activeSlide = 0;
            else this.activeSlide++;
        }, 3500);
    }
}
