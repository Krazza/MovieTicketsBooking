import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieEntry } from "../interfaces/MovieEntry";
import { DayEntry } from "../interfaces/DayEntry";
import styles from "../styles/DayFeature.module.css";
import { myGlobalContext } from "./GlobalContextProvider";

function DayFeature(props : {dayID : string, date : string})
{
    //IDENTIFIERS for searching data in the context
    const dayFeatureID = props.dayID;
    const dayFeatureDate = props.date;

    //GET info from the context
    const data = useContext(myGlobalContext);
    const currentDay = data.dayEntries.find(entry => entry.dayID === dayFeatureID);
    const movieList = currentDay?.movies;

    return(
        <div className={styles.dayFeature}>
            <h2 className={styles.dayDate}>{dayFeatureDate}</h2>
            <section className={styles.movieList}>{movieList?.map(movie => <MovieCard screeningID = {movie.screeningID}/>)}</section>
        </div>
    )   
}

export default DayFeature;