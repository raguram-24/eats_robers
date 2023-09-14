import React, { useState } from 'react'
import "./hotal_food.scss"
import img from "../../img/Food1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faPlus } from '@fortawesome/free-solid-svg-icons';

function Hotal_food() {
    const [heart,Setheart] = useState(false)
    return (
        <div className='hotal_foot'>
            <div>
                <img src={img} className='food_img'/>
            </div>
            <FontAwesomeIcon icon={faHeart}  onClick={ ()=>Setheart(!heart)} className={heart===false?'food_like':'food_likes'}/>
            
           
            
            <div className='food_name'>
               Ring loader
            </div>
           <div className='food_price'>
               LKR1,590.00
           </div>
           <a href='/order'><span className='food_Quantity'>order</span></a>
            
        </div>
    )
}

export default Hotal_food
