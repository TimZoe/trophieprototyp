
import './design/1001.css';
import {Route, Link} from "react-router-dom";

import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';
import TopMenue from '../components/sonstiges/topMenue';
import Player1002 from '../assets/Images/Players/S1002.png';
import VereinsLogo from '../assets/Images/Players/VereinsLogo.jpg';
import KarteS1001 from '../assets/Images/BetaKarten/Tr-02-1001.png';
import Cl1002 from '../assets/Images/BetaKarten/Cl-01-1002.png'
import Ra1002 from '../assets/Images/BetaKarten/Ra-01-1002.png';

function S1002(props) {


  
      
  return (
    <div>
        <TopMenue title="Spieler"/>
        <div id="SpielerContentWrapper">

            <div id="BereichTop">
              <div id="SpielerBild">
                <img src={Player1002} id="SpielerBildimg"/>
              </div>
              <div id="SpielerTopRechts">
                <h2 id="SpielerNameh2">
                  Spielername <br/> 1002
                </h2>
                <img src={VereinsLogo} id="Vereinslogo" />
              </div>
            </div>

            <div id="BereichMid">
              <h2 id="SpielerHeading">
                Verfügbare Editionen
              </h2>
                <div id="BereichMidEditionenWrapper">
            
                  <div id="Editionen">
                  <Link to="/Karten/1002-Ra">

                  <div class="SingleEditionenWrapper Rare">
                        <img src={Ra1002} id="SingleEditionenWrapperimg"/>
                        <h5 id="dashboardSammlungKartenEintragH5">Rare</h5> 
                   </div>
                   </Link>
                  </div>
                  <div id="Editionen">
                  <Link to="/Karten/1002-Cl">

                  <div class="SingleEditionenWrapper">
                        <img src={Cl1002} id="SingleEditionenWrapperimg"/>
                        <h5 id="dashboardSammlungKartenEintragH5">Classic</h5> 
                   </div>
                   </Link>
                  </div>
                </div>
            </div>
          
            <div id="BereichBottom">
              <h2 id="SpielerHeading">
                Spieler Informationen
              </h2>
              <div id="SpielrInformationenWrapper">

                <div id="SpielerinformationenInformatioenWrapper">

                  <h4 id="Spielerinformationenh4">
                    2004
                  </h4>
                  <h5 id="Spielerinformationenh5">
                    Im Verein seit
                  </h5>

                </div>
                <div id="SpielerinformationenInformatioenWrapper">

                <h4 id="Spielerinformationenh4">
                  2004
                </h4>
                <h5 id="Spielerinformationenh5">
                  Im Verein seit
                </h5>

                </div>
                <div id="SpielerinformationenInformatioenWrapper">

                <h4 id="Spielerinformationenh4">
                  2004
                </h4>
                <h5 id="Spielerinformationenh5">
                  Im Verein seit
                </h5>

                </div>
                <div id="SpielerinformationenInformatioenWrapper">

                <h4 id="Spielerinformationenh4">
                  2004
                </h4>
                <h5 id="Spielerinformationenh5">
                  Im Verein seit
                </h5>

                </div>

              </div>
            </div>

        </div>
        
     </div>
  )
  }
 
export default S1002;
