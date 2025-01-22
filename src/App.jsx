import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const App = () => {
    
    return (
        <> 
            <HomePage />
            <MoviesPage />
            <MovieDetailsPage />
            <NotFoundPage />
        </>
    );
};
export default App;