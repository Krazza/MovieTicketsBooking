import { createContext } from "react";
import { DayEntryContext } from "../interfaces/DayEntryContext";


const initialContext : DayEntryContext = 
{
    dayEntries : [{
        id : "0",
        date : "15.03.2023",
        movies : 
            [
                {
                    id: "1",
                    title : "Avatar: Way of Water",
                    price : 15.5,
                    length : "3h 12m",
                    location : "Helsinki movie theater",
                    isSoldOut : false,
                    seats : [
                        [false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, true, true, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false]
                    ],
                    tempSeats : [
                        [false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, true, true, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false, false, false, false, false], 
                        [false, false, false, false, false, false, false, false]
                    ],
                    userBookedTickets: [{rowNumber : -1, seatNumber: 0}]
                }
            ]
        }
    ],
    setDayEntries : () => {}
}

export const myGlobalContext = createContext<DayEntryContext>(initialContext);
