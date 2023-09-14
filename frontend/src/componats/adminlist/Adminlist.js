import React from 'react'
import "./adminlist.scss"

function Adminlist() {
    return (
        <div>
             <div className='adminlist'>
            <div className='name'>Restaurant Name</div>
                 <div className='num'>Phone number</div>
                 <div className='address'>Address</div>
                 <div className='edit'> <button className='update'>Update</button>
                 <button className='delete'>Delete</button></div>
            </div>
            
        </div>
    )
}

export default Adminlist
