import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-collapsible-selection-list',
    templateUrl: './collapsible-selection-list.component.html',
    styleUrls: ['./collapsible-selection-list.component.scss'],
})
export class CollapsibleSelectionListComponent {
    @Input() public title: string = 'عنوان لیست';

    @Input() public selectList: string[] = [];

    public isCollapsed: boolean = false;
}
