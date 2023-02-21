import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-collapsible-selection-list',
    templateUrl: './collapsible-selection-list.component.html',
    styleUrls: ['./collapsible-selection-list.component.scss'],
})
export class CollapsibleSelectionListComponent {
    @Input() title: string = 'عنوان لیست';

    @Input() selectList: string[] = [];

    public isCollapsed: boolean = false;
}
