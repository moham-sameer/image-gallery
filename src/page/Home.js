import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import axios from 'axios'
const Home = () => {

  const [retrieve,getRetrieve] = useState([])
  const [isLoading,setIsLoading] = useState(true);
  const [search,getSearch] = useState('')
  useEffect(()=>{
    const url = `https://pixabay.com/api/?key=30367474-891d2377e60b75a54d4c4bed6&q=${search}&image_type=photo`
    axios.get(url).then((resp)=>{

      getRetrieve(resp.data.hits);
      console.log(resp.data)
      setIsLoading(false)
    })
  },[search])
     
   
  return (
    <div>
        <Navbar Search={getSearch}  />
      {!isLoading && retrieve.length === 0 && <h1 className='mt-[10rem] text-[4rem] text-center text-red-700'>Image Not Found</h1>}
      {isLoading? <span className='absolute top-[12rem] left-16 text-center text-[5rem] font-semibold'>Loading...</span>:<>
        <Gallery data={retrieve}/>
      </>}
      
        </div>
  )
}

export default Home
