import React, { useEffect, useState } from 'react'
// import Image from '../banner.jpg';
import axios from 'axios';

function Banner() {
  let [movie , setmovies] = useState({});

  useEffect(function(){
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=0723175fdc4df99a2c8f8571e61cfb09").then((res) => {
      console.table(res.data.results);
      setmovies(res.data.results[0]);  // 0th index mtlb 1st movie ko as a banner show karenge
    })
  } , [])   // empty array se useeffect only ek baar hi chalta h 

  return (
    <>
      <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]
       h-[40vh] md:h-[60vh]
       bg-center bg-cover
       flex 
       items-end `}>
        <div className='
        text-white
        text-xl md:text-3xl
         p-6 
         bg-gray-900 bg-opacity-50 
         w-full 
         flex justify-center'>{movie.title}</div>      
      </div>
    </>
   
  )
}

export default Banner
