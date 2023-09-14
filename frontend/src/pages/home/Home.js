import React from 'react'
import Header from '../../componats/header/Header'
import "./home.scss"
import Restboxlist from '../../componats/restboxlist/Restboxlist'
import Contant from '../../componats/contant/Contant'

function Home() {
    return (
        <div className='home'>
           <Header/>
           <Contant/>
        </div>
    )
}

export default Home
