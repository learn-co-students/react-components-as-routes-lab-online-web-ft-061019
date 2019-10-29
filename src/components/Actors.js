import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actors-list'>
      <h1>Actors Page</h1>
      { actors.map((actor, index) => 
        <div key={index}>
          <h1>{actor.name}</h1>
          <ul>
          {  actor.movies.map((movie, index) => (
                <li className="movie" key={index}>
                {movie}
                </li>
            ))} 

        
      </ul>
        </div>
      )}
      

    </div>
    
  );
};

export default Actors;

