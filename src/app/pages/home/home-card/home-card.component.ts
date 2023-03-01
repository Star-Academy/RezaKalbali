import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Game} from '../../../models/game';
@Component({
    selector: 'app-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnChanges {
    @Input() public game!: Game;
    @Input() public buttonIconClass!: string;
    @Input() public isSkeletonActive: boolean = false;

    public customPrice?: string;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('game') && this.game?.price) {
            this.customPrice = changes.game.currentValue.price.toLocaleString();
        }
    }
}
