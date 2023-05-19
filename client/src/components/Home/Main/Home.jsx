import { useState } from 'react';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './style.css';

export default function Home(props) {
    const [clickEvent, setClickEvent] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [speed , setSpeed] = useState(10);
    function clickHandeler(e) {
        setClickEvent(e.target.name);
        setClickCount(prov => prov + 1);
    }
    function setAnimationSpeed(value){
        setSpeed(value);
    }
    // function setPassState(value)
    // {
    //     console.log(value);
    // }

    return (
        <>
            <div className='header'>
                <Header name={props.name} animationSpeed={setAnimationSpeed}/>
            </div>
            <div className="main">
                <SortingVisualizer
                    clickEvent={clickEvent}
                    clickCount={clickCount}
                    animationSpeed={speed}
                 />
            </div>
            <div className="Sidebar">
                <Sidebar
                    LinkHandleClick={clickHandeler} />
            </div>
            <div className='Footer'>

            </div>

        </>
    )
}