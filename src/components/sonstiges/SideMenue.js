import '../design/packs/packsInhalt.css';
import MenueLogo from '../../assets/Images/trophieLogo.png';
import CloseImg from '../../assets/Images/closeImg.png';
import '../design/sonstiges/SideMenue.css';
import searchImg from '../../assets/Images/searchImg.png'
import {Route, Link} from "react-router-dom";



function SideMenue(props) {
    return (props.trigger) ?(
    <div>
        <div id="SideMenue">
            <div id="SideMenueTop">
                <div id="MenueClose">

                <button className="close-btn" 
                           onClick={() => props.setTrigger(false)}>

                    <img src={CloseImg} id="closeImg"/>
                </button>

                </div>
            </div>
            {props.children}
            <div id="SideMenueContent">
                <Link to="/dashboard">
                    <div id="SideMenueEintrag">
                    <h3 id="MenueEintrag">
                        Dashboard
                    </h3>
                    </div>
                </Link>
                
                <Link to="/Leaderboards">
                    <div id="SideMenueEintrag">
                        <h3 id="MenueEintrag">
                        Leaderboards
                        </h3>
                     </div>
                </Link>

                <Link to="/tauschen">
                    <div id="SideMenueEintrag">
                    <h3 id="MenueEintrag">
                        Tauschen
                    </h3>
                    </div>   
                </Link>
                
                <Link to="/alleKarten">
                <div id="SideMenueEintrag">
                    <h3 id="MenueEintrag">
                        Alle Karten
                    </h3>
                    </div>  
                </Link>
                


            </div>

            <div id="SideMenueSearch">
                <h3 id="suchenh3">
                    Suchen ...
                </h3>
                <img src={searchImg} id="suchenImg"/>
            </div>
            
            <div id="SideMenueButton">
                <img src={MenueLogo} id="SideMenueButtonImg"/>
            </div>

        </div>
        
                        
           
    </div>
    ):""; 
    }
   
  export default SideMenue;
  