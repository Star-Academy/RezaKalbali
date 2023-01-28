import { GamePay } from '../enums/game-pay';
import { Game } from '../models/game';

export const gameList: Game[] = [
  {
    id: 0,
    name: 'Counter Strike',
    img: 'assets/images/games/csgo.webp',
    pay: GamePay.FREE,
  },
  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePay.PAY,
    price: 65000,
  },
  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePay.PAY,
    price: 65000,
  },
  {
    id: 2,
    name: 'War Zone',
    img: 'assets/images/games/warzone.webp',
    pay: GamePay.FREE,
  },
  {
    id: 2,
    name: 'Dota 2',
    img: 'assets/images/games/Dota2.webp',
    pay: GamePay.FREE,
  },

  {
    id: 2,
    name: 'Cyber Punk',
    img: 'assets/images/games/cp.webp',
    pay: GamePay.PAY,
    price: 65000,
  },
];
