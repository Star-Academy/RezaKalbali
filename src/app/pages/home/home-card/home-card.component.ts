import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Game } from "../../../models/game";
import { GamePay } from "../../../enums/game-pay";

@Component({
  selector: "app-home-card",
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.scss"],
})
export class HomeCardComponent implements OnChanges {
  @Input() public game!: Game;
  @Input() public buttonIconClass!: string;

  public customPrice?: string;
  public GamePayEnum = GamePay;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty("game") && this.game?.price) {
      this.customPrice = changes.game.currentValue.price.toLocaleString();
    }
  }
}
