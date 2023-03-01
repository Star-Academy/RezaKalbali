import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isOpenSideMenu: boolean = false;

    public constructor(public authService: AuthService) {}

    public handleToggleOpen(state: boolean): void {
        this.isOpenSideMenu = state;
    }
}
