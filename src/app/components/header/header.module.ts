import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent],
  imports: [CommonModule],
})
export class HeaderModule {}
