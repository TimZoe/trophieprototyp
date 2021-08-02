import '../design/packs/packsInhalt.css';
import cardPack from '../../assets/Images/Pack.png'
import lilaCard from '../../assets/Images/Cards/CardLila.png';
import GreenCard from '../../assets/Images/Cards/CardGreen.png';
import GreyCard from '../../assets/Images/Cards/CardGreyFB.png';
import {Route, Link} from "react-router-dom";



function packsInhalt(props) {
    return (props.trigger) ?(
      <div>
          <div id="packInhaltWrapper">
            <div id="packsInhaltWrapper">
                <h2 id="countdownHeader">
                  Das war in deinem Pack
                </h2>
                {props.children}

            </div>
            <div id="karten">
                <img src={lilaCard} id="inhaltcard"/>
                <img src={GreenCard} id="inhaltcard"/>
                <img src={GreyCard} id="inhaltcard"/>

            </div>
            <Link to="/dashboard">
                <div id="zuMeinemDbButtom">
                Zu meinem Dashboard
               </div>
            </Link>
          

          </div>


         
           
       </div>
    ):""; 
    }
   
  export default packsInhalt;
  