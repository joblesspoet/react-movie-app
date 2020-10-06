import React, {useEffect, useState} from 'react'
import {
    useParams,
    // Redirect
  } from "react-router-dom";

const MOVIE_DETAIL_API = "https://api.themoviedb.org/3/movie/{moveID}?api_key=3e3d2738b958d6c418d9556d1eddbfa7&&language=en-US";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieDetail() {
    const [movieInfo, setMovieInfo] = useState(undefined);
    const {movieId} = useParams();
    const movURL = MOVIE_DETAIL_API.replace("{moveID}", movieId)

    useEffect(()=>{
        console.log(movieId)
        fetch(movURL)
        .then(resp => resp.json())
        .then(movie => {
            console.log(movie)
            if(movie.success &&  movie.success === false)
                setMovieInfo(undefined)
            else {
                setMovieInfo(movie)
            }
            
            // console.log(movieInfo)
        }, error => console.log(error))
    }, [])

    return (
        <>
            {
                (movieInfo === undefined && (
                    <h3>No movie found</h3>
                ))
            }
            {
                movieInfo !== undefined && (
                    <div className="movie-detail-container">
                        <div className="movie-detail-img">
                            <img src={IMG_API + movieInfo.poster_path} alt={movieInfo.title} />
                        </div>
                        <div className="movie-detail-info">
                            <h2>{movieInfo.title}</h2>
                            <p>{movieInfo.tagline}</p>
                            <div className="movie-overview">
                                <h3>Overview</h3>
                                <p>{movieInfo.overview}</p>
                            </div>
                            <p>Release Date: {movieInfo.release_date}</p>
                        </div>
                    </div>
                )
            }        
        </>
    )
}

export default MovieDetail
