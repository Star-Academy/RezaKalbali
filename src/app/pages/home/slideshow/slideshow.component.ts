import { Component } from '@angular/core';

type Slide = {
  src: string;
  alt: string;
};
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  public slides: Array<Slide> = [
    { src: 'assets/images/slideshow/cp.jpg', alt: 'cyber punk' },
    { src: 'assets/images/slideshow/csgo.jpg', alt: 'counter strike GO' },
    { src: 'assets/images/slideshow/dota2.jpg', alt: 'dota 2' },
    { src: 'assets/images/slideshow/warzone.jpg', alt: 'war zone 2' },
  ];
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
    this.activeSlide = index;
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