import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import Search from '../../components/Search/Search';



const MoviesPage = () => {

    const [moviesPage, setMoviesPage] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        const getData = async () => {
            if (!query) {
                return;
            }
            try {
                const data = await searchMovies(query);
                setMoviesPage(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [query]);
    
    const handleSearch = (newQuery) => {
        if (newQuery.trim() === '') {
            setSearchParams({});
        } else {
            setSearchParams({ query: newQuery });
        }
    };


    return (
        <div>
            <Search handleSearch={handleSearch} />
            {moviesPage.length > 0 ? (
                <MovieList hpMovieList={moviesPage} query={query} />) : (
                    <p>No movies found</p>
                )}
            
        </div>
    );
};

export default MoviesPage;