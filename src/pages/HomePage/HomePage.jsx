import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import {fetchTrendingMovies} from '../../services/api';

const HomePage = () => {

    const [hpMovieList, setHpMovieList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTrendingMovies();
                setHpMovieList(data)
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    
    return (
        <div className={s.hpWrapper}>
            <h1 className={s.hpTitle}>Trending today</h1>
            <MovieList hpMovieList={hpMovieList} />
        </div>
    );
};

export default HomePage;