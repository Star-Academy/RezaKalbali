import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() public imageSource: string = '';
    @Input() public title: string = '';
    @Input() public description?: string;
    @Input() public payment: string = '';
    @Input() public tags: string[] = [];
    @Input() public skeletonIsActive: boolean = false;
}
