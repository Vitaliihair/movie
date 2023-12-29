import './Movies.scss';


function Movie ({movie}) {
    return (<div className="movie">
        <img src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
    </div>)

}
export default Movie;