import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import Navigation from './components/Navigation/Navigation';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';


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