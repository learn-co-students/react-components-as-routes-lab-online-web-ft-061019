import React from 'react';

const Movie = ({ title, time, genres }) => {
   return (
      <div>
         <h2>Name: {title}</h2>
         <p>Time: {time}</p>
         <p>Genres:</p>
         <ul>
            { genres.map((genre) => {
               return (
                  <li>{genre}</li>
               )
            })}
         </ul>
      </div>
   )
}

export default Movie