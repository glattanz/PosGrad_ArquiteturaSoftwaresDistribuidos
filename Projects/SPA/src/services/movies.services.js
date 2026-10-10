import { moviesAPI } from '../config/http';

export function getPopularMovies() {
    return moviesAPI.get('movie/popular');
}

export function getMovieDetails(movieId) {
    return moviesAPI.get(`movie/${movieId}`);
}