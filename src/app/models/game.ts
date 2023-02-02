import { GamePay } from "../enums/game-pay";

export interface Game {
  id: number;
  name: string;
  img: string;
  pay: GamePay;
  price?: number;
  description: string;
  tags: string[];
}
