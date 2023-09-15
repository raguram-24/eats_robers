import React from 'react'
import "./adminhome.scss"
import Header from '../../../componats/header/Header'
import Adminlist from '../../../componats/adminlist/Adminlist'

function Adminhome() {
    
    return (
        <div className='admin'>
            <Header/>
            <div className='a'>
                <a href='/admin'>Restaurant </a>
                <a href='/Hotelowner'>Food </a>
                <a href='/user'>Customer</a>
            </div>
            <div className='adminheader'>
                 <div className='name'>Restaurant Name</div>
                 <div className='num'>Phone number</div>
                 <div className='address'>Address</div>
                 <div className='edit'></div>
            </div>
           <Adminlist/>
           <Adminlist/>
           <Adminlist/>

           <a href="/addrest"  className='add'><button className='addbutton' >Add</button></a>
        </div>
    )
}

export default Adminhome
