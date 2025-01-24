import s from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../services/api';
import { useParams } from 'react-router-dom';


const MovieCast = () => {
    const [movieCast, setMovieCast] = useState();
    const {movieId} = useParams([]);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieCredits(movieId);
                setMovieCast(data.cast);
                
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [movieId]);

    return (
        <>
            <div>
                <ul className={s.container}>
                    {movieCast?.map((actor) => (
                        <li className={s.actorCard} key={actor.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                                alt={actor.name}
                            />
                            {actor.name} as {actor.character}
                        </li>
                    ))}
                </ul>
            </div>
        </>
        
    );
};

export default MovieCast;