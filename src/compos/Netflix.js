import React,{useState,useEffect} from 'react'
import Nrow from "./Nrow"
import "./Netflix.css"
import Banner from "./Banner"
import Navbar from "./Navbar"
function Netflix() {
    const API_KEY="529a60e4f2ceb4cb6ecd706c6d65eb6e"
    const url="https://api.themoviedb.org/3/movie/popular?api_key=529a60e4f2ceb4cb6ecd706c6d65eb6e&language=en-US&page=1"
  
    const req= {
      fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
      fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    };
  return (
    <div className='main'>
      <Navbar/>
      <Banner/>
        <Nrow title="Trending" url={req.fetchTrending} islargerow/>
        <Nrow title="Originals" url={req.fetchNetflixOriginals} />
        <Nrow title="Toprated" url={req.fetchTopRated} />
        <Nrow title="Action" url={req.fetchActionMovies} />
        <Nrow title="Comedy" url={req.fetchComedyMovies} />
        <Nrow title="Horror" url={req.fetchHorrorMovies} />
        <Nrow title="Romantic" url={req.fetchRomanceMovies} />
        <Nrow title="Documentaries" url={req.fetchDocumentaries} />
    </div>
  )
}

export default Netflix