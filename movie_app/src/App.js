import React, { Component } from 'react';


import Movie from './Movie.js';


class App extends Component {
  state = {}
  componentDidMount() { 
    this._getMovies()
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie title={movie.title_long} poster={movie.medium_cover_image} genre={movie.genres} synopsis={movie.synopsis} key={movie.id} />
    })
    return movies
  }
  
  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?=sort_by=download count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    const {movies} = this.state;
    return (      
      <div className={movies ? "App" : "App-Loadings"}>             
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
