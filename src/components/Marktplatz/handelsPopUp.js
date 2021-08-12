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
import bigger from '../../assets/Images/bigger.png'
import closetight from '../../assets/Images/closetight.png'
import ErfolgsmeldungC from '../dashboard/dashboardSammlungErfolgsmeldung';


function HandelsPopUp(props) {

  const [UserName, setUserName] = useState(0);

    //Diese speichert den UserNamen in const UserName
    async function getUserName() {     
     
      const session = await Auth.currentSession();  
      setUserName(session.idToken.payload['cognito:username']);
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



          

          async function setKarteonSaleF () {

            console.log(props.Karte)
            console.log('Beginn setKarteonsale')
           
            const Karte=props.Karte
            console.log(Karte)
            console.log(console.log(Karte.onSale))
           
            Karte.onSale=true
            console.log(console.log(Karte.onSale))

            delete Karte.createdAt;
            delete Karte.updatedAt;
            console.log(console.log(Karte.onSale))
            const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
            
            
            console.log('finish setKarteonsale')
          
          }
          async function setKarteoffSaleF () {

            console.log(props.Karte)
            console.log('Beginn setKarteonsale')
           
            const Karte=props.Karte
            console.log(Karte)
            console.log(console.log(Karte.onSale))
           
            Karte.onSale=false
            console.log(console.log(Karte.onSale))

            delete Karte.createdAt;
            delete Karte.updatedAt;
            console.log(console.log(Karte.onSale))
            const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
            
            
            console.log('finish setKarteonsale')
          
          }




          const [index, setindex] = useState(1);
          const [userKarten, setuserKarten] = useState([])
          const [MorePopUpInhalt, setMorePopUpInhalt] =useState([])
          const [OnSaleState, setOnSaleState] =useState([])
        
          useEffect (() =>{
            console.log(props.userrKarten)
          })

          function fetchUserKarten () {
            console.log("Ss")
            console.log(props.userrKarten)
            setuserKarten(props.userrKarten)
            console.log(props.userrKarten)
            


          }

          function showErfolg () {
            setErfolgsmeldung(true)
            setTimeout(function(){ setErfolgsmeldung(false) }, 3000);
          }

          const [Erfolgsmeldung ,setErfolgsmeldung]=useState(false)



          function showrightButton() {
            console.log("Status"+ props.Karte.onSale)
             if (props.Karte.onSale==true) {
               
                return (

                  <div 
              onClick={function (){setKarteoffSaleF(index);showErfolg()}}
              id="showMoreSammlungVerkaufenBut">
               Not selln
              </div>
              
              
              )

            } 
            else {
              return (
              
              <div 
              onClick={function (){setKarteonSaleF(index);showErfolg()}}
              id="showMoreSammlungVerkaufenBut">
                Sell
              </div>);
            }
          }
       
            
          



    return (props.trigger) ?(
      <div id="fullShowmoreSammlung" onLoad={fetchUserKarten}>

          <div id="ShowMoreSammlungtop">

              <div id="ShowMoreSammlungcloscollumn">
                <div id="ecclipseclose">
                <button id="close-btns" 
                           onClick={() => props.setTrigger(false)}>

                    <img src={closetight} id="closetight"/>
                </button>
                </div>
              </div>

              <div id="KarteWrapper">
                <img src={props.Karte.Bild} id="ShowMoreSammlungBild"/>
              </div>

          </div>

          <div id="ShowMoreSammlungunten">

             <Link to={props.Karte.KartenLink}>
               
                <div id="SammlungMorecloseecclipse">
                  <img src={bigger} id="biggerimg"/>
                </div>

            </Link> 



            <h2 id="showMoreSammlungidh4">
              {props.Karte.id}
            </h2>

            <div id="showMoreSammlungInfoWrapper">
              <div id="showMoreSammlungInfoBub">
                <h3 id="showMoreSammlungh3">
                  {props.Karte.Preis} €
                </h3>
                <h4 id="showMoreSammlungh4">
                  Preis
                </h4>
              </div>
              <div id="showMoreSammlungInfoBub">
                <h3 id="showMoreSammlungh3">
                  {props.Karte.SpielerName} 
                </h3>
                <h4 id="showMoreSammlungh4">
                  Spieler
                </h4>
              </div>

            </div>
            
            <div id="ErfolgsmeldungWrapper">
             
              <ErfolgsmeldungC
              trigger={Erfolgsmeldung}
              setTrigger={setErfolgsmeldung}
              />

            </div>
            <div id="showMoreSammlungButtonWrapper">


              {showrightButton()}
              



            </div>


          </div>




       </div>
    ):""; 
    }
   
  export default HandelsPopUp;
  