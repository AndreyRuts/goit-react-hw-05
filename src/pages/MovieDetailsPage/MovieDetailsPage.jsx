import s from './MovieDetailsPage.module.css';
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from '../../services/api';



const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
     

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovieDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
       
        
    }, [movieId]);
    

    console.log(movieDetails);
    
    return (
        <div className={s.container}>
            <img
                src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} 
                alt={movieDetails.title}
            />
            <div className={s.info}>
                <h2>{movieDetails.title} {movieDetails.release_date}</h2>
                <p><span>User Score: </span>{movieDetails.vote_average*10}%</p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <div>{movieDetails?.genres?.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    );
                })}</div>
                <div className={s.details}>
                    <nav>
                        <h3>Additional information</h3>
                        <Link to='cast'>Cast</Link>
                        <Link to='reviews'>Reviews</Link>
                    </nav>
                </div>
            </div>
        </div>
        
    );
};

export default MovieDetailsPage;