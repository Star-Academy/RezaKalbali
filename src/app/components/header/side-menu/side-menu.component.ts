import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent {
  @Input() public isOpen: boolean = false;

  @Output() public toggleOpen: EventEmitter<boolean> = new EventEmitter();
}
