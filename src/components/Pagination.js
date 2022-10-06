import React  from 'react'

function Pagination({pageprops , gotonextpage , gotopreviouspage}) {

  // let [pagenumber , setnumber] = useState(1);

  // function gotonextpage(){
  //   setnumber(pagenumber + 1);
  // }
  // function gotopreviouspage(){
  //   if(pagenumber > 1){
  //     setnumber(pagenumber - 1);
  //   }
    
  // }
  return (
    <>
        <div className=' w-full flex justify-center mb-8'>
            <button className='
             p-2
             border-2
              border-indigo-500
             text-indigo-500 
             border-r-0 
             rounded-l-xl'
             onClick={gotopreviouspage}
             >Previous</button> 

            <button className='
              p-2 border-2 
              border-indigo-500 
              text-indigo-500 
              bg-gray-300'>
                {pageprops}
                </button>

            <button className='
              p-2 
              border-2 
              border-indigo-500 
              text-indigo-500 
              border-l-0 
              rounded-r-xl'
              onClick={gotonextpage}
               >Next</button>

        </div>
    </>
    
      
    
  )
}

export default Pagination
