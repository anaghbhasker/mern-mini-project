import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import Adminlogin from '../Pages/Admin/Adminlogin'

function Admin() {


  let Admin = useSelector(state => { return state.Admin.AdminToken })
  console.log(Admin);
  return (
    <div>
        <Routes>
            <Route path='/' element={Admin?<AdminHome/>:<Adminlogin/>}/>
        </Routes>
        <Routes>
            <Route path='/home' element={Admin?<AdminHome/>:<Adminlogin/>}/>
        </Routes>
    </div>
  )
}

export default Admin