import { faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../../firebase';
import './style.css';

export function Header(props) {
    const navigate = useNavigate();
    const[rangeHandaler, setRangeHandaler]=useState(10);


    function logOutHandaler(){
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            
        });
    }
    
    function changeHandaler(e){
        setRangeHandaler((prev)=>e.target.value);
        let value = rangeHandaler;
        props.animationSpeed(value);
    }
    return (
        <>

            <div className="header">

                <div className="slider">
                    <p id="rangeName">Speed</p>
                    <input type="range" min="10" max="50" value={rangeHandaler} onChange={(e)=>{changeHandaler(e)}}/>
                        <p id="rangeValue">{rangeHandaler}</p>
                </div>
         
                {/* <button className="btn1 fbtn"><FontAwesomeIcon icon={faPlay} className="pbtn"/>play</button> */}
                <button className="btn1 btn2" onClick={logOutHandaler}>Log out</button>
                <h1><FontAwesomeIcon icon={faUser} className="ubtn"/>{props.name}</h1>
            </div>
      

        </>
    )
}