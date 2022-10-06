import React, { useEffect, useState } from 'react'
// import Image from '../banner.jpg'
import axios from 'axios'
import { Oval } from 'react-loader-spinner';  // circle wale loader ke liye oval ka use karenge
import Pagination from './Pagination';

function Movies() {

  let [movies , setmovies] =  useState([]);
  let [pagenumber , setnumber] = useState(1);
  let [hover , sethover] = useState('');
  const [favourites, setFavourites] = useState([]) 

  function gotonextpage(){
    setnumber(pagenumber + 1);
  }
  function gotopreviouspage(){
    if(pagenumber > 1){
      setnumber(pagenumber - 1);
    }
    
  }

  useEffect(function(){
    // everytime when page reloads
    let oldFav = localStorage.getItem("imdb")
      oldFav = JSON.parse(oldFav) || [];
      setFavourites(oldFav);


    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=0723175fdc4df99a2c8f8571e61cfb09&page=${pagenumber}`).then((res) => {
      console.table(res.data.results);
      setmovies(res.data.results);
      
    })
  } , [pagenumber])

  let add = (movie) => {
    let newArray = [...favourites, movie]
    setFavourites([...newArray])
    // console.log(newArray)
    localStorage.setItem("imdb" , JSON.stringify(newArray));
  }

  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id !== movie.id)
    setFavourites([...newArray])
    localStorage.setItem("imdb" , JSON.stringify(newArray));

  }

  return (

    <>
      <div className='mb-8'>
        <div className='mt-8 mb-8 font-bold text-2xl text-center'>Trending Movies</div>
        {
          movies.length === 0 ?  // initially jab tak data nahi ayega to loader print karwa denge 
          <div className='flex justify-center'>
            <Oval
                height="80"
                width="80"
                radius="9"
                color="gray"
                secondaryColor='grey'
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
          </div>:
          <div className='flex flex-wrap justify-center'>

            {
              movies.map((movie) =>(
                <div className= {`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                  h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
                  bg-center bg-cover rounded-xl flex items-end  m-4 
                  hover:scale-110 
                  ease-out duration-300
                  relative`}
                  
                  onMouseEnter = {()=> {
                    sethover(movie.id);
                    // console.log(movie.id);
                  }}
                  onMouseLeave = {() =>{
                    sethover('');
                  }} >

                  {
                    hover === movie.id &&
                    <>{
                      favourites.find((m) => m.id === movie.id) ?
                      <div className='absolute
                        top-2 right-2
                        p-2
                        bg-gray-800
                        rounded-xl
                        text-xl
                        cursor-pointer'
                        onClick={() => del(movie)}>❌</div> :
                      <div className='absolute
                        top-2 right-2
                        p-2
                        bg-gray-800
                        rounded-xl
                        text-xl
                        cursor-pointer'
                        onClick={() => add(movie)}>❤️</div>
                    }
                    </>
                    

                  } 
                  <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'> {movie.title} </div>
                </div>
              ) )
            }
            

            {/* <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div>

            <div className= {`bg-[url(${Image})] 
              h-[25vh] w-[150px]  md:h-[30vh] md:w-[250px]
              bg-center bg-cover rounded-xl flex items-end  m-4 
              hover:scale-110 
              ease-out duration-300`}>  
                <div className=' bg-gray-900 text-white w-full font-bold text-center py-2 rounded-b-xl'>Title</div>
            </div> */}

            
          </div>

        }
        


       
      </div>

      <Pagination pageprops = {pagenumber}  gotonextpage = {gotonextpage} gotopreviouspage = {gotopreviouspage}></Pagination>
    </>
  )
}

export default Movies
