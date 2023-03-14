import { useState } from 'react';
import Overlay from "./Overlay";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Nav()
{
    const [popUpVisibility, setPopUpVisibility] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => 
    {
        setPopUpVisibility(false);
    };

    return (
        <nav>
            <ul>
                <li><NavLink to="/homepage">{"Homepage"}</NavLink></li>
                <li><NavLink to="/bookings">{"My Bookings"}</NavLink></li>
                <section className={styles.buttonContainer}>
                    <button className={styles.myButtonClass} onClick={() => setPopUpVisibility(true)}>{"REGISTER"}</button>
                    <button className={styles.myButtonClass}>{"LOG IN3"}</button>
                </section>
                {popUpVisibility && <Overlay handleClick={handleClick}/>}
            </ul>
        </nav>
    );
}

export default Nav;