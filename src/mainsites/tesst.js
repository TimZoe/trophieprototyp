
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import LogInSuc from '../components/sonstiges/LogInSuc';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import "./design/test.css"

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
  const [onSaleKarten, setonSaleKarten] = useState([]);


        function DataTrigger1 () {
                fetchKarten();
                getUserName();
                getUserKarten();
        }

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



      var newonSaleArray= []

      function getonSaleKarten()  {
   
        Kartes.map(Karte => {  
   
          if(Karte.onSale == true) {                                     
            newonSaleArray.push(Karte)        
            setonSaleKarten(newonSaleArray)              
          }
          else {
         
          }               
         })}






async function setKarteonSaleF (userKartenIndex) {
  
  console.log('Beginn setKarteonsale')
  const Karte=userKarten[userKartenIndex]

  
 
  Karte.onSale=true

  delete Karte.createdAt;
  delete Karte.updatedAt;

  const KarteData = await API.graphql(graphqlOperation(updateKarte, {input:Karte}))
  const KarteList= [...Kartes];
  userKarten[userKartenIndex] = KarteData.data.updateKarte;
  console.log('finish setKarteonsale')

}




return (

    <div>

            
         <div id="TestMarktplatz">

        

            <button onClick={DataTrigger1}>Data Trigger </button>




              <h2>User Karten</h2>
              <div id="UserKartenShowTest">


                {userKarten.map((Karte, index) =>    (
                     
                  <li class="AlleKartenGridEintrag Rare">
                    <img src={Karte.Bild} id="dashboardSammlungKartenWrapperGridEintragBild"/>
                    <h5 id="dashboardSammlungKartenEintragH5">{Karte.id}</h5> 
                    <button onClick={function (){setKarteonSaleF(index)}} > FFDDD </button>

                                 
                  </li> ))}
               
                  
              </div>
                <br/>

              <button onClick={getonSaleKarten}>ListOnSaleCards</button>

              <h2>Alle Karten, die onSale - im Marktplatz sind</h2>
              <div id="UserKartenShowTest">
                {onSaleKarten.map(Karte => (
                  <li class="AlleKartenGridEintrag Rare">
                    <img src={Karte.Bild} id="dashboardSammlungKartenWrapperGridEintragBild"/>
                    <h5 id="dashboardSammlungKartenEintragH5">{Karte.id}</h5> 
                                    
                               
                  </li> ))}
              </div>
            </div>






    </div>
)



}
export default  withAuthenticator(Test2);