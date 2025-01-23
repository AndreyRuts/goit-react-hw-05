
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';


import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';


const App = () => {
      
    return (
        <>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>        
    );
};
export default App;