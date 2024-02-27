import React from 'react'

const Gallery = ({data}) => {
    // 30367474-891d2377e60b75a54d4c4bed6
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>
    {data.map((items,index)=>{
      return(
        <div key={index} className='mt-[5rem] h-[22rem] rounded-lg w-[16rem] bg-slate-300 shadow-md shadow-black'>
      <img className='rounded-t-lg h-[12rem] w-[16rem]' src={items.webformatURL} alt=''/>
      <div className='ml-2'>
        <p className='font-bold'>#{items.tags}</p>
        <p>Download:{items.downloads}</p>
        <p>Likes:{items.likes}</p>
        <p>Comments:{items.comments}</p>
        <p>Taken by:{items.user}</p>

      </div>
    </div>
      )
    })}
    </div>
  )
}

export default Gallery
