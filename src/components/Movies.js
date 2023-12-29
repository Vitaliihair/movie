import Movie from "./Movie";
import './Movie.scss';

function Movies( { movies }) {
    return (<div className="movies">

        {
            !!movies ?
    
        movies.map(movie => (
            <Movie key={`${movie.Title}${movie.Year}`} movie = {movie} />
        )) : 
        <h1>No movies</h1>
        }
    </div>)
        
}

export default Movies; 