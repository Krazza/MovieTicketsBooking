import React from "react";
import DayFeature from "./DayFeature";
import { DayEntry } from "../interfaces/DayEntry";
import styles from "../styles/MovieList.module.css";

function MovieList()
{
    const upcomingEvents = require("../moviedata.json");

    return(
        <div className={styles.movieList}>
            {upcomingEvents.map((remoteDayData : DayEntry) => 
            <DayFeature key={remoteDayData.date} date={remoteDayData.date} movies={remoteDayData.movies}/>)}
        </div>
    )
}

export { MovieList }