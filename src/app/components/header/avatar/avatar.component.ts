import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  public avatarDisplay: 'none' | 'block' = 'none';

  public onClickAvatar(): void {
    this.avatarDisplay = this.avatarDisplay === 'none' ? 'block' : 'none';
  }
}
