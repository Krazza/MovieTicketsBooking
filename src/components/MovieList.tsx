import React, { useContext } from "react";
import DayFeature from "./DayFeature";
import { DayEntry } from "../interfaces/DayEntry";
import styles from "../styles/MovieList.module.css";
import { myGlobalContext } from "./GlobalContextProvider";

function MovieList()
{
    const data = useContext(myGlobalContext)

    return(
        <div className={styles.movieList}>
            {data.dayEntries.map((dayEntry) => <DayFeature key={dayEntry.dayID} dayID={dayEntry.dayID} date={dayEntry.date}/>)}
        </div>
    )
}

export { MovieList }