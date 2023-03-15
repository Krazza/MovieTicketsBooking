import React from "react";
import styles from "../styles/TitleDisplay.module.css";

function TitleDisplay(props : any)
{
    return(
        <div className={styles.movieTitle}>
            <h1>{props.title}</h1>
            <h3>{props.length}</h3>
            <hr></hr>
        </div>
    )
}

export { TitleDisplay };