import React from 'react'
import {
    Route,
    Link
  } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie(props) {

    const setVoteClass = vote => {
        if (vote >= 8) {
            return 'green'
        } else if(vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    const img_path = props.movie.poster_path != undefined ? IMG_API+props.movie.poster_path : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
    return (
        <div className="movie">
            <Link to={`/movie-detail/${props.movie.id}`} >
            <img src={img_path} alt={props.movie.title} />
            <div className="movie-info">
                <h3>
                    {props.movie.title}
                </h3>
                <span className={`tag ${setVoteClass(props.movie.vote_average)}`}>
                    {props.movie.vote_average}
                </span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{props.movie.overview}</p>
            </div>
            </Link>
        </div>
    )
}

export default Movie
