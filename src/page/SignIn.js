import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../components/redux/user/userSlice'

const SignIn = () => {
    const [data,setData] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading,error} = useSelector((state)=>state.user)
    const changeHandler = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }
    const submitHandler = async(e)=>{
      // try {
          e.preventDefault()
          
          dispatch(signInStart());
        const result = await axios.post("http://localhost:4444/auth/signin",data)
        dispatch(signInSuccess(result));
        navigate('/')
        console.log(result)
        // } catch (error) {
        //     dispatch(signInFailure(error.message))
        // }

    }
  return (
    <div className='flex flex-col bg-gradient-to-r from-violet-300 to-fuchsia-500 justify-center items-center h-screen'>
      <form className=' bg-slate-200 border border-gray-300 rounded-lg w-[16rem] flex flex-col items-center justify-center space-y-3  h-[17rem] shadow-md shadow-black' onSubmit={submitHandler}>
        <h2 className='mr-[8.5rem]'>Sign In</h2>
        <input className='w-[12rem] h-8 p-2 rounded-md bg-transparent outline-none border border-gray-400' onChange={changeHandler} id='email' type='email' placeholder='Enter your Email'/>
        <input className='w-[12rem] h-8 p-2 rounded-md bg-transparent outline-none border border-gray-400' onChange={changeHandler} id='password' type='password' placeholder='Enter your password'/>
        <button className='px-2 py-1 w-[12rem] bg-cyan-600 border border-black rounded-lg hover:bg-slate-200 ease-in-out hover:scale-95 duration-300'>{loading? 'loading...':"Sign In"}</button>
          <p className='text-gray-400'>Already a user? <Link to={'/signup'}><span  className='underline cursor-pointer text-blue-600'>Sign Up</span></Link> </p>
          {error && <p className='text-red-600 font-semibold text-xl'>{error}</p>}
      </form>
       
    </div>
  )
}

export default SignIn
