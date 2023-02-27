import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../../../../services/game.service';
import {GameSearchParams} from '../../../../models/game-search-params';

@Component({
    selector: 'app-collapsible-selection-list',
    templateUrl: './collapsible-selection-list.component.html',
    styleUrls: ['./collapsible-selection-list.component.scss'],
})
export class CollapsibleSelectionListComponent implements OnInit {
    @Input() public title: string = 'عنوان لیست';
    @Input() public selectList: string[] = [];
    @Input() public selectedItems: string[] = [];
    @Input() public searchParamKey: keyof GameSearchParams | null = null;

    @Output() public changeActive: EventEmitter<string> = new EventEmitter();

    public constructor(private gameService: GameService) {}

    ngOnInit() {
        if (this.searchParamKey)
            this.selectedItems = this.gameService.gameSearchParams[this.searchParamKey]?.split(',') ?? [];
    }

    public isCollapsed: boolean = false;

    public handleChange(changeValue: string): void {
        if (this.selectedItems.find((selected) => selected === changeValue)) {
            this.selectedItems = this.selectedItems.filter((selected) => selected !== changeValue);
        } else {
            this.selectedItems.push(changeValue);
        }
        this.changeActive.emit(this.selectedItems.join(','));
    }
}
