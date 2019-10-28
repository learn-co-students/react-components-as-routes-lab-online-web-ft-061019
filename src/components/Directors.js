/*Directors
    10) should render one <h1 /> first, inside of the <div />
    11) should render 'Directors Page' inside of the <h1 />
    12) should render a <div /> for each director
    13) should render the right content for each director
*/

import React from 'react';
import { directors } from '/Users/dawn/react-components-as-routes-lab-online-web-ft-061019/src/components/Directors.js';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            <h2>Name: {director.name}</h2>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie, index) => {
                return (
                  <li key={index}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors