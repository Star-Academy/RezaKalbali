import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
    @ViewChild('avatar') public avatar!: ElementRef<HTMLDivElement>;

    public constructor(private authService: AuthService) {}

    public isAvatarVisible: boolean = false;

    @HostListener('document:click', ['$event'])
    public onClickOutSide(clickEvent: MouseEvent): void {
        if (!this.avatar.nativeElement.contains(clickEvent.target as Node)) {
            this.isAvatarVisible = false;
        }
    }

    public onClickAvatarIcon(): void {
        this.isAvatarVisible = !this.isAvatarVisible;
    }

    public async onClickLogout(): Promise<void> {
        await this.authService.logOut();
    }
}
