import React from 'react';
import Routes from './Routes';

// const FEATURED_API_LIST = "https://api.themoviedb.org/3/discover/movie/?api_key=3e3d2738b958d6c418d9556d1eddbfa7&&language=en-US&sort_by=popularity.desc";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3e3d2738b958d6c418d9556d1eddbfa7&query=";

function App() {

  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [firstTime, setFirstTime] = useState(true);
  // const [curPage, setCurPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);

  // useEffect(() => {
  //   if(firstTime) {
  //     fetMovies();
  //   }
  // },[firstTime]);

  // const fetMovies = async () => {
  //  await fetch(FEATURED_API_LIST).then(reps => reps.json())
  //   .then(data => {
  //     console.log(data);
  //     setMovies(data.results);
  //     setFirstTime(false);
  //     // setCurPage(data.page);
  //     // setTotalPage(data.total_pages)
  //   }).catch(error => console.log(error));
  // }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   if(!searchTerm) {
  //     fetMovies();
  //     return
  //   };
    
  //   fetch(SEARCH_API+searchTerm)
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log(data);
  //       setMovies(data.results);
  //   });
  // }

  // const handleOnChange = e => {
  //   setSearchTerm(e.target.value);
  // }

  return (
      <>
        <Routes />
      </>
  );
}

export default App;
