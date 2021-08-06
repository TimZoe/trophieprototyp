import "./design/test.css"
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import LogInSuc from '../components/sonstiges/LogInSuc';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';

import {updateKarte} from '../graphql/mutations'
import img1 from '../assets/Images/BetaKarten/Cl-01-1002.png'
import img2 from '../assets/Images/BetaKarten/Cl-01-1001.png'



Amplify.configure(awsconfig);





function Test() {

  
    
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




  useEffect(() => {
      getUserName();
    }, []);
  
    useEffect(() => {
      fetchKarten()  
    }, []);


  //Diese speichert den UserNamen in const UserName
  async function getUserName() {     
   
      const session = await Auth.currentSession();  
      setUserName(session.idToken.payload['cognito:username']);
  }


  //Diese Karten ziehen die Karten von der API und speichert in ein Array (Kartes)
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

   //Diese Funktion speichert die Karten die dem UserNamen gehören in ein
   //Array (UserKarten)
  
   //Hilfsvariable
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

    //Diese Funktion bildet ein Array für Trophie Karten des Users

    var newuserTrophieArray= []

   function getTrophieUserKarten()  {
   
     userKarten.map(Karte => {  

       if(Karte.Edition.includes("Trophie") == true) {                                     
         newuserTrophieArray.push(Karte)        
         setuserTrophieKarten(newuserTrophieArray)              
       }
       else {
      
       }               
      })}
 //Diese Funktion bildet ein Array für Trophie Karten des Users

 var newuserRareArray= []

 function getRareUserKarten()  {
 
   userKarten.map(Karte => {  

     if(Karte.Edition.includes("Rare") == true) {                                     
      newuserRareArray.push(Karte)        
       setuserRareKarten(newuserRareArray)              
     }
     else {
    
     }               
    })}
    var newuserClassicArray= []

 function getClassicUserKarten()  {
 
   userKarten.map(Karte => {  

     if(Karte.Edition.includes("Classic") == true) {                                     
      newuserClassicArray.push(Karte)        
       setuserClassicKarten(newuserClassicArray)              
     }
     else {
    
     }               
    })}

    
     
    //Diese Funktion berechnet den Wert der User Karten
    var HWertUserKarten=0

    function UserWert () {

        userKarten.map(ArrayUK => { 
        HWertUserKarten = HWertUserKarten + ArrayUK.Preis
        setWertUserKarten(HWertUserKarten)
      })}


    //Hilfsvariable
    var count1=0;
    //Diese Funktion zählt alle TrophieKarten des Users
      function AlleUserTrophieKartenCounter () {  

        userKarten.map(ArrayTKC => {
            if(ArrayTKC.Edition.includes("Trophie") == true) {
                count1 ++;                  
                setTrophieKartenUser(count1)
          }
          else {
            console.log('Keine Trophie Karte')
          }               
      })}
      //Hilfsvariable
    var count2=0;
    //Diese Funktion zählt alle Rare Karten des Users
      function AlleUserRareKartenCounter () {  

        userKarten.map(ArrayRKC => {
            if(ArrayRKC.Edition.includes("Rare") == true) {
                count2 ++;                  
                setRareKartenUser(count2)
          }
          else {
            console.log('Keine Rare Karte')
          }               
      })}
      var count3=0;
      //Diese Funktion zählt alle Classic Karten des Users
        function AlleUserClassicKartenCounter () {  
  
          userKarten.map(ArrayCKC => {
              if(ArrayCKC.Edition.includes("Classic") == true) {
                  count3 ++;                  
                  setClassicKartenUser(count3)
            }
            else {
              console.log('Keine Rare Karte')
            }               
        })}
        
        //Diese Funktion zählt alle User Karten
       var counter4=0;
        function AlleUserKartenCounter () {
          counter4=ClassicKartenUser+RareKartenUser+TrophieKartenUser;
          setuserKartenAnzahl(counter4)
        }
      
      
        //Diese Funktion berechnet den Trophie Score der User
        var TrophieScorehilf=0
        function TrophieScoreBerechnen () {
          
          TrophieScorehilf=TrophieKartenUser*10+RareKartenUser*5;
          setTrophieScore(TrophieScorehilf)
        }
    
    
    
      //Diese Funktion berechnet den Trophie Score der User
      var TrophieScorehilf=0
      function TrophieScoreBerechnen () {
        
        TrophieScorehilf=TrophieKartenUser*10+RareKartenUser*5;
        setTrophieScore(TrophieScorehilf)
      }
    
    
          function WrapTEST () {
            
            getUserKarten();
            UserWert();
            AlleUserTrophieKartenCounter();
            AlleUserRareKartenCounter();
            AlleUserClassicKartenCounter();
            AlleUserKartenCounter();
            TrophieScoreBerechnen();
            getTrophieUserKarten();
            getRareUserKarten();
            getClassicUserKarten();
            getOwneristTrophieKarten();
            console.log('Alle Kartes' + Kartes)
            console.log('User Karten' + userKarten)
            console.log('UnsereKarten' + ownerTrophieKartenArray)

            
          }
         

          //Funktion fürs Tauschen

          //Feld catch neuen Empfänger -> Über Karten Array
          // und Value bei owner ändern, siehe Songs bei Video
          //Fixed Karte Cl-01-1001

           var HelpOwnerTrophieKartenArray= []
  	      function getOwneristTrophieKarten()  {
            
              Kartes.map(Karte => {  
         
                if(Karte.Owner.includes("trophie") == true) {                                     
                  HelpOwnerTrophieKartenArray.push(Karte)        
                  setownerTrophieKartenArray(HelpOwnerTrophieKartenArray)              
                }
                else {
               
                }               
               })}

          
          
          
          
          
          const zuwechselndeKarte =[]
          async function changeOwner (zuwechselndeKarte, newOwner) {
            
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
            const KarteList= [...Kartes];
            zuwechselndeKarte = KarteData.data.updateKarte;
           

        

          }










          Math.random();
          Math.floor(1.9999);
          Math.floor(1)


          function rndmInt(limit) {
            return Math.floor(Math.random()*Math.floor(limit));
          }
          
         

          function Packs2 (){
            getOwneristTrophieKarten()
            console.log(ownerTrophieKartenArray)
            console.log('neue Karte soll bekommen ' +UserName)
          }

          //Diese Funktion bildet ein Array aus allen Karten,
          //die noch uns gehören


         

   
          function Packs (){

            console.log('Random sstart')
           
            var index=rndmInt(ownerTrophieKartenArray.length);

            console.log('Diese Karte' + index)

            console.log(ownerTrophieKartenArray[index]);
            changeOwner(ownerTrophieKartenArray[index],UserName) 
         

          }

                
  return (
    <div className="register">
         <div class="mobileWrapper">
             
         <button onClick={WrapTEST}>
                 DataTrigger WRAP TEST
          </button>
        
             test
             <h2>{UserName}</h2>
             <h2>{userKarten.Preis}</h2>
             
             <h2>Test für Tauschen</h2>
             <h2>Jetztiger Besitzer tim</h2>
             <h2>Neuer Empfänger soll werden</h2>

             <button onClick={changeOwner(ownerTrophieKartenArray,"dddd")}>
               ChangeOwner
             </button>


        </div>








        <div id="rndmPacks">

          Random Packs
          <button onClick={Packs}>
                 <h2>PacksTrigger</h2>   
          </button>

          <button onClick={Packs2}>
            <h2>GetOwneerTrophie</h2> 
          </button>
          


        </div>
         

    </div>
  );
}

export default withAuthenticator(Test);
