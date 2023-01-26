import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @ViewChild('avatar') public avatar!: ElementRef<HTMLDivElement>;

  public avatarDisplay: 'none' | 'block' = 'none';

  @HostListener('document:click', ['$event'])
  public clickOut(event: any): void {
    if (!this.avatar.nativeElement.contains(event.target)) {
      this.avatarDisplay = 'none';
    }
  }

  public onClickAvatar(): void {
    this.avatarDisplay = this.avatarDisplay === 'none' ? 'block' : 'none';
  }
}
