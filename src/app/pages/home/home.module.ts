import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { CardComponent } from './card/card.component';
import { ButtonModule } from '../../components/button/button.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [CommonModule, HeaderModule, ButtonModule, FooterModule],
})
export class HomeModule {}
