import React,{useState,useEffect} from 'react'
import axios from "axios"
function Banner() {
    const [rmore,setrmore]=useState(false)
    const [first,setfirst]=useState([])
   const trending="https://api.themoviedb.org/3/trending/all/week?api_key=529a60e4f2ceb4cb6ecd706c6d65eb6e&language=en-US";
   const img_base="https://image.tmdb.org/t/p/original"
   useEffect(()=>{
        async function fetchban(){
            const info=await axios.get(trending)
            .catch(err=>{console.log("err")})
           const index=Math.floor(Math.random()*info.data.results.length)
            setfirst(info.data.results[index])
        }
        fetchban()

    },[])
   return (
    <div className='banner' 
    style={{
        backgroundSize:"cover",
        backgroundImage:`URL("https://image.tmdb.org/t/p/original${first.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    
    >
        <div className="info">
            <h2 className='bantitle'>{first?.original_title || first?.name || first?.title}</h2>
            <div className='btn'>
                <button>play</button>
                <button>My List</button>
            </div>
            <p className='ban_info'>{first.overview}</p>
            {/* <p className='ban_info'>{ first.overview.length<150 ?first.overview:   rmore ? first.overview : first.overview.substr(0,149)+".."  } <button onClick={()=>{setrmore(!rmore)}} >
                {rmore ? "Read more":"Read less"}</button> </p> */}
        </div>
        <div className='shadow' ></div>
    </div>
  )
}

export default Banner