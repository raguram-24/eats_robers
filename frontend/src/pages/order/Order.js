import React from 'react'
import "./order.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faPlus,faLeftLong } from '@fortawesome/free-solid-svg-icons';

function Order() {
    return (
        <div className='order'>
            <div><FontAwesomeIcon icon={faLeftLong}  className='hotal_back'/></div>
            <div className='order2'> <h1>ORDER</h1></div>
            <hr></hr>
        </div>
    )
}

export default Order
