import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found.component';
import {RouterModule} from '@angular/router';
import {ButtonModule} from '../../components/button/button.module';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, RouterModule, ButtonModule],
})
export class NotFoundModule {}
