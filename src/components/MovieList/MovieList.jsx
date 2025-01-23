import s from './MovieList.module.css';
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ hpMovieList }) => {
    const location = useLocation();
    
    return (
        <div className={s.movieListWrapper}> 
            <ul className={s.list}>
                {hpMovieList.map(( {id, title} ) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={location}>
                            {title}                     
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;