import { MovieEntry } from "./MovieEntry";

export interface DayEntry{
    dayID: string,
    date: string,
    movies: MovieEntry[],
}