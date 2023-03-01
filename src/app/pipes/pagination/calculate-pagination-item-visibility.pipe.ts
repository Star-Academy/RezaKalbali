import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'calculatePaginationItemVisibility',
})
export class CalculatePaginationItemVisibilityPipe implements PipeTransform {
    transform(pageIndex: number, activePage: number, surroundingPages: number): boolean {
        return pageIndex + 1 <= activePage + surroundingPages && pageIndex + 1 >= activePage - surroundingPages;
    }
}
