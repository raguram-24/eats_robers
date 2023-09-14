import React from 'react'
import "./hotel.scss"
import Hotal_header from '../../componats/hotal_header/Hotal_header'
import Hotal_banner from '../../componats/hotal_banner/Hotal_banner'
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
