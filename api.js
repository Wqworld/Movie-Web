import { meta } from "@eslint/js";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const baseImage = import.meta.env.VITE_BASEIMAGE;
const baseApiKey = import.meta.env.VITE_APIKEY

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?api_key=${baseApiKey}`
    )
    // console.log({ movieList : movie.data})
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${baseApiKey}`)
    return search.data
}