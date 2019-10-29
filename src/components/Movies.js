import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className='movies-list'>
      <h1>Movies Page</h1>
      { movies.map((movie, index) => 
        <div key={index}>
          <h1>{movie.title}</h1>
          <h1>{movie.time}</h1>
          <ul>
          {  movie.genres.map((genre, index) => (
                <li className="genre" key={index}>
                {genre}
                </li>
            ))} 

        
      </ul>
        </div>
      )}

    </div>
   
  )
};

export default Movies;
