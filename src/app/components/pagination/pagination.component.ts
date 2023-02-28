import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input() public pageCount: number = 1;
    @Input() public activePage: number = 1;

    public Array = Array;

    @Output() public changeActivePage: EventEmitter<number> = new EventEmitter();
}
