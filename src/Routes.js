import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Movies from './components/Movies'
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route path='/movie-detail/:movieId'>
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}
