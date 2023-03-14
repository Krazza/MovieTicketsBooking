import React from "react";
import { ButtonProps } from '../types/ButtonProps';
import styles from "../styles/Overlay.module.css";

function Overlay({handleClick}: ButtonProps)
{
    return(
    <div className={styles.overlay}>
            <div className={styles.popup}>
            <h2>{"Hello there"}</h2>
            <button className={styles.myButtonClass} onClick={handleClick}>{"CLOSE"}</button>
        </div>
    </div>
    )
}

export default Overlay;