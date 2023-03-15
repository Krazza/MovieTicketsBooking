import React, { useContext } from "react";
import { myGlobalContext } from "./GlobalContextProvider";
import { MovieEntry } from "../interfaces/MovieEntry";
import styles from "../styles/SeatSelectScreen.module.css"

function Seat(props : any)
{
    const data = useContext(myGlobalContext);
    const dayEntry = data.dayEntries.find(movielist => movielist.movies.find(movie => movie.id === props.movieID));
    const movie : MovieEntry = dayEntry?.movies.find(movie => movie.id === props.movieID) as MovieEntry;

    const movieIndex = dayEntry?.movies.indexOf(movie);
    const dayIndex = data.dayEntries.indexOf(dayEntry!);

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>)
    {
        let tempData = data;
        let tempObj = {
            rowNumber : props.rowNumber,
            seatNumber : props.seatNumber
        }

        tempData.dayEntries[dayIndex].movies[movieIndex!].tempSeats[props.rowNumber][props.seatNumber] = true; //true means booked
        data.setDayEntries(tempData.dayEntries);

        console.log(data.dayEntries[dayIndex].movies[movieIndex!].tempSeats);
        console.log(tempData.dayEntries[dayIndex].movies[movieIndex!].userBookedTickets)
        console.log(props.rowNumber, props.seatNumber)
    }

    if(!props.isTaken)
        return <div className={styles.seatFree} onClick={handleClick}>{""}</div>
    else
        return <div className={styles.seatOccupied}>{""}</div>
}

export default Seat;