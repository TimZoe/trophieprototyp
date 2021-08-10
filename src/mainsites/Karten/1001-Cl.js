import './design/1001-Cl.css';
import { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listKartes} from '../../graphql/queries';
import { Auth } from 'aws-amplify';
import TopMenue from '../../components/sonstiges/topMenue';
import CardImg from '../../assets/Images/BetaKarten/Cl-01-1002.png'
import img1 from '../../assets/Images/BetaKarten/Cl-01-1001.png'
import img2 from '../../assets/Images/BetaKarten/Cl-01-1001.png'
import SideMenue from '../../components/sonstiges/SideMenue';
import topMenueLogo from '../../assets/Images/trophieLogoclean.png';
import {Route, Link} from "react-router-dom";
import menueButton from '../../assets/Images/menuebottomwhite.png';
import Playerimg from '../../assets/Images/Players/S1001.png'
import {updateKarte} from '../../graphql/mutations'

function Cl1001(props) {


  const [ButtonPopUp, setButtonPopUp] = useState(false);

    const [UserName, setUserName] = useState(0);
    const [Kartes, setKartes] = useState ([]);
    const [userKarten, setuserKarten]= useState([]);
    const [onSaleKarten, setonSaleKarten] = useState([]);



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
 


    //Diese Funktion bildet ein Array mit Allen Trophie Karten
 


       //Diese Funktion bildet ein Array mit Allen Classic Karten


      //Diese Funktion bildet ein Array für Trophie Karten des Users


        
        

        function setonSale () {
          console.log("D")
        }
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

  
  
        function Wrap () {
          getUserKarten();
     


        }
  
      
  return (
    <div>
        <div id="topMenueblack"> 
           
                <Link to="/dashboard">
                     <img src={topMenueLogo} id="topMenueImg"/>
                </Link>
                <div id="topMenueWrapperblack">
                    <h3 id="titlewhite">Cl-01-1001</h3>
                    <button onClick={() => setButtonPopUp(true)}>
                        <div id="menueButtomwhite">
                            <img src={menueButton} id="menueButtonImg"/>
                        </div>
                    </button>

        </div>                </div>
            <SideMenue trigger={ButtonPopUp} setTrigger={setButtonPopUp}>   
            </SideMenue>
          <div id="singleCarContentWrapper">

            <div id="singleCardWrapper">
            
              <div className="card">
                 
                  <div class="radialgradient">
                    
                  </div>
                  <div class="card-back card-face">
                    <img src={img1} id="cardFrontimg"/>
                  </div>

                  <div class="card-front card-face w">
                    <h3 id="backCradtitle">
                      Cl-01-1001
                    </h3>
                    <div id="backCardWrapperInfo">
                      
                      <div id="backCardInfoWrapper">
                        <h3 id="backCardInfoh3">
                          2
                        </h3>
                        <h4 id="backCardInfoh4">
                          Anzahl
                        </h4>
                      </div>

                      <div id="backCardInfoWrapper">
                        <h3 id="backCardInfoh3">
                          20/21
                        </h3>
                        <h4 id="backCardInfoh4">
                          Saison
                        </h4>
                      </div>

                      <div id="backCardInfoWrapper">
                        <h3 id="backCardInfoh3">
                          25
                        </h3>
                        <h4 id="backCardInfoh4">
                          Preis
                        </h4>
                      </div>

                      <div id="backCardInfoWrapper">
                        <h3 id="backCardInfoh3">
                          Classic
                        </h3>
                        <h4 id="backCardInfoh4">
                          Edition
                        </h4>
                      </div>

                    </div>
                    <div id="">
                        <button id="bb" onClick={setonSale}>Set on Sale</button>
                    </div>

                    <div id="backCardbottom">

                      <div id="playerImgWrap">
                        <img src={Playerimg} id="Playerimg"/>
                      </div>
                      <div id="backCardPlayerrechts">
                        <h3 id="backCardSpielerh3">
                          Spieler 1001
                        </h3> 
                        
                        <Link to="/Spieler/1001">
                          <div id="mehrbuttonBackCard">
                         

                      
                            <h3 id="mehrbuttonBackCardH3">
                              Mehr

                            </h3>
                          </div> 
                        </Link>
                      </div>

                    </div>



                  </div>
                  

              </div>
                
        
            </div>
        
        </div>
        
     </div>
  )
  }
 
export default Cl1001;
