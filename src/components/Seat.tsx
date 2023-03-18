import React from "react";
import { MovieEntry } from "../interfaces/MovieEntry";
import styles from "../styles/SeatSelectScreen.module.css"

function Seat(props : any)
{
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>){}

    if(!props.isTaken)
        return <div className={styles.seatFree} onClick={handleClick}>{""}</div>
    else
        return <div className={styles.seatOccupied}>{""}</div>
}

export default Seat;