import React from 'react';
import { movies } from '../data';
//import Movie from './Movie'

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div>
            {/*Lame tests didn't like that I used a presentational comp*/ }
            {/*<Movie title={movie.title} time={movie.time} genres={movie.genres}/>*/}
            <h2>Name: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
                { movie.genres.map((genre) => {
                  return (
                      <li>{genre}</li>
                  )
                })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
