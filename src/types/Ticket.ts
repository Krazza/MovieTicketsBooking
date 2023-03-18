import { ScreeningID } from "./ScreeningID";

export type Ticket = {
    screeningID : ScreeningID;
    title : string;
    date : string;
    seat : {rowNumber: number, seatNumber: number};
}