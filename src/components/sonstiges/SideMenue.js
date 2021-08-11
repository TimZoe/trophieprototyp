import '../design/packs/packsInhalt.css';
import MenueLogo from '../../assets/Images/trophieLogo.png';
import CloseImg from '../../assets/Images/closing.png';
import '../design/sonstiges/SideMenue.css';
import searchImg from '../../assets/Images/searchImg.png'
import {Route, Link} from "react-router-dom";
import sideMenuedbimg from '../../assets/Images/sidemenuedbb.png'
import sideMenuempimg from '../../assets/Images/sidemenuempb.png'
import sideMenuelbimg from '../../assets/Images/sidemenuelbb.png'
import sideMenuealleimg from '../../assets/Images/sidemenuealleb.png'


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

                <div id="SideMenueContentWrapper">
                    <Link to="./dashboard">
                     <div id="SideMenueBoxWrapper">
                        <div id="SideMenueEcclipse">
                            <div id="SideMenueEcclipseInner">
                                <img src={sideMenuedbimg} id="SideMenueinnerecimg"/>
                            </div>
                        </div>

                        <h2 id="SideMenueh2">
                            Dashboard
                        </h2>
                    </div>   
                    </Link>
                    


                    <Link to="./Marktplatz">
                      <div id="SideMenueBoxWrapper">
                        <div id="SideMenueEcclipse">
                            <div id="SideMenueEcclipseInner">
                                <img src={sideMenuempimg} id="SideMenueinnerecimg"/>
                            </div>
                        </div>

                        <h2 id="SideMenueh2">
                            Marktplatz
                        </h2>
                    </div>  
                    </Link>
                    <Link to="./alleKarten">
                    <div id="SideMenueBoxWrapper">
                        <div id="SideMenueEcclipse">
                            <div id="SideMenueEcclipseInner">
                                <img src={sideMenuealleimg} id="SideMenueinnerecimg"/>
                            </div>
                        </div>

                        <h2 id="SideMenueh2">
                            Alle Karten
                        </h2>
                    </div>
                    </Link>

                    <Link to="./Leaderboards">
                    <div id="SideMenueBoxWrapper">
                        <div id="SideMenueEcclipse">
                            <div id="SideMenueEcclipseInner">
                                <img src={sideMenuelbimg} id="SideMenueinnerecimg"/>
                            </div>
                        </div>

                        <h2 id="SideMenueh2">
                            Leaderboards
                        </h2>
                    </div>
                    </Link>


                </div>

                        
            <div id="SideMenueButton">
                <img src={MenueLogo} id="SideMenueButtonImg"/>
            </div>

        </div>
        
                        
           
    </div>
    ):""; 
    }
   
  export default SideMenue;
  