import React from 'react'

import API_REQUESTS from '../config';
import Banner from './Banner';
import MovieRow from './MovieRow';

function Home() {
    return (
        <div className="App">
            <Banner />           
            <MovieRow title="Trending Daily" fetchURL={API_REQUESTS.TRENDING_DAILY_MOVIES}
                isBiggerRow
            />
            <MovieRow title="Trending Weekly" fetchURL={API_REQUESTS.TRENDING_WEEKLY_MOVIES} />
            <MovieRow title="ACTION MOVIES" fetchURL={API_REQUESTS.ACTION_MOVIES} />
            <MovieRow title="COMEDY MOVIES" fetchURL={API_REQUESTS.COMEDY_MOVIES} />
            <MovieRow title="HORRER MOVIES" fetchURL={API_REQUESTS.HORRER_MOVIES} />
            <MovieRow title="ROMANCE MOVIES" fetchURL={API_REQUESTS.ROMANCE_MOVIES} />
            <MovieRow title="DOCUMENTARIES MOVIES" fetchURL={API_REQUESTS.DOCUMENTARIES_MOVIES} />
        </div>
    )
}

export default Home
