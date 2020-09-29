import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Movies />
        </Route>
        <Route path='/movie-detail/:movieId'>
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}
