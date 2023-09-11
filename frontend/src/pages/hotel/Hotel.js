import React from 'react'
import "./hotel.css"
import Hotal_header from '../../componats/hotal_header/Hotal_header'
import Hotal_banner from '../../componats/hotal_banner/Hotal_banner'
import Hotal_food_list from '../../componats/hotal_food_list/Hotal_food_list'

function Hotal() {
    return (
        <div>
            <Hotal_header/>
            <Hotal_food_list/>
        </div>
    )
}

export default Hotal
