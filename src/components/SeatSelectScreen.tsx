import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StageDisplay } from "./StageDisplay";
import styles from "../styles/SeatSelectScreen.module.css"
import { TitleDisplay } from "./TitleDisplay";

import { MovieEntry } from "../interfaces/MovieEntry";
import Row from "./Row";

function SeatSelectScreen()
{
    const { screeningID } = useParams();
    const dayID = screeningID?.substring(0, 8);
    const movieID = screeningID?.substring(10, 12);

    // continue here, 1) display the seats in the UI, 2) Make it possible to occupy/select a seat

    return(
        <div className={styles.pageContainer}>
        <div className={styles.sideMenu}>{"aksjdnks"}</div>
        <div className={styles.seatsContainer}>
            <div className={styles.poster}>
                <StageDisplay/>
                { <TitleDisplay /* title={movie.title} length={movie.length}*/ /> }
            </div>
            <section className={styles.placement}>
                {/* {movie.seats.map((row, index) => <Row key={index} rowNumber={index} seats={row} movieID={movie.id}/>)} */}
            </section>
            <h2>{"SCREEN"}</h2>
        </div>
        </div>
    )
}

export default SeatSelectScreen;