import React from 'react'
import "./foodlist.scss"

function Foodlist() {
    return (
        <div>
             <div className='foodlist'>
            <div className='name'>Food Name</div>
            <div className='type'>Type</div>
                 <div className='price'>Price</div>
                 
                 <div className='edit'> <button className='update'>Update</button>
                 <button className='delete'>Delete</button></div>
            </div>
            
        </div>
    )
}

export default Foodlist
