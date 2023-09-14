import React from 'react'
import "./adminhome.scss"
import Header from '../../../componats/header/Header'
import Adminlist from '../../../componats/adminlist/Adminlist'

function Adminhome() {
    return (
        <div className='admin'>
            <Header/>
            <div className='a'>
                <a href='/admin'>Restaurant list</a>
                <a href='/Hotelowner'>Food list</a>
            </div>
            <div className='adminheader'>
                 <div className='name'>Restaurant Name</div>
                 <div className='num'>Phone number</div>
                 <div className='address'>Address</div>
                 <div className='edit'>Edit</div>
            </div>
           <Adminlist/>
           <Adminlist/>
           <Adminlist/>

           <button ><a href="/addrest">Add</a></button>
        </div>
    )
}

export default Adminhome
