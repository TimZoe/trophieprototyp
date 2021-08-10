import '../design/packs/packsInhalt.css';
import awsconfig from '../../aws-exports';
import cardPack from '../../assets/Images/Pack.png'
import lilaCard from '../../assets/Images/Cards/CardLila.png';
import GreenCard from '../../assets/Images/Cards/CardGreen.png';
import GreyCard from '../../assets/Images/Cards/CardGreyFB.png';
import {Route, Link} from "react-router-dom";
import {listKartes} from '../../graphql/queries';
import {updateKarte} from '../../graphql/mutations'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';




Amplify.configure(awsconfig);


function PacksInhalt(props) {

  const [ownerTrophieKartenArray, setownerTrophieKartenArray] = useState([]);
  const [packInhaltCard, setpackInhaltCard] = useState([]);
  const [UserName, setUserName] = useState(0);
  const [Kartes, setKartes] = useState ([]);
  const [userKarten, setuserKarten]= useState([]);






useEffect(()=> {

  setpackInhaltCard(props.packsInhaltCard)
})




    return (props.trigger) ?(
      <div>
          <div id="packInhaltWrapper">
            <div id="packsInhaltWrapper">
            
             


                <h2 id="countdownHeader">
                  Das war in deinem Pack
                </h2>
                {props.children}

            </div>
            <div id="packInhaltinhaltWrapper">
            <div id="karten">
                   <img src={packInhaltCard.Bild} id="inhaltcard"/>
                </div>
                <div id="PackInhaltTextInfo">
                  <h2 id="PackInahltCardh2">{packInhaltCard.id}</h2>

                  <h3 id="PackInahltCardh3">{packInhaltCard.SpielerLink}</h3>
                  <h4 id="PackInahltCardh4">Spieler</h4>

                  <h3 id="PackInahltCardh3">{packInhaltCard.Anzahl}</h3>
                  <h4 id="PackInahltCardh4">Preis</h4>

                  <h3 id="PackInahltCardh3">{packInhaltCard.Preis}</h3>
                  <h4 id="PackInahltCardh4">Preis</h4>
                  <Link to="/dashboard">
                  <div id="zuMeinemDbButtom">
                   Zum Dashboard
                   </div>
                   </Link>
                </div>
           


        	     
            </div>

         
           
          

          </div>


         
           
       </div>
    ):""; 
    }
   
  export default PacksInhalt;
  