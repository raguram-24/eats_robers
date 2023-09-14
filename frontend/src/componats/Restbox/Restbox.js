import React from 'react'
import "./restbox.scss"
import img from "../../img/rest1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faPlus } from '@fortawesome/free-solid-svg-icons';
import Star from '../rating/Star';

function Restbox() {
    const completedStars = 3;
    return (
        <div className='restbox'>
            <div><img src={img}/></div>
            <div ><FontAwesomeIcon icon={faHeart} className='heart'/></div>
            {/* <div><FontAwesomeIcon icon={faPlus}  className='plus'/></div> */}
            <div className='rstar'>
                 {[1, 2, 3, 4, 5].map((starValue) => (
                 <Star key={starValue} filled={starValue <= completedStars} />
                 ))}
             </div>
            <div><h3>KFC</h3></div>
        </div>
    )
}

export default Restbox
