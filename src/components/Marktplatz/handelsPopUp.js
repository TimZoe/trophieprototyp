import '../design/Marktplatz/handelsPopUp.css'

import PackVorschau from '../../assets/Images/PackVorschau.png'
import { getKarte } from '../../graphql/queries';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {updateKarte} from '../../graphql/mutations'
import {listKartes} from '../../graphql/queries';
import { Auth } from 'aws-amplify';
import CloseImg from '../../assets/Images/closeImg.png';
import {Route, Link} from "react-router-dom";


function HandelsPopUp(props) {

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
      <div id="fullShowmoreSammlung">

          <div id="KartenInfos">
            <h2 id="ShowMoreKartenId">{props.Karte.id}</h2>
            <div id="KartenInfosWrapper">

              <div id="showMoreINfoWrapper">
                <h3 id="showMoreINfoWrapperH3">
                  Infos
                </h3>
                <h4 id="showMoreINfoWrapperh4">Beschreibung</h4>
              </div>

            </div>
           
            
          </div>




          <div id="ShoreMoreSammmlungButtomWrapper">
            <div id="showMore">
              Mehr
            </div>

            <div id="setOnsale">
              Verkaufen
            </div>

          </div>

       </div>
    ):""; 
    }
   
  export default HandelsPopUp;
  