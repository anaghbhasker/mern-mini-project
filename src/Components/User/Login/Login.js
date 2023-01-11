import Axios from 'axios'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAPI } from '../../../API'
import classes from './login.module.css'
import { UserActions } from '../../../Store/Userauth'

function Login() {
    
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [Errmessage,setErrmessage]=useState('')

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const loginFormsubmit=(e)=>{
    e.preventDefault();
    Axios.post(`${userAPI}login`,{email , password}).then((response)=>{
      const result = response.data.userSignUpp
      if (result.Status) {
        dispatch(UserActions.userAddDetails({name:result.name, token:result.token}))
        navigate('/')
      } else {
        setErrmessage(result.message)
      }
    })
  }

  return (
    <div>
    <div className='container'>
    <div className={classes.login} >
    <h5 className={classes.filogin} >Login</h5>
      <form onSubmit={loginFormsubmit}>
        <div className={classes.control} >
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div  className={classes.control} >
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.button}>
            Login
          </button>
        </div>
        <Link to={'/signup'}>Sign up ?</Link>
        { Errmessage.length>0 && <a style={{ color: 'red' }}  >{Errmessage}</a>}
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login