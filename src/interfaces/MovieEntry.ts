import { ScreeningID } from "../types/ScreeningID";

export interface MovieEntry{
    screeningID: ScreeningID,
    movieID: string,
    title: string,
    price: number,
    length: string,
    location: string,
    isSoldOut: boolean,
    seats: boolean[][], // updt. from REMOTE, work with it, updt. REMOTE upon order confirmation. CONF: find actual data, find !1!1occupated data, save
    ticketOwners?: string [][]
}