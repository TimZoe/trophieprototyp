import ScoreDisplay from '../sonstiges/scoreDisplay';
import '../design/dashboard/dashboardLanding.css'
import chart from '../../assets/Images/chart.png'
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../../graphql/queries';




function DashboardLanding(props) {

  

  const [UserName, setUserName] = useState(0);
  const [Kartes, setKartes] = useState ([]);
  const [userKarten, setuserKarten]= useState([]);
  const [WertUserKarten, setWertUserKarten] = useState(1);
  const [TrophieKartenUser, setTrophieKartenUser] = useState(0);
  const [RareKartenUser, setRareKartenUser] = useState(0);
  const [ClassicKartenUser, setClassicKartenUser] = useState(0);
  const [TrophieScore, setTrophieScore] = useState(0);
  const [UserKartenAnzahl, setuserKartenAnzahl] = useState(0);



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

      })
    console.log("UserKartendurch")}
     
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
          
          }               
      })}
      var count3=0;
    //Diese Funktion zählt alle Classic Karten des Users
      function AlleUserClassicKartenCounter () {  

        userKarten.map(ArrayCKC => {
            if(ArrayCKC.Edition.includes("Rare") == true) {
                count3 ++;                  
                setClassicKartenUser(count3)
          }
          else {
            
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
        
        TrophieScorehilf=TrophieKartenUser*10+RareKartenUser*5+ClassicKartenUser*1;
        setTrophieScore(TrophieScorehilf)
      }
      const [rndmState, setrndmState] = useState(1)
     
      useEffect(() => {
        console.log("welcome to Landing")
        console.log(props.userrKarten)
        console.log(props.userrName)
        setUserName(props.userrName)
        console.log(props.userrWert)
        setWertUserKarten(props.userrWert)

        console.log(props.userrTrophieScore)
        setTrophieScore(props.userrTrophieScore)
        console.log(props.userrTrophieKartenAnzahl)
        setTrophieKartenUser(props.userrTrophieKartenAnzahl)
        console.log(props.userrRareKartenAnzahl)
        setRareKartenUser(props.userrRareKartenAnzahl)
      })
      
      useEffect(()=> {

      })
      

    return (props.trigger) ?(
      <div >
          <div id="dbLandingContent">
          {props.children}
            <div id="dbOben">
              <div class="hrow">
                <h3 class="dbh3">Willkommen</h3> &nbsp; &nbsp;<h3 class="dbh3">{UserName}</h3>
              </div>

                
            </div>
            <div id="mdbLandingmid">
                <h3 class="dbh3mid">{WertUserKarten} €</h3>
              <h4 class="dhh4">Wert aller deiner Karten</h4>
            </div>
            <div id="dbLandingChart">
                <img src={chart} id="LandingChartImg"/> 
            </div>

            <div id="dbLandingScoresWrapper">

                <ScoreDisplay value={TrophieKartenUser} title="Trophie Karten"/>
                <ScoreDisplay value={TrophieScore} title="Trophie Score"/>
                <ScoreDisplay value={RareKartenUser} title="Rare Karten"/>

            </div>
    
          </div>








       </div>
   ): "";
    }
   
  export default DashboardLanding;
  