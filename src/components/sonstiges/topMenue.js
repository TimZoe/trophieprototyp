import '../design/sonstiges/topMenue.css';
import {Route, Link} from "react-router-dom";
import topMenueLogo from '../../assets/Images/trophieLogoclean.png';
import menueButton from '../../assets/Images/hamburgermenue.png';
import { useState, useEffect } from 'react';
import SideMenue from './SideMenue';


function TopMenue(props) {

    const [ButtonPopUp, setButtonPopUp] = useState(false);
   
    return (
      <div>

            <div id="topMenue">
                <Link to="/dashboard">
                     <img src={topMenueLogo} id="topMenueImg"/>
                </Link>
                <div id="topMenueWrapper">
                    <h3 id="title">{props.title}</h3>
                    <button onClick={() => setButtonPopUp(true)}>
                        <div id="menueButtom">
                            <img src={menueButton} id="menueButtonImg"/>
                        </div>
                    </button>
                </div>
            </div>
            <SideMenue trigger={ButtonPopUp} setTrigger={setButtonPopUp}>   
            </SideMenue>
      </div>
    ); 
    }
   
  export default TopMenue;
  

