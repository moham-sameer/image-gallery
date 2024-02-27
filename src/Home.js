import React, {useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import './Home.css'
const Home = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    let url = `https://pixabay.com/api/?key=30367474-891d2377e60b75a54d4c4bed6&q=${search}&image_type=photo&pretty=true`
    axios.get(url).then((response)=>{
      console.log(response.data.hits)
      setData(response.data.hits)
      setIsLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  },[search])
  
  return (
    <div className='homeContainer'>
     <nav>
      <SearchBar searchText={(text)=> setSearch(text)}/>
     </nav>
     <div className='imageContainer'>
      {!isLoading && data.length === 0 && <h1 className='notFound'>Image not found</h1>}
      {isLoading? <h1 className='notFound'>Loading...</h1>: <>  
       {data.map((items,index)=>{
        return(
          <div key={index} className='imageDetails'>
      <div className='image'>
      <img src={items.webformatURL} alt=''/>
      </div>
       <div className='contentDetails'>
        <p className='author'>Clicked by: {items.user} </p>
        <p><span>Views:</span> {items.views} </p>
        <p><span>Likes:</span> {items.likes} </p>
        <p><span>downloads:</span> {items.downloads} </p>
         <div className='tags'>
         <span>{items.tags}</span> 
        
         </div>
       </div>
      </div>
        )
       })}
     </>}
     </div>
    </div>
  )
}

export default Home
