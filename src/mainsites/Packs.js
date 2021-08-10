import './design/packs.css';
import DbMenue from '../components/dashboard/dashboardMenue';
import TopMenue from '../components/sonstiges/topMenue';
import PacksLanding from '../components/packs/packsLanding';
import PacksAvailable from '../components/packs/packAvailable';
import PacksInhalt from '../components/packs/packInhalt';
import { useState, useEffect } from 'react';
import B2 from '../components/packs/b2'
import B1 from '../components/packs/b1'
import { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import {updateKarte} from '../graphql/mutations'
import { Auth } from 'aws-amplify';



function PacksWrapper() {

  const [ButtonLand, setButtonLand] = useState(true);
  const [ButtonAva, setButtonAva] = useState(false);
  const [ButtonInhalt, setButtonInhalt] = useState(false);
  const [ButtonB2, setButtonB2] = useState(false);
  const [ButtonB1, setButtonB1] = useState(true);

  function AvaShow() {

    setButtonLand(false);
    setButtonAva(true);
    setButtonInhalt(false);
    setButtonB2(true);
    setButtonB1(false);

   }
   function InhaltShow() {

    setButtonLand(false);
    setButtonAva(false);
    setButtonInhalt(true);
    setButtonB2(false);

    packgenerate();

   }


   const [ownerTrophieKartenArray, setownerTrophieKartenArray] = useState([]);
   const [packInhaltCard, setpackInhaltCard] = useState([]);
   const [UserName, setUserName] = useState(0);
   const [Kartes, setKartes] = useState ([]);
   const [userKarten, setuserKarten]= useState([]);



   ////////////////////
   function packgenerate() {
     console.log("lets Pack a Pack")
     console.log(userKarten)
     
     console.log(ownerTrophieKartenArray)





   }













   ///////////
   const fetchKarten = async () => {
  
    try {
      const KarteData = await API.graphql(graphqlOperation(listKartes));
      const KarteList = KarteData.data.listKartes.items;
      setKartes(KarteList)
    }
    catch(error) {
      console.log(error)
    }
 }
 async function getUserName() {     
     
  const session = await Auth.currentSession();  
  setUserName(session.idToken.payload['cognito:username']);
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
  
        })
      }

      const [rndmState, setrndmState]=useState(0)


   /////////////

            useEffect (() => {
              console.log(Kartes)
          },[Kartes])

          useEffect (()=>{
            getUserName();
            
          }, [])

          useEffect (()=>{
            console.log(UserName)
            setrndmState(1)
          }, [UserName])

          useEffect (()=>{
            getUserKarten();   
          },[Kartes])

          useEffect (()=>{
          console.log(userKarten)
          console.log("obenUserKaren")

          }, [userKarten])

          useEffect (()=>{
            BuildOwneristTrophieArray();   
          },[ButtonAva])

          useEffect (()=>{
          console.log(ownerTrophieKartenArray)
          }, [ownerTrophieKartenArray])




          useEffect (()=>{
            createpackInhaltCard();   
          },[Kartes])

          useEffect (()=>{
          console.log(packInhaltCard)
          console.log("pack inhalt redy")
          }, [packInhaltCard])
          

          useEffect (()=>{
            übergabeanuser();   
         },[ButtonInhalt])

          useEffect (()=>{
          console.log("übergeben")
          }, [ButtonInhalt])








   //////////////////





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

















 

    return (
      <div>
          
          <div class="mobileWrapper">
            <div id="dashboardWrapper" onLoad={fetchKarten}>
                      
                 <TopMenue title="Dashboard"/>
                 <div id="dashboardContent">

                    <PacksLanding
                    trigger={ButtonLand} setTrigger={setButtonLand}
                    />
                    <PacksAvailable
                    trigger={ButtonAva} setTrigger={setButtonAva}                    
                    />
                    <PacksInhalt
                    trigger={ButtonInhalt} setTrigger={setButtonInhalt}  
                    packsInhaltCard={packInhaltCard} 
                    
                    




                    />
                    <div id="statehandle">











                    <button onClick= {() => AvaShow()}>
                    <div id="b22">
                           <B1
                    trigger={ButtonB1} setTrigger={setButtonB1}                    
                           />
                      </div>                    </button>

                    <button onClick= {() => InhaltShow()}>
                      <div id="b22">
                           <B2
                    trigger={ButtonB2} setTrigger={setButtonB2}                    
                           />
                      </div>
                    </button>
  
                  
                    </div>

                 </div>
                 <DbMenue/>
                                              
            </div>       
          </div>
             
       </div>
    ); 
    }
   
  export default PacksWrapper;
  