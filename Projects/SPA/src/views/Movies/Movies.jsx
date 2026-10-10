import { useMovies } from '../../hooks/useMovies';
import { MovieItem } from '../../components/movieItem/MovieItem';
import styles from './Movies.module.css';

export function Movies() {
   
    const movies = useMovies();

    return (
        <section className={styles.moviesContainer}>
            <h1>Popular movies</h1>

            <div className={styles.moviesList}>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}