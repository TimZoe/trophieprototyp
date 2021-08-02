import LeaderMenueAuswahlImg from '../../assets/Images/buttonImg.png';
import '../design/leaderboards/leaderboardsLanding.css';
import {Route, Link} from "react-router-dom";
import more from '../../assets/Images/buttonImg.png';
import trophiScoreIMG from '../../assets/Images/Ellipse.png';


function LeaderboardsLanding(props) {



    return (props.trigger) ?(
      <div>
          
        
            <div id="LeaderboardWrapper">

              <h3 id="LeaderboardWrapperH3">
              Welches Leaderboard möchtest du ansehen?
              </h3>
              
              <div id="LeaderboardKachelWrapper">
                <Link to="/TrophieScore">
                   <div id="LeaderboardKachel">

                      <h3 id="LeaderboardKachelh3">
                        Trophie Score
                      </h3>
                      <img src={trophiScoreIMG} id="LeaderboardKachelIMG"/>
                      <h6 id="LeaderboardKachelh6">
                      Dein Trophie Score hängt von der Anzhal deiner Karten ab
                      </h6>
                      <div id="LeaderboardKachelunten">
                        <img src={more} id="LeaderboardKacheluntenImg"/>
                      </div>
                    </div>
                </Link>

                <Link to="/TrophieScore">
                   <div id="LeaderboardKachel">

                      <h3 id="LeaderboardKachelh3">
                           Trophie Karten
                      </h3>
                      <img src={trophiScoreIMG} id="LeaderboardKachelIMG"/>
                      <h6 id="LeaderboardKachelh6">
                      Dein Trophie Score hängt von der Anzhal deiner Karten 
                      </h6>
                      <div id="LeaderboardKachelunten">
                        <img src={more} id="LeaderboardKacheluntenImg"/>
                      </div>
                    </div>
                </Link>

                <Link to="/TrophieScore">
                   <div id="LeaderboardKachel">

                      <h3 id="LeaderboardKachelh3">
                        Portfolio Wert
                      </h3>
                      <img src={trophiScoreIMG} id="LeaderboardKachelIMG"/>
                      <h6 id="LeaderboardKachelh6">
                      Dein Trophie Score hängt von der Anzhal deiner Karten ab
                      </h6>
                      <div id="LeaderboardKachelunten">
                        <img src={more} id="LeaderboardKacheluntenImg"/>
                      </div>
                    </div>
                </Link>

                <Link to="/TrophieScore">
                   <div id="LeaderboardKachel">

                      <h3 id="LeaderboardKachelh3">
                         Karten Anzahl
                      </h3>
                      <img src={trophiScoreIMG} id="LeaderboardKachelIMG"/>
                      <h6 id="LeaderboardKachelh6">
                      Dein Trophie Score hängt von der Anzhal deiner Karten ab
                      </h6>
                      <div id="LeaderboardKachelunten">
                        <img src={more} id="LeaderboardKacheluntenImg"/>
                      </div>
                    </div>
                </Link>
               

              </div>
              
              

              

            </div>
       </div>
    ):""; 
    }
   
  export default LeaderboardsLanding;
  