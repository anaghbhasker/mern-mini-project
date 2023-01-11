import { useEffect } from "react";
import { Routes ,Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie'
import { UserActions } from "../Store/Userauth";

import SignupPage from '../Pages/User/SignupPage';
import LoginPage from '../Pages/User/LoginPage';
import HomePage from '../Pages/User/HomePage';
import Myaccount from '../Pages/User/Myaccount';
import EditprofilePage from '../Pages/User/EditprofilePage';


function User() {
    
    // const [cookies, setCookie] = useCookies(['jwt']);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     if (Object.keys(cookies).length > 0) {
    //         dispatch(UserActions.userAddDetails({ name: cookies.jwt.name, token: cookies.jwt.token }))
    //     }
    // }, [])
    
    let user = useSelector((state)=>state.user)
    return (
        <div>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
                <Routes>
                    <Route path='/signup' element={<SignupPage/>}/>
                </Routes>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
                <Routes>
                    <Route path='/myaccount' element={user.userToken?<Myaccount />:<LoginPage/>}/>
                </Routes>
                <Routes>
                    <Route path='/editaccount' element={user.userToken?<EditprofilePage/>:<LoginPage/>}/>
                </Routes>
        </div>
    )
}







export default User

