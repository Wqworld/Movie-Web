import './App.css';
import { getMovieList, searchMovie } from './API';
import { useEffect, useState } from 'react';

const App = () => {
  
  const [popularMovie, setPopularMovie] = useState([])
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
          <div className="movie-wraper" key={i}>
            <div className="movie-title">{ movie.title }</div>
            <img className="movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <div className="movie-date">{ movie.release_date }</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search =async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovie(query.results)
    }
  }

  console.log({popularMovie: popularMovie })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Waqqir Movie Mania</h1>
        <input
          placeholder='cari movie kesayangan'
          className='Movie-search'
          onChange={({target}) => search(target.value)} 
        />
        <div className="movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
