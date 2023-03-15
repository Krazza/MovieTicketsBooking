import React from "react";
import styles from "../styles/SeatSelectScreen.module.css"
import Seat from "./Seat";

function Row(props: any)
{
    return(
        <div className={styles.row}>{props.seats.map((seat : boolean, index : number) =>
        <Seat key={index} rowNumber={props.rowNumber} seatNumber={index} isTaken={seat} movieID={props.movieID}/>)}</div>
    )
}

export default Row;