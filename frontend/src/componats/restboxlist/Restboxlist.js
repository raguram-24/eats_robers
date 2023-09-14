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
                   <Restbox index={0}/>
                   <Restbox index={1}/>
                   <Restbox index={2}/>
                   <Restbox index={3}/>
                   <Restbox index={4}/>
                   <Restbox index={5}/>
                   <Restbox index={6}/>
                </div>
            </div>
        </div>
    )
}

export default Restboxlist
