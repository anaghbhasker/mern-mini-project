import React from 'react'
import Banner from '../../Components/User/Banner/Banner'
import Footer from '../../Components/User/Footer/Footer'
import Header from '../../Components/User/Header/Header'

function HomePage() {
  return (
    <div style={{backgroundColor:"#3f5871"}}>
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default HomePage