import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent {
  @ViewChild("sidebar") public sidebar!: ElementRef<HTMLDivElement>;

  @Input() public isOpen: boolean = false;

  @Output() public toggleOpen: EventEmitter<boolean> = new EventEmitter();

  @HostListener("document:click", ["$event"])
  public clickOut(event: any): void {
    if (!this.sidebar.nativeElement.contains(event.target)) {
      this.toggleOpen.emit(false);
    }
  }
}
