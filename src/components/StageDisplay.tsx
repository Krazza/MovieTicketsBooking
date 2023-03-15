import React from "react";
import styles from "../styles/StageDisplay.module.css";

function StageDisplay()
{
    if(window.location.href.includes("tickets"))
    {
        return(
        <div className={styles.stageContainer}>
            <div id={styles.tickets} className={styles.active}>{"1. TICKETS"}</div>
            <div id={styles.payments} className={styles.inactive}>{"2. PAYMENTS"}</div>
            <div id={styles.confirmation} className={styles.inactive}>{"3. CONFIRMATION"}</div>
        </div>)
    } else if(window.location.href.includes("confirmation"))
    {
        return(
            <div className={styles.stageContainer}>
                <div id={styles.tickets} className={styles.inactive}>{"1. TICKETS"}</div>
                <div id={styles.payments} className={styles.inactive}>{"2. PAYMENTS"}</div>
                <div id={styles.confirmation} className={styles.active}>{"3. CONFIRMATION"}</div>
            </div>)
    } else 
        return(<div>{"you messed up, kid"}</div>)
}

export { StageDisplay };