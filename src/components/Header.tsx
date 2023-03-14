import Nav from "./Nav";
import styles from "../styles/Header.module.css";
import { Icon } from '@iconify/react';

function Header()
{
    return(
        <header className={styles.mainHeader}>
            <Icon icon="mdi:github" color="black" width="48" height="48"  className={styles.customIcon}/>
            <section>
                <Nav/>
            </section>
        </header>
    )
}

export default Header;