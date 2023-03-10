import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SwitchComponent} from './components/switch/switch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from '../home/home.module';
import {CollapsibleSelectionListComponent} from './components/collapsible-selection-list/collapsible-selection-list.component';
import {ArrayPipesModule} from '../../pipes/array-pipes/array-pipes.module';
import {PaginationModule} from '../../components/pagination/pagination.module';

@NgModule({
    declarations: [SearchComponent, SwitchComponent, CollapsibleSelectionListComponent],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule,
        ArrayPipesModule,
        PaginationModule,
    ],
})
export class SearchModule {}
