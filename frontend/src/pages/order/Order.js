import React, { useState } from 'react'
import "./order.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faPlus,faLeftLong } from '@fortawesome/free-solid-svg-icons';
import food from '../../img/Food1.jpg'

function Order() {
    const [count, setCount] = useState(1);
    const price=500
    const sum = price*count
    return (
        <div className='order'>
            {/* <div><FontAwesomeIcon icon={faLeftLong}  className='hotal_back'/></div> */}
            <div className='order2'> <h1>ORDER</h1></div>
            <hr></hr>
            <div className='orderinside'>
                <div>
                     <h1>Food name</h1>
                     <img src={food}></img>
                </div>
                <div>
                       <h2>price :- <span className='price'>{price}.00</span></h2>
                       <button className='add' onClick={() => setCount(count + 1)}>Add</button> <b> {count}</b> 
                      <span className='cal'>
                       <h3>
                          {count}*{price}.00</h3>
                          <hr></hr>

                          <h3>
                          {sum}.00
                       </h3>
                       </span>
                       
                </div>
            </div>
            <br></br>
            <hr></hr>
            <div className='orderbutton'>
                <button className='cancel'>cancel</button>
                <button className='orderbuy'>Buy</button>
            </div>
        </div>
    )
}

export default Order
