import { MovieEntry } from "./MovieEntry";

export interface DayEntry{
    id: string,
    date: string,
    movies: MovieEntry[],
}