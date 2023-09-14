import React from 'react'
import "./contant.scss"
import img1 from "../../img/img1.jpg"
import img2 from "../../img/img2.jpg"
import img3 from "../../img/img3.webp"
import img4 from "../../img/img4.webp"
import img5 from "../../img/img5.jpg"
import img6 from "../../img/img6.jpg"

function Contant() {
    return (
        <div className='contant'>
            <div className='contant1'>
                <div className='contant2'>
                    <img src={img1}></img>
                </div>
                <div className='contant2'>
                    <img src={img2}></img>
                </div>
                <div className='contant2'>
                   <img src={img3}></img>
                </div>
            </div>
            <div className='contant1'>
                
                <div className='contant2'>
                  <img src={img4}></img>
                </div>
                <div className='contant2'>
                   <img src={img5}></img>
                </div>
                <div className='contant2'>
                   <img src={img6}></img>
                </div>
            </div>
        </div>
    )
}

export default Contant
