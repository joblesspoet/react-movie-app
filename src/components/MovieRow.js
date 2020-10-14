import React, {useEffect, useState} from 'react';
import API_INSTANCE from '../connection';
import '../Row.css';

const IMG_API = "https://image.tmdb.org/t/p/original/";

function MovieRow({title, fetchURL, isBiggerRow}) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async function() {
            await API_INSTANCE.get(fetchURL)
            .then(movieObj => {
                console.log(movieObj);
                if(movieObj?.data && movieObj?.data?.results.length > 0) {
                    setMovies(movieObj.data.results);
                }
            })
            .catch(error => console.log(error))
        };
        
        fetchMovies();
    },[])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    return (
                        <img key={`img_${movie.id}`} className={`row__poster ${isBiggerRow && "row__posterLarge"}`} 
                        src={`${IMG_API}${isBiggerRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.title} />
                    )
                })}
            </div>
        </div>
        
    )
}

export default MovieRow
