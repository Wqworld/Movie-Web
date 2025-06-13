import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getMovieList , searchMovie } from '../api'


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, []) 

  
    const PopularMovieList = () => {
      return popularMovies.map((movie, i) => {
        return (
          <div className="bg-gray-300 max-w-60 h-120 m-5 p-1 mx-auto" key={i}>
            <img src={`${import.meta.env.VITE_BASEIMAGE}/${movie.poster_path}`} alt="s" className="bg-yellow-200 h-70 m-5" />
            <h5 className='mx-5 font-bold text-black '>judul : { movie.title }</h5>
            <h5 className='mx-5 font-bold text-black '>rilis : { movie.release_date }</h5>
            <h5 className='mx-5 font-bold text-black '>popularity : { movie.popularity }</h5>
            <h5 className='mx-5 font-bold text-black '>Rating : { movie.vote_average } </h5>
          </div>
        )
      })
    }
  
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      console.log({ query : query})
      setPopularMovies(query.results)
    }
  }

  return (
    <div>
      <h1 className='font-bold text-center text-5xl mt-20'>Waqqir Movie</h1>

      <div>
        <div className="flex items-center justify-center m-5">  
          <div className="relative">
            <input
              type="text"
              placeholder="Masukan Film favorit kamu.."
              onChange={({ target } ) => search(target.value) }
              className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <PopularMovieList />
      </div>
    </div>
  )
}

export default App
