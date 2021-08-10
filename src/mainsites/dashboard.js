import TopMenue from '../components/sonstiges/topMenue';
import DashboardLanding from '../components/dashboard/dashboardLanding';
import Stats from '../components/dashboard/dashboardStatistiken';
import DashboardSammlung from '../components/dashboard/dashboardSammlung';
import home from '../assets/Images/Home.png';
import statsimg from '../assets/Images/Stats.png';
import sammlung from '../assets/Images/Sammlung.png';
import packs from '../assets/Images/Packs.png';
import {Route, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import './design/dashboard.css';
import Amplify, { Auth } from 'aws-amplify';
import awsExports from "../aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../graphql/queries';


Amplify.configure(awsExports);


function Dashboard() {

    const [ButtonSammlung, setSammlung] = useState(false);
    const [ButtonLanding, setButtonLanding] = useState(true);
    const [ButtonStats, setButtonStats] = useState(false);

 
    const [UserName, setUserName] = useState(0);
    const [Kartes, setKartes] = useState ([]);
    const [userKarten, setuserKarten]= useState([]);
    const [WertUserKarten, setWertUserKarten] = useState(1);
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
      }
       
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
              if(ArrayCKC.Edition.includes("Classic") == true) {
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



































    //Funktionen fürs Menü

        function sammlungShow() {

        setButtonLanding(false);
        setSammlung(true);
        setButtonStats(false);
       }
      
       function LandingShow() {
      
        setButtonLanding(true);
        setSammlung(false);
        setButtonStats(false);
       }
       
       function StatsShow() {
      
        setButtonLanding(false);
        setSammlung(false);
        setButtonStats(true);
       }

       const [rndmState, setrndmState]=useState(0)

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
     }, [userKarten])
     
     useEffect (()=>{
      UserWert();   
    },[Kartes])

    useEffect (()=>{
     console.log(WertUserKarten)
   }, [WertUserKarten])



    useEffect (()=>{
      AlleUserTrophieKartenCounter();  
      AlleUserRareKartenCounter(); 
      AlleUserClassicKartenCounter();  
    },[Kartes])

    useEffect (()=>{
    console.log(TrophieKartenUser)
    console.log(ClassicKartenUser)
    console.log(RareKartenUser)
  }, [TrophieKartenUser])
///////////////////////
      useEffect (()=>{
        TrophieScoreBerechnen();
      },[Kartes])

      useEffect (()=>{
      console.log(TrophieScore)
      
    }, [TrophieScore])



 /////////////
    useEffect (()=>{
      getClassicUserKarten();
      getRareUserKarten();
      getTrophieUserKarten();
      
    },[Kartes])

    useEffect (()=>{
    console.log(ClassicKartenUser)
    
  }, [ClassicKartenUser])






  return (
    <div className="App">
        
        <div class="mobileWrapper" >

            <div id="dashboardWrapper" onLoad={fetchKarten}>

                <TopMenue title="Dashboard"/>
                <div id="dashboardContent">

                    <DashboardLanding 
                        trigger={ButtonLanding} setTrigger={setButtonLanding}
                        userrKarten={userKarten} userrName={UserName}
                        userrWert={WertUserKarten} userrTrophieScore={TrophieScore}
                        userrTrophieKartenAnzahl= {TrophieKartenUser} userrRareKartenAnzahl= {RareKartenUser}
                    />
                    <DashboardSammlung
                    trigger={ButtonSammlung} setTrigger={setSammlung}
                    userKarten={userKarten} userrKarten={userKarten}
                    userrTrophieKartenAnzahl= {TrophieKartenUser} userrRareKartenAnzahl= {RareKartenUser}
                    userrClassicKartenAnzahl= {ClassicKartenUser}
                    userrClassicKartenUser= {userClassicKarten}
                    userrRareKartenUser= {userRareKarten}
                    userrTrophieKartenUser= {userTrophieKarten}
                    />
                    <Stats 
                    trigger={ButtonStats} setTrigger={setButtonStats}
                    />

                </div>

                <div id="dbMenueWrapper">

                    <button onClick= {() => LandingShow()}>

                    <div class="dbMenueEintrag">
                        <img src={home} class="dbMenueEintragimg"/>
                        <h3 class="dbMenueEintragh3">Home</h3>
                    </div>  

                    </button>
          


                    <button onClick= {() => sammlungShow()}>

                    <div class="dbMenueEintrag">
                    <img src={sammlung} class="dbMenueEintragimg"/>
                    <h3 class="dbMenueEintragh3">Sammlung</h3>
                    </div>           


                    </button>




                    <button onClick= {() => StatsShow()}>

                    <div class="dbMenueEintrag">
                    <img src={statsimg} class="dbMenueEintragimg"/>
                    <h3 class="dbMenueEintragh3">Statistiken</h3>
                    </div>           
                    </button>





                    <Link to="/Packs">
                        <div class="dbMenueEintrag">
                        <img src={packs} class="dbMenueEintragimg"/>
                        <h3 class="dbMenueEintragh3">Packs</h3>
                        </div>           
                    </Link>




</div>

            </div>
            


        </div>
      
     
    </div>
  );
}

export default Dashboard;
