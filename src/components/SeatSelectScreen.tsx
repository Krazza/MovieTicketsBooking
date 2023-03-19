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