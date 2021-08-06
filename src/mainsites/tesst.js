
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import LogInSuc from '../components/sonstiges/LogInSuc';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';

import {updateKarte} from '../graphql/mutations'


Amplify.configure(awsconfig);


function Test2() {


  const [UserName, setUserName] = useState(0);


  const [Kartes, setKartes] = useState ([]);
  const [userKarten, setuserKarten]= useState([]);
  const [WertUserKarten, setWertUserKarten] = useState(0);
  const [TrophieKartenUser, setTrophieKartenUser] = useState(0);
  const [RareKartenUser, setRareKartenUser] = useState(0);
  const [ClassicKartenUser, setClassicKartenUser] = useState(0);
  const [TrophieScore, setTrophieScore] = useState(0);
  const [UserKartenAnzahl, setuserKartenAnzahl] = useState(0);
  const [userTrophieKarten, setuserTrophieKarten] = useState([]);
  const [userRareKarten, setuserRareKarten] = useState([]);
  const [userClassicKarten, setuserClassicKarten] = useState([]);
  const [ownerTrophieKartenArray, setownerTrophieKartenArray] = useState([]);
  const [packInhaltCard, setpackInhaltCard] = useState([]);



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
}
return (

    <div>

            <h2> Data Check</h2>
            <button onClick={DataTrigger}>
                Fetch Data
            </button>
            <h2>Alle Karten</h2>
            <h3>{JSON.stringify(Kartes)}</h3>
            <h2>Alle User Karten</h2>
            <h3>{JSON.stringify(userKarten)}</h3>
            <h2>Aktueller User</h2>
            <h3>{UserName}</h3>
            


            <h4>


                Ablauf: Button triggert:<br/>
                <button onClick={BuildOwneristTrophieArray}>
                    BuildOwneristTrophieArray
                </button>

                <br/>
                <h2>OwneristTrophie Array {JSON.stringify(ownerTrophieKartenArray)}</h2>
                <br/>
                Hierraus eine Karte auswählen<br/>
               
                 <br/>
                <h2>{indxfinder(ownerTrophieKartenArray.length)}</h2> <br/>
                printen index von TrophieOwnerArray <br/>
                <button onClick={createpackInhaltCard}>createpackInhaltCardButton</button>
                <h2>{JSON.stringify(packInhaltCard)}</h2>
                <br/>

                <button onClick={übergabeanuser}>
                    Übergabe an user Button
                </button>
                 
                <br/>

                -change owner(Input:entsprechendes Array von oben, neuer Besitzer (username))
                <br/>


            </h4>
            


    </div>
)



}
export default  withAuthenticator(Test2);