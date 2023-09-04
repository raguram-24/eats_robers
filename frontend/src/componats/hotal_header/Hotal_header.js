import React from 'react'
import './hotal_header.scss'
import logo from "../../img/kfg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong} from '@fortawesome/free-solid-svg-icons';

function Hotal_header() {
    return (
        <div className='hotal_header'>
                <img src={logo}/>
                 <input type='text' placeholder='Search' className='hotal_search'/>
                 <button>Search</button>
                 <FontAwesomeIcon icon={faLeftLong}  className='hotal_back'/>
           
        </div>
    )
}

export default Hotal_header
