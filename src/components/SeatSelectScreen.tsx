import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StageDisplay } from "./StageDisplay";
import styles from "../styles/SeatSelectScreen.module.css"
import { TitleDisplay } from "./TitleDisplay";
import { myGlobalContext } from "./GlobalContextProvider";
import { MovieEntry } from "../interfaces/MovieEntry";
import Row from "./Row";

function SeatSelectScreen()
{
    const { id } = useParams();

    // find movie screening by id
    const data = useContext(myGlobalContext);
    const movieList = data.dayEntries.find(movielist => movielist.movies.find(movie => movie.id === id));
    const movie : MovieEntry = movieList?.movies.find(movie => movie.id === id) as MovieEntry;


    // fill the rest of the info

    return(
        <div className={styles.pageContainer}>
        <div className={styles.sideMenu}>{"aksjdnks"}</div>
        <div className={styles.seatsContainer}>
            <div className={styles.poster}>
                <StageDisplay/>
                <TitleDisplay title={movie.title} length={movie.length}/>
            </div>
            <section className={styles.placement}>
                {movie.seats.map((row, index) => <Row key={index} rowNumber={index} seats={row} movieID={movie.id}/>)}
            </section>
            <h2>{"SCREEN"}</h2>
        </div>
        </div>
    )
}

export default SeatSelectScreen;