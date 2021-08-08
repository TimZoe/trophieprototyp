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


  async function getUserName() {     
   
    const session = await Auth.currentSession();  
    setUserName(session.idToken.payload['cognito:username']);
}

const fetchKarten = async () => {

    try {
      const KarteData = await API.graphql(graphqlOperation(listKartes));
      const KarteList = KarteData.data.listKartes.items;
      console.log(KarteList);
      setKartes(KarteList)
    }
    catch(error) {
      console.log(error)
    }
 }
 var newuserArray= []

   function getUserKarten()  {
   
     Kartes.map(Karte => {  

       if(Karte.Owner.includes(UserName) == true) {                                     
         newuserArray.push(Karte)        
         setuserKarten(newuserArray)              
       }
       else {
      
       }               
      })}



        function DataTrigger () {
          
                fetchKarten();
                getUserName();
                getUserKarten();
        }

var HelpOwnerTrophieKartenArray= []  
function BuildOwneristTrophieArray () {
    Kartes.map(Karte => {  
         
        if(Karte.Owner.includes("trophie") == true) {                                     
          HelpOwnerTrophieKartenArray.push(Karte)        
          setownerTrophieKartenArray(HelpOwnerTrophieKartenArray)              
        }
        else {
       
        }               
       })}

       Math.random();
       Math.floor(1.9999);
       Math.floor(1)

 function indxfinder (limit) {
    return Math.floor(Math.random()*Math.floor(limit));
          }
          

 function createpackInhaltCard () {
    setpackInhaltCard(ownerTrophieKartenArray[indxfinder(ownerTrophieKartenArray.length)])
 }

 async function übergabeanuser () {
    const Karte=packInhaltCard;
    var Besitzer= Karte.Owner;
    Besitzer =UserName;
            Karte.Owner=Besitzer;
            delete Karte.createdAt;
            delete Karte.updatedAt;

            const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
            const KarteList= [...ownerTrophieKartenArray];
            setpackInhaltCard(KarteData.data.updateKarte)
            console.log(packInhaltCard)
}

    return (props.trigger) ?(
      <div>
          <div id="packInhaltWrapper">
            <div id="packsInhaltWrapper">
            <button onClick={DataTrigger}>
              1                   
            </button>
            &nbsp; &nbsp;  &nbsp;   &nbsp;  &nbsp; 



            <button onClick={BuildOwneristTrophieArray}>
                    2
                </button>
                &nbsp; &nbsp;  &nbsp;   &nbsp;  &nbsp; 
            <button onClick={createpackInhaltCard}>3</button>
                
                &nbsp; &nbsp;  &nbsp;   &nbsp;  &nbsp; 
              <button onClick={übergabeanuser}>
                4
              </button>
                &nbsp; &nbsp;  &nbsp;   &nbsp;  &nbsp; 


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
  