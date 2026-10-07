import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movies.services';

export function Movies() {
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

    return (
        <section>
            <h1>Popular movies</h1>

            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </section>
    );
}