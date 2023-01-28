import { GamePayEnum } from '../enums/game-pay.enum';
import { GameModel } from '../models/game.model';

export const gameList: GameModel[] = [
  {
    id: 0,
    name: 'Counter Strike',
    img: 'assets/images/games/csgo.webp',
    pay: GamePayEnum.FREE,
  },
  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePayEnum.PAY,
    price: 65000,
  },
  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePayEnum.PAY,
    price: 65000,
  },
  {
    id: 2,
    name: 'War Zone',
    img: 'assets/images/games/warzone.webp',
    pay: GamePayEnum.FREE,
  },
  {
    id: 2,
    name: 'Dota 2',
    img: 'assets/images/games/Dota2.webp',
    pay: GamePayEnum.FREE,
  },

  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePayEnum.PAY,
    price: 65000,
  },
];
