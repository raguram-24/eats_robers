import React from 'react'
import Hotal_food from '../hotal_food/Hotal_food'
import "./hotal_food_list.css"


function Hotal_food_list() {
    return (
        <div className='hotal_food_list'>
            <h1>Type of food</h1>
            <div className='food_list'>
                  <Hotal_food/>
                  <Hotal_food/>
                  <Hotal_food/>
                  <Hotal_food/>
                  <Hotal_food/>
                  <Hotal_food/>
            <Hotal_food/>
            </div>
           
        </div>
    )
}

export default Hotal_food_list
