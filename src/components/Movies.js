import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import ReactPaginate from 'react-paginate';

const FEATURED_API_LIST = "https://api.themoviedb.org/3/discover/movie/?api_key=3e3d2738b958d6c418d9556d1eddbfa7&&language=en-US&sort_by=popularity.desc&page=";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3e3d2738b958d6c418d9556d1eddbfa7&query=";

function Movies() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if(firstTime) {
      fetMovies();
    }
    
  },[firstTime]);

  useEffect(()=>{
    if(!firstTime){
      if(searchTerm != "" && searchTerm.length > 3) {
        searchMovies()
      } else {
        fetMovies();
      }
    }
  },[curPage]);

  const fetMovies = async () => {
   await fetch(FEATURED_API_LIST+curPage).then(reps => reps.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
      setFirstTime(false);
      setTotalPage(data.total_pages)
    }).catch(error => console.log(error));
  }

  const searchMovies = async () => {
    await fetch(SEARCH_API+searchTerm+"&page="+curPage).then(reps => reps.json())
    .then(data => {
      setMovies(data.results);
      setTotalPage(data.total_pages)
    }).catch(error => console.log(error)); 
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!searchTerm) {
      fetMovies();
      return
    };
    
    searchMovies();
  }

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  }

  const changePage = ({selected}) => {
    
    // console.log(selected);
    setCurPage(selected+1);
  }

  return (
     <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="search" 
            className="search" 
            placeholder="Search....."
            value={searchTerm}
            onChange={handleOnChange} 
          />
        </form>
      </header>
      <div className="movie-container"> 
        {  
            movies.length > 0 && movies.map((movie) => {
              return (
                  <Movie movie={movie} key={movie.id} />
                )
            })
          }
      </div>
      <div style={{
        display: "flex",
        margin: '0.5rem'
      }}>
        <ReactPaginate
          pageCount={totalPage}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={changePage}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        >

        </ReactPaginate>
      </div>
      </>
  );
}

export default Movies;
