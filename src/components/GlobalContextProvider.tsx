import { createContext } from "react";
import { DayEntryContext } from "../interfaces/DayEntryContext";


const initialContext : DayEntryContext = 
{
    dayEntries: [{
        dayID : "15032023",
        date : "15.03.2023",
        movies : [
            {
                screeningID: {dayID:"15032023", movieID:"01"},
                movieID: "01",
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
        ]},
        {
        dayID : "15032023",
        date : "15.03.2023",
        movies : [
            {
                screeningID: {dayID:"15032023", movieID:"02"},
                movieID: "02",
                title : "Spider-Man: Across the Spider-Verse",
                price : 15.5,
                length : "1h 55m",
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
    }]
}

export const myGlobalContext = createContext<DayEntryContext>(initialContext);
export { initialContext }
