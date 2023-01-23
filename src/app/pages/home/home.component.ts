import { Component } from '@angular/core';

type Game = {
  id: number;
  name: string;
  img: string;
  pay: 'free' | 'pay';
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public games: Array<Game> = [
    {
      id: 0,
      name: 'Counter Strike',
      img: 'assets/images/games/csgo.jpg',
      pay: 'free',
    },
    {
      id: 2,
      name: 'War Zone',
      img: 'assets/images/games/warzone.jpg',
      pay: 'free',
    },
    {
      id: 2,
      name: 'Dota 2',
      img: 'assets/images/games/Dota2.jpg',
      pay: 'free',
    },
    {
      id: 2,
      name: 'Cyber Punk',
      img: 'assets/images/games/cp.jpg',
      pay: 'pay',
    },
  ];
}
