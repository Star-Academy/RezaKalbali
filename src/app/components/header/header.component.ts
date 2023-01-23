import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public avatarDisplay: 'none' | 'block' = 'block';

  public onClickAvatar(): void {
    this.avatarDisplay = this.avatarDisplay === 'none' ? 'block' : 'none';
  }
}
