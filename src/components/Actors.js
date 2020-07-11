/*Actors
1) should render one <h1 />, inside of a <div />
2) should render 'Actors Page' inside of the <h1 />
3) should render a <div /> for each actor
4) should render the right content for each actor with a className of 'actor
*/
import React from 'react';
import { actors } from '/Users/dawn/react-components-as-routes-lab-online-web-ft-061019/src/data.js';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) =>(
        <div key={index}>
          <h2>{actor.name}</h2>
          <h3>Movies:</h3>
          <ul>
            {actor.movies.map((movie, index) => 
              (<li key={index}>{movie}</li>)
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;