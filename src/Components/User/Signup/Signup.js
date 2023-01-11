import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Signup.module.css'
import Axios from 'axios'
import { userAPI } from '../../../API'

function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [Errmessage,setErrmessage]=useState("")

    const navigate= useNavigate()

    const signUpform=(e)=>{
        e.preventDefault();
        Axios.post(`${userAPI}register`,{ name , email , phone , password}).then((res)=>{
            if (res.data.token) {
                navigate('/login')
            } else {
                setErrmessage('Email already defined')
            }
        })
    }
  return (
    
    <div>
        <div>
            <div className={classes.Signup} >
                        <h5 className={classes.fiSignup}>Signup</h5>
                <form onSubmit={signUpform}>
                 
                    <div className={classes.control} >
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className={classes.control} >
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={classes.control} >
                        <label htmlFor="name">Phone</label>
                        <input type="number" required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    </div>
                    <div className={classes.control} >
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <div className={classes.actions}>
                        <button type="submit" className={classes.button}>
                            Signup
                        </button>
                    </div>
                    <Link to='/login'>Already have an account?</Link>
                    { Errmessage.length>0 && <a style={{ color: 'red' }}  >{Errmessage}</a>}
                </form>
            </div>

        </div>
    </div>
  )
}

export default Signup