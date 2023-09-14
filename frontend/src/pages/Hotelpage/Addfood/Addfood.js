import React from 'react'
import "./addfood.scss"

function Addfood() {
    return (
        <div className='addfood'>
            <form className='addfoodform'>
                <label>Food Name</label><br/>
                <input type='text'/><br/>
                <label>Type</label><br/>
                <input type='text'/><br/>
                <label>Price</label><br/>
                <input type='text'/><br/>
                
                <button type='submit' className='submit'>Submit</button>
                <button ><a href="/hotelowner" >Back</a></button>
            </form>
        </div>
    )
}

export default Addfood
