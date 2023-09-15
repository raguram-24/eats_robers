import "./restboxlist.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Restbox from "../Restbox/Restbox";
import { useRef, useState } from "react";
import Header from "../header/Header";

function Restboxlist() {
    
    return (
        
        <div className="list">
            <Header/>
            <div className="wrapper">
                <div className="container" >
                   <Restbox/>
                </div>
            </div>
        </div>
    )
}

export default Restboxlist
