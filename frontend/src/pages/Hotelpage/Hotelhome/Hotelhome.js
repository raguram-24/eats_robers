import React from 'react'
import "./hotelhome.scss"
import Header from '../../../componats/header/Header'
import Foodlist from '../../../componats/Foodlist/Foodlist'


function Hotelhome() {
    return (
        <div className='Hotelhome'>
            
            <Header/>
            <div className='a'>
                <a href='/admin'>Restaurant </a>
                <a href='/Hotelowner'>Food </a>
                <a href='/user'>Customer</a>
            </div>
            <div className='Hotelhomeheader'>
                 <div className='name'>Food Name</div>
                 <div className='type'>Type</div>
                 <div className='price'>Price</div>
                 
                 <div className='edit'></div>
            </div>
            <Foodlist/>
            <Foodlist/>
            <Foodlist/>
            <Foodlist/>
            <a href="/addfood"  className='add'><button className='addbutton' >Add</button></a>
        </div>
    )
}

export default Hotelhome
