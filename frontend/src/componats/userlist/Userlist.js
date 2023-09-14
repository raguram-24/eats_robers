import React from 'react'
import "./userlist.scss"

function Userlist() {
    return (
        <div>
             <div className='userlist'>
                 <div className='names'>User Name</div>
                 <div className='mails'> Email Address</div>
                 <div className='nums'>Phone number</div>
                 <div className='addresses'>Address</div>
                 <div className='edits'>
                    <button className='update'>Update</button>
                    <button className='delete'>Delete</button>
                 </div>
                
            </div>
            
        </div>
    )
}

export default Userlist
