import React from "react";
import MovieCard from "./MovieCard";
import { MovieEntry } from "../interfaces/MovieEntry";
import { DayEntry } from "../interfaces/DayEntry";
import styles from "../styles/DayFeature.module.css";

function DayFeature(props : DayEntry)
{
    return(
        <div className={styles.dayFeature}>
            <h2 className={styles.dayDate}>{props.date}</h2>
            <section className={styles.movieList}>{props.movies.map((film : MovieEntry) => <MovieCard key={film.title}/>)}</section>
        </div>
    )
}

export default DayFeature;