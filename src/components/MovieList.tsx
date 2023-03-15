import React, { useContext } from "react";
import DayFeature from "./DayFeature";
import { DayEntry } from "../interfaces/DayEntry";
import styles from "../styles/MovieList.module.css";
import { myGlobalContext } from "./GlobalContextProvider";

function MovieList()
{
    const upcomingEvents = useContext(myGlobalContext);

    return(
        <div className={styles.movieList}>
            {upcomingEvents.dayEntries.map((remoteDayData : DayEntry, index) => 
            <DayFeature key={remoteDayData.date} id={index.toString()} date={remoteDayData.date} movies={remoteDayData.movies}/>)}
        </div>
    )
}

export { MovieList }