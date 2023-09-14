import React from 'react'
import "./addrest.scss"

function Addrest() {
    return (
        <div className='addrest'>
            <form className='addrestform'>
                <label>Restaurant Name</label><br/>
                <input type='text'/><br/>
                <label>Mobile Number</label><br/>
                <input type='text'/><br/>
                <label>Address</label><br/>
                <input type='text'/><br/>
                <button type='submit' className='submit'>Submit</button>
                <button ><a href="/admin" >Back</a></button>
            </form>
        </div>
    )
}

export default Addrest
