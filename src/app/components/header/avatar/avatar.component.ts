import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DisplayType } from "../../../enums/display-type";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent {
  @ViewChild("avatar") public avatar!: ElementRef<HTMLDivElement>;

  public constructor(private authService: AuthService) {}

  public avatarDisplay: DisplayType = DisplayType.NONE;

  @HostListener("document:click", ["$event"])
  public onClickOutSide(event: any): void {
    if (!this.avatar.nativeElement.contains(event.target)) {
      this.avatarDisplay = DisplayType.NONE;
    }
  }

  public onClickAvatarIcon(): void {
    this.avatarDisplay =
      this.avatarDisplay === DisplayType.NONE
        ? DisplayType.BLOCK
        : DisplayType.NONE;
  }

  public onClickLogout(): void {
    this.authService.logOut().then();
  }
}
