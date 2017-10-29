import React, { Component } from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'
import PropTypes from 'prop-types';

function Movie({title, poster, genre, synopsis}) {
  return(
    <div className="movie">
      <div className="movie__Colums">
        <MoviePoster poster={poster} />
      </div>
      <div className="movie__Colums">
        <h1>{title}</h1>      
        <div className="movie__Genres">
          {genre.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxline='3'
            ellipsis='...'
            trimRight
            baseOn='letters'
          />
        </div>

      </div>
    </div>
  );
}

function MoviePoster({poster}) {
  return(
    <div>
      <img src={poster} alt="" />  
    </div>
  );
}

function MovieGenre({genre}) {
  return (
    <span className="movie__genre">{genre}</span>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  synopsis: PropTypes.array.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}
export default Movie
