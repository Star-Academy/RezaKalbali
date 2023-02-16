import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {ButtonModule} from '../../components/button/button.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, ButtonModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
