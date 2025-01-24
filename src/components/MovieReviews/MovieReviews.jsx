import s from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';


const MovieReviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams([]);
    console.log(movieReviews);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setMovieReviews(data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [movieId]);

    if (!movieReviews || movieReviews.length === 0) {
        return <p>No reviews available for this movie.</p>
    }

    return (
        <div>
            <ul>
                {movieReviews?.map(({id, author, content}) => (
                    <li className={s.reviewItem} key={id}>
                        <h4>Autor: {author}</h4>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieReviews;