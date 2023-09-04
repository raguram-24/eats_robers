import "./restboxlist.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Restbox from "../Restbox/Restbox";
import { useRef, useState } from "react";

function Restboxlist() {
    const [slideNumber,setslideNumber]= useState(0)
    const [isMoved,setisMoved]= useState(false)

    const listRef = useRef()
    const handleclick = (direction)=>{
        setisMoved(true)
        let distance = listRef.current.getBoundingClientRect().x-50
        if(direction === "left" && slideNumber > 0){
            setslideNumber(slideNumber-1)
             listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction === "right" && slideNumber <4){
            setslideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230+distance}px)`
       }
    }
    return (
        <div className="list">
            <div className="listTitle"><p>Popular Restaorant</p></div>
            <div className="wrapper">
             <FontAwesomeIcon icon={faChevronLeft}
              className="sliderArrow left"
              onClick={()=>handleclick("left")}
              style={{display:!isMoved && "none"}}
              />
                <div className="container" ref={listRef}>
                   <Restbox index={0}/>
                   <Restbox index={1}/>
                   <Restbox index={2}/>
                   <Restbox index={3}/>
                   <Restbox index={4}/>
                   <Restbox index={5}/>
                   <Restbox index={6}/>
                   <Restbox index={7}/>
                   <Restbox index={8}/>
                   <Restbox index={9}/>
                </div>
                <FontAwesomeIcon icon={faChevronRight}  
                className="sliderArrow right"
                onClick={()=>handleclick("right")}
                />
            </div>
        </div>
    )
}

export default Restboxlist
