import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate,  } from 'react-router-dom'
import './sign.css'
const Sign = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()
  console.log(JSON.parse(localStorage.getItem("user"))[0])
  const handler=(e:any)=>{
    e.preventDefault();
    if(email==JSON.parse(localStorage.getItem("user"))[0].email && password==JSON.parse(localStorage.getItem("user"))[0].password){
      navigate('/home')
    }else{
      setError(true)
    }
  }
  return (
    <div className='sign'>
      <form onSubmit={(e)=>handler(e)}>
        <h2>Sign in</h2>
        <p className='details'>Enter your Account details.</p>
        <label htmlFor="email">Email or username</label>
        <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        {error&&(
          <p className='wrong'>email or password is wrong</p>
        )}
        <button>Sign in</button>
        <p className='new'>Are you new? <Link to={'/join'}>Create account</Link></p>
      </form>
    </div>
  )
}

export default Sign
