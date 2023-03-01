import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatePaginationItemVisibilityPipe} from './calculate-pagination-item-visibility.pipe';

@NgModule({
    declarations: [CalculatePaginationItemVisibilityPipe],
    exports: [CalculatePaginationItemVisibilityPipe],
    imports: [CommonModule],
})
export class PaginationPipesModule {}
