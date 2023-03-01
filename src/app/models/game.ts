import {GamePay} from '../enums/game-pay';

export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    genre: string;
    platform: string;
    pay?: GamePay;
    price?: number;
    description: string;
    tags: string[];
    gameUrl: string;
    publisher: string;
    developer: string;
    releaseDate: string;
    freeToGameProfileUrl: string;
}
