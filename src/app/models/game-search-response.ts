import {Game} from './game';

export interface GameSearchResponse {
    games: Game[];
    resultCount: number;
    pageCount: number;
}
