import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { logout } from '../components/redux/user/userSlice';
const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const signOut = ()=>{
    dispatch(logout())
  }
   console.log(currentUser.data.username)
  return (
    <div className='flex items-center justify-center h-screen'>

    <div className='fixed  top-0 w-screen   h-[4rem]  shadow-md bg-slate-200 border-b-2 border-gray-300 flex items-center justify-center '>
    <h2 className='pl-2 absolute left-0 text-blue-500'><span className='text-black font-semibold'>Imag</span>e<span className='uppercase font-bold text-orange-700'>Gallery</span></h2>
    
       <div className='cursor-pointer absolute right-7'>
       <Link to={'/'}>
       <h2><HomeIcon className='text-gray-500 mx-2' /> </h2>
       </Link>
       </div>
    </div>
    <div className=' flex justify-center items-center px-4 space-y-4 py-8 flex-col w-[20rem] h-[18rem] rounded-xl border-2 bg-slate-100'>
    <h1 className='text-3xl pl-1'>Profile</h1>
      <p className='text-green-600 border border-gray-300 w-[17.5rem]'><span className='text-black font-semibold mx-2'>User:</span>{currentUser.data.username}</p>
      <p className='text-green-600 border border-gray-300 w-[17.5rem]'><span className='font-semibold mx-2 text-black'>Email:</span>{currentUser.data.email}</p>
      <Link to={'/signin'}>
      <p className='cursor-pointer text-red-600 hover:text-red-500 hover:scale-110 transition-all' onClick={signOut}>LogOut</p>
      </Link>
    </div>
    </div>
  )
}

export default Profile
