import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";
import { ScreeningID } from "../types/ScreeningID";

function MovieCard(props : {screeningID : ScreeningID})
{
    const screeningID = `${props.screeningID.dayID}::${props.screeningID.movieID}`;
    return(
        // on the line below i ll pas the card id to get specified data
        <Link to={`/tickets/${screeningID}`}>
            <div className={styles.movieCard}></div>
        </Link>
    )
}

export default MovieCard;