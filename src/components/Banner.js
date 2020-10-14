import React, {useEffect, useState} from 'react'
import API_REQUESTS from '../config';
import API_INSTANCE from '../connection';
import '../Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const fetchMovie = async function() {
            await API_INSTANCE.get(API_REQUESTS.ACTION_MOVIES)
            .then(movieObj => {
                setMovie(movieObj.data.results[
                    Math.floor(Math.random() * movieObj.data.results.length -1)
                ]);
            })
            .catch(error => console.log(error))
        };
        
        fetchMovie();
    },[])
    
    function truncateString(str, number) {
        return str?.length > number ? str.substr(0, number -1) + "....": str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center  center;",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncateString(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
