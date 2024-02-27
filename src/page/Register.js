import React,{useState} from 'react'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
    const [data,setData] = useState({})
    const changeHandler = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
      const result = await axios.post("http://localhost:4444/auth/signup",data)
      console.log(result)
      navigate('/signin')
      

    }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-orange-100'>
      <form className=' bg-slate-200 border border-gray-300 rounded-lg w-[16rem] flex flex-col items-center justify-center space-y-3  h-[17rem] shadow-md shadow-gray-500' onSubmit={submitHandler}>
        <h2 className='mr-[8.5rem]'>Sign Up</h2>
        <input className='w-[12rem] h-8 p-2 rounded-md bg-transparent outline-none border border-gray-400' onChange={changeHandler} id='username' type='username' placeholder='Enter your Username'/>
        <input className='w-[12rem] h-8 p-2 rounded-md bg-transparent outline-none border border-gray-400' onChange={changeHandler} id='email' type='email' placeholder='Enter your Email'/>
        <input className='w-[12rem] h-8 p-2 rounded-md bg-transparent outline-none border border-gray-400' onChange={changeHandler} id='password' type='password' placeholder='Enter your password'/>
        <button className='px-2 py-1 w-[12rem] bg-cyan-600 border border-black rounded-lg hover:bg-slate-200 ease-in-out hover:scale-95 duration-300'>Sign Up</button>
          <p className='text-gray-400'>New here? <Link to={'/signin'}><span  className='underline cursor-pointer text-blue-600'>Sign In</span></Link> </p>
      </form>
       
    </div>
  )
}

export default Register
