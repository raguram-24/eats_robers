import React from 'react'
import "./user.scss"
import Header from '../../componats/header/Header'
import Adminlist from '../../componats/adminlist/Adminlist'
import Userlist from '../../componats/userlist/Userlist'

function User() {
    return (
        <div className='user'>
            <Header/>
            <div className='a'>
                <a href='/admin'>Restaurant </a>
                <a href='/Hotelowner'>Food </a>
                <a href='/user'>Customer</a>
            </div>
            <div className='userheader'>
                 <div className='name1'> User Name</div>
                 <div className='mail1'>Email Address</div>
                 <div className='num1'>Phone number</div>
                 <div className='address1'>Address</div>
                 <div className='edit1'></div>
                 
                 
            </div>
           <Userlist/>

           <a href="/addrest"  className='add'><button className='addbutton' >Add</button></a>
        </div>
    )
}

export default User
