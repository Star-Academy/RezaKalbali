import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameService} from '../../../../services/game.service';

@Component({
    selector: 'app-collapsible-selection-list',
    templateUrl: './collapsible-selection-list.component.html',
    styleUrls: ['./collapsible-selection-list.component.scss'],
})
export class CollapsibleSelectionListComponent {
    @Input() public title: string = 'عنوان لیست';
    @Input() public selectList: string[] = [];
    @Input() public selectedItems: string[] = [];

    @Output() public changeActive: EventEmitter<string> = new EventEmitter();

    public constructor(gameService: GameService) {
        this.selectedItems = gameService.gameSearchParams.genre?.split(',') ?? [];
    }

    public isCollapsed: boolean = false;

    public handleChange(value: string): void {
        if (this.selectedItems.find((selected) => selected === value)) {
            this.selectedItems = this.selectedItems.filter((selected) => selected !== value);
        } else {
            this.selectedItems.push(value);
        }
        this.changeActive.emit(this.selectedItems.join(','));
    }
}
