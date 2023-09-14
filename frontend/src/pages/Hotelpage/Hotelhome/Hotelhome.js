import React from 'react'
import "./hotelhome.scss"
import Header from '../../../componats/header/Header'
import Foodlist from '../../../componats/Foodlist/Foodlist'


function Hotelhome() {
    return (
        <div className='Hotelhome'>
            
            <Header/>
            <div className='a'>
                <a href='/admin'>Restaurant list</a>
                <a href='/Hotelowner'>Food list</a>
            </div>
            <div className='Hotelhomeheader'>
                 <div className='name'>Food Name</div>
                 <div className='num'>Price</div>
                 <div className='address'>Ingredients</div>
                 <div className='edit'>Edit</div>
            </div>
            <Foodlist/>
            <Foodlist/>
            <Foodlist/>
            <Foodlist/>
           <button ><a href="/addfood">Add</a></button>
        </div>
    )
}

export default Hotelhome
