import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { ButtonModule } from '../../components/button/button.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HomeCardComponent } from './home-card/home-card.component';
import { CardModule } from '../../components/card/card.module';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    HomeCardComponent,
    SlideshowComponent,
  ],
  imports: [CommonModule, HeaderModule, ButtonModule, FooterModule, CardModule],
})
export class HomeModule {}
