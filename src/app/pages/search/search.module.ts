import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SwitchComponent} from './components/switch/switch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [SearchComponent, SwitchComponent],
    imports: [CommonModule, HeaderModule, FooterModule, FormsModule, ReactiveFormsModule],
})
export class SearchModule {}
