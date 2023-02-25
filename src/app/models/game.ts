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
    game_url: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}
