import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination.component';
import {PaginationPipesModule} from '../../pipes/pagination/pagination-pipes.module';

@NgModule({
    declarations: [PaginationComponent],
    exports: [PaginationComponent],
    imports: [CommonModule, PaginationPipesModule],
})
export class PaginationModule {}
