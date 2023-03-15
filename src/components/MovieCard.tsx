import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";

function MovieCard(props : any) // fix later
{
    return(
        // on the line below i ll pas the card id to get specified data
        <Link to={`/tickets/${props.id}`}>
            <div className={styles.movieCard}></div>
        </Link>
    )
}

export default MovieCard;