import React from 'react'
import logo from "../../img/logo.png"
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faInstagram,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons';




function Header() {
    return (
        <div className='header'>
            <div className="top">
                <div className="wrapper">
                   <img className="logo" src={logo}/>
                   <p className="title">EatsRobar</p>
                </div>
                <div className='topbutton'>
                   <button className='sign_in'>Sign In</button>
                   <button className='sign_up'>Sign up</button>
                </div>
                
            </div>

            <div className='contant'>
                <input type='text' placeholder='Search for Restaurant'/>
                <div className='search'>Search </div>
                <h2>Favourite Fooditems Order  One Click</h2>
                <h1>Order Enytime</h1>
                <FontAwesomeIcon icon={faYoutube} className='sicon' />
                <FontAwesomeIcon icon={faTwitter} className='sicon'/>
                <FontAwesomeIcon icon={faFacebookF} className='sicon'/>
                <FontAwesomeIcon icon={faInstagram} className='sicon'/>

            </div>
        </div>
    )
}

export default Header
