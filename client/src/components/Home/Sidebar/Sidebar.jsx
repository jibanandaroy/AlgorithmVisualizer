import SortingVisualizer from "../../SortingVisualizer/SortingVisualizer";
import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css';

export default function Sidebar(props) {
    const sortRef = useRef(null);
    const searchRef = useRef(null);

    let handleClick = (e, field) => {
        field.current.nextElementSibling.classList.toggle("sub-menu");
        field.current.querySelector('.dropdown').classList.toggle('fa-rotate-90');
    }
  

    return (
        <>

            <div className="side-bar">
                <div id="title">
                    <h2>Welcome to</h2>
                    <h1>Algorithm Vizualizer</h1>
                </div>
                <div className="menu">
                    
                    <div className="item">
                        <div className="array">
                        <Link className="sub-item" name="newArray" onClick={e => props.LinkHandleClick(e)}> generate new array </Link>
                        </div>
                        <a className="sub-btn" ref={sortRef} onClick={e => handleClick(e, sortRef)} >Sorting
                            <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                        </a>
                        <div className="sub-menu">
                            
                            <Link className="sub-item" name="marge" onClick={e => props.LinkHandleClick(e)}> margeSort </Link>
                            <Link className="sub-item" name="bubble" onClick={e => props.LinkHandleClick(e)}> bouble sort </Link>
                            <Link className="sub-item" name="selection" onClick={e => props.LinkHandleClick(e)}>selection sort </Link>
                        

                        </div>
                    </div>
                    <div className="item">
                        <a className="sub-btn" ref={searchRef} onClick={e => handleClick(e, searchRef)} >Searching
                            <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                        </a>
                        <div className="sub-menu">
                            <a href="" className="sub-item">binary search</a>
                            <a href="" className="sub-item">linear search</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}