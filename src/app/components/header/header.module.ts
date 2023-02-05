import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NavComponent } from "./nav/nav.component";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    SearchBoxComponent,
    AvatarComponent,
    SideMenuComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule],
})
export class HeaderModule {}
