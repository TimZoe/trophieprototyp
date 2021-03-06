import './design/√∂ffentlichesProfil.css'
import TopMenue from '../components/sonstiges/topMenue';
import userBild from '../assets/Images/userimg.png';
import ScoreDisplays from '../components/sonstiges/scoredisplays';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';


function √∂ffentlichenProfil() {

    useEffect(() => {
        getUserName();
      }, []);
    
      useEffect(() => {
        fetchKarten()  
      }, []);
    
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
    
       //Diese Funktion speichert die Karten die dem UserNamen geh√∂ren in ein
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
         

              //Diese Funktion bildet ein Array f√ľr Trophie Karten des Users

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
    //Diese Funktion bildet ein Array f√ľr Trophie Karten des Users
 
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
        //Diese Funktion z√§hlt alle TrophieKarten des Users
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
        //Diese Funktion z√§hlt alle Rare Karten des Users
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
        //Diese Funktion z√§hlt alle Classic Karten des Users
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
          
          //Diese Funktion z√§hlt alle User Karten
         var counter4=0;
          function AlleUserKartenCounter () {
            counter4=ClassicKartenUser+RareKartenUser+TrophieKartenUser;
            setuserKartenAnzahl(counter4)
          }
        
        
          //Diese Funktion berechnet den Trophie Score der User
          var TrophieScorehilf=0
          function TrophieScoreBerechnen () {
            
            TrophieScorehilf=TrophieKartenUser*10+RareKartenUser*5+1*ClassicKartenUser;
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
          getTrophieUserKarten();
          getRareUserKarten();
          getClassicUserKarten();
    
          }


    return (
    <div>

      <TopMenue title="Profil"/>
      <div id="profilContent">
        <button onClick={Wrap} id="zind">

                 DataTrigger
         </button>



         <div id="profilTopWrapper">

            <img src={userBild} id="UserBild"/>
            <div id="profilTopWrapperrechts">
              <h3 id="userName">{UserName}</h3>
              <div id="profilTopTopInfoEintrag">
                <h3 id="profilTopTopInfoEintragh3">
                  19.07.2021
                </h3>
                <h4 id="profilTopTopInfoEintragh4">
                  Mitglied seit
                </h4>
              </div>
              <div id="profilTopTopInfoEintrag">
                <h3 id="profilTopTopInfoEintragh3">
                  {WertUserKarten}
                </h3>
                <h4 id="profilTopTopInfoEintragh4">
                  Portfolio Wert
                </h4>
              </div>
            </div>
            
         </div>
        


          <div id="ProfilKarten√úbersicht">
              <h3 id="profilh3">
               Beste Karten
              </h3>
              <div id="profilCardWrapper">
                      <ul id="UserProfilGrid">
                                {userTrophieKarten.map(Karte => (
                                <li class="ProfilKartenEintrag Trophie">
                                   <img src={Karte.Bild} id="ProfilCardWrapperImg"/>
                                    <h5 id="dashboardSammlungKartenEintragH5">{Karte.id}</h5>                                     
                                </li> ))}
                                {userRareKarten.map(Karte => (
                                <li class="ProfilKartenEintrag Rare">
                                   <img src={Karte.Bild} id="ProfilCardWrapperImg"/>
                                    <h5 id="dashboardSammlungKartenEintragH5">{Karte.id}</h5>                                     
                                </li> ))}
                                {userClassicKarten.map(Karte => (
                                <li class="ProfilKartenEintrag">
                                   <img src={Karte.Bild} id="ProfilCardWrapperImg"/>
                                    <h5 id="dashboardSammlungKartenEintragH5">{Karte.id}</h5>                                     
                                </li> ))}
               </ul>
              </div>

          </div>
          <div id="Profilunten">

              <div id="ProfiluntenScoreSpalte">

                  <div id="ProfiluntenScoreSpalteItem">
                  <ScoreDisplays value={TrophieScore} title="Trophie Score"/>
                  </div>
                  <div id="ProfiluntenScoreSpalteItem">
                  <ScoreDisplays value={TrophieScore} title="Best Trophie Score"/>
                  </div>

              </div>

              <div id="ProfilUntenmidSec">

                  <div id="ProfilunenmidBlueWrap">
                    <div id="ProfilBlueItem">
                      <h3 id="ProfilBlueItemH3">
                        {ClassicKartenUser}
                      </h3>
                      <h4 id="ProfilBlueItemH4">
                        Classic
                      </h4>
                    </div>
                    <div id="ProfilBlueItem">
                      <h3 id="ProfilBlueItemH3">
                      {RareKartenUser}

                      </h3>
                      <h4 id="ProfilBlueItemH4">
                        Rare
                      </h4>
                    </div>
                    <div id="ProfilBlueItem">
                      <h3 id="ProfilBlueItemH3">
                      {TrophieKartenUser}
                      </h3>
                      <h4 id="ProfilBlueItemH4">
                        Trophie
                      </h4>
                    </div>
                 
                  </div>

              </div>
              
              <div id="ProfiluntenScoreSpalte">

                  <div id="ProfiluntenScoreSpalteItem">
                  <ScoreDisplays value={TrophieKartenUser} title="Trophie Karten"/>
                  </div>
                  <div id="ProfiluntenScoreSpalteItem">
                  <ScoreDisplays value={0} title="noch offen"/>
                  </div>

              </div>




          </div>

         

      </div>
    
      
    </div>
    ); 
    }
   
  export default √∂ffentlichenProfil;
  