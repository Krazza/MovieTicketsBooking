import { createContext } from "react";
import { DayEntryContext } from "../interfaces/DayEntryContext";


const initialContext : DayEntryContext = 
{
    dayEntries : [{
        date : "15.03.2023",
        movies : 
            [
                {
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
                    ]
                }
            ]
        }
    ],
    setDayEntries : () => {}
}

export const myGlobalContext = createContext<DayEntryContext>(initialContext);
