import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({title, poster}) {
  return(
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

function MoviePoster({poster}) {
  return(
    <div>
      <img src={poster} alt="" />  
    </div>
  );
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}
export default Movie
