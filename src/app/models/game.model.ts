import { GamePayEnum } from '../enums/game-pay.enum';

export interface GameModel {
  id: number;
  name: string;
  img: string;
  pay: GamePayEnum;
  price?: number;
}
