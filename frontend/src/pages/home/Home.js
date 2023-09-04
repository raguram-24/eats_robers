import React from 'react'
import Header from '../../componats/header/Header'
import "./home.scss"
import Restboxlist from '../../componats/restboxlist/Restboxlist'

function Home() {
    return (
        <div className='home'>
           <Header/>
           <Restboxlist/>
           <Restboxlist/>
           <Restboxlist/>
           <Restboxlist/>
        </div>
    )
}

export default Home
