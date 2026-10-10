import { useEffect, useState } from 'react';
import { getPopularMovies, getMovieDetails } from '../services/movies.services';

//Always use this standard for naming custom hooks in React, prefix with "use"
export function useMovies() {

     //State management for movies list
    //Initialize movies state as an empty array
    //When we fetch movies from the API, we will update this state and render again
    const [movies, setMovies] = useState([]);
    
    //Added useEffect to fetch the data without ciclying the request
    useEffect(() => {
        getPopularMovies().then(response => {
            //Axios return an object with a 'data' property containing the API response
            setMovies(response.data.results);
        });
    }, []);

    return movies;
}

export function useMovie(movieId) {

    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            setMovie(response.data);
        });
    }, [movieId]);

    return movie;
}