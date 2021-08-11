
import './design/alleKarten.css';

import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';
import { Auth } from 'aws-amplify';
import TopMenue from '../components/sonstiges/topMenue';
import { Link } from 'react-router-dom';


function AlleKarten(props) {

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
    const [AlleTrophieKarten, setAlleTrophieKarten] = useState([]);
    const [AlleRareKarten, setAlleRareKarten] = useState([]);
    const [AlleClassicKarten, setAlleClassicKarten] = useState([]);



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
 


    //Diese Funktion bildet ein Array mit Allen Trophie Karten
    var newTrophieArray= []
  
     function getAlleTrophieKarten()  {
     
       Kartes.map(Karte => {  
  
         if(Karte.Edition.includes("Trophie") == true) {                                     
            newTrophieArray.push(Karte)        
           setAlleTrophieKarten(newTrophieArray)              
         }
         else {
        
         }               
        })}

        //Diese Funktion bildet ein Array mit Allen Trophie Karten
    var newRareArray= []
  
    function getAlleRareKarten()  {
    
      Kartes.map(Karte => {  
 
        if(Karte.Edition.includes("Rare") == true) {                                     
            newRareArray.push(Karte)        
          setAlleRareKarten(newRareArray)              
        }
        else {
       
        }               
       })}

       //Diese Funktion bildet ein Array mit Allen Classic Karten
    var newClassicArray= []
  
    function getAlleClassicKarten()  {
    
      Kartes.map(Karte => {  
 
        if(Karte.Edition.includes("Classic") == true) {                                     
            newClassicArray.push(Karte)        
          setAlleClassicKarten(newClassicArray)              
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
  
  
        useEffect (()=>{
          getAlleTrophieKarten();
          getAlleRareKarten();
          getAlleClassicKarten();
        }, [Kartes])
        
        
        


  return (
    <div>
        <TopMenue title="Alle Karten"/>

            <div id="alleKartenWrapper" onLoad={fetchKarten}>

            {props.children}
                <h2 class="dbSammlungMidh2">Alle Karten auf Trophie</h2>
               

                

             <ul id="AlleKartenGrid">
                                {AlleTrophieKarten.map(Karte => (
                             
                              
                                  <li class="AlleKartenGridEintrag Trophie">
                                    <Link to={Karte.KartenLink} id="dd">
                                    
                                       <img src={Karte.Bild} id="AlleKartenGridEinztragBild"/>
                                         <h5 id="AlleKartenh5">{Karte.Edition}</h5> 
                                        <h3 id="AlleKartenh3">{Karte.SpielerName}</h3> 
                                        <h5 id="AlleKartenh5">{Karte.Preis} €</h5> 

                                    </Link>
                                                                      
                                  </li>
                             
                                 ))}
                                {AlleRareKarten.map(Karte => (
                                <li class="AlleKartenGridEintrag Rare">
                                   <Link to={Karte.KartenLink} id="dd">
                                   
                                   <img src={Karte.Bild} id="AlleKartenGridEinztragBild"/>
                                         <h5 id="AlleKartenh5">{Karte.Edition}</h5> 
                                        <h3 id="AlleKartenh3">{Karte.SpielerName}</h3> 
                                        <h5 id="AlleKartenh5">{Karte.Preis} €</h5>
                                   
                                    </Link>
                                 
                                </li> ))}
                                {AlleClassicKarten.map(Karte => (
                                <li class="AlleKartenGridEintrag">
                                   <Link to={Karte.KartenLink} id="dd">
                                   
                                   <img src={Karte.Bild} id="AlleKartenGridEinztragBild"/>
                                         <h5 id="AlleKartenh5">{Karte.Edition}</h5> 
                                        <h3 id="AlleKartenh3">{Karte.SpielerName}</h3> 
                                        <h5 id="AlleKartenh5">{Karte.Preis} €</h5>
                                   
                                   
                                    </Link>
                                 
                                </li> ))}
               </ul>
               </div>

     </div>
  )
  }
 
export default AlleKarten;
