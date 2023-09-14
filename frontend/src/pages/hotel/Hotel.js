import React from 'react'
import "./hotel.scss"
import Hotal_food_list from '../../componats/hotal_food_list/Hotal_food_list'
import Header from '../../componats/header/Header'

function Hotal() {
    return (
        <div>
           <Header/>
            <Hotal_food_list/>
        </div>
    )
}

export default Hotal
