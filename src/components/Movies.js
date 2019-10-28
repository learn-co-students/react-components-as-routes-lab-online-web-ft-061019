/* 
  Movies
    16) should render one <h1 /> first, inside of the <div />
    17) should render 'Movies Page' inside of the <h1 />
    18) should render a <div /> for each movie
    19) should render the right content for each movie
    */

import React from 'react';


import { movies } from '../data';
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
           <div key={index}>
            <h2>{movie.title}</h2>
            <h4>{movie.time} Minutes</h4>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) =>
                (<li key={index}>{genre}</li>)
              )}
            </ul>
            <br />
          </div>
        ))}
    </div>
  );
};

export default Movies;