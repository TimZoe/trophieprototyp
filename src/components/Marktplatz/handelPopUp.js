import '../design/Marktplatz/handelPopUp.css'

import PackVorschau from '../../assets/Images/PackVorschau.png'
import { getKarte } from '../../graphql/queries';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {updateKarte} from '../../graphql/mutations'
import {listKartes} from '../../graphql/queries';
import { Auth } from 'aws-amplify';
import CloseImg from '../../assets/Images/closeImg.png';
import {Route, Link} from "react-router-dom";


function HandelPopUp(props) {

  const [UserName, setUserName] = useState(0);

    //Diese speichert den UserNamen in const UserName
    async function getUserName() {     
     
      const session = await Auth.currentSession();  
      setUserName(session.idToken.payload['cognito:username']);
  }





    function BuyCard () {
      console.log("BuyingProzessStarte")
      getUserName();
      //Check User Balance: Anname immer genug
      //Danch nur Change Owner mit dieser Karte
      changeOwner(props.Karte, UserName)
      setKarteoffSaleF(props.Karte);
      //Dann Balance updatn minus Preis

      props.setTrigger(false);

    }
          const zuwechselndeKarte =[]
          async function changeOwner (zuwechselndeKarte, newOwner) {
            getUserName();
            console.log(UserName)
            console.log('Beginn Chamge Owner')

            console.log(zuwechselndeKarte)
            console.log(zuwechselndeKarte.Owner)
            console.log("switch to " + newOwner)

            const Karte=zuwechselndeKarte

            var Besitzer= Karte.Owner;
            console.log(Besitzer+'Besitzer initial')
            Besitzer =newOwner;
            Karte.Owner=Besitzer

            delete Karte.createdAt;
            delete Karte.updatedAt;

            const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
          //  const KarteList= [...Kartes];
            zuwechselndeKarte = KarteData.data.updateKarte;
           
          }



          async function setKarteoffSaleF (karte) {
  
            console.log('Beginn setKarteoFFsale')
            const Karte=karte
          
            
           
            Karte.onSale=false
          
            delete Karte.createdAt;
            delete Karte.updatedAt;
          
            const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
           // const KarteList= [...Kartes];
            karte = KarteData.data.updateKarte;
            console.log('finish setKarteooffsale')
          
          }



    return (props.trigger) ?(
      <div id="fullHandelPopUp">

            <div id="handelPopUpTop">
             
                <button className="close-btn" 
                           onClick={() => props.setTrigger(false)}>

                    <img src={CloseImg} id="closeImg"/>
                </button>




            </div>
            <div id="handelPopUpMid">
              <div id="handelPopUpmidCard">
                <img src={props.Karte.Bild} id="midCardBil"/>
              </div>
              
              <div id="handelPopUpRight">

                  <h2 id="handelPopUpmidh2">
                  {props.Karte.id}
                  </h2>

                  <h3 id="handelPopUpmidh3">
                  Info
                </h3>
                <h4 id="handelPopUpmidh4">
                  Beschreibung
                </h4>

                <h3 id="handelPopUpmidh3">
                  Info
                </h3>
                <h4 id="handelPopUpmidh4">
                  Beschreibung
                </h4>

                <h3 id="handelPopUpmidh3">
                  Info
                </h3>
                <h4 id="handelPopUpmidh4">
                  Beschreibung
                </h4>

                          
              </div>
          </div>

          <div id="PreisentewicklungKarte">

          Weiterer Content bzgl Preis

          </div>


              <div id="handelPopupButtons">
              <button className="close-btn" >
                           

                    
                </button>
                <button id="KaufenButton" onClick={BuyCard} >Kaufen</button>
               <Link to={props.Karte.KartenLink}>
                 <div id="MehrzuKarte">
                  Mehr
                  </div>
               </Link>
                
              </div>


       </div>
    ):""; 
    }
   
  export default HandelPopUp;
  