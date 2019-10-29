import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
  
    <div className='director-list'>
      <h1>Directors Page</h1>
      { directors.map((director, index) => 
        <div key={index}>
          <h1>{director.name}</h1>
          <ul>
          {  director.movies.map((movie, index) => (
                <li className="movie" key={index}>
                {movie}
                </li>
            ))} 

        
      </ul>
        </div>
      )}

</div>
  );
}

export default Directors
