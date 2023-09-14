import React from 'react'
import logo from "../../img/logo.png"
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faInstagram,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




function Header() {
    return (
        <div className='header'>
            <div className="top">
                <div className="wrapper">
                   <img className="logo" src={logo}/>
                   <p className="title"><a href='/'>EatsRober</a></p>
                </div>
                <div className='topbutton'>
                    <div className='nav'>
                        <a href="/">
                        <h3>Home</h3>
                        </a>
                        <a href="/hotel">
                    <h3>Restaurant</h3>
                    </a>
                    <a href='/food'>
                    <h3>Foods</h3>
                    </a>
                    
                    </div>
                   <button className='sign_in' ><a href="/login">Sign In</a></button>
                   <button className='sign_up'><a  href="/signup">Sign up</a></button>
                </div>
                
            </div>

            <div className='contant'>
                <input type='text' placeholder='Search for Restaurant'/>
                <div className='search'>Search </div>
                <h2>Favourite Fooditems Order  One Click</h2>
                <h1>Order Anytime</h1>
                <FontAwesomeIcon icon={faYoutube} className='sicon' />
                <FontAwesomeIcon icon={faTwitter} className='sicon'/>
                <FontAwesomeIcon icon={faFacebookF} className='sicon'/>
                <FontAwesomeIcon icon={faInstagram} className='sicon'/>

            </div>
        </div>
    )
}

export default Header
