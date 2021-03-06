import '../design/leaderboards/LeaderboardsTrophieScore.css';
import RanglistenEintrag from './RanglistenEintrag'
import RanglistenEintragBlue from './RanglistenEintragBlue';
import TopMenue from '../sonstiges/topMenue';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../../graphql/queries';
import { Auth } from 'aws-amplify';


function LeaderboardsTrophieScore(props) {

    const [UserName, setUserName] = useState(0);
    const [Kartes, setKartes] = useState ([]);
    const [userKarten, setuserKarten]= useState([]);
    const [WertUserKarten, setWertUserKarten] = useState(0);
    const [TrophieKartenUser, setTrophieKartenUser] = useState(0);
    const [RareKartenUser, setRareKartenUser] = useState(0);
    const [ClassicKartenUser, setClassicKartenUser] = useState(0);
    const [TrophieScore, setTrophieScore] = useState(0);
    const [UserKartenAnzahl, setuserKartenAnzahl] = useState(0);

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
  
         if(Karte.Owner.includes("TimZöl") == true) {                                     
           newuserArray.push(Karte)        
           setuserKarten(newuserArray)              
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
                if(ArrayCKC.Edition.includes("Rare") == true) {
                    count3 ++;                  
                    setClassicKartenUser(count2)
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
  
  
        function Wrap () {
          getUserKarten();
          UserWert();
          AlleUserTrophieKartenCounter();
          AlleUserRareKartenCounter();
          AlleUserClassicKartenCounter();
          AlleUserKartenCounter();
          TrophieScoreBerechnen();
        }







    return (
    <div>
                  <TopMenue title="Leaderboard"/>

        <div id="LeaderboardsTrophieScoreWrapper">
            <h3 id="TrophieScoreh3">
                Trophie Score
            </h3>
            <button onClick={Wrap}>
                 DataTrigger
                </button>
            <div id="RanglistenWrap">
                <RanglistenEintragBlue user={UserName} Platz="1" TrophieScore={TrophieScore}/>
                <RanglistenEintrag user="Benutzername" Platz="2" TrophieScore="TS"/>
                <RanglistenEintragBlue user="Benutzername" Platz="3" TrophieScore="TS"/>
                <RanglistenEintrag user="Benutzername" Platz="4" TrophieScore="TS"/>
                <RanglistenEintragBlue user="Benutzername" Platz="5" TrophieScore="TS"/>

            </div>

        </div>
    </div>
    ); 
    }
   
  export default LeaderboardsTrophieScore;
  