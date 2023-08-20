import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = ({searchText}) => {
  const [text,setText] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
     searchText(text)
     setText('')
  }
  return (
    <div className='searchContainer'>
      <form onSubmit={submitHandler} className='searchItems'>
      <input value={text} type='text' placeholder='Type here...' onChange={(e)=> setText(e.target.value)}  />
      <button type='submit' >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
