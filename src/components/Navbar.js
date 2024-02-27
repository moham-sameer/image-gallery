import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({Search}) => {
  const {currentUser} = useSelector((state)=>state.user)
   const [text,setText] = useState('');
   const submitHandler = (e)=>{
    e.preventDefault()
    Search(text)
   }
  return (
    <div className='fixed  top-0 w-screen   h-[4rem]  shadow-md bg-slate-200 border-b-2 border-gray-300 flex items-center justify-center '>
    <h2 className='pl-2 absolute left-0 text-blue-500'><span className='text-black font-semibold'>Imag</span>e<span className='uppercase font-bold text-orange-700'>Gallery</span></h2>
    <form onSubmit={submitHandler} className='flex items-center justify-center w-[14rem]   h-[3rem] border-b-2 sm:w-[20rem] md:w-[25rem] lg:w-[29rem] border-cyan-600'>
        
      <input onChange={(e)=>setText(e.target.value)} className=' outline-none bg-transparent mx-2 w-[6rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] h-[3rem] md:text-xl lg:text-xl font-sans' placeholder='Search here...'/>
      <button className='bg-cyan-700 hover:bg-white border border-pink-400 hover:border-black text-white hover:text-black transition ease-in-out duration-700 md:px-4 md:py-1.5 px-2 py-1 lg:px-4 lg:py-1.5  mr-4'>Search</button>
    </form>
       <div className='cursor-pointer absolute right-7'>
       <Link to={'/profile'}>
        <img className='w-[2.6rem] h-[2.6rem] rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='profile-image'/>
       </Link>
       </div>
    </div>
  )
}

export default Navbar
