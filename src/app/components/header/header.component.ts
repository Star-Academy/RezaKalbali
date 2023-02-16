import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isOpenSideMenu: boolean = false;

    public constructor(public router: Router, public authService: AuthService) {}

    public async onClickLogInButton(): Promise<void> {
        await this.router.navigateByUrl('/auth');
    }

    public handleToggleOpen(state: boolean): void {
        this.isOpenSideMenu = state;
    }
}
