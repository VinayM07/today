import React,{useState,useEffect} from 'react'
import axios from "axios"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
function Nrow({title,url,islargerow}) {

    const img_base="https://image.tmdb.org/t/p/original"
   // const p="https://api.themoviedb.org/3/trending/all/week?api_key=529a60e4f2ceb4cb6ecd706c6d65eb6e&language=en-US"
    const [movies,setmovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect( ()=>{
        async function fetchtrend(){
            const k=await axios.get(url)
            .catch(err=>{console.log("err")})
            setmovies(k.data.results)
        }
        fetchtrend()
    },[])
    //console.log(movies)
    const opts={
        height:"390",
        width:"100%",
        playerVara:{
            autoplay:1,
        }
    }
    const handleclick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || " ")
            .then((url)=>{
                const temp=new URLSearchParams(new URL(url).search);
                setTrailerUrl(temp.get('v'));
            })
            .catch((e)=>{
                console.log("err")
            })
        }

    }
   
    return (
        <div className='cards'>
            <h3 className='titlebar'>{title}</h3>
      <div className='card'>
        
        {
            movies.map(x=>{
         return(
                    <img key={x.id} 
                    onClick={()=>handleclick(x)}
                    src={`${img_base}${ islargerow  ? x.poster_path:x.backdrop_path}` } className={islargerow?"largeclass":"pic"}></img>
         )
            })
        }
      </div>
     {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} ></Youtube>}
      </div>
    )
}


export default Nrow