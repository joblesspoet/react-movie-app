
const API_KEY = "3e3d2738b958d6c418d9556d1eddbfa7";
const RECORD_LIMIT = 15;
const API_REQUESTS = {
    TRENDING_DAILY_MOVIES: `/trending/all/day?api_key=${API_KEY}&langauge=en-US&limit=${RECORD_LIMIT}`,
    TRENDING_WEEKLY_MOVIES: `/trending/all/week?api_key=${API_KEY}&langauge=en-US&limit=${RECORD_LIMIT}`,
    ACTION_MOVIES: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28&limit=${RECORD_LIMIT}`,
    COMEDY_MOVIES: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35&limit=${RECORD_LIMIT}`,
    HORRER_MOVIES: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27&limit=${RECORD_LIMIT}`,
    ROMANCE_MOVIES: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749&limit=${RECORD_LIMIT}`,
    DOCUMENTARIES_MOVIES: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99&limit=${RECORD_LIMIT}`,
};



export default API_REQUESTS;
